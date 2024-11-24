import { Outlet } from "react-router-dom";
import NavMenu from "../Navigation/NavMenu";
import MainNavigation from "../Navigation/MainNavigation";

function Root() {
  return (
    <>
      <NavMenu />
      <MainNavigation />
      <Outlet />
    </>
  );
}

export default Root;
