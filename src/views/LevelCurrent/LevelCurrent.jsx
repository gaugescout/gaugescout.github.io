  /*
    {
      "DeviceID":1,
      "LocationName":"The Scott Household",
      "TotalHeight":10, 
      "CurrentLevelHeight":7,
      "MeasureInterval":1
    }
  */


import React from "react";
import axios from 'axios';

// react plugin for creating charts
import ChartistGraph from "react-chartist";

// material-ui components
import withStyles from "material-ui/styles/withStyles";

// material-ui-icons
import Timeline from "material-ui-icons/Timeline";

// core components
import Heading from "components/Heading/Heading.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import ChartCard from "components/Cards/ChartCard.jsx";
import IconCard from "components/Cards/IconCard.jsx";

// services
import DeviceService from "services/device_service.js";

import {
  roundedLineChart,
  straightLinesChart,
  simpleBarChart,
  colouredLineChart,
  multipleBarsChart,
  colouredLinesChart,
  pieChart
} from "variables/charts.jsx";

import chartsStyle from "assets/jss/material-dashboard-pro-react/views/chartsStyle.jsx";

class Charts extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data:{}
    };
    fetch('http://gauge-scout.getsandbox.com/levels')
    .then(response => response.json())
    .then(data => console.log("data:", data));
    //.then(data => this.setState({level: data}));
    
    /* 
      TODO: 
      - Get a list and grab the first item
    */
  }  
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Heading
          textAlign="center"
          title="Current Level"
          category={
            <span>
            </span>
          }
        />
        <GridContainer>
          <ItemGrid xs={12} sm={12} md={8}>
            <IconCard
              icon={Timeline}
              iconColor="blue"
              title="Current Fuel Level"
              content={
                <ChartistGraph
                  data={pieChart.data}
                  type="Pie"
                  options={pieChart.options}
                />
              }
              footer={
                <div>
                  <h6 className={classes.legendTitle}>Legend</h6>
                  <i className={"fas fa-circle " + classes.info} /> Apple{` `}
                  <i
                    className={"fas fa-circle " + classes.warning}
                  /> Samsung{` `}
                  <i className={"fas fa-circle " + classes.danger} /> Windows
                  Phone{` `}
                </div>
              }
            />
          </ItemGrid>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(chartsStyle)(Charts);
