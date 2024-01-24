import React from 'react'
import './Preload.scss'

export default function Preload() {
    return (
        <section className='preload'>
            <div className='preload-logo'>
                <div className='preload-img'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="126" height="150" viewBox="0 0 126 387" fill="none">
                        <path d="M126 2L2 2V193.5V385H126" stroke="#FCD54C" strokeWidth="15" />
                    </svg>
                </div>
                <div className='preload-name-container'>
                    <div className='preload-name'>Dubai</div>
                    <div className='preload-name-second'>Realty</div>
                </div>
                <div className="preload-desc-container">
                    <div className='preload-desc'>Real</div>
                    <div className='preload-desc-second'>Estate</div>
                </div>
            </div>
        </section>
    )
}
