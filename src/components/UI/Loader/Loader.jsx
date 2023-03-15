import React from 'react'
import cl from './Loader.module.css'
function Loader() {
    return (
        <div className={cl.preloader}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default Loader