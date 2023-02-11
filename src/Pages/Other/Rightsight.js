import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Rightsight = () => {
    const place = useLoaderData()
    return (
        <div>
            <h2>{place.name}</h2>
            <p>{place.details}</p>
            <Button variant="success"><Link className='text-white' to=''>Booking</Link> </Button>
        </div>
    );
};

export default Rightsight;