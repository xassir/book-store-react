import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../forms/LoginForm'; 

class LoginPage extends React.Component {
  submit = data => {
      console.log(data);
  };    

  render() {
    return (
      <div>
        <h1>Login page</h1>
        <div className="ui compact menu">
            <div className="menu">            
                <Link className="item" to="/" >Home</Link>              
                <a className="item">Logout</a>        
            </div>
        </div>
        <LoginForm submit={this.submit} />

      </div>
    );
  }
}

export default LoginPage; 