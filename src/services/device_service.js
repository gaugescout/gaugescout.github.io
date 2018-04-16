
import axios from 'axios';
import querystring from 'query-string';


/**
 * SalesforceService - API client for Salesforce calls
 * TODO: This is currently a stub to extra API service calls. Still need to use it in code
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
    // this.SERVICE_URL = "https://jsonplaceholder.typicode.com";
    this.SERVICE_DEVICE_LEVELS_URL = "http://gauge-scout.getsandbox.com/levels";
    this.CORS_PROXY_URL = "https://cors-anywhere.herokuapp.com/";

    console.log("Device Service constructor");

  }

  doTest(msg) {
    return "msg: "+msg+"!";
  }

  /**
   * Get auth using username and password
   */
  getCurrentLevel() {
    // Below is username + password flow
    let url = this.CORS_PROXY_URL + this.SERVICE_DEVICE_LEVELS_URL;
    axios.get(url)
    .then(this.onGetCurrentLevel.bind(this))   
    .catch(this.onGetCurrentLevelError.bind(this));
  }

  /**
   * Handle Auth
   * @param {object} response - response.data is what we need
   */
  onGetCurrentLevel(response) {
    console.log("onGetCurrentLevel:",response.data );
  }

  /**
   * Handle Auth error
   * @param {object} error 
   */
  onGetCurrentLevelError(error) {
    console.log('error ' + error);
  }

}

export default DeviceService;
