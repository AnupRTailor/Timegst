import React, { useState } from 'react';
// import './Addproduct.css';
import logo from "./logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard , faCube , faRupeeSign , faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import { faCircle } from "@fortawesome/free-regular-svg-icons";

function Addproduct() {
    const [isProductActive, setIsProductActive] = useState(false); 
    const [productName, setProductName] = useState('');
    const [hsnAcs, setHsnAcs] = useState('');
    const [cgst, setCgst] = useState('');
    const [sgst, setSgst] = useState('');
    const [igst, setIgst] = useState('');
    const [qty, setQty] = useState('');
    const [unit, setUnit] = useState('');
    const [brands, setBrands] = useState('');
    const [category, setCategory] = useState('');
    const [store, setStore] = useState('');
    const [availability, setAvailability] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState({
        productName: '',
        hsnAcs: '',
        cgst: '',
        sgst: '',
        igst: '',
        qty: '',
        unit: '',
        brands: '',
        category: '',
        store: '',
        availability: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        let error = false;

        const errors = {
            productName: !productName ? 'Please enter product name.' : '',
            hsnAcs: !hsnAcs ? 'Please enter HSN/ACS code.' : '',
            cgst: !cgst ? 'Please enter CGST rate.' : '',
            sgst: !sgst ? 'Please enter SGST rate.' : '',
            igst: !igst ? 'Please enter IGST rate.' : '',
            qty: !qty ? 'Please enter quantity.' : '',
            unit: !unit ? 'Please enter unit.' : '',
            brands: !brands ? 'Please select brand.' : '',
            category: !category ? 'Please select category.' : '',
            store: !store ? 'Please select store.' : '',
            availability: !availability ? 'Please select availability.' : ''
        };

        setErrorMessage(errors);

        Object.values(errors).forEach(value => {
            if (value) {
                error = true;
            }
        });

        if (!error) {
            const formData = {
                productname: productName,
                producthsn: hsnAcs,
                productcgst: cgst,
                productsgst: sgst,
                productigst: igst,
                productqty: qty,
                productunit: unit,
                productbrands: brands,
                productcategory: category,
                productstore: store,
                productavail: availability
            };
            try {
                const response = await fetch('http://localhost/TImegst/react-gst/backend/api/karuna/product.php', {
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
                        window.location.href = '/Dashboard/Karuna/Product';
                    } else { 
                        setMessage('Error: Product could not be added.');
                    }
                } else {  
                    const errorMessage = await response.text();
                    setMessage(`Error: ${response.status} - ${errorMessage}`);
                }
            } catch (error) {
                console.error('Error:', error);
                setMessage('Error occurred. Please check the data.');
            }
                     
        }
    };

    const handleInputChange = (field, value) => {
        if (!value) {
            setErrorMessage(prevState => ({
                ...prevState,
                [field]: `Please enter ${field === 'productName' ? 'product name' : field}.`
            }));
        } else {
            setErrorMessage(prevState => ({
                ...prevState,
                [field]: ''
            }));
        }

        switch (field) {
            case 'productName':
                setProductName(value);
                break;
            case 'hsnAcs':
                setHsnAcs(value);
                break;
            case 'cgst':
                setCgst(value);
                break;
            case 'sgst':
                setSgst(value);
                break;
            case 'igst':
                setIgst(value);
                break;
            case 'qty':
                setQty(value);
                break;
            case 'unit':
                setUnit(value);
                break;
            case 'brands':
                setBrands(value);
                break;
            case 'category':
                setCategory(value);
                break;
            case 'store':
                setStore(value);
                break;
            case 'availability':
                setAvailability(value);
                break;
            default:
                break;
        }
    };

    const handleBackButtonClick = () => {
        setMessage('');
        window.location.href = '/Dashboard/Product';
    };

    return (
        <div>
            <div className="sidebar">
                <img className="dash1" src={logo} alt="Logo" />
                <nav>
                    <ul>
                        <li>
                            <a href="#">
                            <FontAwesomeIcon icon={faDashboard} />  Dashboard
                            </a>
                        </li>
                        <li className='active'>
                            <Link to="/Dashboard/Karuna/Product" >
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

            <form onSubmit={handleSubmit} className='addpro1'>
                <h4 className="custom-heading" style={{ marginLeft: '230px' }} >
                    <span style={{ fontSize: '1.5em', fontWeight: '500'  }}>MANAGE</span>{' '}
                    <span style={{ fontSize: '0.8em', fontWeight: '100'  }}>PRODUCTS</span>
                </h4>
                <h4>
                    <span style={{ fontSize: '0.8em', fontWeight: '50', color: "#495057" ,marginLeft: '230px' }}>Add Product</span>
                </h4>
                <div>
                    <label className = "addprolbl" htmlFor="productName">Product Name:</label>
                    <input type="text" id="productName" value={productName} onChange={(e) => handleInputChange('productName', e.target.value)} placeholder="Enter product name" />
                </div>
                    {errorMessage.productName && <p className="error-message">{errorMessage.productName}</p>}
                <div>
                    <label className = "addprolbl" htmlFor="hsnAcs">HSN/ACS:</label>
                    <input type="text" id="hsnAcs" value={hsnAcs} onChange={(e) => handleInputChange('hsnAcs', e.target.value)} placeholder="Enter HSN/ACS Code" />
                </div>
                    {errorMessage.hsnAcs && <p className="error-message">{errorMessage.hsnAcs}</p>}
                <div>
                    <label className = "addprolbl" htmlFor="cgst">CGST(%):</label>
                    <input type="text" id="cgst" value={cgst} onChange={(e) => handleInputChange('cgst', e.target.value)} placeholder="Enter CGST Rate" />
                </div>
                    {errorMessage.cgst && <p className="error-message">{errorMessage.cgst}</p>}
                <div>
                    <label className = "addprolbl" htmlFor="sgst">SGST(%):</label>
                    <input type="text" id="sgst" value={sgst} onChange={(e) => handleInputChange('sgst', e.target.value)} placeholder="Enter SGST Rate" />
                </div>
                    {errorMessage.sgst && <p className="error-message">{errorMessage.sgst}</p>}
                <div>
                    <label className = "addprolbl" htmlFor="igst">IGST(%):</label>
                    <input type="text" id="igst" value={igst} onChange={(e) => handleInputChange('igst', e.target.value)} placeholder="Enter IGST Rate" />
                </div>
                    {errorMessage.igst && <p className="error-message">{errorMessage.igst}</p>}
                <div>
                    <label className = "addprolbl" htmlFor="qty">Qty:</label>
                    <input type="text" id="qty" value={qty} onChange={(e) => handleInputChange('qty', e.target.value)} placeholder="Enter Qty" />
                </div>
                    {errorMessage.qty && <p className="error-message">{errorMessage.qty}</p>}
                <div>
                    <label className = "addprolbl" htmlFor="unit">Unit:</label>
                    <input type="text" id="unit" value={unit} onChange={(e) => handleInputChange('unit', e.target.value)} placeholder="Enter Unit" />
                </div>
                    {errorMessage.unit && <p className="error-message">{errorMessage.unit}</p>}
                <div>
                    <label className = "addprolbl" htmlFor="brands">Brands:</label>
                    <select id="brands" value={brands} onChange={(e) => handleInputChange('brands', e.target.value)}>
                        <option value="">Select Brand</option>
                        <option value="Samrat">Samrat</option>
                        <option value="Moksh">Moksh</option>
                        <option value="nike">nike</option>
                    </select>
                </div>
                    {errorMessage.brands && <p className="error-message">{errorMessage.brands}</p>}
                <div>
                    <label className = "addprolbl" htmlFor="category">Category:</label>
                    <select id="category" value={category} onChange={(e) => handleInputChange('category', e.target.value)}>
                        <option value="">Select Category</option>
                        <option value="Plastic">Plastic</option>
                        <option value="Garbage">Garbage</option>
                        <option value="bubble roll">bubble roll</option>
                    </select>
                </div>
                    {errorMessage.category && <p className="error-message">{errorMessage.category}</p>}
                <div>
                    <label className = "addprolbl" htmlFor="store">Store:</label>
                    <select id="store" value={store} onChange={(e) => handleInputChange('store', e.target.value)}>
                        <option value=""></option>
                        <option value="Kailashnagar">Kailashnagar</option>
                        <option value="Adajan">Adajan</option>
                        <option value="pal">pal</option>
                    </select>
                </div>
                {errorMessage.store && <p className="error-message">{errorMessage.store}</p>}
                <div>
                    <label className = "addprolbl" htmlFor="availability">Availability:</label>
                    <select id="availability" value={availability} onChange={(e) => handleInputChange('availability', e.target.value)}>
                        <option value=""></option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                    {errorMessage.availability && <p className="error-message">{errorMessage.availability}</p>}
                <div className="button-group">
                    <button type="submit">Add Product</button>
                    <button className="back-button" onClick={handleBackButtonClick}>Back</button>
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
        </div>
    );
}

export default Addproduct;
