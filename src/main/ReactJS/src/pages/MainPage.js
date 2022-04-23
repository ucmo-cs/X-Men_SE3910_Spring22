import React from 'react';
import Header from '../components/Header.js';
import PopupAdd from '../components/PopupAdd'
import PopupInfo from '../components/PopupInfo'
import ProjectList from '../components/ProjectList.js';

const MainPage = () => {
    return (
        <div>
            <Header isLoggedIn={true}/>
            <ProjectList />
        </div>
    );
};

export default MainPage;