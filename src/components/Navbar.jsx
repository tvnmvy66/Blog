import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  IconSearch,
  IconUser,
  IconSettings,
  IconReceipt,
  IconHelp,
  IconLogout,
} from "@tabler/icons-react";
import axios from "axios";
import GoogleLogin from "./GoogleLogin";

const Navbar = () => {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [user,setUser] = useState(null)
  const toggleUserDropdown = () => setIsUserDropdownOpen(!isUserDropdownOpen);
  const closeDropdown = () => setIsUserDropdownOpen(false);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BURL}/user`, {
          withCredentials: true,
        });
        localStorage.setItem("user-info", JSON.stringify(res.data));
        setUser(res.data)
      } catch (err) {
        console.error("Error fetching user", err);
      }
    };

    fetchUser();
  }, []);
  const handleSignOut = async () => {
    try {
        await axios.get(`${import.meta.env.VITE_BURL}/signout`, {
            withCredentials: true // Send cookies with the request
        });
        localStorage.clear();
        sessionStorage.clear();
        console.log('Signed out successfully');
    } catch (error) {
        console.error('Error signing out:', error.response?.data || error.message);
    }
  };
  return (
    <nav className="navbar fixed top-0 left-0 w-full z-50 bg-white navbar justify-between gap-4 shadow">
      {/* Center Brand Link */}
      <div className="navbar-center flex items-center">
        <Link
          className="link text-base-content link-neutral text-xl font-semibold no-underline"
          to="/"
        >
          BlogCellar
        </Link>
      </div>

      {/* Right Actions: Search & User Menu */}
      <div className="navbar-end items-center gap-4">
        <Link to="/search">
          <button
            className="btn btn-sm btn-text btn-circle"
            aria-label="Search Button"
          >
            <IconSearch size={22} />
          </button>
        </Link>

        <div className="relative inline-flex">
          <button
            type="button"
            className="flex items-center"
            onClick={toggleUserDropdown}
            aria-expanded={isUserDropdownOpen}
            aria-label="User Dropdown"
          >
            <div className="avatar">
              <div className="size-9.5 rounded-full">
                <img
                  src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png"
                  alt="avatar"
                />
              </div>
            </div>
          </button>

          {isUserDropdownOpen && (
            <ul
              className="absolute right-0 z-10 bg-white shadow-lg rounded-md p-2 mt-2 min-w-[12rem]"
              role="menu"
            >
              <li className="flex gap-2 items-center p-2">
                {localStorage.getItem("user-info") ? (<div>
                  <div className="avatar">
                  <div className="h-10 w-10 rounded-full">
                    <img
                      src={user?.picture}
                      alt="avatar"
                    />
                  </div>
                </div>
                  <div>
                    <h6 className="text-base-content text-base font-semibold">
                      {user?.name}
                    </h6>
                    <small className="text-base-content/50">User</small>
                  </div></div>
                ) : (
                  <div>
                  <div className="avatar">
                  <div className="h-10 w-10 rounded-full">
                    <img
                      src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png"
                      alt="avatar"
                    />
                  </div>
                </div>
                  <div>
                    <h6 className="text-base-content text-base font-semibold">
                      User
                    </h6>
                    <small className="text-base-content/50">User</small>
                  </div></div>
                )}
              </li>
              <hr className="my-2 border-gray-200" />
              <li>
                <a
                  className="flex items-center p-2 hover:bg-gray-100"
                  href="/myblog"
                >
                  <IconUser size={18} className="mr-2" />
                  My Blog
                </a>
              </li>
              <li>
                {!localStorage.getItem("user-info") ? (
                  <div className="mt-2 flex justify-center">
                    <GoogleLogin />
                  </div>
                ) : (
                  <div className="btn btn-error btn-soft btn-block mt-2" onClick={()=>{handleSignOut()}}>
                    <IconLogout size={18} className="mr-2" />
                    Sign out
                  </div>
                )}
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* Click outside to close dropdown */}
      {isUserDropdownOpen && (
        <div
          className="fixed inset-0 z-0"
          onClick={closeDropdown}
          aria-hidden="true"
        />
      )}
    </nav>
  );
};

export default Navbar;
