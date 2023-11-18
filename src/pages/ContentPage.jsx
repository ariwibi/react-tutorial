import ConditionRendering from "../components/ConditionalRandering";
import ReactForm from "../components/ReactForm";
import ReactList from "../components/ReactList";
import ReactUseEffect from "../components/ReactUseEffect";
import Count from "../components/reactFunction";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function ContentPage() {
  return (
    <>
      <ul style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
        <li
          style={{
            listStyle: "none",

            backgroundColor: "black",
            padding: 5,
            borderRadius: 5,
          }}>
          <Link style={{ textDecoration: "none", color: "white" }} to={`count`}>
            Count
          </Link>
        </li>
        <li
          style={{
            listStyle: "none",

            backgroundColor: "black",
            padding: 5,
            borderRadius: 5,
          }}>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={`reactUseEffect`}>
            UseEffect
          </Link>
        </li>
        <li
          style={{
            listStyle: "none",

            backgroundColor: "black",
            padding: 5,
            borderRadius: 5,
          }}>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={`conditionRendering`}>
            Condition Rendering
          </Link>
        </li>
        <li
          style={{
            listStyle: "none",

            backgroundColor: "black",
            padding: 5,
            borderRadius: 5,
          }}>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={`reactList`}>
            React List
          </Link>
        </li>
        <li
          style={{
            listStyle: "none",

            backgroundColor: "black",
            padding: 5,
            borderRadius: 5,
          }}>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={`reactForm`}>
            React From
          </Link>
        </li>
        <li
          style={{
            listStyle: "none",

            backgroundColor: "black",
            padding: 5,
            borderRadius: 5,
          }}>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={`pureComponent`}>
            Keep component pure
          </Link>
        </li>
        <li
          style={{
            listStyle: "none",

            backgroundColor: "black",
            padding: 5,
            borderRadius: 5,
          }}>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={`reactFetch`}>
            React Fetching
          </Link>
        </li>
        <li
          style={{
            listStyle: "none",

            backgroundColor: "black",
            padding: 5,
            borderRadius: 5,
          }}>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={`todoList`}>
            Todo List
          </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
