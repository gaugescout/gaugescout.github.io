import DeviceService from "services/device_service.js";

export function getDeviceLocations() {
    // getDeviceLocations is an ActionCreator, it needs to return an action,
    // an object with a type property.
    // console.log("A book has been selected:", book);

    let service = new DeviceService;
    let test = service.doTest("monkey");
    console.log("test:"+test);
    service.getDeviceLocations();

    return {
      type: "RECEIVED_DEVICE_LOCATIONS",
      payload: {}
    };
  }
