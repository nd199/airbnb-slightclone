import React from 'react'
import './Card-Content.css';
import star from '../assets/star.png'

const CardContent = (props) => {
    return (
        <div className="card">
            {props.item.openSpots === 0 ? <div className="card--badges">SOLD OUT</div> :
                <div className="card--badge">ONLINE</div>}
            <img src={props.item.coverImg} className="card--image" />
            <div className="card--stats">
                <img src={star} className="card--star" />
                <span className='rating'>({props.item.stats.rating})</span>
                <span className="gray">{props.item.stats.reviewCount} • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className='card--title'>{props.item.title}</p>
            <p className='card--price'><span className="bold">From <b>${props.item.price}</b></span>/person</p>
        </div>
    )
}

export default CardContent