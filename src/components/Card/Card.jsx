import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ProductService from '../../API/ProductService';
import { useFetching } from '../../hooks/useFetching';
import { addItem } from '../../redux/basketSlice';
import Loader from '../UI/Loader/Loader';

function Card() {
    const { id } = useParams();
    const [card, setCard] = useState();
    const [count, setCount] = useState(1);
    const [size, setSize] = useState('');
    const dispatch = useDispatch();
    const [fetchCard, isCardLoading, cardError] = useFetching(async () => {
        const response = await ProductService.getCard(id);
        setCard(response);
    })

    useEffect(() => {
        fetchCard();
    }, [id]);

    const handlerAddProduct = () => {
        dispatch(addItem({
            id: card.id,
            title: card.title,
            price: card.price,
            count,
            size
        }));
    }
    if (cardError) return <h3 style={{ width: '100%', textAlign: 'center', color: 'red' }}>{cardError}</h3>
    if (isCardLoading) return <Loader />;
    if (!card) return <h1>Элементов не найдено</h1>;
    return (
        <section className="catalog-item">
            <h2 className="text-center">{card.title}</h2>
            <div className="row">
                <div className="col-5">
                    <img src={card.images && card.images[0]}
                        className="img-fluid" alt="" />
                </div>
                <div className="col-7">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>Артикул</td>
                                <td>{card.sku}</td>
                            </tr>
                            <tr>
                                <td>Производитель</td>
                                <td>{card.manufacturer}</td>
                            </tr>
                            <tr>
                                <td>Цвет</td>
                                <td>{card.color}</td>
                            </tr>
                            <tr>
                                <td>Материалы</td>
                                <td>{card.material}</td>
                            </tr>
                            <tr>
                                <td>Сезон</td>
                                <td>{card.season}</td>
                            </tr>
                            <tr>
                                <td>Повод</td>
                                <td>{card.reason}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="text-center">
                        <p>Размеры в наличии:
                            {card.sizes.map((item) => {
                                return (
                                    item.available &&
                                    <span
                                        onClick={() => setSize(item.size)}
                                        className={item.size === size ? "catalog-item-size selected" : "catalog-item-size"}
                                    >
                                        {item.size}
                                    </span>
                                );
                            })}
                        </p>
                        <p>Количество: <span className="btn-group btn-group-sm pl-2">
                            <button disabled={!size} onClick={() => { (count - 1) === 0 ? setCount(count) : setCount(count - 1) }} className="btn btn-secondary">-</button>
                            <span className="btn btn-outline-primary">{count}</span>
                            <button disabled={!size} onClick={() => { (count + 1) === 11 ? setCount(count) : setCount(count + 1) }} className="btn btn-secondary">+</button>
                        </span>
                        </p>
                    </div>
                    <button disabled={!count || !size} onClick={handlerAddProduct} className="btn btn-danger btn-block btn-lg">В корзину</button>
                </div>
            </div >
        </section >
    );
}

export default Card;