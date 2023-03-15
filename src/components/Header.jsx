import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import headerLogo from '../img/header-logo.png';
import { useSelector } from 'react-redux';

function Header() {
    const navigate = useNavigate();
    const [hideSearchInput, setHideSearchInput] = useState(true);
    const [searchInput, setSearchInput] = useState('');
    const basket = useSelector(state => state.basket.items);

    const handlerSearch = (e) => {
        if (hideSearchInput) {
            setHideSearchInput(false);
            return;
        };
        onSubmitSearch(e);
    }

    const onSubmitSearch = (e) => {
        e.preventDefault();
        navigate("/catalog.html", { state: searchInput });
        setSearchInput('');
        setHideSearchInput(true);
    }

    return (
        <header className="container">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-sm navbar-light bg-light">
                        <Link className="navbar-brand" to="/">
                            <img src={headerLogo} alt="Bosa Noga" />
                        </Link>
                        <div className="collapse navbar-collapse" id="navbarMain">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/">Главная</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/catalog.html">Каталог</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about.html">О магазине</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contacts.html">Контакты</NavLink>
                                </li>
                            </ul>
                            <div>
                                <div className="header-controls-pics">
                                    <div onClick={handlerSearch} data-id="search-expander" className="header-controls-pic header-controls-search"></div>
                                    {/* <!-- Do programmatic navigation on click to /cart.html --> */}
                                    <Link to="/cart.html" className="header-controls-pic header-controls-cart">
                                        {basket.length > 0 && <div className="header-controls-cart-full">{basket.length}</div>}
                                        <div className="header-controls-cart-menu"></div>
                                    </Link>
                                </div>
                                {!hideSearchInput
                                    &&
                                    <form
                                        onSubmit={onSubmitSearch}
                                        data-id="search-form"
                                        className="header-controls-search-form form-inline">
                                        <input onChange={(e) => setSearchInput(e.target.value)}
                                            value={searchInput}
                                            className="form-control"
                                            placeholder="Поиск"
                                            autoFocus
                                        />
                                    </form>
                                }
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;