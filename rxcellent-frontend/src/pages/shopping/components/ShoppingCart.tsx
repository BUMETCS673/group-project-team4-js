import { Drawer, Box, Typography } from '@mui/material';
import { useShoppingCart } from '../context/ShoppingCartContext';

type ShoppingCartProps = {
    isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
    const { closeCart } = useShoppingCart();

    // const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    return (
        <Drawer anchor="right" open={isOpen} onClose={closeCart}>
            <Box p={2} width="250px" textAlign="center" role="presentation">
                <Typography variant="h6" component="div">
                    Side Panel
                </Typography>
            </Box>
        </Drawer>
    );
}
