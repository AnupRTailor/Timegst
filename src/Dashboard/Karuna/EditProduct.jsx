import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard , faCube , faRupeeSign , faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import logo from "./logo.png";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

function EditProduct() {
  const { id } = useParams();
  const [isProductActive, setIsProductActive] = useState(false); 
  const [productData, setProductData] = useState(null);
  const [ productName ] = useState();

  useEffect(() => {
    console.log(productName);
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost/TImegst/react-gst/backend/api/karuna/product.php/${id}`);
        const data = await response.json();
        setProductData(data); 
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch(`http://localhost/TImegst/react-gst/backend/api/karuna/product.php/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        });

        if (response.ok) {
            const responseData = await response.json();
            window.location.href = '/Dashboard/Karuna/Product';
            console.log('Product updated successfully:', responseData);
        } else {
            console.error('Failed to update product:', response.statusText);
     
        }
    } catch (error) {
 
        console.error('Error updating product:', error);
    
    }
};


  const handleInputChange = (field, value) => {
    setProductData(prevData => ({
      ...prevData,
      [field]: value
    }));
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


      {productData && (
        <form onSubmit={handleSubmit} >
            <h4 className="custom-heading" style={{ marginLeft: '230px' }}>
                    <span style={{ fontSize: '1.5em', fontWeight: '500' }}>MANAGE</span>{' '}
                    <span style={{ fontSize: '0.8em', fontWeight: '100' }}>PRODUCTS</span>
            </h4>
            <h4>
                    <span style={{ fontSize: '0.8em', fontWeight: '50', color: "#495057" ,marginLeft: '230px'}}>Edit Product</span>
            </h4>
          <div>
            <label className='addprolbl' htmlFor="productName">Product Name:</label>
            <input type="text" id="productName" value={productData.productName} onChange={(e) => handleInputChange('productName', e.target.value)} />
          </div>
          <div>
            <label className='addprolbl' htmlFor="hsnAcs">HSN/ACS:</label>
            <input type="text" id="hsnAcs" value={productData.hsnAcs} onChange={(e) => handleInputChange('hsnAcs', e.target.value)} />
          </div>
          <div>
            <label className='addprolbl' htmlFor="cgst">CGST(%):</label>
            <input type="text" id="cgst" value={productData.cgst} onChange={(e) => handleInputChange('cgst', e.target.value)} />
          </div>
          <div>
            <label className='addprolbl' htmlFor="sgst">SGST(%):</label>
            <input type="text" id="sgst" value={productData.sgst} onChange={(e) => handleInputChange('sgst', e.target.value)} />
          </div>
          <div>
            <label className='addprolbl' htmlFor="igst">IGST(%):</label>
            <input type="text" id="igst" value={productData.igst} onChange={(e) => handleInputChange('igst', e.target.value)} />
          </div>
          <div>
            <label className='addprolbl' htmlFor="qty">Qty:</label>
            <input type="text" id="qty" value={productData.qty} onChange={(e) => handleInputChange('qty', e.target.value)} />
          </div>
          <div>
            <label className='addprolbl' htmlFor="unit">Unit:</label>
            <input type="text" id="unit" value={productData.unit} onChange={(e) => handleInputChange('unit', e.target.value)} />
          </div>
          <div>
            <label className='addprolbl' htmlFor="brands">Brands:</label>
            <select type="text" id="brands" value={productData.brands} onChange={(e) => handleInputChange('brands', e.target.value)}>
                <option value=""></option>
                <option value="Samrat">Samrat</option>
                <option value="Moksh">Moksh</option>
                <option value="nike">nike</option>
            </select>
          </div>
          <div>
            <label className='addprolbl' htmlFor="category">Category:</label>
            <select type="text" id="category" value={productData.category} onChange={(e) => handleInputChange('category', e.target.value)}>
                <option value=""></option>
                <option value="Plastic">Plastic</option>
                <option value="Garbage">Garbage</option>
                <option value="bubble roll">bubble roll</option>
            </select>
          </div>
          <div>
            <label className='addprolbl' htmlFor="store">Store:</label>
            <select id="store" value={productData.store} onChange={(e) => handleInputChange('store', e.target.value)}>
                        <option value=""></option>
                        <option value="Kailashnagar">Kailashnagar</option>
                        <option value="Adajan">Adajan</option>
                        <option value="pal">pal</option>
            </select>
          </div>
          <div>
            <label className='addprolbl' htmlFor="availability">Availability:</label>
            <select type="text" id="availability" value={productData.availability} onChange={(e) => handleInputChange('availability', e.target.value)}>
                        <option value=""></option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
            </select>
          </div>
          <div className="button-group">
                    <button type="submit">Update Product</button>
                    <button className="back-button" onClick={() => window.history.back()}>Back</button>
                </div>
        </form>
      )}

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

export default EditProduct;
