import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>This are ours terms and conditions</h2>
            <p>Copyright</p>
            <p>Go back <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;