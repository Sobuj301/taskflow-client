import { Link, NavLink } from 'react-router';
import useAuth from '../hooks/useAuth';

const Navbar = () => {
  const { user, logout } = useAuth()
  const handleLogout = () => {
    logout()
      .then(() => {
        alert("Sign-out successful.")
      })
      .catch(() => {
        console.log("An error happened.")
      })
  }
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-medium transition-colors duration-200 ${isActive ? 'text-primary font-semibold' : 'hover:text-primary'
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/tasks"
          className={({ isActive }) =>
            `font-medium transition-colors duration-200 ${isActive ? 'text-primary font-semibold' : 'hover:text-primary'
            }`
          }
        >
          All Tasks
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/tasks"
          className={({ isActive }) =>
            `font-medium transition-colors duration-200 ${isActive ? 'text-primary font-semibold' : 'hover:text-primary'
            }`
          }
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-100/80 backdrop-blur-md border-b border-base-200 sticky top-0 z-50">
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Navbar Start: Mobile Menu & Logo */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden mr-1"
              aria-label="Toggle Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-xl bg-base-100 rounded-2xl w-56 border border-base-200 space-y-1"
            >
              {navLinks}
            </ul>
          </div>

          {/* Logo with Gradient Accent */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-black text-lg shadow-md group-hover:scale-105 transition-transform duration-200">
              T
            </div>
            <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              TaskFlow
            </span>
          </Link>
        </div>

        {/* Navbar Center: Desktop Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            {navLinks}
          </ul>
        </div>

        {/* Navbar End: Theme Controller, Auth Buttons & User Profile */}
        <div className="navbar-end gap-2">

          {/* Light / Dark Mode Toggle Button */}
          <label className="swap swap-rotate btn btn-ghost btn-circle btn-sm">
            {/* hidden checkbox to control state later */}
            <input type="checkbox" className="theme-controller" value="light" />

            {/* Sun icon (Light Mode) */}
            <svg
              className="swap-off fill-current w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,0,1.41l.71.71A1,1,0,0,0,7.76,7.76L7.05,7.05A1,1,0,0,0,5.64,7.05ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-7.05,7.76a1,1,0,0,0,1.41,0l.71-.71a1,1,0,0,0-1.41-1.41l-.71.71A1,1,0,0,0,13.95,18.76ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* Moon icon (Dark Mode) */}
            <svg
              className="swap-on fill-current w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,2.45-6.08,1,1,0,0,0-.42-1.63A10,10,0,0,0,2,11.36,10,10,0,0,0,12,21.36,9.85,9.85,0,0,0,21.64,13Z" />
            </svg>
          </label>

          {/* Logged Out State Buttons */}
          {
            !user && <Link
              to="/login"
              className="btn btn-ghost btn-sm font-semibold rounded-lg hidden sm:inline-flex"
            >
              Log In
            </Link>
          }
          {
            user && <div className="dropdown dropdown-end ml-1">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-9 rounded-full ring-2 ring-primary/30 ring-offset-base-100 ring-offset-2">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="User Avatar"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-2xl bg-base-100 rounded-2xl w-56 border border-base-200 space-y-1"
              >
                <li className="px-3 py-2 border-b border-base-200">
                  <p className="font-bold text-sm leading-tight">Alex Johnson</p>
                  <p className="text-xs text-base-content/60">alex@example.com</p>
                </li>
                <li>
                  <Link to="/dashboard" className="py-2">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/profile" className="py-2">
                    Profile Settings
                  </Link>
                </li>
                <div className="divider my-1"></div>
                <li>
                  <button onClick={handleLogout} className="py-2 text-error font-medium hover:bg-error/10">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          }


        </div>
      </div>
    </div>
  );
};

export default Navbar;