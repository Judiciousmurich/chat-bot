import React, { useState } from "react";

interface ChatHistoryEntry {
  question: string;
  answer: string;
}

interface ChatFooterProps {
  chatHistory: ChatHistoryEntry[];
  setChatHistory: React.Dispatch<React.SetStateAction<ChatHistoryEntry[]>>;
}

const ChatFooter: React.FC<ChatFooterProps> = ({ chatHistory, setChatHistory }) => {
  const [question, setQuestion] = useState<string>("");

  const sendMessage = async () => {
    if (!question.trim()) return;

    const newEntry: ChatHistoryEntry = { question, answer: "Loading..." };
    setChatHistory((prevHistory) => [...prevHistory, newEntry]);
    
    try {
      const response = await fetch("http://127.0.0.1:5000/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question,
          chatHistory,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch response from server");
      }

      const data = await response.json();
      const newAnswer: ChatHistoryEntry = {
        question,
        answer: data.answer,
      };

      setChatHistory((prevHistory) => [...prevHistory, newAnswer]);
      setQuestion("");  // Clear the input field
    } catch (error) {
      console.error("Error:", error);
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { question, answer: "Sorry, something went wrong!" },
      ]);
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="w-full p-2 rounded"
        placeholder="Ask something..."
      />
      <button
        onClick={sendMessage}
        className="mt-2 bg-blue-500 text-white p-2 rounded"
      >
        Send
      </button>
    </div>
  );
};

export default ChatFooter;
