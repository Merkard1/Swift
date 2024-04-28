import React from "react";
import { Link } from "react-router-dom";
import rentCategotyImage from "../Assets/jpg/rentCategoryImage.jpg";
import sellCategotyImage from "../Assets/jpg/sellCategoryImage.jpg";

import { Spinner } from "../Components";

function Explore() {
  return (
    <div className="explore">
      <header>
        <p className="pageHeader">Explore</p>
      </header>

      <main>
        {/* <Spinner /> */}

        <p className="exploreCategoryHeading">Category's</p>
        <div className="exploreCategories">
          <Link to="/category/rent">
            <p className="exploreCategoryName">Places for rent</p>
            <img
              src={rentCategotyImage}
              alt="rent image"
              className="exploreCategoryImg"
            />
          </Link>
          <Link to="/category/sale">
            <p className="exploreCategoryName">Places for sell</p>
            <img
              src={sellCategotyImage}
              alt="sell image"
              className="exploreCategoryImg"
            />
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Explore;
