import React, { useEffect, useState } from 'react';
import './CreditDebit.css'; 
import { faEdit, faTrashAlt, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Link, useActionData, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard , faCube , faRupeeSign , faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faPlusCircle, faMinusCircle, faEquals } from '@fortawesome/free-solid-svg-icons';
import logo from "./logo.png";

const App = () => {
    const [currentPage, setCurrentPage] = useState(1);
const recordsPerPage = 5;

const [filteredData, setFilteredData] = useState([]);

  const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCompany, setSelectedCompany] = useState("EFSOULS LIMITED LIABILITY PARTNERSHIP");
    const [selectedYear, setSelectedYear] = useState('2024-2025');
    const [formData, setFormData] = useState({
        fromDate: '',
        toDate: '',
        selectedParty: '',
        buyerSupplier: '',
        transactionType: '',
        paymentMethod: ''
    });

    const handleCompanyChange = (e) => {
        setSelectedCompany(e.target.value);
    };

    const handleYearChange = (e) => {
        setSelectedYear(e.target.value);
    };

    const handleInputChange = (field, value) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [field]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };


  useEffect(() => {
    fetch('http://localhost/TImegst/react-gst/backend/api/creditdebit.php')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  console.log('data:' , data);
  console.log('id ' , data.c_no);

  const handleDeletecredit = (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      fetch(`http://localhost/TImegst/react-gst/backend/api/creditdebit.php/${id}`, {
        method: 'DELETE',
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          // Update the state to remove the deleted record
          setData(prevData => prevData.filter(item => item.billno !== id));
        } else {
          alert('Failed to delete the record');
        }
      })
      .catch(error => console.error('Error deleting record:', error));
    }
  };
  
    

const creditTotal = filteredData
  ? filteredData
      .filter(record => {
        return record.transactiontype === "Credit";
      })
      .reduce((sum, record) => sum + Number(record.amount), 0)
  : 0;

console.log("Credit Total:", creditTotal);


const debitTotal = filteredData
  ? filteredData
      .filter(record => {
        return record.transactiontype === "Debit";
      })
      .reduce((sum, record) => sum + Number(record.amount), 0)
  : 0;

console.log("Debit Total:", debitTotal);



  const netBalance = creditTotal - debitTotal;

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredData.slice(indexOfFirstRecord, indexOfLastRecord);
  
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  useEffect(() => {
    const filtered = data.filter(record => {
        const fromDateMatch = formData.fromDate ? new Date(record.transdate) >= new Date(formData.fromDate) : true;
        const toDateMatch = formData.toDate ? new Date(record.transdate) <= new Date(formData.toDate) : true;
        const selectedPartyMatch = formData.selectedParty ? record.selectedParty === formData.selectedParty : true;
        const buyerSupplierMatch = formData.buyerSupplier ? record.buyerSupplier === formData.buyerSupplier : true;
        const transactionTypeMatch = formData.transactiontype ? record.transactiontype === formData.transactiontype : true;
        const paymentMethodMatch = formData.paymentMethod ? record.paymenttype === formData.paymentMethod : true;

        const searchTermLower = searchTerm.toLowerCase();
        const searchTermMatch = (
            record.billno.toLowerCase().includes(searchTermLower) ||
            record.transdate.toLowerCase().includes(searchTermLower) ||
            record.name.toLowerCase().includes(searchTermLower) ||
            record.comment.toLowerCase().includes(searchTermLower) ||
            record.paymenttype.toLowerCase().includes(searchTermLower) ||
            (record.paymenttransno && record.paymenttransno.toString().toLowerCase().includes(searchTermLower)) ||
            (record.amount && record.amount.toString().toLowerCase().includes(searchTermLower)) ||
            (record.billprice && record.billprice.toString().toLowerCase().includes(searchTermLower))
        );

        return fromDateMatch && toDateMatch && selectedPartyMatch && buyerSupplierMatch && transactionTypeMatch && paymentMethodMatch && searchTermMatch;
    });
    setFilteredData(filtered);
}, [data, formData, searchTerm]);

useEffect(() => {
    setCurrentPage(1); 
}, [filteredData]);

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


                <div className="dropdowns-container">
                <div className="dropdown-container">
                    <select value={selectedCompany} onChange={handleCompanyChange}>
                        <option value="KARUNA ENTERPRISE" >KARUNA ENTERPRISE</option>
                        <option value="Shree Mahavir Enterprise">Shree Mahavir Enterprise</option>
                        <option value="Karuna Trading">Karuna Trading</option>
                        <option value="SUN ENTERPRISES">SUN ENTERPRISES</option>
                        <option value="M&N ENTERPRISES">M&N ENTERPRISES</option>
                        <option value="ABHINANDAN ENTERPRISE">ABHINANDAN ENTERPRISE</option>
                        <option value="KHUSHI ENTERPRISE">KHUSHI ENTERPRISE</option>
                        <option value="Apple">Apple</option>
                        <option value="Gautam Plastic">Gautam Plastic</option>
                        <option value="EFSOULS LIMITED LIABILITY PARTNERSHIP">EFSOULS LIMITED LIABILITY PARTNERSHIP</option>
                        <option value="CLASSIC STORE">CLASSIC STORE</option>
                    </select>
                </div>
                <div className="dropdown-container1">
                    <select value={selectedYear} onChange={handleYearChange}>
                        <option value="">Select Financial Year</option>
                        <option value="2018-2019">2018-2019</option>
                        <option value="2019-2020">2019-2020</option>
                        <option value="2020-2021">2020-2021</option>
                        <option value="2021-2022">2021-2022</option>
                        <option value="2022-2023">2022-2023</option>
                        <option value="2023-2024">2023-2024</option>
                        <option value="2024-2025">2024-2025</option>
                    </select>
                </div>
            </div>  

            <p style={{ marginLeft: '260px' }}><h4>CREDITS/DEBITS</h4></p>

            <div className="action-buttons">
                <button style={{ marginLeft: '260px' }} className="add-supplier-button" onClick={(e) => (e.ctrlKey ? window.open('/Dashboard/Addcreditdebit', '_blank') : window.location.href = '/Dashboard/Addcreditdebit')}>
                    Add New
                </button>
            </div>

            <form onSubmit={handleSubmit} className="transaction-form1">
            <div className="form-group1">
                <label htmlFor="fromDate">From Date</label>
                <input
                    type="date"
                    id="fromDate"
                    className="form-controlcd"
                    value={formData.fromDate}
                    onChange={(e) => handleInputChange('fromDate', e.target.value)}
                />
            </div>
            <div className="form-group1">
                <label htmlFor="toDate">To Date</label>
                <input
                    type="date"
                    id="toDate"
                    className="form-controlcd"
                    value={formData.toDate}
                    onChange={(e) => handleInputChange('toDate', e.target.value)}
                />
            </div>
            <div className="form-group1">
                <label htmlFor="selectedParty">Select Party</label>
                <select
                    id="selectedParty"
                    className="form-controlcd"
                    value={formData.selectedParty}
                    onChange={(e) => handleInputChange('selectedParty', e.target.value)}
                >
                    <option value="">All</option>
                    <option value="Buyer">Buyer</option>
                    <option value="Supplier">Supplier</option>
                </select>
            </div>
            <div className="form-group1">
                <label htmlFor="buyerSupplier">Buyer/Supplier</label>
                <select
                    id="buyerSupplier"
                    className="form-controlcd"
                    value={formData.buyerSupplier}
                    onChange={(e) => handleInputChange('buyerSupplier', e.target.value)}
                >
                    <option value="">Select Buyer/Supplier</option>
                </select>
            </div>
            <div className="form-group1">
                <label htmlFor="transactiontype">Transaction Type</label>
                <select
                    id="transactiontype"
                    className="form-controlcd"
                    value={formData.transactiontype}
                    onChange={(e) => handleInputChange('transactiontype', e.target.value)}
                >
                    <option value="">All</option>
                    <option value="Credit">Credit</option>
                    <option value="Debit">Debit</option>
                </select>
            </div>
            <div className="form-group1">
                <label htmlFor="paymentMethod">Payment Method</label>
                <select
                    id="paymentMethod"
                    className="form-controlcd"
                    value={formData.paymentMethod}
                    onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                >
                    <option value="">All</option>
                    <option value="Cash">Cash</option>
                    <option value="Check">Check</option>
                    <option value="NEFT">NEFT</option>
                    <option value="RTGS">RTGS</option>
                    <option value="SETTLEMENT">SETTLEMENT</option>
                    <option value="GPAY">GPAY</option>
                    <option value="HDFCAPP">HDFCAPP</option>
                </select>
            </div>
           
        </form>
    

        <br/>

        <div className="credits-debits-container">
            <h2 className="headercd">Manage Credits-Debits</h2>
            <div className="totals">
                <div className="credit-total">
                <FontAwesomeIcon icon={faPlusCircle} className="iconcd1" />
                <span className="labelcd">Credit Total</span>
                <span className="valuecd">{creditTotal}</span>
                </div>
                <div className="debit-total">
                <FontAwesomeIcon icon={faMinusCircle} className="iconcd2" />
                <span className="labelcd">Debit Total</span>
                <span className="valuecd">{debitTotal}</span>
                </div>
                <div className="net-balance">
                <div className="icon-circle">
                    <FontAwesomeIcon icon={faEquals} className="iconcd" />
                </div>
                <span className="labelcd">Net Balance</span>
                <span className="valuecd">{netBalance}</span>
                </div>
            </div>
        </div>


        <div className="search-container">
        <label htmlFor="searchInput" className="search-label">Search:</label>
        <input
          type="text"
          id="searchInput"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

                <div className="containercd">
                <table className="tablecd">
                    <thead>
                    <tr>
                        <th className="tablecd-header">Bill No</th>
                        <th className="tablecd-header">Transaction Date</th>
                        <th className="tablecd-header">Name</th>
                        <th className="tablecd-header">Comment</th>
                        <th className="tablecd-header">Payment Type</th>
                        <th className="tablecd-header">Payment Transaction Number</th>
                        <th className="tablecd-header">Amount</th>
                        <th className="tablecd-header">Bill Price</th>
                        <th className="tablecd-header">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {currentRecords.length === 0 ? (
                            <tr>
                            <td colSpan="9" style={{ textAlign: 'center' }}>No data found</td>
                            </tr>
                        ) : (
                            currentRecords.map((record) => (
                                <tr key={record.id}>
                                    <td className="tablecd-data" style={{ width: '70px' }}>{record.billno}</td>
                                    <td className="tablecd-data" style={{ width: '160px' }}>{record.transdate}</td>
                                    <td className="tablecd-data" style={{ width: '200px' }}>{record.name}</td>
                                    <td className="tablecd-data" style={{ width: '135px' }}>{record.comment}</td>
                                    <td className="tablecd-data" style={{ width: '135px' }}>{record.paymenttype}</td>
                                    <td className="tablecd-data" style={{ width: '265px' }}>{record.paymenttransno}</td>
                                    <td className="tablecd-data" style={{ color: record.transactiontype === 'Credit' ? 'black' : 'red' }}>
                                        {record.amount}
                                    </td>
                                    <td className="tablecd-data">{record.billprice}</td>
                                    <td>
                                    <a href={`/Dashboard/Editcreditdebit/${record.id}`}>
                                        <FontAwesomeIcon
                                            icon={faEdit}
                                            className="btn-icon"
                                            style={{ backgroundColor: '#2a3042', padding: '5px', borderRadius: '5px', cursor: 'pointer', color: 'white' }}
                                        />
                                    </a>

                                        &nbsp; &nbsp;
                                        <FontAwesomeIcon
                                            icon={faTrashAlt}
                                            className="btn-icon"
                                            style={{ backgroundColor: '#dc3545', padding: '5px', borderRadius: '5px', cursor: 'pointer' }}
                                            onClick={() => handleDeletecredit(record.billno)}
                                        />
                                    </td>
                                </tr>
                            ))
                            
                        )}
                        </tbody>

                </table>
                </div>

                <ul className="pagination">
                {Array.from({ length: Math.ceil(filteredData.length / recordsPerPage) }, (_, i) => (
                    <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                    <a onClick={() => paginate(i + 1)} className="page-link" href="#">
                        {i + 1}
                    </a>
                    </li>
                ))}
                </ul>
                
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
}

export default App;
