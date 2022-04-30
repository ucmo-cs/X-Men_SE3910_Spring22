import './Header.css';
import React, {useState} from 'react';
import { Navigate } from 'react-router-dom';
import { Container, Dropdown, Navbar } from 'react-bootstrap';

function ShowUser({user}) {

    const isApprover = user.approver;
    const name = user.firstname + " " + user.lastname;

    const [navigate, setNavigate] = useState();

    const logout = () =>{
        sessionStorage.clear();
        sessionStorage.removeItem("token");
        setNavigate({navigate:true});
        window.location.href = "/";         
    }
  
    if(navigate){
        return <Navigate to="/" push={true} />;
    }  

    var icon = 'defaultIcon';

    isApprover === true ? (icon = 'appr_icon') : (icon = 'req_icon');

        return (
            <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                <img src={require('./images/' + icon + '.png')} alt='Icon' className='nav-icon' />
                <Dropdown>
                    <Dropdown.Toggle variant='success' id='dropdown-basic' size='md'>
                        {name}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="">{isApprover === true ? 'Approver' : 'Requester'}</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick = {logout}>Log Out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Navbar.Collapse>
        );
};

export default function Header({isLoggedIn, user}) {

    if (isLoggedIn) {

        return (
            <Navbar varient="pills" className='navbar-header'>
                <Container>
                    <Navbar.Brand> <img src={require('./images/bank_logo.png')} alt='Commerce Bank Logo' className='logo' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <ShowUser user={user} />
                </Container>
            </Navbar>
        );

    } else {
        return (
            <Navbar varient="pills" className='navbar-header'>
                <Container>
                    <Navbar.Brand> <img src={require('./images/bank_logo.png')} alt='Commerce Bank Logo' className='logo' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                </Container>
            </Navbar>
        );
    }
    
};

