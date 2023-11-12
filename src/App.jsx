import './App.css';
import 'react-chatbot-kit/build/main.css';
import ChatbotPage from './pages/ChatbotPage';
import { Route, Routes } from 'react-router-dom';
import EntryPage from './pages/EntryPage';
import ExitPage from './pages/ExitPage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<EntryPage />} />
        <Route path="/chatbot" element={<ChatbotPage />} />
        <Route path="/exitPage" element={<ExitPage />} />
      </Routes>
    </div>
  );
}

export default App;
