import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Supplier.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard, faCube, faRupeeSign, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faEdit, faTrashAlt, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import logo from "./logo.png";

function Supplier() {
    const { id } = useParams();
    const [suppliers, setSuppliers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [suppliersPerPage] = useState(5);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCompany, setSelectedCompany] = useState("EFSOULS LIMITED LIABILITY PARTNERSHIP");
    const [selectedYear, setSelectedYear] = useState('2024-2025');
    const location = useLocation();

    useEffect(() => {
        fetchData();
    }, [location]);

    const handleDeletesupplier = async (id) => {
        try {
            const response = await fetch(`http://localhost/TImegst/react-gst/backend/api/Supplier.php/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                console.log('Supplier deleted successfully');
                window.location.reload();
            } else {
                console.error('Failed to delete supplier:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting supplier:', error);
        }
    };

    const fetchData = () => {
        fetch('http://localhost/TImegst/react-gst/backend/api/Supplier.php')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Data fetched successfully:', data);
                setSuppliers(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    const filteredSuppliers = suppliers.filter(supplier => {
        const searchTermLower = searchTerm ? searchTerm.toLowerCase() : '';

        return (
            (supplier.sname && supplier.sname.toLowerCase().includes(searchTermLower)) ||
            (supplier.address && supplier.address.toLowerCase().includes(searchTermLower)) ||
            (supplier.gst && supplier.gst.toString().toLowerCase().includes(searchTermLower)) ||
            (supplier.statecode && supplier.statecode.toString().toLowerCase().includes(searchTermLower)) ||
            (supplier.mobile && supplier.mobile.toString().toLowerCase().includes(searchTermLower))
        );
    });


    useEffect(() => {

        setCurrentPage(1);
    }, [searchTerm]);

    const indexOfLastsupplier = currentPage * suppliersPerPage;
    const indexOfFirstSupplier = indexOfLastsupplier - suppliersPerPage;
    const currentSuppliers = filteredSuppliers.slice(indexOfFirstSupplier, indexOfLastsupplier);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleCompanyChange = (e) => {
        setSelectedCompany(e.target.value);
    };

    const handleYearChange = (e) => {
        setSelectedYear(e.target.value);
    };

    // const handleLogout = () => {
    //     // Clear the session (localStorage/sessionStorage or any other method)
    //     sessionStorage.clear();
    //     localStorage.clear();

    //     // Add a dummy history state to ensure the current state is not revisited
    //     window.history.pushState(null, null, window.location.href);

    //     // Redirect to the login page
    //     window.location.replace('/pages/login');
    // };

    // useEffect(() => {
    //     const handlePopState = (event) => {
    //         // If the user is not logged in, always redirect to the login page
    //         if (!sessionStorage.getItem('isLoggedIn')) {
    //             window.history.pushState(null, null, window.location.href);
    //             window.location.replace('/pages/login');
    //         }
    //     };

    //     // Event listener to handle the 'popstate' event
    //     window.addEventListener('popstate', handlePopState);

    //     // Cleanup event listener on component unmount
    //     return () => {
    //         window.removeEventListener('popstate', handlePopState);
    //     };
    // }, []);
    
    

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
                            <Link to="/Dashboard/Product" >
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
                            <Link to="/pages/login" >
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

            <p style={{ marginLeft: '260px' }}><h4>MANAGE SUPPLIERS</h4></p>

            <div className="action-buttons">
                <button style={{ marginLeft: '260px' }} className="add-supplier-button" onClick={(e) => (e.ctrlKey ? window.open('/Dashboard/Addsupplier', '_blank') : window.location.href = '/Dashboard/Addsupplier')}>
                    Add Supplier
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

        
            <table className="tblsup">
                <thead>
                    <tr>
                        <th className="supplier-name table-header" style={{ width: '200px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Supplier Name</th>
                        <th className="address table-header" style={{ width: '600px' , whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Address</th>
                        <th className="gst table-header" style={{ width : '300px' , whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>GSTIN</th>
                        <th className="statecode table-header" style={{ width : '150px' , whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} >State Code</th>
                        <th className="mob table-header" style={{ width : '150px' , whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Mobile</th>
                        <th className="status table-header" style={{ width : '90px' , whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} >Status</th>
                        <th className="action table-header" style={{ width : '100px' , whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {currentSuppliers.length > 0 ? (
                        currentSuppliers.map(supplier => (
                            <tr key={supplier.id}>
                                <td>{supplier.sname}</td>
                                <td>{supplier.address}</td>
                                <td>{supplier.gst}</td>
                                <td>{supplier.statecode}</td>
                                <td>{supplier.mobile}</td>
                                <td>
                                    {supplier.status === "Yes" ? (
                                        <FontAwesomeIcon icon={faCheck} color="green" style={{ marginLeft: '35px' }} />
                                    ) : (
                                        <FontAwesomeIcon icon={faTimes} color="red" style={{ marginLeft: '35px' }} />
                                    )}
                                </td>
                                <td>
                                    <a href={`/Dashboard/EditSupplier/${supplier.id}`} >
                                        <FontAwesomeIcon icon={faEdit} className="btn-icon" style={{ backgroundColor: '#2a3042', padding: '5px', borderRadius: '5px', cursor: 'pointer', color: 'white' }} />
                                    </a>
                                    &nbsp; &nbsp;
                                    <FontAwesomeIcon
                                        icon={faTrashAlt}
                                        className="btn-icon"
                                        style={{ backgroundColor: '#dc3545', padding: '5px', borderRadius: '5px', cursor: 'pointer' }}
                                        onClick={() => handleDeletesupplier(supplier.id)}
                                    />
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" style={{ textAlign: 'center' }}>No results found</td>
                                </tr>
                            )}
                        </tbody>
                </table>
            <br />

            <ul className="pagination">
                {Array.from({ length: Math.ceil(filteredSuppliers.length / suppliersPerPage) }, (_, i) => (
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

export default Supplier;
