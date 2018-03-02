import React from 'react';
import PropTypes from 'prop-types';

const TimeSlot = ({appt, handleClick}) => {
  return(
    {appt ? (
      <td className="busy"
          onClick={()=>handleClick(appt)}>
        Phone {appt.who} <br />
        <em>{appt.number} </em>
      </td>) : (
        <td className="available"></td>
      )}
  );
};

TimeSlot.propTypes = {
    wordLetters: PropTypes.array
};

export default TimeSlot;
