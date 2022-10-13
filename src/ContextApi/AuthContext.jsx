import React, { useState } from 'react';
import { MEDICINES } from '../Constants/Constants';
const AuthContext = React.createContext({
    displayoptions: [],
    prescribedHandler: () => {},
    cartCount: 0,
    addToCart: () => {},
    subtractFromCart: () => {},
    cartContent: [],
    showCart: false,
    showCartHandler: () => {},
    clearCartHandler: () => {},
    cartHasPrescribed: false,
    cartHasPrescribedHandler: () => {},
    showForm: false,
    setShowFormHandler: () => {},
    prescriptionVerified: false,
    setPrescriptionVerified: () => {}
});

export const AuthContextProvider = (props) => {
    let cartContents = MEDICINES;
    const [renderedArray, setArray] = useState(MEDICINES);
    const [cartCount, setCartCount] = useState(0);
    const [cartContent, setCartContent] = useState(cartContents);
    const [showCart, setShowCart] = useState(false);
    const [cartHasPrescribed, setCartHasPrescribed] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [prescriptionVerified, setPrescriptionVerification] = useState(false);
    const prescribedHandler = (values) => {
        if (values === 'all') {
            setArray(MEDICINES);
        } else {
            setArray(
                MEDICINES.filter((items) => {
                    return items.prescription === values;
                })
            );
        }
    };
    const clearCartHandler = () => {
        console.log(MEDICINES);
        for (let i = 0; i < cartContents.length; i++) {
            cartContents[i].quantity = 0;
        }
        setCartContent(cartContents);
        console.log(cartContents);
        setCartCount(0);
        setCartHasPrescribed(false);
    };
    const showCartHandler = () => {
        setShowCart(!showCart);
    };
    const addToCart = (id) => {
        for (let i = 0; i < MEDICINES.length; i++) {
            if (cartContents[i].id === id) {
                cartContents[i].quantity = cartContents[i].quantity + 1;
            }
        }
        setCartContent(cartContents);
        setCartCount(cartCount + 1);
    };
    const subtractFromCart = (id) => {
        for (let i = 0; i < MEDICINES.length; i++) {
            if (MEDICINES[i].id === id) {
                cartContents[i].quantity = cartContents[i].quantity - 1;
            }
        }
        setCartContent(cartContents);
        setCartCount(cartCount - 1);
    };
    const cartHasPrescribedHandler = () => {
        for (let i = 0; i < cartContent.length; i++) {
            if (cartContent[i].prescription === 'prescribed' && cartContent[i].quantity > 0) {
                setCartHasPrescribed(true);
                setShowForm(true);
            }
        }
    };
    const setShowFormHandler = () => {
        setShowForm(false);
    };
    const setPrescriptionVerified = (value) => {
        setPrescriptionVerification(value);
    };
    const passedValues = {
        displayoptions: renderedArray,
        prescribedHandler: prescribedHandler,
        cartCount: cartCount,
        addToCart: addToCart,
        subtractFromCart: subtractFromCart,
        cartContent: cartContent,
        showCart: showCart,
        showCartHandler: showCartHandler,
        clearCartHandler: clearCartHandler,
        cartHasPrescribed: cartHasPrescribed,
        cartHasPrescribedHandler: cartHasPrescribedHandler,
        showForm: showForm,
        setShowFormHandler: setShowFormHandler,
        prescriptionVerified: prescriptionVerified,
        setPrescriptionVerified: setPrescriptionVerified
    };

    return <AuthContext.Provider value={passedValues}>{props.children}</AuthContext.Provider>;
};
export default AuthContext;
