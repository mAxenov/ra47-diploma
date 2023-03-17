import React from 'react'
import { useNavigate } from 'react-router-dom';
import EmptyProduct from '../UI/EmptyProduct/EmptyProduct';
import Loader from '../UI/Loader/Loader';
import ProductItem from './ProductItem';

function ProductItems({ items, isLoader, isError }) {
    if (isError) return <h3 style={{ width: '100%', textAlign: 'center', color: 'red' }}>{isError}</h3>
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