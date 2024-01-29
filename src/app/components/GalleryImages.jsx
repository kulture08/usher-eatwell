import React from "react";

const GalleryImages = ({ imgUrl }) => {
  return (
      <div
        className="h-44 im xl:w-1/4  xl:h-[8.5rem] lg:m-0 "
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></div>
  );
};

export default GalleryImages;
