import React, { useEffect, useState } from 'react'

function FormSearch({ onSubmit, hidden, setValue }) {
    const [searchInput, setSearchInput] = useState('');
    useEffect(() => {
        setSearchInput(setValue)
    }, [setValue]);
    return (
        <form onSubmit={(e) => onSubmit(e, searchInput)} hidden={hidden} className="catalog-search-form form-inline">
            <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className="form-control" placeholder="Поиск" />
        </form>
    );
}

export default FormSearch;