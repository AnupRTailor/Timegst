import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import logo from './logo.png';
import './Login.css';

const Login = () => {
  const [emailOrMobile, setEmailOrMobile] = useState('');
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setEmailOrMobile(value);
    if (value.trim() !== '') {
      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailOrMobile.trim()) {
      setError('Please enter an email or mobile number.');
    } else {
      try {
        const response = await axios.post('http://localhost:3001/send-otp-email', { email: emailOrMobile });
        console.log("Email Sent successfully");
        window.alert("Email sent successfully");
        setShowPopup(true);
        setEmailOrMobile('');
      } catch (error) {
        console.error('Error sending OTP email:', emailOrMobile);
        console.log(emailOrMobile);
      }
    }
  };

  const handleOtpChange = (e) => {
    const value = e.target.value;
    setOtp(value);
  };

  // const handleOtpSubmit = async (e) => {
  //   e.preventDefault();
  
  //   if (!otp.trim()) {
  //     setOtpError('Please enter the OTP.');
  //   } else {
  //     try {
  //       debugger;
  //       const response = await axios.post('http://localhost:3001/verify-otp', { otp : otp } );
  //       console.log(response);
  //       debugger;
  //       if (response.status === 200 && response.data.success) {
  //         setOtpError('');
  //         setShowPopup(false);
  //         window.location.href = '/Dashboard/Product';
  //         console.log('OTP verified successfully');
  //       } else {
  //         setOtpError('Invalid OTP. Please try again.');
  //       }
  //       debugger;
  //     } catch (error) {
  //       console.error('Error verifying OTP:', error);
  //       setOtpError('Error verifying OTP. Please try again.');
  //     }
  //   }
  // };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
  
    if (!otp.trim()) {
      setOtpError('Please enter the OTP.');
    } else {
      // Bypass OTP verification
      setOtpError('');
      setShowPopup(false);
      window.location.href = '/Dashboard/Product';
      console.log('OTP verification bypassed, redirecting to dashboard.');
    }
  };

  


  useEffect(() => {
    if (showPopup) {
      setOtp('');
      setOtpError(''); // Reset otpError when the pop-up is shown
    }
  }, [showPopup]);

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <form className="login100-form validate-form" onSubmit={handleSubmit}>
            <div className="login-logo">
              <img src={logo} alt="logo" className="img-responsive" width="150px" />
            </div>
            <span className="login100-form-title p-b-26">Business Growth Smart Accounting System</span>
            <span className="login100-form-title p-b-20">
              <i className="zmdi zmdi-font"></i>
            </span>
            <div className={`wrap-input100 validate-input ${error ? 'error' : ''}`}>
              <input className="input100" type="text1" name="to_email" value={emailOrMobile} onChange={handleChange} placeholder="Enter Email or Mobile Number" />
              {error && <FontAwesomeIcon icon={faExclamationCircle} className="error-icon" />}
            </div>
            {error && <p className="error-messagelogin">{error}</p>}
            <div className="container-login100-form-btn">
              <div className="wrap-login100-form-btn">
                <div className="login100-form-bgbtn"></div>
                <center>
                  <button className="login100-form-btn" type="submit">Send OTP</button>
                </center>
              </div>
            </div>
            <div className="text-center">
              <a href="http://localhost/TImegst/react-gst/Frontend/src/timegst.php" className="crtact">Don't have an Account? Create Now</a>
            </div>
          </form>
        </div>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-button" onClick={() => setShowPopup(false)}>&times;</button>
            <h2>Enter OTP</h2>
            <form onSubmit={handleOtpSubmit}>
              <input className="otp" type="text" value={otp} onChange={handleOtpChange} placeholder="Enter OTP" />
              {otpError && <p className="error-messageotp">{otpError}</p>}
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;