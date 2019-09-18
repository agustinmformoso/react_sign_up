import React from 'react';
import './styles.css';
import {Container, Col, Row} from 'react-bootstrap/';
import { Channels, NavbarCustom, Footer, Menu } from '../../Components';
import { GLOBAL } from '../../Config/global.jsx'
import { UserListProvider } from '../../Store/UserListContext';
import Logo from '../../Resources/Images/Icons/react-brands.svg';

const Home = () => {
    return (
            <UserListProvider>
            <Container fluid={true}>
                <Row>
                    <NavbarCustom />
                </Row>

                <Row>
                    <Menu />
                </Row>

                <Row className="mt-5 mb-5">
                    

                    <Col md={{ span: 8, offset: 2 }} className="justify-content-md-center">
                        

                        <Row>
                           <Col md={12} className="text-center administrador">
                               <h2>{GLOBAL.ADMINISTRADOR_DE_CANALES.TITLE}</h2>
                               <p>{GLOBAL.ADMINISTRADOR_DE_CANALES.CAPTION}</p>
                           </Col>
                        </Row>
                        <Row className="pt-2 pl-5 pr-5">
                            <Channels width="33%" src={Logo} alt="Channel logo" title="Lorem" tagline="Your tagline" />
                            <Channels width="33%" src={Logo} alt="Channel logo" title="Lorem" tagline="Your tagline" />
                            <Channels width="33%" src={Logo} alt="Channel logo" title="Lorem" tagline="Your tagline" />
                            <Channels width="33%" src={Logo} alt="Channel logo" title="Lorem" tagline="Your tagline" />
                            <Channels width="33%" src={Logo} alt="Channel logo" title="Lorem" tagline="Your tagline" />
                            <Channels width="33%" src={Logo} alt="Channel logo" title="Lorem" tagline="Your tagline" />
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Footer variant="outline-success" btn_text="Soporte técnico" nav_item_as="li" />
                </Row>
            </Container>
            </UserListProvider>
    );
}

export default Home;
