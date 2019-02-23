import React, { Component } from 'react';
import Login from './Login/Login';
const ADMIN_PATH = '/admin';

class Auth extends Component {
    renderLogin() {
        return (
            <Login/>
        );
    }

    render() {
        const { pathname } = this.props.location || {};
        if (pathname !== ADMIN_PATH) {
            return null;
        }

        return (
            <div>
                {this.renderLogin()}
            </div>
        )
    }
}

export default Auth;