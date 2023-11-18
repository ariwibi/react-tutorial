function Recipe({ drinkers }) {
  return (
    <ol>
      <li>Boil {drinkers} cups of water</li>
      <li>
        Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice{" "}
      </li>
      <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste </li>
    </ol>
  );
}
let guest = 0;

function Cup() {
  // Bad: changing a preexisting variable!
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}
export default function PureComponent() {
  return (
    <>
      <section>
        <h1>Pure component</h1>
        <h2>Spiced Chai Recipe</h2>
        <h3>For two</h3>
        <Recipe drinkers={2} />
        <h3>For a gathering</h3>
        <Recipe drinkers={4} />
      </section>
      <section>
        <h1>Component the breaks the role</h1>
        <Cup />
        <Cup />
        <Cup />
      </section>
    </>
  );
}
