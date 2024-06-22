import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard, faCube, faRupeeSign, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import logo from "./logo.png";

function EditSupplier() {
    const { id } = useParams();
    const [supplier, setSupplier] = useState({
        supplierName: '',
        address: '',
        gst: '',
        stateCode: '',
        mobile: '',
        status: ''
    });
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    

    useEffect(() => {
        const fetchSupplier = async () => {
            try {
                
                const response = await fetch(`http://localhost/TImegst/react-gst/backend/api/supplier.php/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setSupplier(data);
                } else {
                    throw new Error('Failed to fetch supplier data');
                }
            } catch (error) {
                console.error('Error:', error);
                setErrorMessage('Failed to fetch supplier data');
            }
        };
        fetchSupplier();
    }, [id]);

    const handleInputChange = (field, value) => {
        setSupplier(prevSupplier => ({
            ...prevSupplier,
            [field]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost/TImegst/react-gst/backend/api/supplier.php/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(supplier)
            });

            if (response.ok) {
                const responseData = await response.json();
                setMessage('Supplier updated successfully');
                window.location.href = '/Dashboard/Supplier';
                console.log('Supplier updated successfully:', responseData);
            } else {
                console.error('Failed to update supplier:', response.statusText);
                setErrorMessage('Failed to update supplier');
            }
        } catch (error) {
            console.error('Error updating supplier:', error);
            setErrorMessage('Error updating supplier');
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
                                <FontAwesomeIcon icon={faRupeeSign} /> Credits/Debits
                            </Link>
                        </li>
                        <li className='active'>
                            <Link to="/Dashboard/Supplier">
                                <FontAwesomeIcon icon={faCircle} /> Supplier
                            </Link>
                        </li>
                        <li>
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
                    <span style={{ fontSize: '0.8em', fontWeight: '100' }}>SUPPLIERS</span>
                </h4>
                <h4>
                    <span style={{ fontSize: '0.8em', fontWeight: '50', color: "#495057" }}>Edit Supplier</span>
                </h4>
                <div>
                    <label htmlFor="supplierName">Supplier Name</label>
                    <input type="text" id="supplierName" value={supplier.supplierName} onChange={(e) => handleInputChange('supplierName', e.target.value)} placeholder="Enter supplier name" />
                </div>
                <div>
                    <label htmlFor="address">Supplier Address</label>
                    <input type="text" id="address" value={supplier.address} onChange={(e) => handleInputChange('address', e.target.value)} placeholder="Enter address" />
                </div>
                <div>
                    <label htmlFor="gst">GSTIN</label>
                    <input type="text" id="gst" value={supplier.gst} onChange={(e) => handleInputChange('gst', e.target.value)} placeholder="Enter GSTIN" />
                </div>
                <div>
                    <label htmlFor="stateCode">State Code</label>
                    <input type="text" id="stateCode" value={supplier.statecode} onChange={(e) => handleInputChange('statecode', e.target.value)} placeholder="Enter state code" />
                </div>
                <div>
                    <label htmlFor="mobile">Mobile</label>
                    <input type="text" id="mobile" value={supplier.mobile} onChange={(e) => handleInputChange('mobile', e.target.value)} placeholder="Enter mobile number" />
                </div>
                <div>
                    <label htmlFor="status">Status</label>
                    <select id="status" value={supplier.status} onChange={(e) => handleInputChange('status', e.target.value)}>
                        <option value=""></option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div className="button-group1">
                    <button type="submit">Update Supplier</button>
                    <Link to="/Dashboard/Supplier" className="back-button1">Back</Link>
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

export default EditSupplier;
