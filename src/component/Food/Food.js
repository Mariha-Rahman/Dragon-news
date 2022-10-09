import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Food.css'
const Food = (props) => {
    const { handleBtn } = props
    console.log(props)
    const { strMeal, strInstructions, strMealThumb } = props.meal
    return (
        <div className='food'>
            <img src={strMealThumb} alt="" />
            <div className='food-info' >
                <h3>Iteam Name:{strMeal}</h3>
                <h5>Description:{strInstructions.slice(0, 120)}</h5>

            </div>

            <button onClick={() => handleBtn(props.meal)} className='menu-btn'>
                <p className='btn-info'>Add to Menu</p>
                <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Food;