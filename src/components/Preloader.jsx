import React from 'react'
import logopreload from '../assets/img/png/logo.png'
const Preloader = () => {
    return (
        <div className='bg-black min_vh_100 w-100  position-fixed top-0 start-0 loading'>
            <div className='d-flex justify-content-center align-items-center min_vh_100'>
                <img className='preloaderAnimation' src={logopreload} alt="logo" />
            </div>
        </div>
    )
}

export default Preloader