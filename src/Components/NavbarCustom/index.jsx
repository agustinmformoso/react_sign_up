import React from 'react'
import './styles.css';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar'

const NavbarCustom = () => {
    return (
        <Col md={12} className="navbar_custom p-0">
            <Navbar>
                <Navbar.Brand href="#home" >Orígenes <br/><span>seguros</span></Navbar.Brand>
            </Navbar>
        </Col>
        
    )
}

export default NavbarCustom
