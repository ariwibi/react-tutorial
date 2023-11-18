export default function ReactList() {
  const fruits = ["Apple", "Orange", "watermelon", "mango"];

  return (
    <>
      <h1>React List</h1>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </>
  );
}
