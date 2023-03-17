import React from 'react'
import EmptyProduct from '../components/UI/EmptyProduct/EmptyProduct'

function Error404() {
    return (
        <EmptyProduct
            title={'Тут ничего нет'}
            subTitle={'Попробуйте вернуться назад или поищите что-нибудь другое.'}
        >
            <div>Код ошибки: 404</div>
        </EmptyProduct>
    );
}


export default Error404;