import cl from './EmptyProduct.module.css'

function EmptyProduct({ title, subTitle }) {
    return (
        <div className={cl.emptyProduct}>
            <h1 className={cl.title}>{title}</h1>
            <hr />
            <span className={cl.subTitle}>{subTitle}</span>
        </div>
    );
}

export default EmptyProduct;