import React, { useState, useEffect } from 'react';
import './Buyer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard , faCube , faRupeeSign , faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faEdit, faTrashAlt, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logo from "./logo.png";

function Buyer() {
    const [buyers, setBuyers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCompany, setSelectedCompany] =  useState("EFSOULS LIMITED LIABILITY PARTNERSHIP");
    const [selectedYear, setSelectedYear] = useState('2024-2025');
    const [currentPage, setCurrentPage] = useState(1);
    const [buyersPerPage] = useState(5);

    useEffect(() => {
        fetchData();
    }, []);

    const handleDeleteBuyer = async (id) => {
        try {
            const response = await fetch(`http://localhost/TImegst/react-gst/backend/api/buyer.php/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                console.log('Buyer deleted successfully');
                fetchData(); 
            } else {
                console.error('Failed to delete buyer:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting buyer:', error);
        }
    };

    const fetchData = () => {
        fetch('http://localhost/TImegst/react-gst/backend/api/buyer.php')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Data fetched successfully:', data); 
                setBuyers(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    const filteredBuyers = buyers.filter(buyer => {
        const searchTermLower = searchTerm ? searchTerm.toLowerCase() : '';
        return (
            buyer &&
            (buyer.buyername && buyer.buyername.toLowerCase().includes(searchTermLower)) ||
            (buyer.address && buyer.address.toLowerCase().includes(searchTermLower)) ||
            (buyer.city && buyer.city.toLowerCase().includes(searchTermLower)) ||
            (buyer.gst && buyer.gst.toLowerCase().includes(searchTermLower)) ||
            (buyer.pan && buyer.pan.toLowerCase().includes(searchTermLower)) ||
            (buyer.mobile && buyer.mobile.toLowerCase().includes(searchTermLower)) ||
            (buyer.statecode && buyer.statecode.toLowerCase().includes(searchTermLower)) ||
            (buyer.email && buyer.email.toLowerCase().includes(searchTermLower)) ||
            (buyer.status && buyer.status.toLowerCase().includes(searchTermLower))
        );
    });
    

    useEffect(() => {
        // Reset current page to 1 whenever the search term changes
        setCurrentPage(1);
    }, [searchTerm]);

    const indexOfLastBuyer = currentPage * buyersPerPage;
    const indexOfFirstBuyer = indexOfLastBuyer - buyersPerPage;
    const currentBuyers = filteredBuyers.slice(indexOfFirstBuyer, indexOfLastBuyer);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    const handleCompanyChange = (e) => {
        setSelectedCompany(e.target.value);
    };

    const handleYearChange = (e) => {
        setSelectedYear(e.target.value);
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
                        <li>
                            <Link to="/Dashboard/Supplier">
                                 <FontAwesomeIcon icon={faCircle} /> Supplier
                            </Link>
                        </li>
                        <li className='active'>
                            <Link to="/Dashboard/Buyer">
                            <FontAwesomeIcon icon= {faCircle} /> Buyer
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


             <p style={{ marginLeft: '260px' }}><h4>MANAGE BUYERS</h4></p>

                <div className="action-buttons">
                    <button  style={{ marginLeft: '260px'}} className="add-buyer-button" onClick={(e) => (e.ctrlKey ? window.open('/Dashboard/AddBuyer', '_blank') : window.location.href = '/Dashboard/AddBuyer')}>
                        Add Buyer
                    </button>
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
                </div>

                <table className="tblbuyer" >
                    <thead>
                        <tr >
                            <th style = {{ fontSize : '14px' }} className="buyer-name table-header">Buyer Name</th>
                            <th style = {{ fontSize : '14px' }} className="address table-header">Address</th>
                            <th style = {{ fontSize : '14px' }} className="city table-header" >City</th>
                            <th style = {{ fontSize : '14px' }} className="gst table-header" >GSTIN</th>
                            <th style = {{ fontSize : '14px' }} className="pannum table-header" >PAN Number</th>
                            <th style = {{ fontSize : '14px' }} className="mobilebuy table-header" >Mobile</th>
                            <th style = {{ fontSize : '14px' }} className="statecode table-header" >State Code</th>
                            <th style = {{ fontSize : '14px' }} className="emailbuy table-header" >Email</th>
                            <th style = {{ fontSize : '14px' }} className="status table-header" >Status</th>
                            <th style = {{ fontSize : '14px' }} className="action table-header" >Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentBuyers.length > 0 ? (
                            currentBuyers.map(buyer => (
                                <tr key={buyer.id} >
                                    <td style={ { width : '40px' , fontSize : '14px' }}>{buyer.bname}</td>
                                    <td style={{ width : '500px' , fontSize : '14px'}} >{buyer.address}</td>
                                    <td style = {{ fontSize : '14px' }} >{buyer.city}</td>
                                    <td style = {{ fontSize : '14px' }}>{buyer.gstin}</td>
                                    <td style = {{ fontSize : '14px' }}>{buyer.pan}</td>
                                    <td style = {{ fontSize : '14px' }}>{buyer.mobile}</td>
                                    <td style = {{ fontSize : '14px' }}>{buyer.statecode}</td>
                                    <td style = {{ fontSize : '14px' }}>{buyer.email}</td>
                                    <td style = {{ fontSize : '14px' }}>
                                        {buyer.status === "Yes" ? (
                                            <FontAwesomeIcon icon={faCheck} color="green" style={{ marginLeft: '35px' }} />
                                        ) : (
                                            <FontAwesomeIcon icon={faTimes} color="red" style={{ marginLeft: '35px' }} />
                                        )}
                                    </td>
                                    <td style = {{ fontSize : '14px' }}>
                                        <Link to={`/Dashboard/EditBuyer/${buyer.id}`}>
                                            <FontAwesomeIcon icon={faEdit} className="btn-icon" style={{ backgroundColor: '#2a3042', padding: '5px', borderRadius: '5px', cursor: 'pointer' , color : 'white'}} />
                                        </Link>
                                        &nbsp; &nbsp;
                                        <FontAwesomeIcon 
                                            icon={faTrashAlt} 
                                            className="btn-icon" 
                                            style={{ backgroundColor: '#dc3545', padding: '5px', borderRadius: '5px', cursor: 'pointer'  }} 
                                            onClick={() => handleDeleteBuyer(buyer.id)} 
                                        />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="10" style={{ textAlign: 'center' , fontSize : '14px' }}>No results found</td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <br/>


                <ul className="pagination">
                    {Array.from({ length: Math.ceil(filteredBuyers.length / buyersPerPage) }, (_, i) => (
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
                <div className="footer-right1">
                    <p className="version"><strong>Version</strong> 3.6</p>
                </div>
            </footer>

           
        </div>
    );
}

export default Buyer;
