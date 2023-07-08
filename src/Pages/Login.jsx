import React from 'react';
import './Login.css';
import Namebar from '../Components/Namebar';

export default function Login() {
  return (
    <div>
        <Namebar/> 
        
      <div className="background">
        <div className="border">
            <div className="login-section">
                 <h1>Log In</h1>

                <div className="credentials">
                    <table>
                        <tbody>
                            <tr>
                                <label htmlFor="txtuserID">User ID</label>
                            </tr>

                            <tr>
                                <input type="text" id="txtuserID" className="input" placeholder='Enter Your UserID' />
                            </tr>

                         
                                
                            <tr>
                                <label htmlFor="password">Password</label>
                            </tr>

                            <tr>
                                <input type="password" id="password" className="input" placeholder='Enter Your Password' />
                            </tr>

                            <tr>
                                <center><button type="button" className="submit-button">
                                    Submit
                                    </button></center>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="forgot-password">
                    <a href="/forgot-password">Forgot password?</a>
                </div>
                
        </div>
        </div>
    </div>

    </div>
  )
}
