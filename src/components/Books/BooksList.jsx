import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getDeviceLocations} from '../../redux/actions/index';
import DeviceService from "services/device_service.js";
 
class BookList extends Component {
    constructor(){
        super();

        // TODO: Load data from API, save response in BookList reducer just for a test
        // curl -X GET 'http://gaugescoutapi.azurewebsites.net/api/DeviceLocations'
        // DeviceService.getDeviceLocations();
        // let service = new DeviceService;
        // let test = service.doTest("monkey");
        // console.log("test:"+test);
        // service.getDeviceLocations();
        // this.props.getDeviceLocations();
    }
    componentDidMount() {
        this.props.getDeviceLocations();
    }
    renderList() {
        return this.props.deviceLocations.map((location) => {
            return (
                <li 
                    key={location.id}>
                    {location.address}
                </li>
            );
        });
    }

    render() {
        return (
            <ul>
                { this.renderList() }
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        deviceLocations: state.deviceLocations
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getDeviceLocations: getDeviceLocations }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
