import * as types from '../actions/types';

let id = Math.floor(Math.random()*4999)+1;

const reducer = (state = [{
    day: 1,
    time: 9,
    who: 'cyrus',
    id: 123123132
}], action) => {
  switch(action.type){
    case types.ADD_APPT:
      let newAppt = {
        day: action.day,
        time: parseInt(action.time),
        who: action.who,
        id: id++
      };
      return state.concat(newAppt)
    default:
      return state;
  }
}

export default reducer;
