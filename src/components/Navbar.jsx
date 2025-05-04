import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogOut = ()=>{
      logOut().then(() => {
        alert('user logged Out successfully ')
      }).catch((error) => {
        console.log(error)
      });
      
  }
  return (
    <div className="flex justify-between items-center my-8">
      <div className="">
        <div>{user && user.email}</div>
      </div>
      <div className="nav flex gap-5 text-accent">
        <NavLink
          className={
            "py-2 px-4 hover:bg-accent hover:text-white hover:font-bold"
          }
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={
            "py-2 px-4 hover:bg-accent hover:text-white hover:font-bold"
          }
          to={"/about"}
        >
          About
        </NavLink>
        <NavLink
          className={
            "py-2 px-4 hover:bg-accent hover:text-white hover:font-bold"
          }
          to={"/career"}
        >
          Career
        </NavLink>
      </div>
      <div className="login-btn flex justify-between gap-5">
        <img className="w-12 rounded-full" src={`${user ? user.photoURL : userIcon}`} alt="" />
        {user ? (
         <button onClick={handleLogOut} className="btn btn-primary px-10">LogOut</button>
        ) : (
          <Link to={"/auth/login"} className="btn btn-primary px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
