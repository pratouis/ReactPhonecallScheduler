import React from 'react';
import Modal from 'react-modal';
import MyTimePicker from './MyTimePicker';
class TimeModal extends React.Component {
  constructor(){
    super();
    this.state = {
      modalIsOpen: false
    };
  }

  render() {
    return(<Modal isOpen={this.state.modalIsOpen}
           onAfterOpen={this.state.afterOpenModal}
           onRequestClose={this.closeModal}
           style={modalStyles}
           contentLabel="Appointment Maker">
        <h2 ref={subtitle => this.subtitle = subtitle}>Edit something</h2>
        <div>
          <div style={{flexDirection: 'row'}}>

            <label>Time: </label>
            <MyTimePicker chooseTime={(date) => }/>

            <input type="number" ref="guessTime" />
            {/* <span id="modalShowTime" value={this.refs.guessTime ? this.refs.guessTime.value : 9}>9</span>
            <input type="range" min="9" max="17" step="1"

                   ref="guessTime" /> */}

          </div>
          <div style={{flexDirection: 'row'}}>
            <label>Who: </label><input type="text" ref="guessWho"/>
          </div>
        </div>
        <button onClick={this.closeModal}>close</button>
    </Modal>)
  }
}
