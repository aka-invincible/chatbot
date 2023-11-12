import React from 'react';
import { useSelector } from 'react-redux';

function ExitPage() {
  const {
    currentStudent: { name, age },
  } = useSelector((state) => state.student);

  return (
    <div className="exit-page">
      <div className="exit-content">
        <h1 className="exit-heading">
          Congratulations!
        </h1>
        <p className="exit-text">
        Your name {name} aged {age} has been added to student system.
        </p>
        <p className="exit-note">
          You may now exit.
        </p>
      </div>
    </div>
  );
}

export default ExitPage;
