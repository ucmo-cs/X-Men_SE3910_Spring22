import React from 'react';
import Login from '../components/Login.js';
import PopupInfo from '../components/PopupInfo.js';
import Header from '../components/Header.js';

const LoginPage = () => {
    return (
        <div>
            <Header isLoggedIn={false}/>
            <PopupInfo />
            <Login />
        </div>
    );
};

export default LoginPage;