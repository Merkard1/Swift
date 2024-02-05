import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as OfferIcon } from "../Assets/svg/localOfferIcon.svg";
import { ReactComponent as ExploreIcon } from "../Assets/svg/exploreIcon.svg";
import { ReactComponent as PersonOutlineIcon } from "../Assets/svg/personOutlineIcon.svg";

function Navbar() {
  //  Colors
  const darkClr = "#2c2c2c";
  const lightClr = "#8f8f8f";

  // ClassNames
  const pActive = "navbarListItemNameActive";
  const p = "navbarListName";

  //  Hooks
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem" onClick={() => navigate("/")}>
            <ExploreIcon
              fill={pathMatchRoute("/") ? darkClr : lightClr}
              width="36px"
              height="36px"
            />
            <p className={pathMatchRoute("/") ? pActive : p}>Explore</p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/offers")}>
            <OfferIcon
              fill={pathMatchRoute("/offers") ? darkClr : lightClr}
              width="36px"
              height="36px"
            />
            <p className={pathMatchRoute("/offers") ? pActive : p}>Offers</p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/profile")}>
            <PersonOutlineIcon
              fill={pathMatchRoute("/profile") ? darkClr : lightClr}
              width="36px"
              height="36px"
            />
            <p className={pathMatchRoute("/profile") ? pActive : p}>Profile</p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Navbar;
