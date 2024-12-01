import React from "react";

interface ChatHistoryEntry {
  question: string;
  answer: string;
}

interface ChatMessagesProps {
  chatHistory: ChatHistoryEntry[];
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ chatHistory }) => {
  return (
    <div className="flex flex-col space-y-2 p-4 overflow-auto">
      {chatHistory.map((entry, index) => (
        <div key={index}>
          <p className="text-blue-400">You: {entry.question}</p>
          <p className="text-green-400">Bot: {entry.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
