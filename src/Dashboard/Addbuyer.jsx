import React, { useState } from 'react';
import './Addbuyer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faDashboard, faCube, faRupeeSign, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logo from "./logo.png";

function Addbuyer() {
    const [buyerName, setBuyerName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [gstin, setGstin] = useState('');
    const [panNumber, setPanNumber] = useState('');
    const [mobile, setMobile] = useState('');
    const [stateCode, setStateCode] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState({
        buyerName: '',
        address: '',
        city: '',
        gstin: '',
        panNumber: '',
        mobile: '',
        stateCode: '',
        email: '',
        status: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        let error = false;

        const errors = {
            buyerName: !buyerName ? 'Please enter buyer name.' : '',
            address: !address ? 'Please enter address.' : '',
            city: !city ? 'Please enter city.' : '',
            gstin: !gstin ? 'Please enter GSTIN.' : '',
            panNumber: !panNumber ? 'Please enter PAN number.' : '',
            mobile: !mobile ? 'Please enter mobile number.' : '',
            stateCode: !stateCode ? 'Please enter state code.' : '',
            email: !email ? 'Please enter email.' : '',
            status: !status ? 'Please enter status.' : ''
        };

        setErrorMessage(errors);

        Object.values(errors).forEach(value => {
            if (value) {
                error = true;
            }
        });

        if (!error) {
            const formData = {
                buyername: buyerName,
                address: address,
                city: city,
                gstin: gstin,
                pannumber: panNumber,
                mobile: mobile,
                statecode: stateCode,
                email: email,
                status: status
            };

            try {
                const response = await fetch('http://localhost/TImegst/react-gst/backend/api/buyer.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    const data = await response.json();
                    if (data.Success) {
                        setMessage(data.Success);
                        window.location.href = '/Dashboard/Buyer';
                    } else {
                        setMessage('Error: Buyer could not be added.');
                    }
                } else {
                    const errorMessage = await response.text();
                    setMessage(`Error: ${response.status} - ${errorMessage}`);
                }
            } catch (error) {
                console.error('Error:', error);
                setMessage('Error occurred. Please check the data.');
            }
        }
    };

    const handleBackButtonClick = () => {
        setMessage('');
        window.location.href = '/Dashboard/Buyer';
    };

    const handleInputChange = (field, value) => {
        if (!value) {
            setErrorMessage(prevState => ({
                ...prevState,
                [field]: `Please enter ${field === 'buyerName' ? 'buyer name' : field}.`
            }));
        } else {
            setErrorMessage(prevState => ({
                ...prevState,
                [field]: ''
            }));
        }

        switch (field) {
            case 'buyerName':
                setBuyerName(value);
                break;
            case 'address':
                setAddress(value);
                break;
            case 'city':
                setCity(value);
                break;
            case 'gstin':
                setGstin(value);
                break;
            case 'panNumber':
                setPanNumber(value);
                break;
            case 'mobile':
                setMobile(value);
                break;
            case 'stateCode':
                setStateCode(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'status':
                setStatus(value);
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <div className="sidebar">
                <img className="dash1" src={logo} alt="Logo" />
                <nav>
                    <ul>
                        <li>
                            <Link to="/Dashboard/Dashboard">
                                <FontAwesomeIcon icon={faDashboard} /> Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to="/Dashboard/Product">
                                <FontAwesomeIcon icon={faCube} /> Product
                            </Link>
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faCircle} /> Sale
                            </a>
                        </li>
                        <li>
                            <Link to="/Dashboard/CreditDebit">
                            <FontAwesomeIcon icon= {faRupeeSign} /> Credits/Debits
                            </Link>
                        </li>
                        <li>
                            <Link to="/Dashboard/Supplier">
                                <FontAwesomeIcon icon={faCircle} /> Supplier
                            </Link>
                        </li>
                        <li className="active">
                            <Link to="/Dashboard/Buyer">
                                <FontAwesomeIcon icon={faCircle} /> Buyer
                            </Link>
                        </li>
                        <li>
                            <Link to="/pages/login">
                                <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <form onSubmit={handleSubmit} style={ { marginLeft : '260px' , width : '82%' }}>
                <h4 className="custom-heading1">
                    <span style={{ fontSize: '1.5em', fontWeight: '500' }}>MANAGE</span>{' '}
                    <span style={{ fontSize: '0.8em', fontWeight: '100' }}>BUYERS</span>
                </h4>
                <h4>
                    <span style={{ fontSize: '0.8em', fontWeight: '50', color: "#495057" }}>Add Buyer</span>
                </h4>
                <div>
                    <label htmlFor="buyerName">Buyer Name</label>
                    <input type="text" id="buyerName" value={buyerName} onChange={(e) => handleInputChange('buyerName', e.target.value)} placeholder="Enter buyer name" />
                </div>
                {errorMessage.buyerName && <p className="error-message2">{errorMessage.buyerName}</p>}
                <div>
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" value={address} onChange={(e) => handleInputChange('address', e.target.value)} placeholder="Enter address" />
                </div>
                {errorMessage.address && <p className="error-message2">{errorMessage.address}</p>}
                <div>
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" value={city} onChange={(e) => handleInputChange('city', e.target.value)} placeholder="Enter city" />
                </div>
                {errorMessage.city && <p className="error-message2">{errorMessage.city}</p>}
                <div>
                    <label htmlFor="gstin">GSTIN</label>
                    <input type="text" id="gstin" value={gstin} onChange={(e) => handleInputChange('gstin', e.target.value)} placeholder="Enter GSTIN" />
                </div>
                {errorMessage.gstin && <p className="error-message2">{errorMessage.gstin}</p>}
                <div>
                    <label htmlFor="panNumber">PAN Number</label>
                    <input type="text" id="panNumber" value={panNumber} onChange={(e) => handleInputChange('panNumber', e.target.value)} placeholder="Enter PAN number" />
                </div>
                {errorMessage.panNumber && <p className="error-message2">{errorMessage.panNumber}</p>}
                <div>
                    <label htmlFor="mobile">Mobile</label>
                    <input type="text" id="mobile" value={mobile} onChange={(e) => handleInputChange('mobile', e.target.value)} placeholder="Enter mobile number" />
                </div>
                {errorMessage.mobile && <p className="error-message2">{errorMessage.mobile}</p>}
                <div>
                    <label htmlFor="stateCode">State Code</label>
                    <input type="text" id="stateCode" value={stateCode} onChange={(e) => handleInputChange('stateCode', e.target.value)} placeholder="Enter state code" />
                </div>
                {errorMessage.stateCode && <p className="error-message2">{errorMessage.stateCode}</p>}
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="emailbuy" value={email} onChange={(e) => handleInputChange('email', e.target.value)} placeholder="Enter email" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', outline: 'none' }} onFocus={(e) => e.target.style.outline = 'none'} />
                </div>
                {errorMessage.email && <p className="error-message2">{errorMessage.email}</p>}
                <div>
                    <label htmlFor="status">Status</label>
                    <select id="status" value={status} onChange={(e) => handleInputChange('status', e.target.value)}>
                        <option value=""></option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                {errorMessage.status && <p className="error-message2">{errorMessage.status}</p>}

                <div className="button-group2">
                    <button type="submit">Add Buyer</button>
                    <button className="back-buttonbuy" onClick={handleBackButtonClick}>Back</button>
                </div>
            </form>

            <footer className="footer" style={{ marginTop: '50%' }}>
                <div className="footer-left">
                    <p className="copyright"><strong>Copyright ©2024.</strong><span className="year-hide">Time GST</span> All rights reserved.</p>
                </div>
                <div className="footer-right">
                    <p className="version"><strong>Version</strong> 3.6</p>
                </div>
            </footer>

            {message && <p>{message}</p>}
        </div>
    );
}

export default Addbuyer;
