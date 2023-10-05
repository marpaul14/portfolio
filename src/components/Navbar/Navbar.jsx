import { useState } from "react";
import Logo from "../../assets/logo1.png";

import { FaBars, FaTimes } from "react-icons/fa";

import MobileView from "./MobileView";
import Menu from "./Menu";
import SocialIcons from "./SocialIcons";
import { Link } from "react-router-dom";

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  function handleClick() {
    setNavbar(!navbar);
  }

  return (
    <div
      className="fixed w-full h-[60px] flex justify-between items-center px-4
  bg-[#0a192f] text-gray-300 border-b-2"
    >
      <Link to="/">
        <div className="ml-[-10px] py-4">
          <img src={Logo} alt="logo" style={{ width: "55px" }} />
        </div>
      </Link>
      <Menu />
      <div onClick={handleClick} className="md:hidden z-10">
        {!navbar ? <FaBars /> : <FaTimes />}
      </div>
      <MobileView navbar={navbar} />
      <SocialIcons />
    </div>
  );
}

export default Navbar;
