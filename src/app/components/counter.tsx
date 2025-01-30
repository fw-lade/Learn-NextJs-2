"use client";
import { useAuth, useUser } from "@clerk/nextjs";
import React, { useState } from "react";

const Counter = () => {
  // const { isLoaded, userId, sessionId, getToken } = useAuth();

  const {isLoaded, isSignedIn, user} = useUser()

  console.log("Counter component");
  const [count, setCount] = useState(0);

  // if (!isLoaded || !userId) {
  //   return null;
  // }
  
  if (!isLoaded || !isSignedIn) {
    return null;
  }
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times!
      </button>
    </div>
  );
};

export default Counter;
