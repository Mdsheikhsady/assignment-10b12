import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import auth from "../firebase/firebase.config";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  const [isChecked, setIsChecked] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      document.documentElement.setAttribute("data-theme", storedTheme);
      setIsChecked(storedTheme === 'light');

    } 
    
  }, []);

  useEffect(() => {
    const theme = isChecked ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isChecked]);

  const handleThemeChange = () => {
    setIsChecked((prev) => !prev);
  };

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div className="mb-20">

    <div className="navbar bg-base-100 shadow-sm fixed top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="0"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-\[1000\] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/services"}>Services</NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink to={"/profile"}>My Profile</NavLink>
                </li>
                <li>
                  <NavLink to={"/add-services"}>Add Services</NavLink>
                </li>
                <li>
                  <NavLink to={"/my-services"}>My Services</NavLink>
                </li>
                <li>
                  <NavLink to={"/my-orders"}>My Orders</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl">
          <img className="w-30 lg:w-40 lg:h-15 h-15 " src="./logo.png" alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/services"}>Services</NavLink>
          </li>
          {user && (
            <>
              <li>
                <NavLink to={"/profile"}>My Profile</NavLink>
              </li>
              <li>
                <NavLink to={"/add-services"}>Add Services</NavLink>
              </li>
              <li>
                <NavLink to={"/my-services"}>My Services</NavLink>
              </li>
              <li>
                <NavLink to={"/my-orders"}>My Orders</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>

      <div className="navbar-end mr-2">
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input
            onChange={handleThemeChange}
            type="checkbox"
            className="theme-controller"
            value="synthwave"
          />

          {/* moon icon */}
          <svg
            className="swap-on h-5 w-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>

          {/* sun icon */}
          <svg
            className="swap-off h-5 w-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
        </label>
      </div>

      {user ? (
        <div className="navbar-end flex items-center gap-3">
          <div
            className="tooltip tooltip-bottom"
            data-tip={user.displayName || "User"}
          >
            <div className="avatar">
              <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1">
                <img src={user.photoURL} alt="User Avatar" />
              </div>
            </div>
          </div>

          <button onClick={handleSignOut} className="btn  btn-sm">
            Logout
          </button>
        </div>
      ) : (
        <div className="navbar-end">
          <Link to="/login" className="btn btn-sm">
            Login
          </Link>
        </div>
      )}
    </div>
    </div>

  );
};

export default Navbar;
