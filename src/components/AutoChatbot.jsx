import React, { useState, useEffect } from "react";
import image from "../../src/assets/images/robot.png";

// Sample questions and options
const questions = [
  { question: "What can I help you with?", options: ["Option 1", "Option 2", "Option 3", "Option 4"] },
  { question: "What is your preferred service?", options: ["Service A", "Service B", "Service C"] },
  { question: "How satisfied are you with our service?", options: ["Very Satisfied", "Satisfied", "Unsatisfied"] },
];

function ChatNowButton() {
  const [showPopup, setShowPopup] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [completed, setCompleted] = useState(false);
  const [thankYouDisplayed, setThankYouDisplayed] = useState(false); // Track if "Thank you" is displayed
  const [robotVisible, setRobotVisible] = useState(true); // State to control robot visibility
  const [shakeRobot, setShakeRobot] = useState(false); // State to trigger shaking animation

  // Toggle the popup visibility
  const handleClick = () => {
    setShowPopup((prevState) => !prevState); // Toggle popup visibility
    if (showPopup) {
      resetState(); // Reset state if popup is being closed
    }

    // Trigger shake animation
    setShakeRobot(true);
    setTimeout(() => {
      setShakeRobot(false); // Stop shaking after animation completes
    }, 500); // Duration of the shake animation
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setTimeout(() => {
      // Move to next question after a short delay
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1); // Next question
        setSelectedOption(null); // Reset selected option for next question
      } else {
        setCompleted(true); // All questions completed
        setThankYouDisplayed(true); // Display "Thank you" message
      }
    }, 1000);
  };

  const resetState = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setCompleted(false);
    setThankYouDisplayed(false); // Reset thank you state
  };

  // Handle the close button click to close the popup manually
  const handleClosePopup = () => {
    setShowPopup(false);
    setThankYouDisplayed(false); // Also hide the "Thank you" message when closing the popup
  };

  // Toggle the visibility of the robot image
  const handleRobotVisibility = () => {
    setRobotVisible((prevState) => !prevState); // Toggle robot visibility
  };

  useEffect(() => {
    if (thankYouDisplayed) {
      // Automatically hide the popup after 2 seconds
      const timer = setTimeout(() => {
        setShowPopup(false);
        setThankYouDisplayed(false);
      }, 2500);

      // Clean up the timer on component unmount or if "thankYouDisplayed" changes
      return () => clearTimeout(timer);
    }
  }, [thankYouDisplayed]);

  return (
    <div className="fixed px-4 md:px-8 right-0 bottom-5 z-60">
      {/* Inline CSS for shake effect */}
      <style>
        {`
          @keyframes shake {
            0% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            50% { transform: translateX(5px); }
            75% { transform: translateX(-5px); }
            100% { transform: translateX(0); }
          }

          .shake {
            animation: shake 0.5s ease-in-out;
          }
        `}
      </style>

      {/* Robot Image */}
      {robotVisible && (
        <div className={`relative ${shakeRobot ? "shake" : ""}`}>
          <img
            src={image}
            alt="Chat Bot"
            className="cursor-pointer w-16 h-16"
            onClick={handleClick}
          />

          {/* Small red X cross icon on the top-right of the robot image */}
          <span
            onClick={handleRobotVisibility}
            className="absolute -top-4 right-0 text-red-500 text-xl font-bold cursor-pointer"
            title="Hide Robot"
          >
            ×
          </span>
        </div>
      )}

      {/* Popup for questions */}
      {showPopup && !completed && (
        <div className="absolute right-0 bottom-[80px] p-4 bg-white shadow-lg rounded-lg w-72">
          {/* Close button (cross) for the question popup */}
          <button
            className="absolute top-2 right-2 text-2xl font-bold text-red-500 hover:text-red-600"
            onClick={handleClosePopup}
          >
            ×
          </button>

          <div className="text-xl font-semibold mb-2">{questions[currentQuestionIndex].question}</div>
          <div>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <div
                key={index}
                onClick={() => handleOptionSelect(option)}
                className={`p-2 mb-2 rounded-md cursor-pointer ${
                  selectedOption === option
                    ? "bg-green-500 text-white"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Thank you message with green tick after completing the questions */}
      {thankYouDisplayed && (
        <div className="absolute right-0 bottom-[80px] p-4 bg-white shadow-lg rounded-lg w-72">
          {/* Green checkmark on top center */}
          <div className="flex justify-center mb-2 text-green-500 text-3xl">✔</div>
          {/* "Thank you" message center aligned */}
          <div className="text-center text-xl font-semibold">Thank you for your responses!</div>

          {/* Close button (cross) for the thank you message */}
          <button
            className="absolute top-2 right-2 text-2xl font-bold text-red-500 hover:text-red-600"
            onClick={handleClosePopup}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}

export default ChatNowButton;
