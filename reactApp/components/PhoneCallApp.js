import React from 'react';
import { connect } from 'react-redux';
import { addAppt } from '../actions/index';
import TimeSlot from './TimeSlot';
import _ from 'underscore';
import Modal from 'react-modal';
import WeekTimeTable from './WeekTimeTable';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const modalStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class PhoneCallApp extends React.Component {
  constructor(){
    super();
    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  afterOpenModal() {
    this.subtitle.style.color = '#f00';
  }

  render() {
    return (
      <div style={{flexDirection: 'row'}}>
        <div style={{flexDirection: 'column'}}>
          {_.map(_.range(9,18), (time) => (
            <p key={time}>
              {time} <button style={{width: 100}} onClick={this.openModal}/></p>))}
        </div>
        <Modal isOpen={this.state.modalIsOpen}
               onAfterOpen={this.state.afterOpenModal}
               onRequestClose={this.closeModal}
               style={modalStyles}
               contentLabel="Appointment Maker">
            <h2 ref={subtitle => this.subtitle = subtitle}>Edit something</h2>
            <form>
              <input />
              <input />
            </form>
            <button onClick={this.closeModal}>close</button>
        </Modal>
        <MuiThemeProvider>
          <WeekTimeTable />
        </MuiThemeProvider>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    days: state
});

const mapDispatchToProps = (dispatch) => ({
    add: (time, who) => { dispatch ( addAppt(time, who) ) }
});

PhoneCallApp = connect(mapStateToProps, mapDispatchToProps)(PhoneCallApp);

export default PhoneCallApp;
