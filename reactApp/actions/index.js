import * as types from './types';

export const addAppt = (time, who, day) => {
  console.log('day in addAppt: ',day)
  return {
    type: types.ADD_APPT,
    time: time,
    day: day,
    who: who
  };
};

export const modifyAppt = (id) => {
  return {
    type: types.MODIFY_APPT,
    id: id
  };
};

export const cancelAppt = (id) => {
  return {
    type: types.CANCEL_APPT,
    id: id
  };
};
