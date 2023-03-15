import React from 'react'
import Loader from '../UI/Loader/Loader';
import ProductItem from './ProductItem';

function ProductItems({ items, isLoader, isError }) {

    if (isError) return <h1>Ошибка {isError}</h1>
    if (isLoader) return <Loader />

    return (
        items.map((item) => {
            return <ProductItem
                key={item.title}
                item={item}
                className={"catalog-item-card"}
            />
        })
    );
}

export default ProductItems;