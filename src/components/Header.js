import React from "react";
import { Link } from "react-scroll";
// images
import Logo from "../assets/logo_transparent.png";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href="">
            <img
              className="w-[120px] h-[120px]"
              src={Logo}
              alt="Logo Krone Carlo Luxelevare"
            />
          </a>
          {/* button */}
          <div>
            <Link
              to="contact"
              activeClass="active"
              smooth={true}
              spy={true}
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            >
              <button className="btn btn-lg">Let's Work</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
