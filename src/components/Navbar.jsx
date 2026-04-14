import { NavLink } from "react-router-dom";

import { FaHome, FaChartBar } from "react-icons/fa";

import { FiClock } from "react-icons/fi"; 

import logo from "../assets/logo.png";

const Navbar = () => {
  const navStyle = ({ isActive }) =>
    isActive
      ? "flex items-center gap-2 px-3 py-2 rounded-md bg-green-900 text-white"
      : "flex items-center gap-2 px-3 py-2 rounded-md hover:bg-green-900 hover:text-white transition";

  return (
    <div className="flex justify-between items-center px-12 py-4 bg-white shadow">
      
      {/* Logo */}
      <img src={logo} alt="KeenKeeper logo" className="w-32" />

      {/* Links */}
      <div className="flex gap-4">
        <NavLink to="/" className={navStyle}>
          <FaHome /> Home
        </NavLink>

        <NavLink to="/timeline" className={navStyle}>
          <FiClock /> Timeline
        </NavLink>

        <NavLink to="/stats" className={navStyle}>
          <FaChartBar /> Stats
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;