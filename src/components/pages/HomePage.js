import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
    <div>
        <h1> Home Page </h1>
        <HomePagelinksFunction />
    </div>
);

const HomePagelinksFunction = () => (
    <div className="ui compact menu">
        <Link className="item" to="/login" >Login</Link>
        <Link className="item" to="/signup" >Signup</Link>        
    </div> 
);

export default HomePage; 