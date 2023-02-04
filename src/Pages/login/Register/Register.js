import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
const Register = () => {
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false)
    const { createUser, updateUserProfile, varifyEmail } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photourl.value;
        // console.log(email, name, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('')
                navigate('/');
                handleupdateUserProfile(name, photoURL);
                handleEmailVarification();
                toast.success('please varify your email address')
            })
            .catch(err => {
                console.error(err)
                setError(err.message)
            })
    }
    const handleupdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch((err) => {
                console.error(err)
            })
    }
    const handlecheck = event => {
        setAccepted(event.target.checked)
    };
    //email verification
    const handleEmailVarification = () => {
        varifyEmail()
            .then(() => { })
            .catch(err => console.error(err))
    }
    return (
        <Form onSubmit={handleSubmit} className='w-50 mx-auto my-3'>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Input name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Enter name" required />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhoto">
                <Form.Label>PhotoURL</Form.Label>
                <Form.Control name='photourl' type="text" placeholder="photourl" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    onClick={handlecheck}
                    type="checkbox"
                    label={<>Accept <Link to='/terms'>Terms and Conditions</Link></>} />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!accepted}>
                Register
            </Button>
            <br />
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
        </Form>
    );
};

export default Register;