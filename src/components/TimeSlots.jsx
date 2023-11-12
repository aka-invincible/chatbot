import React from 'react';

const TimeSlots = ({ time, daytime, selectedTimeSlot, onTimeSlotClick }) => {
  return (
    <>
      <div className='daytime'>{daytime}</div>
      <div className='time-container'>
        {time.map((slot, index) => {
          const isHighlighted = selectedTimeSlot === slot;
          const slotContainerClass = isHighlighted ? 'slot-container highlighted' : 'slot-container';
          return (
            <div
              className={slotContainerClass}
              key={index}
              onClick={() => onTimeSlotClick(slot)}
            >
              {slot}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TimeSlots;
