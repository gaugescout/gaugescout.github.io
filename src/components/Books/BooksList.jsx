import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getDeviceList} from '../../redux/actions/index';
import {getDeviceLocations} from '../../redux/actions/index';
import DeviceService from "services/device_service.js";
 
class BookList extends Component {
    constructor(){
        super();
    }
    componentDidMount() {
        this.props.getDeviceList();
        // this.props.getDeviceLocations();
    }
    renderDeviceList() {
        return this.props.deviceList.map((location) => {
            return (
                <li 
                    key={location.id}>
                    {location.name}
                </li>
            );
        });
    }

    render() {
        return (
            <ul>
                { this.renderDeviceList() }
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        deviceList: state.deviceList,
        deviceLocations: state.deviceLocations
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getDeviceList: getDeviceList, getDeviceLocations:getDeviceLocations }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
