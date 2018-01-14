import React from 'react';
import { Link , Redirect} from 'react-router-dom';
import LoginForm from '../forms/LoginForm';
import BookStore from "./BookStore";

class LoginPage extends React.Component {
  constructor(){
    super()
    this.state = {
      status: false
    }
  }
      user = {
        email : 'xassir@gmail.com',
        password : 'raja',
      };
  submit = data => {
      if(data.email == this.user.email && data.password == this.user.password){        
        this.setState({
          status: true
        })        
      }
        
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
        {this.state.status ? <BookStore /> : <LoginForm submit={this.submit} /> }
        
      </div>
    );
  }
}
const LoginpageHeader = () => (
  <div className="ui compact menu">
      <Link className="item" to="/login" >Login</Link>
      <Link className="item" to="/signup" >Signup</Link>        
  </div> 
);

export default LoginPage; 