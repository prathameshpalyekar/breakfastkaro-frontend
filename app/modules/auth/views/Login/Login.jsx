import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './Login.less';

class Login extends Component {
    render() {
        return (
            <div className="user-login-container">
                <Button color="inherit" className="-login">Login</Button>
            </div>
        )
    }
}

export default Login;