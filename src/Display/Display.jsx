import IndividualItems from './IndividualItems';
import React, { useContext } from 'react';
import AuthContext from '../ContextApi/AuthContext';
import './Display.css';
import NavBar from './NavBar';

const Display = () => {
    const cxt = useContext(AuthContext);
    let val = false;
    if (cxt.cartCount !== 0) {
        val = true;
    }
    return (
        <div className="background">
            <div className="user-ui">
                <NavBar></NavBar>
                {val && (
                    <i class="fa-solid fa-cart-shopping" onClick={cxt.showCartHandler}>
                        <sup>
                            <sup>{cxt.cartCount}</sup>
                        </sup>
                    </i>
                )}
                {!val && (
                    <i class="fa-solid fa-cart-shopping" onClick={cxt.showCartHandler}>
                        <sup>
                            <sup></sup>
                        </sup>
                    </i>
                )}
            </div>
            <div className="products">
                {cxt.displayoptions.map((items) => {
                    return (
                        <IndividualItems
                            id={items.id}
                            name={items.names}
                            src={items.img}
                            brand={items.brand_names}
                            price={items.price}
                            key={items.key}
                        ></IndividualItems>
                    );
                })}
            </div>
        </div>
    );
};
export default Display;
