import React, { useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatFooter from "./ChatFooter";

interface ChatHistoryEntry {
  question: string;
  answer: string;
}

const Chat: React.FC = () => {
  const [chatHistory, setChatHistory] = useState<ChatHistoryEntry[]>([]);

  return (
    <div className="flex flex-col h-screen bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900">
      <div className="m-auto w-full max-w-md bg-gray-800 rounded-lg shadow-lg">
        <ChatHeader />
        <ChatMessages chatHistory={chatHistory} />
        <ChatFooter chatHistory={chatHistory} setChatHistory={setChatHistory} />
      </div>
    </div>
  );
};

export default Chat;
