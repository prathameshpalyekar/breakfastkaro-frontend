import React, { Component } from 'react';
import { connect } from 'react-redux';
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

const mapStateToProps = (state) => {
    return {
        // isAuthenticated: state.getIn(['auth', 'isAuthenticated']),
        // isFetching: state.getIn(['auth', 'isFetching']),
        // errorMessage: state.getIn(['auth', 'errorMessage']),
        // user: state.getIn(['auth', 'user']),
    };
};

const mapDispatchtoProps = (dispatch) => {
    return {
        dispatch
    };
};

export default connect(mapStateToProps, mapDispatchtoProps)(Auth);