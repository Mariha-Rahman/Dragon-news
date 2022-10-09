import React from 'react';
import './Cart.css'
const Cart = (props) => {
    console.log(props)
    const { cart } = props;

    return (
        <div className='cart'>
            <h4>Selected Iteams:{cart.length}</h4>
            {
                cart.map(food => <p>Item Name:{food.strMeal}</p>)
            }
        </div>
    );
};

export default Cart;