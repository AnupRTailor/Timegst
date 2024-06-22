import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard , faCube , faRupeeSign , faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faEdit, faTrashAlt, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import logo from "./logo.png";

function Product() {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(5);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCompany, setSelectedCompany] =  useState("EFSOULS LIMITED LIABILITY PARTNERSHIP");
    const [selectedYear, setSelectedYear] = useState('2024-2025');
    const location = useLocation();


    useEffect(() => {
        fetchData();
    }, [location]);

    const handleDeleteProduct = async (id) => {
        try {
            const response = await fetch(`http://localhost/TImegst/react-gst/backend/api/product.php/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            if (response.ok) {
                console.log('Product deleted successfully');
                window.location.reload();
            } else {
                console.error('Failed to delete product:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const fetchData = () => {
        fetch('http://localhost/TImegst/react-gst/backend/api/product.php')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Data fetched successfully:', data); 
                setProducts(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    const filteredProducts = products.filter(product => {
        const searchTermLower = searchTerm ? searchTerm.toLowerCase() : '';

        return (
            product.pname.toLowerCase().includes(searchTermLower) ||
            product.phsn.toLowerCase().includes(searchTermLower) ||
            (product.cgst && product.cgst.toString().toLowerCase().includes(searchTermLower)) ||
            (product.sgst && product.sgst.toString().toLowerCase().includes(searchTermLower)) ||
            (product.igst && product.igst.toString().toLowerCase().includes(searchTermLower)) ||
            (product.qty && product.qty.toString().toLowerCase().includes(searchTermLower)) ||
            (product.unit && product.unit.toLowerCase().includes(searchTermLower))
        );
    });

    useEffect(() => {
        // Reset current page to 1 whenever the search term changes
        setCurrentPage(1);
    }, [searchTerm]);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleCompanyChange = (e) => {
        setSelectedCompany(e.target.value); 
        if (e.target.value === "KARUNA ENTERPRISE") {
            window.location.href = '/Dashboard/Karuna/product';
        }
    };

    const handleYearChange = (e) => {
        setSelectedYear(e.target.value); 
    };

    // const handleLogout = () => {
    //     // Clear the session (localStorage/sessionStorage or any other method)
    //     sessionStorage.clear();
    //     localStorage.clear();
    
    //     // Use replaceState to remove the current entry from the history stack
    //     window.history.replaceState(null, null, '/pages/login');
    
    //     // Redirect to the login page
    //     window.location.replace('/pages/login');
    // };
    
    // // Event listener to handle the 'popstate' event and enforce the redirect
    // window.addEventListener('popstate', (event) => {
    //     if (!sessionStorage.getItem('isLoggedIn')) { // Assuming you use this key to check if the user is logged in
    //         window.location.replace('/pages/login');
    //     }
    // });  
    

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
                        <li className = 'active'>
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
                        <li >
                            <Link to="/Dashboard/Supplier" >
                                 <FontAwesomeIcon icon={faCircle} /> Supplier
                            </Link>
                        </li>
                        <li >
                            <Link to="/Dashboard/Buyer" >
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

            <p style={{ marginLeft: '260px' }}><h4>MANAGE PRODUCTS</h4></p>

            <div className="action-buttons">
                <button  style={{ marginLeft: '260px'}} className="add-product-button" onClick={(e) => (e.ctrlKey ? window.open('/Dashboard/Addproduct', '_blank') : window.location.href = '/Dashboard/Addproduct')}>
                    Add Product
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

            <table className="tblpro">
                <thead>
                    <tr>
                        <th className="product-name table-header">Product Name</th>
                        <th className="hsn-acs table-header">HSN/ACS</th>
                        <th className="cgst table-header">CGST(%)</th>
                        <th className="sgst table-header">SGST(%)</th>
                        <th className="igst table-header">IGST(%)</th>
                        <th className="qty table-header">Qty</th>
                        <th className="unit table-header">Unit</th>
                        <th className="availability table-header">Availability</th>
                        <th className="action table-header">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {currentProducts.length > 0 ? (
                    currentProducts.map(product => (
                        <tr key={product.id}>
                            <td>{product.pname}</td>
                            <td>{product.phsn}</td>
                            <td>{product.cgst}</td>
                            <td>{product.sgst}</td>
                            <td>{product.igst}</td>
                            <td>{product.qty}</td>
                            <td>{product.unit}</td>
                            <td>
                                {product.avail === "Yes" ? (
                                    <FontAwesomeIcon icon={faCheck} color="green" style={{ marginLeft: '35px' }} />
                                ) : (
                                    <FontAwesomeIcon icon={faTimes} color="red" style={{ marginLeft: '35px' }} />
                                )}
                            </td>
                            <td>
                                <a href= {`/Dashboard/EditProduct/${product.id}`} >
                                    <FontAwesomeIcon icon={faEdit} className="btn-icon" style={{ backgroundColor: '#2a3042', padding: '5px', borderRadius: '5px', cursor: 'pointer' , color : 'white'}} />
                                </a>
                                &nbsp; &nbsp;
                                <FontAwesomeIcon 
                                    icon={faTrashAlt} 
                                    className="btn-icon" 
                                    style={{ backgroundColor: '#dc3545', padding: '5px', borderRadius: '5px', cursor: 'pointer'  }} 
                                    onClick={() => handleDeleteProduct(product.id)} 
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

            <br/>

            <ul className="pagination">
                {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }, (_, i) => (
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

export default Product;
