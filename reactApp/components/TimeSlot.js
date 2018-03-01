import React from 'react';

const TimeSlot = ({time}) => {
  return(
    <div style={{flexDirection: 'row'}}>
      <span style={{fontSize: 16}}>{time}</span>
      <button style={{border: '1px solid black', width: 100}}/>
    </div>
  )
};

export default TimeSlot;
