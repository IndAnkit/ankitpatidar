import React from 'react'
import header from './Header.module.css'

function Header() {
    return (
        <div className='header__main'>
            <div className={header.main__header}>
                <h1 className={header.h1} style={{ color: 'White' }}><span style={{ color: 'green' }}>Node Js</span> Crash Course</h1>
            </div>
            

        </div>
    )
}

export default Header
