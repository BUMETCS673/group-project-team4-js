import { useContext } from 'react';
import AuthContext from '../ContextApi/AuthContext';
import './IndividualItem.css';

const IndividualItems = (props) => {
    const cxt = useContext(AuthContext);
    const addCartHandler = () => {
        cxt.addToCart(props.id);
    };
    return (
        <div className="Individual-Items">
            <img src={props.src} alt="medicine-images" className="image"></img>
            <p className="names">Generic Name : {props.name}</p>
            <br></br>
            <p className="brand-names">Brand Name : {props.brand}</p>
            <p className="price">Price per unit : ${props.price}</p>
            <button className="add" onClick={addCartHandler}>
                Add
            </button>
        </div>
    );
};
export default IndividualItems;
