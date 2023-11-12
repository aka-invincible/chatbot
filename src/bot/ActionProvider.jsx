import React from "react";
import { createClientMessage } from "react-chatbot-kit";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveStudentInfo } from '../slices/studentSlice';
const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const updateState = (message) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  const initialAction = () => {
    const message = createClientMessage("Got it!", {
      delay: 1000,
    });
    updateState(message);
    handlePickDate();
  };

  const handlePickDate = () => {
    const message = createChatBotMessage("Pick a date", {
      delay: 1000,
      widget: ["Calendar"],
    });
    updateState(message);
  };

  const handleEnterName = () => {
    const message = createChatBotMessage("Enter Your Name", {
      delay: 1000,
      widget: "nameInput",
    });
    updateState(message);
  };

  const handleEnterAge = () => {
    const message = createChatBotMessage("Enter Your Age", {
      delay: 1000,
      widget: "ageDropdown",
    });
    updateState(message);
  };


  const handleStudentEnrollment = () => {
    const message = createChatBotMessage(
      "Thank you. In 5 seconds bot will exit."
    );

    updateState(message);

    let count = 5;

    setInterval(() => {
      const countMessage = createChatBotMessage(`${count--}...`);

      updateState(countMessage);
    }, 1000);

    dispatch(saveStudentInfo());

    setTimeout(() => {
      navigate("/exitPage");
    }, 6000);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            initialAction,
            handlePickDate,
            handleEnterName,
            handleEnterAge,
            handleStudentEnrollment
          }
        });
      })}
    </div>
  );
};

export default ActionProvider;
