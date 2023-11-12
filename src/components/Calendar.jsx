import React, { useState } from 'react';
import TimeSelector from './TimeSelector';
import { useDispatch } from 'react-redux';
import { addCurrentEnrollmentDate } from '../slices/studentSlice';

const Calendar = (props) => {
  const [highlightedIndex, setHighlightedIndex] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const dispatch = useDispatch();

  const handleSlide = (direction) => {
    const offset = direction === 'left' ? -3 : 3;
    setHighlightedIndex(null);
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() + offset);
      return newDate;
    });
    setSelectedDate(null);
  };

  const getDateAndDay = (index) => {
    const date = new Date(currentDate);
    date.setDate(date.getDate() + index);
    const day = date.toLocaleDateString('en-US', { weekday: 'short' });
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    return { date, day, month };
  };

  const handleDateClick = (index, fullDate) => {
    setHighlightedIndex(index);
    const selectedDate = fullDate.toString().substring(8, 10);
    const selectedDay = fullDate.toString().substring(0, 3);
    const selectedMonth = fullDate.toString().substring(4, 7);

    const selectedFullDate = selectedDate + ' ' + selectedMonth + ', ' + selectedDay;
    dispatch(addCurrentEnrollmentDate(selectedFullDate));

    setSelectedDate(selectedFullDate);
  };

  return (
    <>
      <div>
        <div className="date-slider">
          <button className='left-slide' onClick={() => handleSlide('left')}>&lt;</button>
          <div className="date-slide">
            {Array.from({ length: 3 }).map((_, index) => {
              const { date, day, month } = getDateAndDay(index);
              const isHighlighted = index === highlightedIndex;
              const dateContainerClass = isHighlighted ? 'date-container highlighted' : 'date-container';

              return (
                <div className={dateContainerClass} key={index} onClick={() => handleDateClick(index, date)}>
                  <div>{date.toString().substring(8, 11) + ' ' + month}</div>
                  <div>{day}</div>
                </div>
              );
            })}
          </div>
          <button className='right-slide' onClick={() => handleSlide('right')}>&gt;</button>
        </div>
      </div>
      {selectedDate && <TimeSelector {...props} highlightedIndex={highlightedIndex} />}
    </>
  );
};

export default Calendar;
