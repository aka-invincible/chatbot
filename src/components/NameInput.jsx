import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCurrentStudentName } from '../slices/studentSlice';

function NameInput(props) {
  const [name, setName] = useState('');
  const [isDisable, setIsDisabled] = useState(false);

  const dispatch = useDispatch();

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      props.actionProvider.handleEnterAge();
      dispatch(addCurrentStudentName(name));
      setIsDisabled(true);
    }
  };

  return (
    <div className="name-input">
      <input
        className='name-input-box'
        value={name}
        type='text'
        onChange={(e) => setName(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={isDisable}
      />
    </div>
  );
}

export default NameInput;
