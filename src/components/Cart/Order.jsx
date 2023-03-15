import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductService from '../../API/ProductService';
import { useFetching } from '../../hooks/useFetching';
import { cleaningStore } from '../../redux/basketSlice';
import Loader from '../UI/Loader/Loader';

function Order({ callbackOrderFinished }) {
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [checkBox, setCheckBox] = useState(true);
    const basket = useSelector(state => state.basket.items);
    const dispatch = useDispatch();

    const [fetchOrder, isOrderLoading, orderError] = useFetching(async () => {
        const order = {
            owner: {
                phone: phone,
                address,
            },
            items: basket
        }
        const response = await ProductService.postOrder(order);
        if (response && !orderError) {
            callbackOrderFinished();
            dispatch(cleaningStore());
        }
    })

    const handlerOnOrder = (e) => {
        e.preventDefault();
        fetchOrder();
    }

    if (!basket.length) return;
    if (isOrderLoading) return <Loader />;

    return (
        <section className="order">
            <h2 className="text-center">Оформить заказ</h2>
            <div className="card" style={{ maxWidth: "30rem", margin: "0 auto" }}>
                <form onSubmit={handlerOnOrder} className="card-body">
                    <div className="form-group">
                        <label htmlFor="phone">Телефон</label>
                        <input onChange={(e) => setPhone(e.target.value)} className="form-control" id="phone" placeholder="Ваш телефон" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Адрес доставки</label>
                        <input onChange={(e) => setAddress(e.target.value)} className="form-control" id="address" placeholder="Адрес доставки" />
                    </div>
                    <div className="form-group form-check">
                        <input onChange={() => setCheckBox(!checkBox)} type="checkbox" className="form-check-input" id="agreement" />
                        <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label>
                    </div>
                    <button disabled={checkBox} type="submit" className="btn btn-outline-secondary">Оформить</button>
                </form>
            </div>
        </section>
    );
}

export default Order;