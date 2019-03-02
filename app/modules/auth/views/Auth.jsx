import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Login from './Login/Login';
import './Auth.less';

const SNACKBAR_ANCHOR = {
    vertical: 'bottom',
    horizontal: 'center',
};

const SNACKBAR_CONTENT_PROPS = {
    'aria-describedby': 'message-id' 
};

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showResponse: false
        };
        this.hideResponse = this.hideResponse.bind(this);
        this.showResponse = this.showResponse.bind(this);
        this.renderResponse = this.renderResponse.bind(this);
    }

    hideResponse() {
        this.setState({
            showResponse: false
        });
    }

    showResponse(response) {
        this.setState({
            showResponse: true,
            response
        });
    }

    renderLogin() {
        return (
            <Login showResponse={this.showResponse}/>
        );
    }

    renderResponse() {
        const { response } = this.state;
        return (
            <span id="message-id" className="-message">{response}</span>
        );
    }

    render() {
        const { pathname } = this.props.location || {};
        const { showResponse, response } = this.state;

        return (
            <div className="auth-container">
                {this.renderLogin()}
                <Snackbar
                    className="-snackbar"
                    anchorOrigin={SNACKBAR_ANCHOR}
                    open={showResponse}
                    onClose={this.hideResponse}
                    ContentProps={SNACKBAR_CONTENT_PROPS}
                    autoHideDuration={6000}
                >
                    <SnackbarContent className="-message-container" message={this.renderResponse()}/>
                </Snackbar>
            </div>
        )
    }
}

export default Auth;