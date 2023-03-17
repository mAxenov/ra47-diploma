import cl from './EmptyProduct.module.css'

function EmptyProduct({ title, subTitle, children }) {
    return (
        <div className={cl.emptyProduct}>
            <h1 className={cl.title}>{title}</h1>
            <hr />
            <span className={cl.subTitle}>{subTitle}</span>
            {children}
        </div>
    );
}

export default EmptyProduct;