import React from 'react';
import Login from '../components/Login.js';
import Header from '../components/Header.js';

const LoginPage = () => {
    return (
        <div>
            <Header isLoggedIn={true}/>
            <Login />
        </div>
    );
};

export default LoginPage;