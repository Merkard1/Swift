import React from "react";
import { useNavigate } from "react-router-dom";
import BackArrowSrc from "../Assets/svg/back-arrow.svg";

function BackArrow() {
  const navigate = useNavigate();

  const returnBack = () => {
    navigate(-1);
  };
  return (
    <div className="shareIconDiv backArrow" onClick={returnBack}>
      <img
        src={BackArrowSrc}
        alt="go back"
        style={{ height: "24px", width: "24px", color: "red" }}
      />
    </div>
  );
}

export default BackArrow;
