import type { FC } from 'react';
import { Badge, Box, Fab } from '@mui/material';
import ItemCard from './components/ItemCard/itemCard';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import MED1 from '../../assets/Landing/Carousel/medCard1.png';
import MED2 from '../../assets/Landing/Carousel/medCard2.png';
import MED3 from '../../assets/Landing/Carousel/medCard3.png';
import MED4 from '../../assets/Landing/Carousel/medCard4.png';
import MED5 from '../../assets/Landing/Carousel/medCard5.png';
import MED6 from '../../assets/Landing/Carousel/medCard6.png';
import { ShoppingCart } from '@mui/icons-material';
import { useShoppingCart } from './context/ShoppingCartContext';

const itemList = [
    {
        id: 1,
        medicine:
            'ThermaCare Advanced Back Pain Therapy Heatwraps, 2 CT a aa aaa aaa a aaaa a aaa aa a aa aa',
        price: 8.49,
        img: MED1,
        key: Math.random()
    },
    {
        id: 2,
        medicine: 'Unisom Simple Slumbers Midnight Raspberry Gummies...',
        price: 11.79,
        img: MED2,
        key: Math.random()
    },
    {
        id: 3,
        medicine: 'Ricola Mountain Herb Drops Sugar Free, 45 CT',
        price: 7.29,
        img: MED3,
        key: Math.random()
    },
    {
        id: 4,
        medicine: 'Betadine Antiseptic Sore Throat Gargle, 8 OZ',
        price: 11.99,
        img: MED4,
        key: Math.random()
    },
    {
        id: 5,
        medicine: 'Dramamine-N The Nausea Relief Tablets, 10 CT',
        price: 8.99,
        img: MED5,
        key: Math.random()
    },
    {
        id: 6,
        medicine: "Vicks Children's Cough & Congestion NIGHT Relief, Kids Cough ...",
        price: 11.79,
        img: MED6,
        key: Math.random()
    },
    {
        id: 7,
        medicine: 'ThermaCare Advanced Back Pain Therapy Heatwraps, 2 CT',
        price: 8.49,
        img: MED1,
        key: Math.random()
    },
    {
        id: 8,
        medicine: 'Unisom Simple Slumbers Midnight Raspberry Gummies...',
        price: 11.79,
        img: MED2,
        key: Math.random()
    },
    {
        id: 9,
        medicine: 'Ricola Mountain Herb Drops Sugar Free, 45 CT',
        price: 7.29,
        img: MED3,
        key: Math.random()
    },
    {
        id: 10,
        medicine: 'Betadine Antiseptic Sore Throat Gargle, 8 OZ',
        price: 11.99,
        img: MED4,
        key: Math.random()
    },
    {
        id: 11,
        medicine: 'Dramamine-N The Nausea Relief Tablets, 10 CT',
        price: 8.99,
        img: MED5,
        key: Math.random()
    },
    {
        id: 12,
        medicine: "Vicks Children's Cough & Congestion NIGHT Relief, Kids Cough ...",
        price: 11.79,
        img: MED6,
        key: Math.random()
    },
    {
        id: 13,
        medicine: 'ThermaCare Advanced Back Pain Therapy Heatwraps, 2 CT',
        price: 8.49,
        img: MED1,
        key: Math.random()
    },
    {
        id: 14,
        medicine: 'Unisom Simple Slumbers Midnight Raspberry Gummies...',
        price: 11.79,
        img: MED2,
        key: Math.random()
    },
    {
        id: 15,
        medicine: 'Ricola Mountain Herb Drops Sugar Free, 45 CT',
        price: 7.29,
        img: MED3,
        key: Math.random()
    },
    {
        id: 16,
        medicine: 'Betadine Antiseptic Sore Throat Gargle, 8 OZ',
        price: 11.99,
        img: MED4,
        key: Math.random()
    },
    {
        id: 17,
        medicine: 'Dramamine-N The Nausea Relief Tablets, 10 CT',
        price: 8.99,
        img: MED5,
        key: Math.random()
    },
    {
        id: 18,
        medicine: "Vicks Children's Cough & Congestion NIGHT Relief, Kids Cough ...",
        price: 11.79,
        img: MED6,
        key: Math.random()
    },
    {
        id: 19,
        medicine: 'ThermaCare Advanced Back Pain Therapy Heatwraps, 2 CT',
        price: 8.49,
        img: MED1,
        key: Math.random()
    },
    {
        id: 20,
        medicine: 'Unisom Simple Slumbers Midnight Raspberry Gummies...',
        price: 11.79,
        img: MED2,
        key: Math.random()
    },
    {
        id: 21,
        medicine: 'Ricola Mountain Herb Drops Sugar Free, 45 CT',
        price: 7.29,
        img: MED3,
        key: Math.random()
    },
    {
        id: 22,
        medicine: 'Betadine Antiseptic Sore Throat Gargle, 8 OZ',
        price: 11.99,
        img: MED4,
        key: Math.random()
    },
    {
        id: 23,
        medicine: 'Dramamine-N The Nausea Relief Tablets, 10 CT',
        price: 8.99,
        img: MED5,
        key: Math.random()
    },
    {
        id: 24,
        medicine: "Vicks Children's Cough & Congestion NIGHT Relief, Kids Cough ...",
        price: 11.79,
        img: MED6,
        key: Math.random()
    }
];

const Shopping: FC = () => {
    const { openCart } = useShoppingCart();
    //    const {
    //     getItemQuantity,
    //     increaseCartQuantity,
    //     decreaseCartQuantity,
    //     removeFromCart
    // } = useShoppingCart()

    return (
        <Box
            sx={{
                ml: '60px'
            }}
        >
            <Fab onClick={openCart}>
                <Badge
                    badgeContent={7}
                    color="error"
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                >
                    <ShoppingCart fontSize="large" color="primary" />
                </Badge>
            </Fab>

            <Grid container columns={4} xs={4} sx={{ margin: '0 auto' }}>
                {itemList.map((item, index) => (
                    <ItemCard
                        id={item.id}
                        medicine={item.medicine}
                        price={item.price}
                        img={item.img}
                        key={index}
                    />
                ))}
            </Grid>
        </Box>
    );
};

export default Shopping;
