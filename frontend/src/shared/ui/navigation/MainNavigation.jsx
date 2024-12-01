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
