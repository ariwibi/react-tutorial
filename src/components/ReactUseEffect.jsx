import { useEffect, useState } from "react";

export default function ReactUseEffect() {
  const [click, setClick] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("init carousel");

    return () => {
      console.log("destroy carousel");
    };
  });
  return (
    <>
      <h1 id="title">Hello Use Effect</h1>
      <button onClick={() => setClick(true)}>Click Me Please</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <span>{count}</span>
    </>
  );
}
