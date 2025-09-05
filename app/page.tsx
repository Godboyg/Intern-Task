"use client"
import React from "react";
import { useRouter } from "next/navigation";

const page: React.FC = () => {

  const chats = [
  {
    id: 1,
    name: "Alice",
    lastMessage: "Hey, how are you?",
    time: "7:20 AM",
  },
  {
    id: 2,
    name: "Bob",
    lastMessage: "Did you finish the project?",
    time: "6:45 AM",
  },
  {
    id: 3,
    name: "Charlie",
    lastMessage: "Let's catch up later!",
    time: "Yesterday",
  },
];

const router = useRouter();

const handleMove = () => {
  router.push("/new-chat");
}

const handleMoveto = () => {
  router.push("/chat-window");
}

  return (
    <div className="w-full bg-black max-w-md mx-auto shadow-2xl shadow-cyan-500 text-white rounded-2xl p-4">
      <h2 className="text-xl font-bold mb-4">Chats</h2>
      <div className="flex flex-flex w-[70vw] bg-red-50">
        <button className="absolute top-2 right-2 sm:top-5 sm:left-10 hover:cursor-pointer p-2 w-24 rounded-full bg-green-500 text-black" onClick={handleMove}>New Chat</button>
        <button className="absolute top-13 right-2 sm:top-17 sm:left-10 hover:cursor-pointer p-2 w-30 rounded-full bg-green-500 text-black" onClick={handleMoveto}>Chat Window</button>
      </div>
      <ul className="mt-7 sm:mt-0">
        {chats.map((chat) => (
          <li
            key={chat.id}
            className="flex justify-between items-center p-3 border-b hover:bg-gray-100 rounded-lg transition"
          >
            <div>
              <p className="font-semibold">{chat.name}</p>
              <p className="text-sm text-gray-500">{chat.lastMessage}</p>
            </div>
            <span className="text-xs text-gray-400">{chat.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;