<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Customer Registration</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .container {
            width: 400px;
            height: auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        h2 {
            margin-top: 0;
            text-align: center;
            color: #333;
        }
        label {
            font-weight: bold;
        }
        input[type="text"],
        input[type="email"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-sizing: border-box;
        }
        input[type="submit"] ,
        input[type="reset"] {
            width: 100%;
            padding: 10px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        }
        input[type="submit"]:hover , input[type="reset"]:hover {
            background-color: #0056b3;
        }
        .popup-container {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 9999;
        }
        .popup-box {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        }
        .error-message {
            color: red;
            font-size: 12px;
            display: block;
            margin-top: -12px;
        }
        .button-container{
            width: 50%;
            display: flex;
            margin-left: 100px;
        }
        .submit{
            margin-right:10px;        
        }
        .loginact {
            font-size: 14px;
            margin-top: -5px;
            margin-bottom : 10px;
            text-align: center;
        }
        .loginact a {
            color: #007bff; 
            text-decoration: none; 
        }
        .loginact a:hover {
            text-decoration: underline; 
        }

    </style>

<script>
   function validateFirstName() {
        const firstName = document.getElementById('firstname').value.trim();
        const firstNameRegex = /^[A-Za-z]+$/; 
        
        if (firstName === '') {
            document.getElementById('firstNameError').innerText = 'Please enter your first name.';
            return false;
        } else if (!firstNameRegex.test(firstName)) {
            document.getElementById('firstNameError').innerText = 'First name must not contain numeric value & Not contain White space.';
            return false;
        } else {
            document.getElementById('firstNameError').innerText = ''; 
            return true;
        }
    }

    function validateLastName() {
        const lastName = document.getElementById('lastname').value.trim();
        const lastNameRegex = /^[A-Za-z]+$/; 
        
        if (lastName === '') {
            document.getElementById('lastNameError').innerText = 'Please enter your last name.';
            return false;
        } else if (!lastNameRegex.test(lastName)) {
            document.getElementById('lastNameError').innerText = 'Last name must not contain numeric value & Not contain White space.';
            return false;
        } else {
            document.getElementById('lastNameError').innerText = ''; 
            return true;
        }
    }

    function validateEmail() {
        const email = document.getElementById('email').value.trim();
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (email === '') {
            document.getElementById('emailError').innerText = 'Please enter your email address.';
            return false;
        } else if (!emailRegex.test(email)) {
            document.getElementById('emailError').innerText = 'Please enter a valid email address (Example : example123@gmail.com).';
            return false;
        } else {
            document.getElementById('emailError').innerText = ''; 
            return true;
        }
    }

    function checkEmailExists(email) {
        return fetch('check_email.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email })
        }).then(response => response.json());
    }

    function validatePhone() {
        const phone = document.getElementById('phone').value.trim();
        const phoneRegex = /^[6-9]\d{9}$/;

        if (phone === '') {
            document.getElementById('phoneError').innerText = 'Please enter your phone number.';
            return false;
        } else if (!phoneRegex.test(phone)) {
            document.getElementById('phoneError').innerText = 'Please enter a 10-digit phone number starting with a digit between 6 and 9.';
            return false;
        } else {
            document.getElementById('phoneError').innerText = ''; 
            return true;
        }
    }

   function validateCompanyName() {
        const companyName = document.getElementById('companyname').value.trim();
        const companyNameRegex = /^[a-zA-Z\s]+$/;

        if (companyName === '') {
            document.getElementById('companyNameError').innerText = 'Please enter your company name.';
            return false;
        } else if (!companyNameRegex.test(companyName)) {
            document.getElementById('companyNameError').innerText = 'Please enter a valid company name (alphabetic characters only).';
            return false;
        } else {
            document.getElementById('companyNameError').innerText = ''; 
            return true;
        }
    }

    function validateCompanyEmail() {
        const companyEmail = document.getElementById('companyemail').value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (companyEmail === '') {
            document.getElementById('companyEmailError').innerText = 'Please enter your company email address.';
            return false;
        } else if (!emailRegex.test(companyEmail)) {
            document.getElementById('companyEmailError').innerText = 'Please enter a valid email address.';
            return false;
        } else {
            document.getElementById('companyEmailError').innerText = ''; 
            return true;
        }
    }

    function showPopup(message) {
        document.getElementById('popupContainer').style.display = 'block';
            setTimeout(() => {
                popupContainer.style.display = 'none';
                popupMessage.remove();
            }, 1000);
        }

    function closePopup() {
        document.getElementById('popupContainer').style.display = 'none';
    }

    function validateForm() {
        const isFirstNameValid = validateFirstName();
        const isLastNameValid = validateLastName();
        const isEmailValid = validateEmail();
        const isPhoneValid = validatePhone();
        const isCompanyNameValid = validateCompanyName();
        const isCompanyEmailValid = validateCompanyEmail();

        return isFirstNameValid && isLastNameValid && isEmailValid && isPhoneValid && isCompanyNameValid && isCompanyEmailValid;
    }

    function clearFormFields() {
        document.getElementById('firstname').value = '';
        document.getElementById('lastname').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('companyname').value = '';
        document.getElementById('companyemail').value = '';
        document.querySelectorAll('.error-message').forEach(element => {
            element.innerText = '';
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        const form = document.getElementById('registrationForm');
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const isFormValid = validateForm();
            if (isFormValid) {
                const formData = new FormData(form);
                fetch(form.action, {
                    method: 'POST',
                    body: formData
                })
                .then(response => {
                    if (response.ok) {
                        showPopup('Registration Successful');
                        clearFormFields();
                        window.location.href = 'http://localhost:3000/';
                    } else {
                        throw new Error('Failed to submit form');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            }
        });
    });

</script>


</head>
<body>
    <div class="container">
        <h2>Customer Registration Form</h2>
        <form id="registrationForm" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" onsubmit="if (validateForm()) { showPopup('Registration Successful'); return true; } else { return false; }">
            <label for="firstname">First Name:</label><br>
            <input type="text" id="firstname" name="firstname"  onkeyup="validateFirstName()">
            <span class="error-message" id="firstNameError"></span><br>
                        
            <label for="lastname">Last Name:</label><br>
            <input type="text" id="lastname" name="lastname" onkeyup="validateLastName()">
            <span class="error-message" id="lastNameError"></span><br>
                        
            <label for="email">Email Address:</label><br>
            <input type="email" id="email" name="email" onkeyup="validateEmail()">
            <span class="error-message" id="emailError"></span><br>

            <label for="phone">Mobile Number:</label><br>
            <input type="text" id="phone" name="phone" onkeyup="validatePhone()">
            <span class="error-message" id="phoneError"></span><br>
                        
            <label for="companyname">Company Name:</label><br>
            <input type="text" id="companyname" name="companyname" onkeyup="validateCompanyName()">
            <span class="error-message" id="companyNameError"></span><br>
                        
            <label for="companyemail">Company Email Address:</label><br>
            <input type="email" id="companyemail" name="companyemail" onkeyup="validateCompanyEmail()">
            <span class="error-message" id="companyEmailError"></span><br>

            <div class="loginact"> Already a customer? <a href="http://localhost:3000/Pages/Login">Click here</a> to login</div>
 
            <div class="button-container">
                <input type="submit" class="submit" name="submit" value="Submit">
                <input type="reset" class="reset-btn" name="reset" value="Reset">
            </div>

        </form>
    </div>

    <div class="popup-container" id="popupContainer">
        <div class="popup-box">
            <p>Registration Successful</p>
        </div>
    </div>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        
            $servername = "localhost"; 
            $username = "root";
            $password = "";
            $database = "timegst";

        
            $conn = new mysqli($servername, $username, $password, $database);
            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }
            $firstname = $_POST['firstname'];
            $lastname = $_POST['lastname'];
            $email = $_POST['email'];
            $phone = $_POST['phone'];
            $companyname = $_POST['companyname'];
            $companyemail = $_POST['companyemail'];

            $sql = "INSERT INTO register (firstname, lastname, email, phone, company_name, company_email) VALUES ('$firstname', '$lastname', '$email', '$phone', '$companyname', '$companyemail')";

            if ($conn->query($sql) === TRUE) {
                echo "Record inserted successfully";
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }

            $conn->close();
        }
    ?>

</body>
</html>