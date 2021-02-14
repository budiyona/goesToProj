import React, { Component } from 'react';
import { Button, Password, Text } from '../../input';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="login">
                <Text>Username</Text>
                <Password>Password</Password>
                <Button>Login</Button>

            </div>
        );
    }
}

export default Login;
