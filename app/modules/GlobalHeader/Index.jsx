import React, { Component } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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

    render() {
        const { open } = this.state;
        const sideList = (
            <List>
                <ListItem>
                    <ListItemText primary="A"/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="B"/>
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary="C"/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="D"/>
                </ListItem>
            </List>
        );
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Menu" onClick={this.openDrawer}>
                            <MenuIcon/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <SwipeableDrawer open={open} onClose={this.closeDrawer} onOpen={this.openDrawer}>
                    <div tabIndex={0} role="button" onClick={this.closeDrawer} onKeyDown={this.closeDrawer}>
                        {sideList}
                    </div>
                </SwipeableDrawer>
            </div>
        )
    }
}

export default GlobalHeader;