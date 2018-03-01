import * as types from './types';

export const addAppt = (time, who) => {
  return {
    type: types.ADD_APPT,
    time: time,
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
