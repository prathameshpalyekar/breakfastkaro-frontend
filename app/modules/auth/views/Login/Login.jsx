import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import LoginModal from './LoginModal/LoginModal';
import './Login.less';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.openForm = this.openForm.bind(this);
        this.closeForm = this.closeForm.bind(this);
    }

    openForm() {
        this.setState({
            open: true
        });
    }

    closeForm() {
        this.setState({
            open: false
        });
    }

    render() {
        const { open } = this.state;
        return (
            <div className="user-login-container">
                <Button color="inherit" className="-login" onClick={this.openForm}>Login</Button>
                {true ? <LoginModal closeForm={this.closeForm}/> : null}
            </div>
        )
    }
}

export default Login;