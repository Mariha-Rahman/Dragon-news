import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from '../../context/UserContext';
const Registration = () => {
    const [error, setError] = useState('')
    const { handleGoogleSignIn, handleEmailSignin } = useContext(AuthContext)
    const provider = new GoogleAuthProvider();
    const handleGoogleBtn = () => {
        handleGoogleSignIn(provider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        handleEmailSignin(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
                setError('')
            })
            .catch(err => {
                console.error(err);
                setError(err.message)
            })
    }
    return (
        <div>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto'>
                <h2>Register Please</h2>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Already Register?" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <div>
                    <Button onClick={handleGoogleBtn} className='mt-3' variant="success" size="lg">
                        Register with Google Account
                    </Button>
                    <br />
                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>
                </div>
            </Form>
        </div>

    );
};

export default Registration;