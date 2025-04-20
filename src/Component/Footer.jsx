import React from "react";
import { FaCircleInfo } from "react-icons/fa6";
const Footer = ({ showModal, handleModal, data }) => {
  return (
    <footer>
      <div className="bg-gradient"></div>
      <div>
        <h2>Astronomical Picture Of The Day</h2>
        <h1>{data?.title}</h1>
      </div>
      <button onClick={handleModal}>
        <FaCircleInfo />
      </button>
    </footer>
  );
};

export default Footer;
