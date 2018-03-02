import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TimePicker from 'material-ui/TimePicker';
const noon = new Date();
noon.setHours(12);
noon.setMinutes(0);
noon.setSeconds(0);
const MyTimePicker = () => (
    <MuiThemeProvider>
      <TimePicker
        hintText="click to choose a time"
        defaultTime={noon}
        onChange={(e, x) => this.props.chooseTime(x)}
      />
    </MuiThemeProvider>
);

export default MyTimePicker;
