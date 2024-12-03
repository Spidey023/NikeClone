import { NavLink } from "react-router-dom";
import style from "./MainNavigation.module.scss";
import { useContext } from "react";
import { LoginContext } from "../../../store/context/LoginContext";

function MainNavigation() {
  const auth = useContext(LoginContext);

  function handleLogout() {
    console.log("cli ");

    auth.logout();
  }
  return (
    <>
      <nav className={style["main-nav-container"]}>
        <div className={style.logo}>logo</div>
        <ul className={style["nav-list"]}>
          <li>
            <NavLink
              to="new"
              className={({ isActive }) => (isActive ? style.active : "")}
            >
              New
            </NavLink>
          </li>
        </ul>
        <div className={style["nav-sec-3"]}>
          <ul>
            <li>
              <span className="material-symbols-outlined">search</span>
            </li>
            <li>
              <span className="material-symbols-outlined">favorite</span>
            </li>
            <li>
              <span className="material-symbols-outlined">local_mall</span>
            </li>
            <li onClick={handleLogout}>logout</li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default MainNavigation;
