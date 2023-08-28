import React, { useState } from "react";
import {
  IoMdImage,
  IoMdBookmark,
  IoMdPerson,
  IoMdHome,
  IoMdChatboxes,
  IoMdHammer,
  IoMdCall,
  IoMdClipboard,
} from "react-icons/io";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [active, setActive] = useState(false);

  const activateNav = () => {
    setActive(!active);
  };

  return (
    <div className={active ? "header" : "header-mobile"}>
      <nav>
        <ul className={active ? "ul-item" : "ul-item oicon"}>
          <li>
            <IoMdImage />
            <Link to="/">Alumni</Link>
          </li>

          <li>
            <IoMdBookmark />
            <Link to="/">History</Link>
          </li>

          <li>
            <IoMdPerson />
            <Link to="/">Testimnials</Link>
          </li>

          <li>
            <IoMdHome />
            <Link to="/">Partners</Link>
          </li>

          <li>
            <IoMdChatboxes />
            <Link to="/">About</Link>
          </li>

          <li>
            <IoMdHammer />
            <Link to="/">Tutorials</Link>
          </li>

          <li>
            <IoMdCall />
            <Link to="/">Contact</Link>
          </li>

          <li>
            <IoMdClipboard />
            <Link to="/">FAQ</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
