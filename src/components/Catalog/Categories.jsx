import React from 'react'

function Categories({ options, value, onClick }) {
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
