import { createChatBotMessage } from "react-chatbot-kit";


import GotIt from "../components/GotIt";
import Calendar from "../components/Calendar";
import NameInput from "../components/NameInput";
import AgeDropdown from "../components/AgeDropdown";

const config = {
    initialMessages: [createChatBotMessage(`Hello, Welcome to student info system!`, { widget: 'GotIt' })],
    widgets: [
        {
            widgetName: 'GotIt',
            widgetFunc: (props) => <GotIt {...props }/>,
            mapStateToProps: ['messages'],
        },
        {
            widgetName: 'Calendar',
            widgetFunc: (props) => <Calendar {...props }/>,
            mapStateToProps: ['messages'],
        },
        {
            widgetName: 'nameInput',
            widgetFunc: (props) => <NameInput {...props} />,
            mapStateToProps: ['messages'],
        },
        {
            widgetName: 'ageDropdown',
            widgetFunc: (props) => <AgeDropdown {...props} />,
            mapStateToProps: ['messages'],
          },
    ],
}

export default config