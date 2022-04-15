import './Header.css';
import React, {useState} from 'react';
import { Container, Dropdown, Navbar } from 'react-bootstrap';

function ShowUser(props) {
    const isApprover = props.isApprover;
    const [isLoggedIn] = useState(props.isLoggedIn);

    var icon = 'defaultIcon';

    isApprover === true ? (icon = 'appr_icon') : (icon = 'req_icon');
    

    if (isLoggedIn) {
        return (
            <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                <img src={require('./images/' + icon + '.png')} alt='Icon' className='nav-icon' />
                <Dropdown>
                    <Dropdown.Toggle variant='success' id='dropdown-basic' size='md'>
                        Username
                        {/* Add stuff to get person name stuff */}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="">{isApprover === true ? 'Approver' : 'Requester'}</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="/login">Log Out</Dropdown.Item>
                        {/* Add function to log user out and something props */}
                    </Dropdown.Menu>
                </Dropdown>
            </Navbar.Collapse>
        );
    } else {
        return ( null );
    }
};

export default function Header(props) {

    const [isApprover] = useState(true);
    const [isLoggedIn] = useState(props.isLoggedIn);
    
    return (
        <Navbar varient="pills" className='navbar-header'>
            <Container>
                <Navbar.Brand> <img src={require('./images/bank_logo.png')} alt='Commerce Bank Logo' className='logo' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ShowUser isLoggedIn={isLoggedIn} isApprover={isApprover} />
            </Container>
        </Navbar>
    );
};

