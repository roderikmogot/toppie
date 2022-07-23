import React, { useState } from "react";
import Logo from "../asset/toppie.png";
import { Link } from "react-router-dom";
// import ListIcon from "@material-ui/icons/List";
import "../style/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="left" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="" />
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/faq">FAQ</Link>
        </div>
      </div>
      <div className="right">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/faq">FAQ</Link>
        <button onClick={toggleNavbar}>
          {/* <ListIcon /> */}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
