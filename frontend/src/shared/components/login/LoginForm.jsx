import { useContext, useEffect } from "react";
import { Button } from "../../ui/button/Button";
import Input from "../../ui/input/Input";
import style from "./LoginForm.module.scss";
import { LoginContext } from "../../../store/context/LoginContext";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

export const LoginForm = () => {
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  const auth = useContext(LoginContext);

  const isLogin = searchParams.get("mode") == "login";
  const handleSubmit = (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    console.log(data);

    auth.login(data.role);
    // data.role == "User" ? navigate("/user") : navigate("/admin");
  };

  useEffect(() => {
    if (auth.isAuthenticated && auth.role) {
      if (auth.role === "User") {
        navigate("/user");
      } else if (auth.role === "Admin") {
        navigate("/admin");
      }
    }
  }, [auth.role, auth.isAuthenticated, navigate]);

  return (
    <>
      <h2>{isLogin ? "login" : "create user"}</h2>
      <form onSubmit={handleSubmit} className={style["form-container"]}>
        <Input name="username" type="text" label="Username" />
        <Input name="password" type="password" label="Password" />
        <select name="role">
          <option>User</option>
          <option>Admin</option>
        </select>
        <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
          {isLogin ? "create new user" : "login"}
        </Link>
        <Button name="Save" />
      </form>
    </>
  );
};
