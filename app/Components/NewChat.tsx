"use client"
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NewChat: React.FC = () => {

    const router = useRouter();

  const [name, setName] = useState("");
  const [icebreaker, setIcebreaker] = useState<string | null>(null);

  const handleGenerateIcebreaker = () => {
    setIcebreaker(`Hey ${name || "there"}! Excited to chat with you today 😊`);
  };

  const handleStartChat = () => {
    if (!name) return alert("Please enter a participant name!");
    alert(`Starting chat with ${name}...`);
    setName("");
    router.push("/chat-window");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="shadow-cyan-600 shadow-xl rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-white">Start a New Chat</h2>

        <input
          type="text"
          placeholder="Enter participant name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full text-white px-4 py-2 border rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />

        <div className="flex gap-2 mb-4">
          <button
            onClick={handleGenerateIcebreaker}
            className="flex-1 bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition"
          >
            Generate Icebreaker
          </button>
          <button
            onClick={handleStartChat}
            className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-xl hover:cursor-pointer hover:bg-blue-600 transition"
          >
            Start Chat
          </button>
        </div>

        {icebreaker && (
          <div className="bg-black p-3 rounded-lg text-gray-300 text-sm">
            {icebreaker}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewChat;