import React from 'react';
import './styles.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import NavItem from '../NavItem';
import ButtonCustom from '../ButtonCustom';

const Footer = ({ variant, btn_text, nav_item_as }) => {
    return (
        <Col md={{ span: 10, offset: 2 }}>
            <Row>
                <Col md={10} xs={8}>
                    <Nav defaultActiveKey="/home" as="ul" className="nav_item_left">
                        <NavItem nav_item_as={nav_item_as} nav_item_href="#" nav_item_text={["PORTAL", <span className="nav_item_a ml-4">|</span>]} />                
                        <NavItem nav_item_as={nav_item_as} nav_item_href="#" nav_item_text={["PRODUCCIÓN", <span className="nav_item_a ml-4">|</span>]} />
                        <NavItem nav_item_as={nav_item_as} nav_item_href="#" nav_item_text="V 1.2.1" />
                    </Nav>
                </Col>
                <Col md={2} xs={4}>
                    <Nav>
                        <ButtonCustom variant={variant} btn_text={btn_text} />
                    </Nav>
                </Col>
            </Row>
        </Col>
    )
}

export default Footer;