import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faDashboard, faRupeeSign, faSignOutAlt , faCube } from '@fortawesome/free-solid-svg-icons';
import logo from "./logo.png";

const Editcreditdebit = () => {
    const { id } = useParams();
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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost/TImegst/react-gst/backend/api/creditdebit.php/${id}`);
                const data = await response.json();
                setFormData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);

    const handleInputChange = (field, value) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [field]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost/TImegst/react-gst/backend/api/creditdebit.php/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (data.success) {
                alert('Data updated successfully');
                window.location.href = '/Dashboard/CreditDebit';
            } else {
                alert('Failed to update data');
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
                            <FontAwesomeIcon icon={faRupeeSign} /> Credits/Debits
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
                <div className="acd-form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                    />
                </div>
               <div className="acd-form-group">
                    <label htmlFor="type">Type</label>
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


                <div className="acd-form-group">
                    <label htmlFor="billno">Bill No</label>
                    <select
                        id="billno"
                        value={formData.billno}
                        onChange={(e) => handleInputChange('billno', e.target.value)}
                        required
                    >
                        <option value="">Select Bill</option>
                        <option value="0">0</option>
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
                    <label htmlFor="transactiontype">Transaction Type</label>
                    <select
                        id="transactiontype"
                        value={formData.transactiontype}
                        onChange={(e) => handleInputChange('transactiontype', e.target.value)}
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

export default Editcreditdebit;
