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
import Params from "./components/Params";
import ParamsDetail from "./components/ParamsDetail";
import ErrorPage from "./pages/ErrorPage";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
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
            {
              path: "params",
              element: <Params />,
              children: [
                {
                  path: ":slug",
                  element: <ParamsDetail />,
                },
              ],
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
