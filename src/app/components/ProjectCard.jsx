import React from "react";



const ProjectCard = ({ imgUrl, title, description, price }) => {
  return (
    <div className="grid  mt-10 lg:flex ">
      <div
        className="h-32 lg:h-[9rem] xl:w-1/4  w-32 lg:w-1/3 xl:h-[8.5rem] lg:m-0 m-auto relative group rounded-full"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></div>
      <div className="text-black lg:w-3/4 rounded-b-xl mt-3 lg:mt-0 text-center lg:text-left px-4">
        <h5 className="text-xl font-bold lg:mt-0 my-4">{title}</h5>
        <p className="text-[#0000008e] mb-4 xl:text-[15px]">{description}</p>
        <spam className=" text-orange-600">{price}</spam>
      </div>
    </div>
  );
};

export default ProjectCard;
