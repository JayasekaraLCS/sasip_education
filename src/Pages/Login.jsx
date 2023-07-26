import React from 'react';
import './Login.css';
import Namebar from '../Components/Namebar';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const navigate = useNavigate();


  const validate = values => {
    const errors = {};

    if (!values.txtuserID) {
      errors.txtuserID = 'User ID is required.';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.txtuserID)) {
      errors.txtuserID = 'Invalid User ID format.';
    }

    if (!values.password) {
      errors.password = 'Password is required.';
    } else if (!/^[a-zA-Z0-9]+$/i.test(values.password)) {
      errors.password = 'Invalid password format.';
    }

    return errors;
  };

  const handleLogin = async (values) => {
    const { txtuserID, password } = values;

    try {
      // Sending login credentials to the server for authentication
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ txtuserID, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful, redirect to the appropriate component based on the role
        if (data.role === 'admin') {
          navigate('/AdminPanel');
        } else if (data.role === 'student') {
          navigate('/StudentLogin');
        } else if (data.role === 'teacher') {
          navigate('/TeacherLogin');
        } else {
          // Handle unknown role or other error scenarios
          console.log('Unknown role:', data.role);
        }
      } else {
        // Handle login errors
        console.log('Login failed:', data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const formik = useFormik({
    initialValues: {
      txtuserID: '',
      password: '',
    },
    validate,
    onSubmit: values => {
      handleLogin(values);
    },
  });

  return (
    <div>
      <Namebar />
      <div className="background">
        <div className="border">
          <div className="login-section">
            <form onSubmit={formik.handleSubmit}>
              <h1>Log In</h1>
              <div className="credentials">
                <table>
                  <tbody>
                    <tr>
                      <label htmlFor="txtuserID">User ID</label>
                    </tr>
                    <tr>
                      <input
                        type="text"
                        id="txtuserID"
                        className="input"
                        placeholder="Enter Your UserID"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.txtuserID}
                      />
                    </tr>
                    {formik.touched.txtuserID && formik.errors.txtuserID ? (
                      <tr>
                        <div className="error">{formik.errors.txtuserID}</div>
                      </tr>
                    ) : null}
                    <tr>
                      <label htmlFor="password">Password</label>
                    </tr>
                    <tr>
                      <input
                        type="password"
                        id="password"
                        className="input"
                        placeholder="Enter Your Password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                      />
                    </tr>
                    {formik.touched.password && formik.errors.password ? (
                      <tr>
                        <div className="error">{formik.errors.password}</div>
                      </tr>
                    ) : null}
                    <tr>
                      <center>
                        <button type="submit" className="submit-button">
                          Submit
                        </button>
                      </center>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="forgot-password">
                <a href="/forgot-password">Forgot password?</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
