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

        <p className="exploreCategoryHeading">Category</p>
        <div className="exploreCategories">
          <Link to="/category/rent">
            <img
              src={rentCategotyImage}
              alt="rent image"
              className="exploreCategoryImg"
            />
            <p className="exploreCategoryName">Places for rent</p>
          </Link>
          <Link to="/category/sale">
            <img
              src={sellCategotyImage}
              alt="sell image"
              className="exploreCategoryImg"
            />
            <p className="exploreCategoryName">Places for sell</p>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Explore;
