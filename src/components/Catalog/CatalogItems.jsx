import React, { useEffect, useState } from 'react'
import ProductService from '../../API/ProductService';
import { useFetching } from '../../hooks/useFetching';
import Categories from './Categories';
import ProductItems from '../Product/ProductItems';
import Loader from '../UI/Loader/Loader';
import EmptyProduct from '../UI/EmptyProduct/EmptyProduct';

function CatalogItems({ inputValue }) {
    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(0);
    const [offset, setOffset] = useState(0);
    const [isHideMore, setIsHideMore] = useState(false);


    const [fetchCategories, isItemsCategories, itemsCategoriesError] = useFetching(async () => {
        const response = await ProductService.getCategories();
        setCategories([...[{ id: 0, title: "Все" }], ...response])
    })

    const [fetchItems, isItemsLoading, itemsError] = useFetching(async () => {
        const response = await ProductService.getMore(selectedCategory, offset, inputValue);
        setItems(response)
    })



    const [fetchDownloadMore, isDownloadMoreLoading, downloadMoreError] = useFetching(async () => {
        const response = await ProductService.getMore(selectedCategory, offset, inputValue);
        if (response.length < 5) {
            setIsHideMore(true);
        }
        setItems([...items, ...response])
    })

    useEffect(() => {
        fetchCategories();
    }, []);

    useEffect(() => {
        fetchItems();
    }, [selectedCategory, inputValue]);

    useEffect(() => {
        if (offset > 0) {
            fetchDownloadMore();
        }
    }, [offset]);

    const handlerSetCategory = (category) => {
        setSelectedCategory(category);
        setIsHideMore(false);
        setOffset(0);
    }

    const handlerDownloadMore = () => {
        setOffset(offset + 6);
    }

    if (isItemsCategories) return (<Loader />);
    return (
        <>
            <Categories
                options={categories}
                value={selectedCategory}
                onClick={handlerSetCategory}
                isError={itemsCategoriesError}
            />
            {items.length > 0
                ?
                <>
                    <div className="row">
                        <ProductItems
                            items={items}
                            isLoader={isItemsLoading || isItemsCategories}
                            isError={itemsError}
                        />
                    </div>
                    {isDownloadMoreLoading && <Loader />}

                    <div className="text-center">
                        {downloadMoreError ?
                            <h3 style={{ width: '100%', textAlign: 'center', color: 'red' }}>{downloadMoreError}</h3>
                            :
                            <button
                                hidden={isHideMore || isItemsLoading || isDownloadMoreLoading || isItemsCategories || items.length < 5}
                                onClick={handlerDownloadMore}
                                className="btn btn-outline-primary">
                                Загрузить ещё
                            </button>
                        }

                    </div>
                </>
                :
                <>
                    {isItemsLoading || isItemsCategories
                        ?
                        <Loader />
                        :
                        <EmptyProduct
                            title={'Этого мы не нашли'}
                            subTitle={'Попробуйте написать название товара по-другому или сократить запрос. Убедитесь, что название бренда и модели написано правильно.'}
                        />
                    }
                </>
            }
        </>
    )
}

export default CatalogItems;