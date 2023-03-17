import { useDispatch, useSelector } from 'react-redux';
import ProductService from '../../API/ProductService';
import { useFetching } from '../../hooks/useFetching';
import { cleaningStore } from '../../redux/basketSlice';
import Loader from '../UI/Loader/Loader';
import OrderForm from './OrderForm';

function Order({ callbackOrderFinished }) {

    const basket = useSelector(state => state.basket.items);
    const dispatch = useDispatch();

    const [fetchOrder, isOrderLoading, orderError] = useFetching(async (phone, address) => {
        const order = {
            owner: {
                phone,
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

    const handlerOnOrder = (phone, address) => {
        fetchOrder(phone, address);
    }

    if (!basket.length) return;
    if (isOrderLoading) return <Loader />;

    return (
        <section className="order">
            <h2 className="text-center">Оформить заказ</h2>
            <div className="card" style={{ maxWidth: "30rem", margin: "0 auto" }}>
                <OrderForm onSubmit={handlerOnOrder} />
            </div>
        </section>
    );
}

export default Order;