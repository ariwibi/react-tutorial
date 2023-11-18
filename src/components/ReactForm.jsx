import { useRef, useState } from "react";
export default function ReactForm() {
  const nameRef = useRef(null);
  const [name, setName] = useState("ari");
  const onSubmit = (event) => {
    // const name = nameRef.current.value;
    event.preventDefault();
    console.log(name);
  };
  return (
    <>
      <h1>React Form</h1>
      <form action="" onSubmit={onSubmit}>
        <label>Name</label>
        {/* <input type="text" name="name" ref={nameRef} /> */}
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
