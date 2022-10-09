import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Food from '../Food/Food';
import './Mealdb.css'
const Mealdb = () => {
    const [meals, setMeals] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('meal.json')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, []);
    const handleBtn = (meal) => {
        const newCart = [...cart, meal]
        setCart(newCart)
    }
    return (
        <div className='mealdb'>
            <div className='meal-container'>
                {
                    meals.map(meal => <Food
                        key={meal.idMeal}
                        meal={meal}
                        handleBtn={handleBtn}
                    >
                    </Food>)
                }
            </div>
            <div className='menu-container'>

                <Cart
                    cart={cart}
                >

                </Cart>
            </div>

        </div>

    );
};

export default Mealdb;