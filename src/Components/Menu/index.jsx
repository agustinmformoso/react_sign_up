import React from 'react';
import './styles.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import NavItem from '../NavItem';

const Menu = ({ variant, btn_text, nav_item_as }) => {
    return (
        <Col md={12}>
            <Row>
                <Col md={10} xs={8}>
                    <Nav defaultActiveKey="/home" as="ul" className="nav_item_left">
                        <NavItem nav_item_as={nav_item_as} nav_item_href="#" nav_item_text={["APP", <span className="nav_item_a ml-4">|</span>]} />                
                        <NavItem nav_item_as={nav_item_as} nav_item_href="#" nav_item_text={["ROL", <span className="nav_item_a ml-4">|</span>]} />
                        <NavItem nav_item_as={nav_item_as} nav_item_href="#" nav_item_text="ROL" />
                    </Nav>
                </Col>
            </Row>
        </Col>
    )
}

export default Menu;