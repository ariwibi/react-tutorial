import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
export default function Params() {
  return (
    <>
      <h1>Use Params</h1>
      <ul>
        <li>
          <Link to="detailParams-1">article 1</Link>
        </li>
        <li>
          <Link to="detailParams-2">article 2</Link>
        </li>
        <li>
          <Link to="detailParams-3">article 3</Link>
        </li>
      </ul>

      <Outlet />
    </>
  );
}
