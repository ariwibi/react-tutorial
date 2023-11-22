import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="nav">
      <div className="title">ariWibi</div>
      <ul className="nav-list">
        <li>
          <Link to={`/`} className="nav-title">
            Home
          </Link>
        </li>
        <li>
          <Link to={`/content`} className="nav-title">
            Content{" "}
          </Link>
        </li>
        <li>
          <Link to={`/login`} className="nav-title">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}
