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

const itemList = [
    {
        id: 1,
        medicine:
            'ThermaCare Advanced Back Pain Therapy Heatwraps, 2 CT a aa aaa aaa a aaaa a aaa aa a aa aa',
        price: 8.49,
        img: MED1
    },
    {
        id: 2,
        medicine: 'Unisom Simple Slumbers Midnight Raspberry Gummies...',
        price: 11.79,
        img: MED2
    },
    {
        id: 3,
        medicine: 'Ricola Mountain Herb Drops Sugar Free, 45 CT',
        price: 7.29,
        img: MED3
    },
    {
        id: 4,
        medicine: 'Betadine Antiseptic Sore Throat Gargle, 8 OZ',
        price: 11.99,
        img: MED4
    },
    {
        id: 5,
        medicine: 'Dramamine-N The Nausea Relief Tablets, 10 CT',
        price: 8.99,
        img: MED5
    },
    {
        id: 6,
        medicine: "Vicks Children's Cough & Congestion NIGHT Relief, Kids Cough ...",
        price: 11.79,
        img: MED6
    },
    {
        id: 7,
        medicine: 'ThermaCare Advanced Back Pain Therapy Heatwraps, 2 CT',
        price: 8.49,
        img: MED1
    },
    {
        id: 8,
        medicine: 'Unisom Simple Slumbers Midnight Raspberry Gummies...',
        price: 11.79,
        img: MED2
    },
    {
        id: 9,
        medicine: 'Ricola Mountain Herb Drops Sugar Free, 45 CT',
        price: 7.29,
        img: MED3
    },
    {
        id: 10,
        medicine: 'Betadine Antiseptic Sore Throat Gargle, 8 OZ',
        price: 11.99,
        img: MED4
    },
    {
        id: 11,
        medicine: 'Dramamine-N The Nausea Relief Tablets, 10 CT',
        price: 8.99,
        img: MED5
    },
    {
        id: 12,
        medicine: "Vicks Children's Cough & Congestion NIGHT Relief, Kids Cough ...",
        price: 11.79,
        img: MED6
    },
    {
        id: 13,
        medicine: 'ThermaCare Advanced Back Pain Therapy Heatwraps, 2 CT',
        price: 8.49,
        img: MED1
    },
    {
        id: 14,
        medicine: 'Unisom Simple Slumbers Midnight Raspberry Gummies...',
        price: 11.79,
        img: MED2
    },
    {
        id: 15,
        medicine: 'Ricola Mountain Herb Drops Sugar Free, 45 CT',
        price: 7.29,
        img: MED3
    },
    {
        id: 16,
        medicine: 'Betadine Antiseptic Sore Throat Gargle, 8 OZ',
        price: 11.99,
        img: MED4
    },
    {
        id: 17,
        medicine: 'Dramamine-N The Nausea Relief Tablets, 10 CT',
        price: 8.99,
        img: MED5
    },
    {
        id: 18,
        medicine: "Vicks Children's Cough & Congestion NIGHT Relief, Kids Cough ...",
        price: 11.79,
        img: MED6
    },
    {
        id: 19,
        medicine: 'ThermaCare Advanced Back Pain Therapy Heatwraps, 2 CT',
        price: 8.49,
        img: MED1
    },
    {
        id: 20,
        medicine: 'Unisom Simple Slumbers Midnight Raspberry Gummies...',
        price: 11.79,
        img: MED2
    },
    {
        id: 21,
        medicine: 'Ricola Mountain Herb Drops Sugar Free, 45 CT',
        price: 7.29,
        img: MED3
    },
    {
        id: 22,
        medicine: 'Betadine Antiseptic Sore Throat Gargle, 8 OZ',
        price: 11.99,
        img: MED4
    },
    {
        id: 23,
        medicine: 'Dramamine-N The Nausea Relief Tablets, 10 CT',
        price: 8.99,
        img: MED5
    },
    {
        id: 24,
        medicine: "Vicks Children's Cough & Congestion NIGHT Relief, Kids Cough ...",
        price: 11.79,
        img: MED6
    }
];

const Shopping: FC = () => {
    return (
        <Box
            sx={{
                ml: '60px'
            }}
        >
            <Fab>
                <Badge
                    badgeContent={4}
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
