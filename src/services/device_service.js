
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

  constructor() {
    this.SERVICE_DEVICE_LIST_URL = "http://gaugescoutapi.azurewebsites.net/api/Devices";
    this.SERVICE_DEVICE_LOCATIONS_URL = "http://gaugescoutapi.azurewebsites.net/api/DeviceLocations";
    this.CORS_PROXY_URL = "https://cors-anywhere.herokuapp.com/";
  }

  /**
   * Get Device List
   */
  getDeviceList() {
    console.log("getDeviceLocations!");
    let url = this.CORS_PROXY_URL + this.SERVICE_DEVICE_LIST_URL;
    let requestPromise = axios.get(url);
    return requestPromise;
  }


  /**
   * Get Device Location
   */
  getDeviceLocations() {
    console.log("getDeviceLocations!");
    let url = this.CORS_PROXY_URL + this.SERVICE_DEVICE_LOCATIONS_URL;
    let requestPromise = axios.get(url);
    return requestPromise;
  }

}


export default DeviceService;
