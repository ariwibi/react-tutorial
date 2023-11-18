/* eslint-disable react/prop-types */
export default function Item({ name, isPacked }) {
  return (
    <li key={name}>{isPacked ? <del>{name + "✔️"}</del> : name + "❌"}</li>
  );
  //   return (
  //     <li>
  //       {name} {isPacked && "✔️"}
  //     </li>
  //   );
}
