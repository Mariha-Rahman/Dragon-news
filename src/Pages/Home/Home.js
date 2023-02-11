import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Place from '../Place/Place';
import './Home.css'
const Home = () => {
    const places = useLoaderData()
    return (

        <div className='d-flex'>

            {places.map(place => <Place
                key={place.id}
                place={place}>
            </Place>)}
        </div>

    );
};

export default Home;