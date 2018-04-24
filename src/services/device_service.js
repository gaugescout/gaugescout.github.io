
import axios from 'axios';
import querystring from 'query-string';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getDeviceLocations} from '../redux/actions/index';


/**
 * SalesforceService - API client for Salesforce calls
 * TODO: This is currently a stub to extra API service calls. Still need to use it in code
 * http://gaugescoutapi.azurewebsites.net/swagger/
 */
class DeviceService {

  /*
    {
      "DeviceID":1,
      "LocationName":"The Scott Household",
      "TotalHeight":10, 
      "CurrentLevelHeight":7,
      "MeasureInterval":1
    }
  */



  constructor() {

    connect(mapStateToProps, mapDispatchToProps)(DeviceService);

    // this.SERVICE_URL = "https://jsonplaceholder.typicode.com";
    this.SERVICE_DEVICE_LOCATIONS_URL = "http://gaugescoutapi.azurewebsites.net/api/DeviceLocations";
    this.CORS_PROXY_URL = "https://cors-anywhere.herokuapp.com/";

    console.log("Device Service constructor");

  }

  doTest(msg) {
    return "msg: "+msg+"!";
  }

  /**
   * Get auth using username and password
   */
  getDeviceLocations() {
    console.log("getDeviceLocations!");
    // Below is username + password flow
    let url = this.CORS_PROXY_URL + this.SERVICE_DEVICE_LOCATIONS_URL;
    axios.get(url)
    .then(this.onGetDeviceLocations.bind(this))   
    .catch(this.onGetDeviceLocationsError.bind(this));
  }

  /**
   * Handle Auth
   * @param {object} response - response.data is what we need
   */
  onGetDeviceLocations(response) {
    console.log("onGetDeviceLocations:", response.data );
    // this.props.getDeviceLocations(response.data);
  }

  /**
   * Handle Auth error
   * @param {object} error 
   */
  onGetDeviceLocationsError(error) {
    console.log('onGetDeviceLocationsError ', error);
  }

}

function mapStateToProps(state) {
  return {
      books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getDeviceLocations: getDeviceLocations }, dispatch);
}




export default DeviceService;
