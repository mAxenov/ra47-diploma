import { Link } from "react-router-dom";
import priceFormatter from "../../utils/priceFormatter";

function ProductItem({ item, className }) {
    return (
        <div key={item.id} className="col-4 ">
            <div className={className ? "card align-self-stretch " + className : "card align-self-stretch"}>
                <img src={item.images && item.images[0]}
                    className="card-img-top img-fluid" alt={item.title} />
                <div className="card-body">
                    <p className="card-text">{item.title}</p>
                    <p className="card-text">{priceFormatter(item.price) + " руб."} </p>
                    <Link to={`/catalog/${item.id}.html`} className="btn btn-outline-primary">Заказать</Link>
                </div>
            </div>

        </div>
    );
}

export default ProductItem;





//[{ "id": 65, "category": 15, "title": "Босоножки 'Keira'", "price": 7600, "images": ["https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/sandals_keira.jpg", "https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/sandals_keira_2.jpg"] }, { "id": 66, "category": 13, "title": "Босоножки 'Myer' с завязкой на щиколотке", "price": 34000, "images": ["https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/sandals_myer.jpg", "https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/sandals_myer_2.jpg"] }, { "id": 73, "category": 15, "title": "Супергеройские кеды", "price": 1400, "images": ["https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/superhero_sneakers.jpg"] }]