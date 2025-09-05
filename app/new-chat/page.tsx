"use client"
import React from 'react'
import NewChat from '../Components/NewChat'
import { useRouter } from 'next/navigation'

function page() {

  const router = useRouter();

  const handleMove = () => {
    router.push("/");
  }
  const handleMoveto = () => {
    router.push("/chat-window");
  }

  return (
    <div>
      <button className="absolute top-2 right-2 sm:top-5 sm:left-10 hover:cursor-pointer p-2 w-20 rounded-full bg-green-500 text-black" onClick={handleMove}>Chats</button>
      <button className="absolute top-13 right-2 sm:top-17 sm:left-10 hover:cursor-pointer p-2 w-30 rounded-full bg-green-500 text-black" onClick={handleMoveto}>Chat Window</button>
      <NewChat />
    </div>
  )
}

export default page
