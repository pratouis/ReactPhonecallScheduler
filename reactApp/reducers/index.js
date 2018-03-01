import * as types from '../actions/types';

let id = Math.floor(Math.random()*4999)+1;

const reducer = (state = [{
    date: "2018-03-01T18:31:30.123Z",
    time: 9,
    who: 'cyrus',
    id: 123123132
}], action) => {
  switch(action.type){
    case types.ADD_APPT:
      let newAppt = {
        date: new Date().toISOString(),
        time: action.time || 10,
        who: action.who || 'susu',
        id: id++
      };
      return state.concat(newAppt)
    default:
      return state;
  }
}

export default reducer;
