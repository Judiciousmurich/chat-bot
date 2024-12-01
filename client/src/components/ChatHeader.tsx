import React from "react";


const ChatHeader: React.FC = () => {
  return (
    <div className="flex items-center p-4 bg-gray-700 rounded-t-lg">
      <img
        src="/pic3.jpg"
        alt="Chatbot"
        className="w-10 h-10 rounded-full border-2 border-white"
      />
      <div className="ml-4">
        <h1 className="text-white text-lg font-semibold">Medical Chatbot</h1>
        <p className="text-gray-300 text-sm">Ask me anything!</p>
      </div>
    </div>
  );
};

export default ChatHeader;
