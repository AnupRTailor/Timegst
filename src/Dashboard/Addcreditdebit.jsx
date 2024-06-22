import React, { useState } from 'react';
import './Addcreditdebit.css'; 
import { faEdit, faTrashAlt, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Link, useActionData, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard , faCube , faRupeeSign , faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import logo from "./logo.png";


const Addcreditdebit = () => {
    const [isBuyer, setIsBuyer] = useState(false);
    const [isSupplier, setIsSupplier] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        type: '',
        billno: '',
        amount: '',
        transdate: '',
        comment: '',
        transactionType: '',
        paymenttype: '',
        paymenttransno: ''
    });

    const handleCheckboxChange = (field) => {
        if (field === 'buyer') {
            setIsBuyer(!isBuyer);
            setIsSupplier(false);
        } else {
            setIsSupplier(!isSupplier);
            setIsBuyer(false);
        }
    };

    const handleInputChange = (field, value) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [field]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const finalData = {
            ...formData,
            billprice: formData.amount
        };

        try {
            const response = await fetch('http://localhost/TImegst/react-gst/backend/api/creditdebit.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(finalData)
            });

            const data = await response.json();
            window.location.href = '/Dashboard/CreditDebit';

            if (data.success) {
                alert('Data added successfully');
                setFormData({
                    name: '',
                    type: '',
                    billno: '',
                    amount: '',
                    transdate: '',
                    comment: '',
                    transactionType: '',
                    paymenttype: '',
                    paymenttransno: ''
                });
                setIsBuyer(false);
                setIsSupplier(false);
            } 
        } catch (error) {
            alert('An error occurred: ' + error.message);
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
                            <li className='active'>
                                <Link to="/Dashboard/CreditDebit">
                                <FontAwesomeIcon icon= {faRupeeSign} /> Credits/Debits
                                </Link>
                            </li>
                            <li>
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
            
      
        <form onSubmit={handleSubmit} className="acd-form">
            <div className="acd-form-group acd-checkbox-group">
                <label>
                    <input 
                        type="checkbox" 
                        checked={isBuyer}  style={ { marginRight: '10px'  }}
                        onChange={() => handleCheckboxChange('buyer')} 
                    />
                    Buyer
                </label>
                <label>
                    <input 
                        type="checkbox" 
                        checked={isSupplier} style={ { marginRight: '10px'  }}
                        onChange={() => handleCheckboxChange('supplier')} 
                    />
                    Supplier
                </label>
            </div>

            {isBuyer && (
                <div className="acd-form-group">
                    <label htmlFor="buyerName">Select Buyer</label>
                    <select
                        id="buyerName"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                    >
                        <option value="">Select Buyer</option>
                        <option value="Atri Technocrat">Atri Technocrat</option>
                        <option value="CASILA INFRACON">CASILA INFRACON</option>
                        <option value="Delta Sys-Tech (India) Pvt. Ltd.">Delta Sys-Tech (India) Pvt. Ltd.</option>
                        <option value="Classic Store">Classic Store</option>
                        <option value="DRIVE TRUCKING PRIVATE LIMITED">DRIVE TRUCKING PRIVATE LIMITED</option>
                        <option value="Raj Information Systems Pvt Ltd">Raj Information Systems Pvt Ltd</option>
                        <option value="UNITY TEXTILES">UNITY TEXTILES</option>
                    </select>
                </div>
            )}

            {isSupplier && (
                <div className="acd-form-group">
                    <label htmlFor="supplierName">Select Supplier</label>
                    <select
                        id="supplierName"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                    >
                        <option value="">Select Supplier</option>
                        <option value="BARORA AGENCIES">BARORA AGENCIES</option>
                        <option value="RHP SOLUTION">RHP SOLUTION</option>
                        <option value="PRINT POINT PAPER GALLERY">PRINT POINT PAPER GALLERY</option>
                        <option value="VIMAL AGENCY">VIMAL AGENCY</option>
                        <option value="NARMADA PAPER AND STATIONERY MART">NARMADA PAPER AND STATIONERY MART</option>
                        <option value="Vardhman Agency">Vardhman Agency</option>
                        <option value="Meghraj industries">Meghraj industries</option>
                    </select>
                </div>
            )}

            <div className="acd-form-group">
                <label htmlFor="type">Select Type</label>
                <select
                    id="type"
                    value={formData.type}
                    onChange={(e) => handleInputChange('type', e.target.value)}
                    required
                >
                    <option value="">Select Type</option>
                    <option value="With Bill">With Bill</option>
                    <option value="Without Bill">Without Bill</option>
                </select>
            </div>

            {formData.type === 'With Bill' && (
                <>
                    <div className="acd-form-group">
                        <label htmlFor="billno">Select Bill</label>
                        <select
                            id="billno"
                            value={formData.billno}
                            onChange={(e) => handleInputChange('billno', e.target.value)}
                            required
                        >
                            <option value="">Select Bill</option>
    
                            <option value="1">1</option>
                            <option value="2572">2572</option>
                            <option value="456">456</option>
                            <option value="751">751</option>
                            <option value="84">84</option>
                            <option value="20">20</option>
                            <option value="10">10</option>
                            <option value="4">4</option>
                            <option value="68">68</option>
                            <option value="21">21</option>
                            <option value="72">72</option>
                            <option value="78">78</option>
                            <option value="62">62</option>
                            <option value="85">85</option>
                            <option value="7405">7405</option>
                            <option value="5260">5260</option>
                            <option value="857">857</option>                    
                        </select>
                    </div>

                    <div className="acd-form-group">
                        <label htmlFor="amount">Amount</label>
                        <input
                            type="number"
                            id="amount"
                            value={formData.amount}
                            onChange={(e) => handleInputChange('amount', e.target.value)}
                            required
                        />
                    </div>
                    <div className="acd-form-group">
                        <label htmlFor="transdate">Date</label>
                        <input
                            type="date"
                            id="transdate"
                            value={formData.transdate}
                            onChange={(e) => handleInputChange('transdate', e.target.value)}
                            required
                        />
                    </div>
                    <div className="acd-form-group">
                        <label htmlFor="comment">Comment</label>
                        <textarea
                            id="comment"
                            value={formData.comment}
                            onChange={(e) => handleInputChange('comment', e.target.value)}
                            required
                        />
                    </div>
                    <div className="acd-form-group">
                        <label htmlFor="transactionType">Transaction Type</label>
                        <select
                            id="transactionType"
                            value={formData.transactionType}
                            onChange={(e) => handleInputChange('transactionType', e.target.value)}
                            required
                        >
                            <option value="">Select Transaction Type</option>
                            <option value="Credit">Credit</option>
                            <option value="Debit">Debit</option>
                        </select>
                    </div>
                    <div className="acd-form-group">
                        <label htmlFor="paymenttype">Payment Type</label>
                        <select
                            id="paymenttype"
                            value={formData.paymenttype}
                            onChange={(e) => handleInputChange('paymenttype', e.target.value)}
                            required
                        >
                            <option value="">Select Payment Type</option>
                            <option value="Cash">Cash</option>
                            <option value="Check">Check</option>
                            <option value="NEFT">NEFT</option>
                            <option value="RTGS">RTGS</option>
                            <option value="SETTLEMENT">SETTLEMENT</option>
                            <option value="GPAY">GPAY</option>
                            <option value="HDFCAPP">HDFCAPP</option>
                        </select>
                    </div>
                    <div className="acd-form-group">
                        <label htmlFor="paymenttransno">Payment Transaction Number</label>
                        <input
                            type="text"
                            id="paymenttransno"
                            value={formData.paymenttransno}
                            onChange={(e) => handleInputChange('paymenttransno', e.target.value)}
                            required
                        />
                    </div>
                </>
            )}


            {formData.type === 'Without Bill' && (
                <>
                    <div className="acd-form-group">
                        <label htmlFor="amount">Amount</label>
                        <input
                            type="number"
                            id="amount"
                            value={formData.amount}
                            onChange={(e) => handleInputChange('amount', e.target.value)}
                            required
                        />
                    </div>
                    <div className="acd-form-group">
                        <label htmlFor="transdate">Date</label>
                        <input
                            type="date"
                            id="transdate"
                            value={formData.transdate}
                            onChange={(e) => handleInputChange('transdate', e.target.value)}
                            required
                        />
                    </div>
                    <div className="acd-form-group">
                        <label htmlFor="comment">Comment</label>
                        <textarea
                            id="comment"
                            value={formData.comment}
                            onChange={(e) => handleInputChange('comment', e.target.value)}
                            required
                        />
                    </div>
                    <div className="acd-form-group">
                        <label htmlFor="transactionType">Transaction Type</label>
                        <select
                            id="transactionType"
                            value={formData.transactionType}
                            onChange={(e) => handleInputChange('transactionType', e.target.value)}
                            required
                        >
                            <option value="">Select Transaction Type</option>
                            <option value="Credit">Credit</option>
                            <option value="Debit">Debit</option>
                        </select>
                    </div>
                    <div className="acd-form-group">
                        <label htmlFor="paymenttype">Payment Type</label>
                        <select
                            id="paymenttype"
                            value={formData.paymenttype}
                            onChange={(e) => handleInputChange('paymenttype', e.target.value)}
                            required
                        >
                            <option value="">Select Payment Type</option>
                            <option value="Cash">Cash</option>
                            <option value="Check">Check</option>
                            <option value="NEFT">NEFT</option>
                            <option value="RTGS">RTGS</option>
                            <option value="SETTLEMENT">SETTLEMENT</option>
                            <option value="GPAY">GPAY</option>
                            <option value="HDFCAPP">HDFCAPP</option>
                        </select>
                    </div>
                    <div className="acd-form-group">
                        <label htmlFor="paymenttransno">Payment Transaction Number</label>
                        <input
                            type="text"
                            id="paymenttransno"
                            value={formData.paymenttransno}
                            onChange={(e) => handleInputChange('paymenttransno', e.target.value)}
                            required
                        />
                    </div>
                </>
            )}

            <div className="acd-button-group">
                <button type="submit" className="acd-submit-button">Submit</button>
                <button type="button" className="acd-back-button" onClick={() => window.history.back()}>Back</button>
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

        
        </div>
        
    );
};

export default Addcreditdebit;
