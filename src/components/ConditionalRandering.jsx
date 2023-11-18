import { useRef, useState, useEffect } from "react";

export default function ConditionRendering() {
  const [login, setLogin] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      titleRef.current.textContent = "aplikasi";
    }, 2000);
  }, []);
  return (
    <>
      <h1 ref={titleRef}>Application</h1>
      <p>{login && <b>Already log in</b>}</p>
      <button onClick={() => setLogin(true)}>Log In</button>
    </>
  );
}
