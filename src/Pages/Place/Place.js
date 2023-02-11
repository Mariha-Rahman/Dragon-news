import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './place.css'
const Place = ({ place }) => {

    const { name, Image, id } = place
    console.log(place)
    return (


        <Card className="bg-dark place">
            <Card.ImgOverlay className='name'>
                <Link className='text-white place-name ' to={`/places/${id}`}> {name}</Link>
            </Card.ImgOverlay>
            <Card.Img src={Image} alt="Card image" />

        </Card>

    );
};

export default Place;