import React from 'react';
import './Content.css';
import grid from "../assets/photo-grid.png";

const Content = () => {
    return (
        <section id="contentOne">
            <img src={grid} alt="" className="content-img" />
            <div className="content-text">
                <h1 className='heading'>Online Experiences</h1>
                <p className="main-para">
                    Join unique interactive activities led by one-of-a-kind
                    hosts-all without leaving home.
                </p>
            </div>
        </section>
    )
}

export default Content