import React, { useContext } from 'react';
import AuthContext from '../ContextApi/AuthContext';
import CartItems from './CartItems';
// import { MEDICINES } from "../Constants/Constants";
import './Cart.css';
import FormCheck from '../PrescriptionFormCheck/PrescriptionFormCheck';
const Cart = () => {
    const cxt = useContext(AuthContext);
    const value = cxt.cartContent.filter((items) => {
        return items.quantity > 0;
    });
    return (
        <React.Fragment>
            {cxt.showForm && <FormCheck></FormCheck>}
            <div className="backdrop">
                <div className="cartitems">
                    <div className="border">Your Cart</div>
                    {value.map((items) => {
                        return (
                            <CartItems key={items.key} prices={items.price} name={items.names} quantity={items.quantity} id={items.id}></CartItems>
                        );
                    })}
                    <button onClick={cxt.showCartHandler} className="cart-close">
                        Close
                    </button>
                    {cxt.cartCount > 0 && (
                        <button onClick={cxt.clearCartHandler} className="clear-cart">
                            Clear
                        </button>
                    )}
                    {cxt.cartCount > 0 && (
                        <button className="checkout" onClick={cxt.cartHasPrescribedHandler}>
                            Checkout
                        </button>
                    )}
                </div>
            </div>
        </React.Fragment>
    );
};
export default Cart;
