import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard, faCube, faRupeeSign, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import logo from "./logo.png";

function EditBuyer() {
    const { id } = useParams();
    const [buyer, setBuyer] = useState({
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
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchBuyer = async () => {
            try {
                const response = await fetch(`http://localhost/TImegst/react-gst/backend/api/buyer.php/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    console.log('Fetched buyer data:', data); // Log the response to debug
                    setBuyer(data);
                } else {
                    throw new Error('Failed to fetch buyer data');
                }
            } catch (error) {
                console.error('Error:', error);
                setErrorMessage('Failed to fetch buyer data');
            }
        };
        fetchBuyer();
    }, [id]);

    const handleInputChange = (field, value) => {
        setBuyer(prevBuyer => ({
            ...prevBuyer,
            [field]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost/TImegst/react-gst/backend/api/buyer.php/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(buyer)
            });

            if (response.ok) {
                const responseData = await response.json();
                window.location.href = '/Dashboard/Buyer';
                console.log('Buyer updated successfully:', responseData);
            } else {
                console.error('Failed to update buyer:', response.statusText);
            }
        } catch (error) {
            console.error('Error updating buyer:', error);
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
                            <Link to="#">
                                <FontAwesomeIcon icon={faCircle} /> Sale
                            </Link>
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

            <form onSubmit={handleSubmit} className='add-supplier-form'>
                <h4 className="custom-heading1">
                    <span style={{ fontSize: '1.5em', fontWeight: '500' }}>MANAGE</span>{' '}
                    <span style={{ fontSize: '0.8em', fontWeight: '100' }}>BUYERS</span>
                </h4>
                <h4>
                    <span style={{ fontSize: '0.8em', fontWeight: '50', color: "#495057" }}>Edit Buyer</span>
                </h4>
                <div>
                    <label htmlFor="buyerName">Buyer Name</label>
                    <input type="text" id="buyerName" value={buyer.buyerName} onChange={(e) => handleInputChange('buyerName', e.target.value)} placeholder="Enter buyer name" />
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" value={buyer.address} onChange={(e) => handleInputChange('address', e.target.value)} placeholder="Enter address" />
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" value={buyer.city} onChange={(e) => handleInputChange('city', e.target.value)} placeholder="Enter city" />
                </div>
                <div>
                    <label htmlFor="gstin">GSTIN</label>
                    <input type="text" id="gstin" value={buyer.gstin} onChange={(e) => handleInputChange('gstin', e.target.value)} placeholder="Enter GSTIN" />
                </div>
                <div>
                    <label htmlFor="panNumber">PAN Number</label>
                    <input type="text" id="panNumber" value={buyer.panNumber} onChange={(e) => handleInputChange('panNumber', e.target.value)} placeholder="Enter PAN number" />
                </div>
                <div>
                    <label htmlFor="mobile">Mobile</label>
                    <input type="text" id="mobile" value={buyer.mobile} onChange={(e) => handleInputChange('mobile', e.target.value)} placeholder="Enter mobile number" />
                </div>
                <div>
                    <label htmlFor="stateCode">State Code</label>
                    <input type="text" id="stateCode" value={buyer.stateCode} onChange={(e) => handleInputChange('stateCode', e.target.value)} placeholder="Enter state code" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="emailbuy" value={buyer.email} onChange={(e) => handleInputChange('email', e.target.value)} placeholder="Enter email" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', outline: 'none' }} onFocus={(e) => e.target.style.outline = 'none'}/>
                </div>
                <div>
                    <label htmlFor="status">Status</label>
                    <select id="status" value={buyer.status} onChange={(e) => handleInputChange('status', e.target.value)}>
                        <option value=""></option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div className="button-group1">
                    <button type="submit">Update Buyer</button>
                    <Link to="/Dashboard/Buyer" className="back-button1">Back</Link>
                </div>
            </form>

            <footer className="footer">
                <div className="footer-left">
                    <p className="copyright"><strong>Copyright ©2024.</strong><span className="year-hide">Time GST</span> All rights reserved.</p>
                </div>
                <div className="footer-right">
                    <p className="version"><strong>Version</strong> 3.6</p>
                </div>
            </footer>

            {message && <p>{message}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
}

export default EditBuyer;
