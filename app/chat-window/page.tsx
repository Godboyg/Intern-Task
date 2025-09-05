"use client"
import React from 'react'
import ChatWindowCom from '../Components/ChatWindowCom'
import { useRouter } from 'next/navigation';

function page() {

  const router = useRouter();

  const handleMove = () => {
    console.log("sn");
    router.push("/");
  }

  const handleMoveto = () => {
    console.log("sdkjb");
    router.push("/new-chat");
  } 

  return (
    <div>
      <button className="absolute top-2 right-2 sm:top-5 sm:left-10 hover:cursor-pointer p-2 w-24 rounded-full bg-green-500 text-black" onClick={handleMove}>Chats</button>
      <button className="absolute top-13 right-2 sm:top-17 sm:left-10 hover:cursor-pointer p-2 w-30 rounded-full bg-green-500 text-black" onClick={handleMoveto}>New Chat</button>
      <ChatWindowCom />
    </div>
  )
}

export default page
