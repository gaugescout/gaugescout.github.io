import DeviceService from "services/device_service.js";

export function getDeviceLocations() {
    // getDeviceLocations is an ActionCreator, it needs to return an action,
    // an object with a type property.

    let service = new DeviceService;
    let requestPromise = service.getDeviceLocations();
    return {
      type: "RECEIVED_DEVICE_LOCATIONS",
      payload: requestPromise
    };
  }

  export function getDeviceList() {
    // getDeviceLocations is an ActionCreator, it needs to return an action,
    // an object with a type property.

    let service = new DeviceService;
    let requestPromise = service.getDeviceList();
    return {
      type: "RECEIVED_DEVICE_LIST",
      payload: requestPromise
    };
  }
