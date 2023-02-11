import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../../context/UserContext';
import './Header.css'
const Headers = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(err => console.error(err))
    }
    return (
        <div>

            <>
                {['sm'].map((expand) => (
                    <Navbar key={expand} bg="light" expand={expand} className="mb-3">
                        <Container fluid>
                            <Navbar.Brand className='text my-auto'>TRAVELGURU</Navbar.Brand>
                            <p className='mx-3 pt-2'>{user?.displayName}</p>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>

                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-end flex-grow-1 pe-3 header align-items-center">
                                        <Link to='/'>Home</Link>
                                        <Link to='/blog'>Blog</Link>
                                        <Link to=''>Contact</Link>
                                        {
                                            user?.uid ?
                                                <Button onClick={handleLogout} variant="light">Log Out</Button>
                                                :
                                                <>
                                                    <Link to='/login'>Log In</Link>
                                                    <Link to='/register'>Register</Link>
                                                </>
                                        }


                                    </Nav>
                                    <Form className="d-flex">
                                        <Form.Control
                                            type="search"
                                            placeholder="Search Your Destination"
                                            className="me-2"
                                            aria-label="Search"
                                        />

                                    </Form>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                ))}
            </>
        </div>
    );
};

export default Headers;