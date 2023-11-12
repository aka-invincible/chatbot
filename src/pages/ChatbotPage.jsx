import React from 'react'
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';

import config from "../bot/config";
import MessageParser from "../bot/MessageParser";
import ActionProvider from "../bot/ActionProvider";

const ChatbotPage = () => {
  return (
    <div>
      <header className='App-header'>
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
         />
      </header>
    </div>
  )
}

export default ChatbotPage
