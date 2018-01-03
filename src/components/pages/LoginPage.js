import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../forms/LoginForm'; 

const LoginPage = () => (
    <div>
        <h1> Login Page </h1>
        <div className="ui compact menu">
            <div className="menu">            
                <Link className="item" to="/" >Home</Link>              
                <a className="item">Logout</a>        
            </div>
        </div>
        <LoginForm />  
    </div>
);

export default LoginPage; 