import React, { useState } from 'react';
import './Addsupplier.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faDashboard, faCube, faRupeeSign, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logo from "./logo.png";

function Addsupplier() {
    const [supplierName, setSupplierName] = useState('');
    const [address, setAddress] = useState('');
    const [gst, setgst] = useState('');
    const [stateCode, setStateCode] = useState('');
    const [mobile, setMobile] = useState('');
    const [status, setStatus] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage1, setErrorMessage1] = useState({
        supplierName: '',
        address: '',
        gst: '',
        stateCode: '',
        mobile: '',
        status: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        let error = false;

        const errors = {
            supplierName: !supplierName ? 'Please enter supplier name.' : '',
            address: !address ? 'Please enter address.' : '',
            gst: !gst ? 'Please enter gst.' : '',
            stateCode: !stateCode ? 'Please enter state code.' : '',
            mobile: !mobile ? 'Please enter mobile number.' : '',
            status: !status ? 'Please enter status.' : ''
        };

        setErrorMessage1(errors);

        Object.values(errors).forEach(value => {
            if (value) {
                error = true;
            }
        });

        if (!error) {
            const formData = {
                suppliername: supplierName,
                address: address,
                gst: gst,
                statecode: stateCode,
                mobile: mobile,
                status: status
            };
            try {
                const response = await fetch('http://localhost/TImegst/react-gst/backend/api/supplier.php', {
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
                        window.location.href = '/Dashboard/Supplier';
                    } else { 
                        setMessage('Error: Supplier could not be added.');
                    }
                } else {  
                    const errorMessage1 = await response.text();
                    setMessage(`Error: ${response.status} - ${errorMessage1}`);
                }
            } catch (error) {
                console.error('Error:', error);
                setMessage('Error occurred. Please check the data.');
            }
        }
    };

    const handleBackButtonClick = () => {
        setMessage('');
        window.location.href = '/Dashboard/Supplier';
    };

    const handleInputChange = (field, value) => {
        if (!value) {
            setErrorMessage1(prevState => ({
                ...prevState,
                [field]: `Please enter ${field === 'supplierName' ? 'supplier name' : field}.`
            }));
        } else {
            setErrorMessage1(prevState => ({
                ...prevState,
                [field]: ''
            }));
        }

        switch (field) {
            case 'supplierName':
                setSupplierName(value);
                break;
            case 'address':
                setAddress(value);
                break;
            case 'gst':
                setgst(value);
                break;
            case 'stateCode':
                setStateCode(value);
                break;
            case 'mobile':
                setMobile(value);
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
                            <FontAwesomeIcon icon= {faCircle} /> Sale 
                            </a>
                        </li>
                        <li>
                            <Link to="/Dashboard/CreditDebit">
                            <FontAwesomeIcon icon= {faRupeeSign} /> Credits/Debits
                            </Link>
                        </li>
                        <li className="active">
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
                <h4 className="custom-heading1" >
                    <span style={{ fontSize: '1.5em', fontWeight: '500'  }}>MANAGE</span>{' '}
                    <span style={{ fontSize: '0.8em', fontWeight: '100'  }}>SUPPLIERS</span>
                </h4>
                <h4>
                    <span style={{ fontSize: '0.8em', fontWeight: '50', color: "#495057" }}>Add Supplier</span>
                </h4>
                <div>
                    <label htmlFor="supplierName">Supplier Name</label>
                    <input type="text" id="supplierName" value={supplierName} onChange={(e) => handleInputChange('supplierName', e.target.value)} placeholder="Enter supplier name" />
                </div>
                {errorMessage1.supplierName && <p className="error-message1">{errorMessage1.supplierName}</p>}
                <div>
                    <label htmlFor="address">Supplier Address</label>
                    <input type="text" id="address" value={address} onChange={(e) => handleInputChange('address', e.target.value)} placeholder="Enter address" />
                </div>
                {errorMessage1.address && <p className="error-message1">{errorMessage1.address}</p>}
                <div>
                    <label htmlFor="gst">GSTIN</label>
                    <input type="text" id="gst" value={gst} onChange={(e) => handleInputChange('gst', e.target.value)} placeholder="Enter gst" />
                </div>
                {errorMessage1.gst && <p className="error-message1">{errorMessage1.gst}</p>}
                <div>
                    <label htmlFor="stateCode">State Code</label>
                    <input type="text" id="stateCode" value={stateCode} onChange={(e) => handleInputChange('stateCode', e.target.value)} placeholder="Enter state code" />
                </div>
                {errorMessage1.stateCode && <p className="error-message1">{errorMessage1.stateCode}</p>}
                <div>
                    <label htmlFor="mobile">Mobile</label>
                    <input type="text" id="mobile" value={mobile} onChange={(e) => handleInputChange('mobile', e.target.value)} placeholder="Enter mobile number" />
                </div>
                {errorMessage1.mobile && <p className="error-message1">{errorMessage1.mobile}</p>}
                <div>
                    <label htmlFor="status">Status</label>
                    <select id="status" value={status} onChange={(e) => handleInputChange('status', e.target.value)}>
                        <option value=""></option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>

                {errorMessage1.status && <p className="error-message1">{errorMessage1.status}</p>}
                <div className="button-group1">
                    <button type="submit">Add Supplier</button>
                    <button className="back-button1" onClick={handleBackButtonClick}>Back</button>
                </div>

            </form>

            <footer className="footer" style={{ marginTop : '300px' }}>
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

export default Addsupplier;
