import React from 'react';
import { Form, Button } from "semantic-ui-react";

class LoginForm extends React.Component {
    state = {
        data: {
            email: "",
            password: ""
        },        
    }; 

onSubmit = () => {
    this.props.submit(this.state.data);
}
onChange = event => {
    const target = event.target;
    this.setState({
        data:{...this.state.data,[target.name] : target.value }
    });
}

    render(){
        const data = this.state;
        return (
            <Form onSubmit={this.onSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="test@test.com"
                    value={data.email}
                    onChange={this.onChange}
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={data.password}
                    onChange={this.onChange}
                />
            <div>
                <Button id="login" className="ui primary button" role="button">Sign in</Button>                
            </div>
            </Form> 

        );
    }


}

export default LoginForm; 