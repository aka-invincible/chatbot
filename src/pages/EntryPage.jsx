import { useNavigate } from 'react-router-dom';

function EntryPage() {
  const navigate = useNavigate();

  return (
    <div className="entry-page">
      <div className='entry-content'>
        <p className='entry-heading'>Enter Into Student Info System</p>
        <button className='enroll-button' type="button" onClick={() => navigate('/chatbot')}>
          Enroll Now!
        </button>
      </div>
    </div>
  );
}

export default EntryPage;
