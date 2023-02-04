import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import LeftNav from '../LeftNav/LeftNav';
const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const handleSignOut = () => {
        logout()
            .then(() => { })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand className='' ><Link to='/'>Dragon News</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link > </Nav.Link>
                            <Nav.Link >
                                <Link className='text-black' to='/'>All News</Link>

                            </Nav.Link>
                            <div className='my-2 d-flex justify-content-center align-center'>
                                {
                                    user?.uid ?
                                        <>
                                            <p>{user?.displayName}</p>

                                            <Button variant="secondary" onClick={handleSignOut} className='ms-2 py-0'>Log out</Button>
                                        </>

                                        :
                                        <>
                                            <Link className='me-2' to='/login'>LogIn</Link>
                                            <Link to='/register'>Register</Link>
                                        </>
                                }

                            </div>

                        </Nav>

                        <div className='d-lg-none'>
                            <LeftNav ></LeftNav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;