import { Link, Outlet } from "react-router-dom";

export default function Auth() {
  return (
    <>
      <header>
        <Link to="/auth/login">Login</Link>
        <Link to="/auth/signup">Register</Link>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Footer Auth</footer>
    </>
  );
}
