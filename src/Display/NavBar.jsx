import { useContext } from 'react';
import AuthContext from '../ContextApi/AuthContext';
import './NavBar.css';
const NavBar = () => {
    const cxt = useContext(AuthContext);
    const selectHandler = (event) => {
        cxt.prescribedHandler(event.target.value);
    };
    return (
        <div className="sorting-bar" id="shop">
            <select name="medicines-sort" id="medicines" onChange={selectHandler}>
                <option value="all">All</option>
                <option value="prescribed">Prescribed</option>
                <option value="non-prescribed">Non-prescribed</option>
            </select>
        </div>
    );
};

export default NavBar;
