import { useState } from 'react';
import { createClientMessage } from 'react-chatbot-kit';
import { useDispatch } from 'react-redux';
import { addCurrentStudentAge } from '../slices/studentSlice';

function AgeDropdown(props) {
  const [selectedAge, setSelectedAge] = useState('');
  const [isSelectDisabled, setIsSelectDisabled] = useState(false);

  const dispatch = useDispatch();

  const handleAgeChange = (event) => {
    setSelectedAge(event.target.value);
    setIsSelectDisabled(true);

    dispatch(addCurrentStudentAge(event.target.value));

    props.actionProvider.handleStudentEnrollment();
  };

  const ageOptions = [];

  for (let age = 18; age <= 40; age++) {
    ageOptions.push(
      <option key={age} value={age}>
        {age}
      </option>
    );
  }

  return (
    <div className="age-dropdown">
      <select id="age" value={selectedAge} onChange={handleAgeChange} disabled={isSelectDisabled}>
        <option value="">Select age</option>
        {ageOptions}
      </select>
    </div>
  );
}

export default AgeDropdown;
