import React from "react";

const Main = ({ data }) => {
  return (
    <div id="img-container">
      <img
        className="bg"
        src={
          data?.hdurl ||
          "https://static.vecteezy.com/system/resources/thumbnails/003/384/754/original/animation-of-flying-through-outer-space-towards-milky-way-galaxy-free-video.jpg"
        }
      ></img>
    </div>
  );
};

export default Main;
