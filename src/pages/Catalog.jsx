import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import CatalogItems from '../components/Catalog/CatalogItems';
import FormSearch from '../components/Catalog/FormSearch';

function Catalog() {
    const { state } = useLocation();
    const [searchInput, setSearchInput] = useState('');
    const handlerOnSubmitSearch = (e, inputValue) => {
        e.preventDefault();
        setSearchInput(inputValue);
    }

    useEffect(() => {
        if (state) setSearchInput(state);
    }, [state]);

    return (
        <section className="catalog">
            <h2 className="text-center">Каталог</h2>
            <FormSearch
                onSubmit={handlerOnSubmitSearch}
                setValue={searchInput}
            />
            <CatalogItems inputValue={searchInput} />
        </section>
    );
}

export default Catalog;