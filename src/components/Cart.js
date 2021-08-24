import React from 'react'
import './Cart.css'
import { Link } from 'react-router-dom'

const Cart = (props) => {
    
    return (
        <div className='card'>
                <img className='img_main' src={props.img} alt={props.category} />
            <h2>{props.title}</h2>
            <p>{props.category}</p>
            <h2 className='price'>PRICE: {props.price}$</h2>
            <Link className='aa' to={`/detail/${props.id}`}>
                MORE
            </Link>
        </div>
    )
}

export default Cart
