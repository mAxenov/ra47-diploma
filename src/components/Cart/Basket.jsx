import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem } from '../../redux/basketSlice';
import priceFormatter from '../../utils/priceFormatter';
import EmptyProduct from '../UI/EmptyProduct/EmptyProduct';

function Basket() {
    const dispatch = useDispatch();
    const basket = useSelector(state => state.basket.items);

    const handlerRemoveProduct = (id, size) => {
        dispatch(removeItem({ id, size }));
    }

    if (!basket.length) {
        return (
            <EmptyProduct title={'Сложите в корзину нужные товары'} subTitle={'А чтобы их найти, загляните в каталог.'} />
        );
    }

    return (
        <section className="cart">
            <h2 className="text-center">Корзина</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Название</th>
                        <th scope="col">Размер</th>
                        <th scope="col">Кол-во</th>
                        <th scope="col">Стоимость</th>
                        <th scope="col">Итого</th>
                        <th scope="col">Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {basket.map((item) => {
                        return (
                            <tr key={item.size + item.id}>
                                <td scope="row">1</td>
                                <td><Link to={`/catalog/${item.id}.html`} >{item.title}</Link></td>
                                <td>{item.size}</td>
                                <td>{item.count}</td>
                                <td>{priceFormatter(item.price)}</td>
                                <td>{priceFormatter(item.price * item.count)}</td>
                                <td><button onClick={() => handlerRemoveProduct(item.id, item.size)} className="btn btn-outline-danger btn-sm">Удалить</button></td>
                            </tr>
                        );
                    })}

                    <tr>
                        <td colSpan="5" className="text-right">Общая стоимость</td>
                        <td>{priceFormatter(basket.reduce((acc, curItem) => acc + curItem.price * curItem.count, 0))}</td>
                    </tr>
                </tbody>
            </table>
        </section>

    );
}

export default Basket;