import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/Layout";
import ContentPage from "./pages/ContentPage";
import Count from "./components/reactFunction";
import ReactUseEffect from "./components/ReactUseEffect";
import ConditionRendering from "./components/ConditionalRandering";
import ReactList from "./components/ReactList";
import ReactForm from "./components/ReactForm";
import PureComponent from "./components/KeepComponentPure";
import ReactFetch from "./components/ReactFetch";
import TodoList from "./components/TodoList";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "content",
          element: <ContentPage />,
          children: [
            {
              path: "count",
              element: <Count />,
            },
            {
              path: "reactUseEffect",
              element: <ReactUseEffect />,
            },
            {
              path: "conditionRendering",
              element: <ConditionRendering />,
            },
            {
              path: "reactList",
              element: <ReactList />,
            },
            {
              path: "reactForm",
              element: <ReactForm />,
            },
            {
              path: "pureComponent",
              element: <PureComponent />,
            },
            {
              path: "reactFetch",
              element: <ReactFetch />,
            },
            {
              path: "todoList",
              element: <TodoList />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
