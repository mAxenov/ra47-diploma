import React, { useState } from 'react'
import Order from '../components/Cart/Order';
import Basket from '../components/Cart/Basket';
import EmptyProduct from '../components/UI/EmptyProduct/EmptyProduct';

function Cart() {
    const [orderIsFinished, setOrderIsFinished] = useState(false);

    if (orderIsFinished) return <EmptyProduct title={'Заказ оформлен. Спасибо!'} subTitle={'Ваш заказ успешно оформлен. Мы свяжемся с вами в ближайшее время.'} />
    return (
        <>
            <Basket />
            <Order callbackOrderFinished={() => setOrderIsFinished(true)} />
        </>
    );
}

export default Cart;