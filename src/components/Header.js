import React from 'react';
import './Header.css';
import { Navbar, Container, Dropdown } from 'react-bootstrap';

function ShowUser(props) {
    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) {
        return (
            <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                <img src={require('./images/defaultIcon.png')} alt='Icon' className='nav-icon' />
                <Dropdown>
                    <Dropdown.Toggle variant='success' id='dropdown-basic' size='md'>
                        Username
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href=""> Approver</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#insertFunction"> Log Out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Navbar.Collapse>
        );
    } else {
        return ( null );
    }
};

const Header = () => {
    return (
        <Navbar varient="pills" className='navbar-header'>
            <Container>
                <Navbar.Brand> <img src={require('./images/bank_logo.png')} alt='Commerce Bank Logo' className='logo' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ShowUser isLoggedIn={false} />
            </Container>
        </Navbar>
    );
};

export default Header;