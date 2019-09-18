import React from 'react';
import './styles.css';
import Nav from 'react-bootstrap/Nav';

const NavItem = ({ nav_item_as, nav_item_href, nav_item_text}) => {
    return (
        <Nav.Item as={nav_item_as}>
            <Nav.Link href={nav_item_href}>{nav_item_text}</Nav.Link>
        </Nav.Item>
    )
}

export default NavItem;