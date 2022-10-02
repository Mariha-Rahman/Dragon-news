import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { img, name, seller, price, ratings } = props.product
    const { handleAddToCart } = props
    return (
        <div className='product'>
            <img src={img} alt="" />

            <div className='product-info'>
                <p>{name}</p>
                <p>Price:${price}</p>
                <p><small>Seller:{seller}</small></p>
                <p><small>Ratings:{ratings}Stars</small></p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                <p className='btn-text'>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;