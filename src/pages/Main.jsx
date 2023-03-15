import React from 'react'
import CatalogItems from '../components/Catalog/CatalogItems';
import Hits from '../components/Hits';
function Main() {
    return (
        <>
            <Hits />
            <section className="catalog">
                <h2 className="text-center">Каталог</h2>
                <CatalogItems />
            </section>
        </>
    );
}

export default Main;