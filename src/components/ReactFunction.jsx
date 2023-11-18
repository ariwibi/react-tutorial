import { useState } from "react";
export default function Count() {
  const [count, setCount] = useState(1);
  const isEmpty = count == 0;
  const isFull = count == 10;
  return (
    <>
      <h1>Count</h1>
      <button
        disabled={isEmpty ? true : false}
        onClick={() => {
          setCount(count - 1);
        }}>
        -
      </button>
      <span style={{ display: "inline-block", marginRight: 5, marginLeft: 5 }}>
        {count}
      </span>
      <button
        disabled={isFull ? true : false}
        onClick={() => setCount(count + 1)}>
        +
      </button>
      <br />
      <button
        hidden={isEmpty ? true : false}
        disabled={isEmpty ? true : false}
        onClick={() => setCount(0)}>
        reset
      </button>
    </>
  );
}
