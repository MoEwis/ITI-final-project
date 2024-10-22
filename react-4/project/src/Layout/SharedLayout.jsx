import MyNav from "../components/MyNav";
import MyFooter from "../components/MyFooter";
import { Outlet } from "react-router-dom";
import LoginRegister from "../Pages/LoginRegister";

const SharedLayout = () => {
  let user = localStorage.getItem("user");
  return (
    <>
      {user ? (
        <>
          <MyNav></MyNav>
          <Outlet></Outlet>
          <MyFooter></MyFooter>
        </>
      ) : (
        <LoginRegister></LoginRegister>
      )}
    </>
  );
};

export default SharedLayout;
