import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
const Register = () => {
    const [error, setError] = useState('')
    const { createUser } = useContext(AuthContext)
    const navigate = Navigate()
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, name, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('')
                navigate('/')
            })
            .catch(err => {
                console.error(err)
                setError(err.message)
            })
    }
    return (
        <Form onSubmit={handleSubmit} className='w-50 mx-auto my-3'>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Input name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Enter name" required />

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
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
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