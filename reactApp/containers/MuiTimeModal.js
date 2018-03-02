import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class MuiTimeModal extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false;
    }
  }

  handleOpen() {
    this.setState({modalIsOpen: true});
  }

  handleClose(action) {
    this.setState({modalIsOpen: false});
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={()=>this.handleClose()} />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onClick={()=>this.handleSubmit()} />
    ];

    return(<div>
      <Dial
    </div>)
  }

}
