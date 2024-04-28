import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as OfferIcon } from "../Assets/svg/localOfferIcon.svg";
import { ReactComponent as ExploreIcon } from "../Assets/svg/exploreIcon.svg";
import { ReactComponent as PersonOutlineIcon } from "../Assets/svg/personOutlineIcon.svg";

function Navbar() {
  const [active, setActive] = useState(0);

  const navigate = useNavigate();
  // const location = useLocation();

  const onClickNavElem = (elem, path) => {
    setActive(elem);
    navigate(path);
  };

  return (
    <nav>
      <div className="navbar">
        <ul className="listItems">
          <li
            className={active === 0 ? "listItem active" : "listItem "}
            onClick={() => onClickNavElem(0, "/")}
          >
            <div className="listIcon">
              <ExploreIcon
                className="navIcon"
                fill="#2c2c2c"
                width="36px"
                height="36px"
              />
              <span className="listText">Explore</span>
            </div>
          </li>

          <li
            className={active === 1 ? "listItem active" : "listItem "}
            onClick={() => onClickNavElem(1, "/offers")}
          >
            <div className="listIcon">
              <OfferIcon
                className="navIcon"
                fill="#2c2c2c"
                width="36px"
                height="36px"
              />
              <span className="listText">Offers</span>
            </div>
          </li>

          <li
            className={active === 2 ? "listItem active" : "listItem "}
            onClick={() => onClickNavElem(2, "/profile")}
          >
            <div className="listIcon">
              <PersonOutlineIcon
                className="navIcon"
                fill="#2c2c2c"
                width="36px"
                height="36px"
              />
              <span className="listText">Profile</span>
            </div>
          </li>
          <div className="indicator"></div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
