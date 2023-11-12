import React, { useEffect, useState } from 'react';
import TimeSlots from './TimeSlots';
import { useDispatch, useSelector } from 'react-redux';
import { addCurrentEnrollmentTime } from '../slices/studentSlice';
import { createClientMessage } from 'react-chatbot-kit';

const TimeSelector = (props) => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [time, setTime] = useState('');
  const timeMorning = ['09:00', '10:00', '11:00', '12:00'];
  const timeEvening = ['02:00', '03:00', '04:00', '05:00'];

  const dispatch = useDispatch();
  const {
    currentStudent: { date },
  } = useSelector((state) => state.student);


  useEffect(() => {
    dispatch(addCurrentEnrollmentTime(time));
    console.log(time)

  }, [time])

  const handleTimeSlotClick = (timeSlot, daytime) => {
    // console.log(timeSlot);
    setSelectedTimeSlot(timeSlot);
    if(daytime === 'Morning')
      setTime(timeSlot+'AM');
    else
      setTime(timeSlot+'PM');
    const msg = (daytime === 'Morning') ? date + ' ' + timeSlot+'AM' : date + ' ' + timeSlot+'PM';

    if(!selectedTimeSlot)
    {
      const message = createClientMessage(msg);
      props.setState((prev) => ({
        ...prev,
      messages: [...prev.messages, message],
      }));
      props.actionProvider.handleEnterName();
    }
  };

  return (
    <div>
      <TimeSlots
        time={timeMorning}
        daytime={`Morning`}
        selectedTimeSlot={selectedTimeSlot}
        onTimeSlotClick={(timeSlot) => handleTimeSlotClick(timeSlot, 'Morning')}
      />
      <TimeSlots
        time={timeEvening}
        daytime={`Noon`}
        selectedTimeSlot={selectedTimeSlot}
        onTimeSlotClick={(timeSlot) => handleTimeSlotClick(timeSlot, 'Noon')}
      />
    </div>
  );
};

export default TimeSelector;
