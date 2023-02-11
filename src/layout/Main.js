import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

import Headers from '../shared/Header/Headers';


const Main = () => {
    return (
        <div>
            <Headers></Headers>
            <Container>
                <Row>
                    <Col>
                        <Outlet></Outlet>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Main;