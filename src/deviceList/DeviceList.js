import React, {Component} from 'react';
import DeviceItem from '../deviceItem/DeviceItem'

export default class DeviceList extends Component {

    constructor(props) {
        super();
        this._fireBase = props["fireBase"];
        this.state = {title: "VF", devices: ""};
    }

    componentDidMount() {

        let database = this._fireBase.database();
        var starCountRef = database.ref('/devices/');

        starCountRef.on('value', snapshot => {
            let itemColl = [];
            for (let item in snapshot.val()) {
                itemColl.push(snapshot.val()[item])
            }
            console.log(itemColl);
            this.setState(
                {
                    devices: itemColl
                }
            )
        });

    }

    render() {
        if (!this.state.devices) {
            return (
                <p>Loading / You have no devices</p>
            )
        }
        return (

            <div className="mainList">

                {this.state.devices.map((item, index)=> {

                    return  <DeviceItem key={index} deviceItem={item}></DeviceItem>;

                })}
            </div>
        );
    }
}


