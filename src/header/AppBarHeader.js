import React, {Component}from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */

export default class AppBarHeader extends Component {
    constructor() {
        super();
        this.state = {open: false};
    }

    handleChange() {
        this.setState({open: !this.state.open});
    }

    render() {
        return (
            <div>
                <AppBar
                    onClick={()=>{this.handleChange()}}
                    title="Device"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"/>
                <Drawer open={this.state.open}>
                    <MenuItem  onClick={()=>{this.handleChange()}}>Menu Item</MenuItem>
                    <MenuItem  onClick={()=>{this.handleChange()}}>Menu Item 2</MenuItem>
                </Drawer>
            </div>

        )
    }
}


