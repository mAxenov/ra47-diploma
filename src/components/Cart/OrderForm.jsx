import { useState } from 'react';
import ReactInputMask from 'react-input-mask';

function OrderForm({ onSubmit }) {
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [checkBox, setCheckBox] = useState(true);
    return (
        <form onSubmit={(e) => { e.preventDefault(); onSubmit(phone, address) }} className="card-body">
            <div className="form-group">
                <label htmlFor="phone" >Телефон</label>
                <ReactInputMask required
                    mask="+7\ (999) 999-99-99"
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-control"
                    id="phone"
                    placeholder="Ваш телефон"
                    pattern="^\+?\d{1,2}\s\(?\d{3}\)\s?\d{3}-?\d{2}-?\d{2}$"
                />
            </div>
            <div className="form-group">
                <label htmlFor="address">Адрес доставки</label>
                <input required
                    onChange={(e) => setAddress(e.target.value)}
                    className="form-control"
                    id="address"
                    placeholder="Адрес доставки"
                />
            </div>
            <div className="form-group form-check">
                <input required
                    onChange={() => setCheckBox(!checkBox)}
                    type="checkbox"
                    className="form-check-input"
                    id="agreement"
                />
                <label
                    className="form-check-label"
                    htmlFor="agreement">
                    Согласен с правилами доставки
                </label>
            </div>
            <button
                disabled={checkBox}
                type="submit"
                className="btn btn-outline-secondary">
                Оформить
            </button>
        </form>
    );
}

export default OrderForm;