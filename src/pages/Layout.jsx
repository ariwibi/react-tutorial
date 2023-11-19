import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../index.css";

export default function RootLayout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div>
          <Outlet />
        </div>
      </main>
      <footer>ariwibi</footer>
    </>
  );
}
