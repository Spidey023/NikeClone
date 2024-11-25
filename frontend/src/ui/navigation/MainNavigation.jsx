import { NavLink } from "react-router-dom";
import style from "./MainNavigation.module.scss";

function MainNavigation() {
  return (
    <>
      <nav className={style["main-nav-container"]}>
        <div className={style.logo}>logo</div>
        <ul className={style["nav-list"]}>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? style.active : "")}
            >
              Black Friday
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? style.active : "")}
            >
              New
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? style.active : "")}
            >
              Men
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? style.active : "")}
            >
              Women
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? style.active : "")}
            >
              Kids
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? style.active : "")}
            >
              Jorden
            </NavLink>
          </li>
        </ul>
        <div className={style["nav-sec-3"]}>
          <ul>
            <li>
              <span class="material-symbols-outlined">search</span>
            </li>
            <li>
              <span class="material-symbols-outlined">favorite</span>
            </li>
            <li>
              <span class="material-symbols-outlined">local_mall</span>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default MainNavigation;
