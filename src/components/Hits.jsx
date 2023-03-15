import { useEffect, useState } from "react";
import ProductService from "../API/ProductService";
import { useFetching } from "../hooks/useFetching";
import ProductItems from "./Product/ProductItems";

function Hits() {
    const [hits, setHits] = useState([])

    const [fetchHits, isHitsLoading, hitsError] = useFetching(async () => {
        const response = await ProductService.getHits();
        setHits(response)
    })

    useEffect(() => {
        fetchHits();
    }, []);

    if (hits) {
        return (
            <section className="top-sales">
                <h2 className="text-center">Хиты продаж!</h2>
                <div className="row">
                    <ProductItems items={hits} isLoader={isHitsLoading} isError={hitsError} />
                </div>
            </section>
        );
    }
}

export default Hits;
