import React from 'react'
import './Navbar.css';
import logo from '../assets/airbnb-logo.png';


const Navbar = () => {
    return (
        <section id="navBar">
            <div className="imgcontainer">
                <img src={logo} alt="airbnb-logo" className='img-logo' />
            </div>
        </section>
    )
}
export default Navbar