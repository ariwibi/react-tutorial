import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  function onSubmitHandler(event) {
    event.preventDefault();
    const checkLogin = true;
    if (checkLogin) {
      navigate("/dashboard");
    }
  }
  return (
    <form action="" onSubmit={onSubmitHandler}>
      <input type="text" name="username" />
      <input type="password" name="password" />
      <button type="submit">Login</button>
    </form>
  );
}
