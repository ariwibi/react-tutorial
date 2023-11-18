import people from "../utils/data";

export default function PeopleList() {
  console.log(people);
  const chemistList = people.filter(
    (person) => person.profession === "chemist"
  );
  const peopleList = chemistList.map(({ name, id, profession }) => (
    <li key={id}>
      <h3>{name}</h3>
      <p>{profession}</p>
    </li>
  ));

  return (
    <div>
      <h1>Rendering List</h1>
      <ul>{peopleList}</ul>
    </div>
  );
}
