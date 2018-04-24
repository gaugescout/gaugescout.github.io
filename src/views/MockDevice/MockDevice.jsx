import React from "react";
// react component plugin for creating a beautiful datetime dropdown picker
import Datetime from "react-datetime";
// react component plugin for creating beatiful tags on an input
import TagsInput from "react-tagsinput";
// react plugin that creates slider
import Nouislider from "react-nouislider";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import FormControl from "material-ui/Form/FormControl";
import FormControlLabel from "material-ui/Form/FormControlLabel";
import InputLabel from "material-ui/Input/InputLabel";
import Switch from "material-ui/Switch";
import Select from "material-ui/Select";
import MenuItem from "material-ui/Menu/MenuItem";

// material-ui-icons
import Today from "material-ui-icons/Today";
import LibraryBooks from "material-ui-icons/LibraryBooks";
import AvTimer from "material-ui-icons/AvTimer";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import RegularCard from "components/Cards/RegularCard.jsx";
import IconCard from "components/Cards/IconCard.jsx";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.jsx";
import ImageUpload from "components/CustomUpload/ImageUpload.jsx";
import IconButton from "components/CustomButtons/IconButton.jsx";
import Button from "components/CustomButtons/Button.jsx";

import BookList from "../../components/Books/BooksList";


import extendedFormsStyle from "assets/jss/material-dashboard-pro-react/views/extendedFormsStyle.jsx";

class MockDevice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedA: true,
      checkedB: false,
      simpleSelect: "",
      multipleSelect: [],
      tags: ["pizza", "pasta", "parmesan"]
    };
    this.handleTags = this.handleTags.bind(this);
  }
  handleSimple = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleMultiple = event => {
    this.setState({ multipleSelect: event.target.value });
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  handleTags(regularTags) {
    this.setState({ tags: regularTags });
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div>
          <h2>List</h2>
          <BookList />
        </div>
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
                        dropdownList={[
                          "Device 1",
                          "Device 2",
                          "Device 3",
                          "Device 4"
                        ]}
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

export default withStyles(extendedFormsStyle)(MockDevice);
