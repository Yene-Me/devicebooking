import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import * as fireBase from 'firebase'
import config from "./util/Config"
import DeviceList from "./deviceList/DeviceList"
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarHeader from './header/AppBarHeader'

class App extends Component {

    constructor() {
        super();
        this.state = {title: "VF", devices: ""};
        this._fireBase = fireBase.initializeApp(config.CONFIG);
        injectTapEventPlugin();
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBarHeader></AppBarHeader>
                    <DeviceList fireBase={this._fireBase}></DeviceList>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default App;
