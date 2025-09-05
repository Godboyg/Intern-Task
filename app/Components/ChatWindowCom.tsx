"use client"
import React, { useState } from "react";

const ChatWindowCom: React.FC = () => {

const messages = [
  { id: 1, sender: "Alice", text: "Hey! How are you?", time: "7:20 AM", fromMe: false },
  { id: 2, sender: "Me", text: "I’m good! Just working on a project.", time: "7:22 AM", fromMe: true },
  { id: 3, sender: "Alice", text: "That’s great! Need any help?", time: "7:25 AM", fromMe: false },
  { id: 4, sender: "Me", text: "Maybe later, thanks 😊", time: "7:28 AM", fromMe: true },
];

  const [summary, setSummary] = useState<string | null>(null);
  const [smartReply, setSmartReply] = useState<string | null>(null);

  const handleSummarize = () => {
    setSummary("Summary: Alice and you are discussing work. You might ask for help later.");
  };

  const handleSmartReply = () => {
    setSmartReply("Sure, I’ll let you know if I need help!");
  };

  return (
    <div className="w-full max-w-md mx-auto bg-black text-white shadow-cyan-500 shadow-xl rounded-2xl flex flex-col h-[500px]">
      <div className="p-4 border-b font-bold text-lg text-white">Chat with Alice</div>

      <div className="flex-1 overflow-y-auto over p-4 space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.fromMe ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[70%] over px-3 py-2 rounded-2xl ${
                msg.fromMe
                  ? "bg-blue-500 text-white rounded-br-none"
                  : "bg-gray-200 text-gray-800 rounded-bl-none"
              }`}
            >
              <p>{msg.text}</p>
              <span className="block text-xs text-gray-400 mt-1">{msg.time}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 border-t flex gap-2">
        <button
          onClick={handleSummarize}
          className="flex-1 hover:cursor-pointer bg-indigo-500 text-white px-3 py-2 rounded-xl hover:bg-indigo-600 transition"
        >
          Summarize Thread
        </button>
        <button
          onClick={handleSmartReply}
          className="flex-1 hover:cursor-pointer bg-green-500 text-white px-3 py-2 rounded-xl hover:bg-green-600 transition"
        >
          Smart Reply
        </button>
      </div>

      {(summary || smartReply) && (
        <div className="p-3 bg-black text-sm text-cyan-600 border-t">
          {summary && <p className="mb-2">{summary}</p>}
          {smartReply && <p className="text-green-600 font-medium">{smartReply}</p>}
        </div>
      )}
    </div>
  );
};

export default ChatWindowCom;