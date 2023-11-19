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
      <ul className="list">
        <li className="item">
          <Link className="title" to={`count`}>
            Count
          </Link>
        </li>
        <li className="item">
          <Link className="title" to={`reactUseEffect`}>
            UseEffect
          </Link>
        </li>
        <li className="item">
          <Link className="title" to={`conditionRendering`}>
            Condition Rendering
          </Link>
        </li>
        <li className="item">
          <Link className="title" to={`reactList`}>
            React List
          </Link>
        </li>
        <li className="item">
          <Link className="title" to={`reactForm`}>
            React From
          </Link>
        </li>
        <li className="item">
          <Link className="title" to={`pureComponent`}>
            Keep component pure
          </Link>
        </li>
        <li className="item">
          <Link className="title" to={`reactFetch`}>
            React Fetching
          </Link>
        </li>
        <li className="item">
          <Link className="title" to={`todoList`}>
            Todo List
          </Link>
        </li>
      </ul>
      <div className="content-items">
        <Outlet />
      </div>
    </>
  );
}
