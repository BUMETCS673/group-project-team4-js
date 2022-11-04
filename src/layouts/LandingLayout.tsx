import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Carousel from '../components/carousel/carousel';
import Categories from '../components/categories/categories';
import NavbarFC from '../components/navbar/navbar';
import Welcome from '../components/welcome/welcome';

const LandingLayout: FC = () => {
    return (
        <>
            <NavbarFC />
            <Welcome></Welcome>
            <Categories></Categories>
            <Carousel></Carousel>
            <Outlet />
        </>
    );
};

export default LandingLayout;
