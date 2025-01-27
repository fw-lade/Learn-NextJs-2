"use client";
import React, { useState } from "react";

const Counter = () => {
  console.log("Counter component");
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times!
      </button>
    </div>
  );
};

export default Counter;
