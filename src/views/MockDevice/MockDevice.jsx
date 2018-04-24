// import React from "react";
import React, {Component} from 'react';
import Datetime from "react-datetime";
import TagsInput from "react-tagsinput";
import Nouislider from "react-nouislider";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import FormControl from "material-ui/Form/FormControl";
import FormControlLabel from "material-ui/Form/FormControlLabel";
import InputLabel from "material-ui/Input/InputLabel";


// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import RegularCard from "components/Cards/RegularCard.jsx";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import extendedFormsStyle from "assets/jss/material-dashboard-pro-react/views/extendedFormsStyle.jsx";


// Redux stuff
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getDeviceList} from '../../redux/actions/index';
import {getDeviceLocations} from '../../redux/actions/index';
import DeviceService from "services/device_service.js";



class MockDevice extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getDeviceList();
  }
  renderDeviceList() {
    return this.props.deviceList.map((location) => {
        return (
            location.name
        );
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>

        <GridContainer>

          <ItemGrid xs={12} sm={12} md={4}>
            <RegularCard
              content={
                <div>
                  <div>
                    <InputLabel className={classes.label}>Device Selection</InputLabel>
                    <br />
                    <FormControl fullWidth>
                      <CustomDropdown
                        buttonColor="info"
                        buttonText="Select device"
                        buttonProps={{
                          round: false,
                          style: { marginBottom: "0" }
                        }}
                        dropdownHeader="Device list"
                        dropdownList={ this.renderDeviceList() }
                      />
                    </FormControl>
                  </div>
                  <div>
                    <br />
                    <InputLabel className={classes.label}>Level Entry Date</InputLabel>
                    <br />
                    <FormControl fullWidth>
                      <Datetime
                        timeFormat={false}
                        inputProps={{ placeholder: "Date Picker Here" }}
                      />
                    </FormControl>
                  </div>
                </div>
              }
            />

            <RegularCard
              content={
                <div>
                  <InputLabel className={classes.label}>Select Level</InputLabel><br />
                  <h3>10</h3>
                  <Nouislider
                    start={[40]}
                    connect={[true, false]}
                    step={1}
                    range={{ min: 0, max: 100 }}
                  />
                  <br />
                  <Button
                    color="primary"
                    size="lg"
                  >
                    Submit Level
                  </Button>
                </div>
              }
            />
          </ItemGrid>

        </GridContainer>


      </div>
    );
  }
}

// Redux Mapping
function mapStateToProps(state) {
  return {
      deviceList: state.deviceList,
      deviceLocations: state.deviceLocations
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getDeviceList: getDeviceList, getDeviceLocations:getDeviceLocations }, dispatch);
}

// Component export
const MockDeviceWithStyles = withStyles(extendedFormsStyle)(MockDevice);
export default connect(mapStateToProps, mapDispatchToProps)(MockDeviceWithStyles);

