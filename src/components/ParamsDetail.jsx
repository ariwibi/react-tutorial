import { useParams } from "react-router-dom";
export default function ParamsDetail() {
  const { slug } = useParams();
  console.log(slug);
  return (
    <>
      <h1>This is {slug}</h1>
    </>
  );
}
