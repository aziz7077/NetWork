import React from 'react';
import Categories from '../../components/Categories/Categories';
import LastBlock from '../../components/LastBlock/LastBlock';
import Performers from '../../components/Performers/Performers';
import Service from '../../components/Service/Service';

const Main = () => {
    return (
        <>
            <Service/>
            <Performers />
            <Categories />
            <LastBlock />
        </>
    );
};

export default Main;