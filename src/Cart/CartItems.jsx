import { useContext } from 'react';
import AuthContext from '../ContextApi/AuthContext';
import './CartItems.css';
const CartItems = (props) => {
    const cxt = useContext(AuthContext);
    const addsToCart = () => {
        cxt.addToCart(props.id);
    };
    const reduceFromCart = () => {
        cxt.subtractFromCart(props.id);
    };
    return (
        <div className="individual-cart-items">
            <div className="medicine-name">{props.name}</div>
            <button className="reduce" onClick={reduceFromCart}>
                -
            </button>
            <div className="medicine-quantity">{props.quantity}</div>
            <button className="add-more" onClick={addsToCart}>
                +
            </button>
            <div className="medicine-total-price">{props.prices * props.quantity}$</div>
        </div>
    );
};
export default CartItems;
