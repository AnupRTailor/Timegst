import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard , faCube , faRupeeSign , faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
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
    
    const handleCompanyChange = (e) => {
        setSelectedCompany(e.target.value); 
        if (e.target.value === "KARUNA ENTERPRISE") {
            window.location.href = '/Dashboard/Karuna/product';
        }
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
                        <li className='active'>
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

            <p style={{ marginLeft: '260px' }}><h4>BUSINESS DASHBOARD</h4></p>


            

                       

            <br/>

            

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
