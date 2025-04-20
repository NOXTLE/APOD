import React from "react";
import { FaArrowRight } from "react-icons/fa";
const SideBar = ({ handleModal, data }) => {
  return (
    <div className="sideBar">
      <div className="overlay"></div>
      <div className="content">
        <h2>{data?.title}</h2>
        <div>
          <p className="desc">{data?.date}</p>
          <p style={{ marginTop: "12px" }}>{data?.explanation}</p>
        </div>
        <button onClick={handleModal}>
          <FaArrowRight></FaArrowRight>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
