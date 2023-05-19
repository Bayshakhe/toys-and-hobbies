import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  // console.log(user);

  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  const navLinkList = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "activeList" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/allToys"
        className={({ isActive }) => (isActive ? "activeList" : "")}
      >
        All Toys
      </NavLink>
      {user && (
        <>
          <NavLink
            to="/myToy"
            className={({ isActive }) => (isActive ? "activeList" : "")}
          >
            My Toys
          </NavLink>
          <NavLink
            to="/addToy"
            className={({ isActive }) => (isActive ? "activeList" : "")}
          >
            Add a Toys
          </NavLink>
        </>
      )}
      <NavLink
        to="/blogs"
        className={({ isActive }) => (isActive ? "activeList" : "")}
      >
        Blogs
      </NavLink>
    </>
  );
  return (
    <div className="container mx-auto navbar bg-base-100 justify-between">
      <div className="">
        <Link to="/">
          <img
            className="w-20"
            src="https://is1-ssl.mzstatic.com/image/thumb/Purple125/v4/6f/5c/6d/6f5c6d98-3162-ce38-f24e-50a354a0e774/source/512x512bb.jpg"
            alt="Logo"
          />
        </Link>
        <Link to="/" className="hidden md:flex text-2xl font-semibold">
          Toys<span className="activeList">&</span>Hobbies
        </Link>
      </div>
      <div className="navbar-center">
        <div className="hidden lg:flex">
          <div className="menu menu-horizontal px-1 flex gap-7">
            {navLinkList}
          </div>
        </div>
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <div
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinkList}
          </div>
        </div>
      </div>

      {user ? (
        <div>
          <img
            className="rounded-full w-12 mr-3"
            src={user.photoURL}
            alt="Profile Image"
            title={user.displayName}
          />
          <Link onClick={handleLogout} className="btn-outline-rose mr-4 pt-3">
            Log out
          </Link>
        </div>
      ) : (
        <Link to="/login" className="btn-outline-rose mr-4">
          Log in
        </Link>
      )}
    </div>
  );
};

export default Header;
