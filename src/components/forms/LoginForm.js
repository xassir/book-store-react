import React from 'react';
import { Form, Button } from "semantic-ui-react";

class LoginForm extends React.Component {
    state = {
        data: {
            email: "",
            password: ""
        },
        loading: false,
        errors: {}
    };    

    render(){
        const data = this.state;
        return (
            <Form>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="test@test.com"
                    value={data.email}
                    // onChange={this.onChange}
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={data.password}
                    // onChange={this.onChange}
                />
            <div>
                <button id="login" className="ui primary button" role="button">Sign in</button>                
            </div>
            </Form> 

        );
    }


}

export default LoginForm; 