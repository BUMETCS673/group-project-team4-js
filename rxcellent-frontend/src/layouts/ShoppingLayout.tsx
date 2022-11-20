import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import NavbarFC from '../components/navbar/navbar';
import FooterFC from '../components/Footer';
import Banner from '../pages/shopping/components/banner';
import Filter from '../pages/shopping/components/Filter';
import { Box, Fab } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ShoppingLayout: FC = () => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                width: '100%',
                backgroundColor: '#f7feff'
            }}
        >
            <NavbarFC />
            <Banner />

            <Fab size="medium">
                <ShoppingCartIcon></ShoppingCartIcon>
            </Fab>

            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    marginTop: '30px'
                }}
            >
                <Filter />
                <Box>
                    <Outlet />
                </Box>
            </Box>
            <FooterFC />
        </Box>
    );
};

export default ShoppingLayout;
