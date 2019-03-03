import React, { Component } from 'react';
import { connect } from 'react-redux';
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
        const { user } = this.props;
        return (
            <div className="user-login-container">
                {!open && user ?
                    <Button color="inherit" className="-login">User</Button> :
                    <Button color="inherit" className="-login" onClick={this.openForm}>Login</Button>
                }
                {open ? <LoginModal closeForm={this.closeForm} showResponse={this.props.showResponse}/> : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.getIn(['auth', 'user']),
    };
};

const mapDispatchtoProps = (dispatch) => {
    return {
        dispatch
    };
};

export default connect(mapStateToProps, mapDispatchtoProps)(Login);
