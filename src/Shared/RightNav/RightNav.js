import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { ImGoogle, ImGithub, ImFacebook, ImWhatsapp, ImTwitter, ImInstagram, ImTwitch } from "react-icons/im";
import ListGroup from 'react-bootstrap/ListGroup';
import Brandcarosol from '../BrandCaurosol/Brandcarosol';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightNav = () => {
    const { SignInWithGoogle } = useContext(AuthContext);
    const provider = new GoogleAuthProvider()
    const handleGoogleSignin = () => {
        SignInWithGoogle(provider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignin} className='mb-3 p-2' variant="outline-primary"><ImGoogle />  Login with Google</Button>
                <Button className='mb-3 p-2' variant="outline-dark"><ImGithub /> Login with Github</Button>
            </ButtonGroup>

            <div>
                <h2 className='mb-2'>Found us with</h2>
                <ListGroup>
                    <ListGroup.Item className='mb-3'><ImFacebook></ImFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><ImWhatsapp></ImWhatsapp> Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><ImTwitter></ImTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-3'> <ImInstagram></ImInstagram> Instagram</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><ImTwitch></ImTwitch> Twitch</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <Brandcarosol></Brandcarosol>
            </div>
        </div>
    );
};

export default RightNav;