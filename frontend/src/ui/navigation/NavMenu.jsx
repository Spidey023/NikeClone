import style from "./NavMenu.module.scss";

function NavMenu() {
  return (
    <>
      <nav className={style["menubar-container"]}>
        <div className={style.logo}>logos</div>
        <div>
          <ul className={style["menu-list"]}>
            <li>Find a store</li>
            <li>Help</li>
            <li>
              Hi, Bharath
              <span class="material-symbols-outlined">person</span>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavMenu;
