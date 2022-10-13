import { useContext, useState } from 'react';
import AuthContext from '../ContextApi/AuthContext';
import { PRESCRIPTION_NUMBERS } from '../Constants/Constants.js';
import './PrescriptionFormCheck.css';
const FormCheck = () => {
    const cxt = useContext(AuthContext);
    const [prescrip, setPrescrip] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState();
    const [classVal, setClassVal] = useState();
    const prescriptionNumberHandler = (event) => {
        setPrescrip(event.target.value);
    };
    const nameHandler = (event) => {
        setName(event.target.value);
    };
    const emailHandler = (event) => {
        setEmail(event.target.value);
    };
    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (name.length === 0 || email.length === 0) {
            return;
        }
        let i = 0;
        let count = 0;
        for (i = 0; i < PRESCRIPTION_NUMBERS.length; i++) {
            if (prescrip === PRESCRIPTION_NUMBERS[i].prescription_number) {
                cxt.setPrescriptionVerified(true);
                count = 1;
                setMessage('Prescription verified!');
                setClassVal('verified');
            }
        }
        if (i === PRESCRIPTION_NUMBERS.length && count === 0) {
            cxt.setPrescriptionVerified(false);
            setMessage('Prescription not verified!');
            setClassVal('unverified');
        }
    };
    return (
        <form className="prescription-form" onSubmit={formSubmitHandler}>
            <div className="form-for-prescription-check">
                <div className="nav-bar-form">
                    <p className="form-header">Prescription Confirmation Form </p>
                </div>
                <div className="form-for-upload">
                    <div className="personal-details">
                        <label htmlFor="prescription-number" id="prescription-number">
                            Prescription :{' '}
                        </label>
                        <input type="text" onChange={prescriptionNumberHandler} required />
                        <br></br>
                        <label htmlFor="name" id="name">
                            Name :{' '}
                        </label>
                        <input type="text" onChange={nameHandler} required />
                        <br></br>
                        <label htmlFor="emails" id="emails">
                            Email :{' '}
                        </label>
                        <input type="email" onChange={emailHandler}></input>
                        <p className={classVal}>{message}</p>
                    </div>
                </div>
                <button type="submit" className="submit-button">
                    Submit
                </button>
                <button type="close" className="close-button" onClick={cxt.setShowFormHandler}>
                    Close
                </button>
            </div>
        </form>
    );
};

export default FormCheck;
