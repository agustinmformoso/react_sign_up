import React from 'react';
import './styles.css';
import '../../Resources/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import SignUp from '../../Components/SignUp';
import sign_up_img from '../../Resources/Images/sign_up_img.png';
import NavbarCustom from '../../Components/NavbarCustom';
import Footer from '../../Components/Footer';
import { UserListProvider } from '../../Store/UserListContext';

const Home = () => {
    return (
            <UserListProvider>
            <Container fluid={true}>
                <Row>
                    <NavbarCustom />
                </Row>
                <Row className="mt-5 mb-5">
                    <Col md={{ span: 10, offset: 2 }} className="justify-content-md-center">
                        <Row>
                            <Col md={5} className="mt-5 mb-5 p-0 sign_up_img_col">
                                <Image src={sign_up_img} alt="sign_up_img" className="sign_up_img" fluid={true} />
                            </Col>

                            <SignUp />

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
