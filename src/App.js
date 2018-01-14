import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import SignupPage from "./components/pages/SignupPage";
import BookStore from "./components/pages/BookStore";

const App = () => (
<div className="ui container">
   <Route path="/" exact component={HomePage}/> 
   <Route path="/login" exact component={LoginPage}/>
   <Route path="/signup" exact component={SignupPage}/>
   <Route path="/book-store" exact component={BookStore}/>
</div>
);

export default App;
