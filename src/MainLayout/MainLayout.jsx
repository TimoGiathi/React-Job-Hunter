import { Outlet } from "react-router-dom"; /* 'Outlet' shows the content of the route you are currently on */
import Navbar from "../Components/Navbar";
function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default MainLayout;
