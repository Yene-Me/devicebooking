import React, {Component} from 'react';
import {blue500} from 'material-ui/styles/colors';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


export default class DeviceItem extends Component {

    constructor(props) {
        super();
        this._item = props;
        this._eachItemData = [];

        this._eachItemData.push(this._item["deviceItem"]);

        console.log(this._eachItemData);
    }

    componentDidMount() {


    }

    render() {

        return (
            <Card >
                { this._eachItemData.map(function (item, index) {
                    return (
                        <div key={index}>
                            <CardHeader
                                        avatar="/ipad.svg"
                                        title={item["device_model"]}
                                        subtitle={item["status"]}
                                        actAsExpander={false}
                                        showExpandableButton={false}/>
                            <CardText>
                                {item["device_userAgent"]}
                            </CardText>
                        </div>
                    )


                })}
            </Card>

        );
    }
}


