import React, { Component } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import './GlobalHeader.less';

const MENU_LIST = [{
    label: 'Home',
    link: '/',
}, {
    label: 'About Us',
    link: '/about-us',
}, {
    label: 'Terms & Conditions',
    link: '/terms',
}, {
    label: 'Privacy Policy',
    link: '/policy',
}];

class GlobalHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.openDrawer = this.openDrawer.bind(this);
        this.closeDrawer = this.closeDrawer.bind(this);
    }

    openDrawer() {
        this.setState({
            open: true
        });
    }

    closeDrawer() {
        this.setState({
            open: false
        });
    }

    renderMenu() {
        return (
            <List className="-menu-list">
                {MENU_LIST.map((menu, index) => {
                    const { label, link } = menu;
                    return (
                        <Link to={link} key={index}>
                            <ListItem button className="-menu">
                                <div className="-text">
                                    {label}
                                </div>
                            </ListItem>
                        </Link>
                    );
                })}
            </List>
        );
    }

    render() {
        const { open } = this.state;
        return (
            <div className="global-header">
                <AppBar position="static" className="-app-bar">
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Menu" onClick={this.openDrawer}>
                            <MenuIcon/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <SwipeableDrawer open={open} onClose={this.closeDrawer} onOpen={this.openDrawer} className="-drawer">
                    <div tabIndex={0} role="button" onClick={this.closeDrawer} onKeyDown={this.closeDrawer} className="-container">
                        {this.renderMenu()}
                    </div>
                </SwipeableDrawer>
            </div>
        )
    }
}

export default GlobalHeader;