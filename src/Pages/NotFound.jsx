import React from "react";
import { BackArrow } from "../Components";
// import { Link } from "react-router-dom";
import noResults from "../Assets/png/no-results.png";

function NotFound() {
  return (
    <>
      <BackArrow />
      <div className="pageContainer notFound">
        <p className="pageHeader">OOPS...</p>
        <p className="pageHeader">Page not found</p>
        <img
          src={noResults}
          alt="no results found"
          style={{ width: "100%" }}
          className="notFoundIcon"
        />
      </div>
    </>
  );
}

export default NotFound;
