import React from 'react'

function Categories({ options, value, onClick, isError }) {
    if (isError) return <h3 style={{ width: '100%', textAlign: 'center', color: 'red' }}>{isError}</h3>

    return (
        <ul className="catalog-categories nav justify-content-center">
            {options.map((option) => {
                return (
                    <li key={option.title} className="nav-item">
                        <span style={{ cursor: "pointer" }}
                            onClick={() => onClick(option.id)}
                            className={option.id === value ? "nav-link active" : "nav-link"}
                        >
                            {option.title}
                        </span>
                    </li>
                )
            })}
        </ul >
    );
}

export default Categories;
