import React from 'react';
import Header from '../components/Header.js';
import Table from '../components/Table.js';

const MainPage = () => {
    return (
        <div>
            <Header isLoggedIn={true}/>
            <Table />
        </div>
    );
};

export default MainPage;