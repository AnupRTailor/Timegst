import React from "react";
import ReactDOM  from "react-dom/client";
import App from "./App";
import Aboutus from './Pages/Aboutus';
import InvoiceGenerator from "./Pages/InvoiceGenerator";
import FAQ from "./Pages/FAQ";
import Login from "./Pages/Login";
import Contact from "./Pages/Contact";
import Partner from "./Pages/Partner";
import Price from "./Price/Price";
import Price1 from "./Price/Price1";
import Price2 from "./Price/Price2";
import Price3 from "./Price/Price3";
import Price4 from "./Price/Price4";
import Price5 from "./Price/Price5";
import Price6 from "./Price/Price6";
import Price7 from "./Price/Price7";
import Price8 from "./Price/Price8";
import Price9 from "./Price/Price9";
import Price10 from "./Price/Price10";
import Product from "./Dashboard/Product";
import Addproduct from "./Dashboard/Addproduct";
import EditProduct from "./Dashboard/EditProduct";
import KarunaProduct from "./Dashboard/Karuna/Product";
import KarunaAddproduct from "./Dashboard/Karuna/Addproduct";
import KarunaEditproduct from "./Dashboard/Karuna/EditProduct";
import Supplier from "./Dashboard/Supplier";
import Addsupplier from "./Dashboard/Addsupplier";
import EditSupplier from "./Dashboard/EditSupplier";
import Buyer from "./Dashboard/Buyer";
import Addbuyer from "./Dashboard/Addbuyer";
import EditBuyer from "./Dashboard/EditBuyer";
import CreditDebit from "./Dashboard/CreditDebit";
import AddCreditDebit from "./Dashboard/Addcreditdebit";
import Editcreditdebit from "./Dashboard/Editcreditdebit";
import Dashboard from "./Dashboard/Dashboard";

import {
    createBrowserRouter,
    RouterProvider , 
    Route,
} from "react-router-dom";


const router = createBrowserRouter([
    
    {
      path: "/",
      element: <App/>,
    },
    {
        path: "Pages/Aboutus",
        element: <Aboutus/>,
    },
    {
      path: "Price/Price",
      element: <Price/>,
    },
    {
      path: "Price/Price1",
      element: <Price1/>,
    },
    {
      path: "Price/Price2",
      element: <Price2/>,
    },
    {
      path: "Price/Price3",
      element: <Price3/>,
    },
    {
      path: "Price/Price4",
      element: <Price4/>,
    },
    {
      path: "Price/Price5",
      element: <Price5/>,
    },
    {
      path: "Price/Price6",
      element: <Price6/>,
    },
    {
      path: "Price/Price7",
      element: <Price7/>,
    },
    {
      path: "Price/Price8",
      element: <Price8/>,
    },
    {
      path: "Price/Price9",
      element: <Price9/>,
    },
    {
      path: "Price/Price10",
      element: <Price10/>,
    },
    {
      path: "Pages/InvoiceGenerator",
      element: <InvoiceGenerator/>,
    },
    {
      path: "Pages/FAQ",
      element: <FAQ/>,
    },
    {
      path: "Pages/Login",
      element: <Login/>,
    },
    {
      path: "Pages/Contact",
      element: <Contact/>,
    },
    {
      path: "Pages/Partner",
      element: <Partner/>,
    },
    {
      path: "Dashboard/Product",
      element: <Product/>,
    },
    {
      path: "Dashboard/Addproduct",
      element: <Addproduct/>,
    },
    {
      path: "Dashboard/EditProduct/:id",
      element: <EditProduct />,
    },
    {
      path : "Dashboard/Karuna/Product",
      element: <KarunaProduct />,
    },
    {
      path : "Dashboard/Karuna/Addproduct",
      element: <KarunaAddproduct />,
    },
    {
      path : "Dashboard/Karuna/EditProduct/:id",
      element: <KarunaEditproduct />,
    },
    {
      path: "Dashboard/Supplier",
      element: <Supplier/>,
    },
    {
      path: "Dashboard/AddSupplier",
      element: <Addsupplier/>,
    },
    {
      path: "Dashboard/EditSupplier/:id",
      element: <EditSupplier/>,
    },
    {
      path: "Dashboard/Buyer",
      element: <Buyer/>,
    },
    {
      path: "Dashboard/Addbuyer",
      element: <Addbuyer/>,
    },
    {
      path: "Dashboard/EditBuyer/:id",
      element: <EditBuyer/>,
    },
    {
      path: "Dashboard/Creditdebit",
      element: <CreditDebit/>,
    },
    {
      path: "Dashboard/Addcreditdebit",
      element: <AddCreditDebit/>,
    },
    {
      path: "Dashboard/Addcreditdebit",
      element: <AddCreditDebit/>,
    },
    {
      path: "Dashboard/Editcreditdebit/:id",
      element: <Editcreditdebit />,
    },    
    {
      path: "Dashboard/Dashboard",
      element: <Dashboard/>,
    },

  
  ]);
  

const root =  ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <RouterProvider router = {router} />
);




