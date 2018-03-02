import React from 'react';
import { connect } from 'react-redux';
import { addAppt } from '../actions/index';
import TimeSlot from './TimeSlot';
import _ from 'underscore';
import Modal from 'react-modal';
import WeekTimeTable from './WeekTimeTable';
import MyTimePicker from './MyTimePicker';
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
      modalIsOpen: false,
      currDay: 0
    };

    //this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  componentWillMount(){
    Modal.setAppElement('#root');
  }
  openModal(dayOfWeek) {
    this.setState({modalIsOpen: true, currDay: dayOfWeek});
  }

  closeModal() {
    console.log('this.state.currDay: ', this.state.currDay);
    if(this.refs.guessTime && this.refs.guessWho){
      this.props.add(this.refs.guessTime.value, this.refs.guessWho.value, this.state.currDay);
    }
    this.setState({modalIsOpen: false, currDay: 0});
  }

  afterOpenModal() {
    this.subtitle.style.color = '#f00';
  }

  render() {
    console.log(this.props.days);
    let groupByTime = _.groupBy(_.sortBy(this.props.days, obj => obj.day), obj => obj.time);
    console.log(groupByTime);
    return (
      <div>
        <table>
          <thead>
            <tr>
              {['','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map( val => (<th>{val}</th>))}
            </tr>
            <tr>
              {['Time','','','','',''].map(val => (<th>{val}</th>))}
            </tr>
          </thead>
          <tbody>
          {_.map(_.range(9,18), time => {
            let timeOfDay = time;
            if(time < 12){
              time = time + ' A.M.';
            }else if(time === 12){
              time = time + ' P.M.';
            }else{
              time = `${time%12} P.M.`;
            }
            return(<tr>
              <td>{time}</td>
              {_.map(_.range(1,6), dayOfWeek => {
                if(groupByTime[timeOfDay] && groupByTime[timeOfDay][0].day === dayOfWeek){
                  return (<td className="busy">Phone {groupByTime[timeOfDay][0].who}</td>)
                }
                return (<td onClick={() => this.openModal(dayOfWeek)}>{dayOfWeek}</td>);
              })
              }
            </tr>);

            //return ({(<td>{time}</td>).concat({_.map(range(1,6), dayOfWeek => (<td>{dayOfWeek}</td>))})});
          })}
          </tbody>
        </table>



        <Modal isOpen={this.state.modalIsOpen}
               onAfterOpen={this.state.afterOpenModal}
               onRequestClose={this.closeModal}
               style={modalStyles}
               contentLabel="Appointment Maker">
            <h2 ref={subtitle => this.subtitle = subtitle}>Edit something</h2>
            <div style={{flexDirection: 'column'}}>
              <div style={{flexDirection: 'row'}}>

                <label>Time: </label>
                    <MyTimePicker />

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
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    days: state
});

const mapDispatchToProps = (dispatch) => ({
    add: (time, who, day) => { dispatch ( addAppt(time, who, day) ) }
});

PhoneCallApp = connect(mapStateToProps, mapDispatchToProps)(PhoneCallApp);

export default PhoneCallApp;
