import React, { useState } from "react";

const ChatBot = ({ orders }: any) => {
  const [chatHistory, setChatHistory] = useState<any[]>([]);
  const [userInput, setUserInput] = useState("");

  // Handle user input and send the response
  const handleUserInput = () => {
    const newChatHistory = [...chatHistory, { sender: "user", message: userInput }];
    setChatHistory(newChatHistory);
    setUserInput(""); // Clear input field

    // Generate bot's response based on the user's input
    const botResponse = generateBotResponse(userInput);
    setChatHistory([
      ...newChatHistory,
      { sender: "bot", message: botResponse },
    ]);
  };

  // Generate bot response based on user input
  const generateBotResponse = (input: string) => {
    input = input.toLowerCase();

    if (input.includes("track") || input.includes("status")) {
      return "You can check the status of your orders below:";
    }

    if (input.includes("return")) {
      return "You can return your order if it's marked as 'Delivered'. Please click on 'Request Return' on the order page.";
    }

    return "Sorry, I didn't understand that. You can ask about your order status or return options.";
  };

  return (
    <div className="chatbot fixed bottom-4 right-4 bg-white p-4 shadow-lg rounded-lg w-80 h-96">
      <div className="chat-history overflow-y-scroll h-64 mb-4">
        {chatHistory.map((chat, index) => (
          <div
            key={index}
            className={chat.sender === "user" ? "text-right" : "text-left"}
          >
            <p
              className={`inline-block px-4 py-2 rounded-lg my-2 ${
                chat.sender === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300"
              }`}
            >
              {chat.message}
            </p>
          </div>
        ))}
      </div>

      <div className="chat-input flex items-center">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Ask me anything..."
          className="w-full p-2 border border-gray-300 rounded-l-lg"
        />
        <button
          onClick={handleUserInput}
          className="p-2 bg-blue-500 text-white rounded-r-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
