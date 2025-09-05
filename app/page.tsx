import React from "react";

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

  return (
    <div className="w-full bg-black max-w-md mx-auto shadow-2xl shadow-cyan-500 text-white rounded-2xl p-4">
      <h2 className="text-xl font-bold mb-4">Chats</h2>
      <ul>
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