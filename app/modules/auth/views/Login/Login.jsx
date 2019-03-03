import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import LoginModal from './LoginModal/LoginModal';
import './Login.less';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            anchorEl: null,
        };
        this.openForm = this.openForm.bind(this);
        this.closeForm = this.closeForm.bind(this);
        this.showMenu = this.showMenu.bind(this);
        this.hideMenu = this.hideMenu.bind(this);
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

    showMenu(event) {
        this.setState({
            anchorEl: event.currentTarget
        });
    }

    hideMenu() {
        this.setState({
            anchorEl: null
        });
    }

    renderUser() {
        console.log(this.props)
        const { anchorEl } = this.state;
        const ariaOwns = anchorEl ? 'simple-menu' : undefined;
        const { user } = this.props;
        const { admin } = user;
        return (
            <span className="-user-menu">
                <IconButton aria-owns={ariaOwns} aria-haspopup="true" className="-user-account" onClick={this.showMenu}>
                    <AccountCircle/>
                </IconButton>
                <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.hideMenu} className="-user-menu-list">
                    <MenuItem className="-menu-item" onClick={this.hideMenu}>
                        <Link to="/profile" className="-menu-item-link">
                            Profile
                        </Link>
                    </MenuItem>
                    <MenuItem className="-menu-item" onClick={this.hideMenu}>
                        <Link to="/orders" className="-menu-item-link">
                            My Orders
                        </Link>
                    </MenuItem>
                    <MenuItem className="-menu-item" onClick={this.hideMenu}>
                        <Link to="/admin" className="-menu-item-link">
                            Admin Dashboard
                        </Link>
                    </MenuItem>
                    <MenuItem className="-menu-item" onClick={this.hideMenu}>Logout</MenuItem>
                </Menu>
            </span>
        );
    }

    render() {
        const { open } = this.state;
        const { user } = this.props;
        return (
            <div className="user-login-container">
                {!open && user ?
                    this.renderUser() :
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
