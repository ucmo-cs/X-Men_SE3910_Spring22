import React from 'react';
import Header from '../components/Header.js';

const MainPage = () => {
    return (
        <div>
            <Header isLoggedIn={true}/>
            Home page
        </div>
    );
};

export default MainPage;