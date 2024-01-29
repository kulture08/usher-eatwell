import Image from "next/image";
import React from "react";
import img1 from "../../../public/images/menu_1.jpg";
import img2 from "../../../public/images/menu_2.jpg";
import img3 from "../../../public/images/menu_3.jpg";

const FramerImage = Image;

const FirstCards = ({ img, title, price, summary,  but }) => {
  return (
    <li className="w-full pb-5 ">
      <a className="w-full cursor-pointer  ">
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto "
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
        />
      </a>
      <div className="text bg-white text-center py-5 lg:py-4  xl:pb-2 px-5">
        <span className="text-orange-600 ">{price}</span>
        <a href="/" target="_blank" className="">
          <h5 className="text-xl font-bold  my-4">{title}</h5>
        </a>
        <p className="text-[#0000008e] mb-4 xl:text-[15px]">{summary}</p>

        <a
          href="/contact"
          className="justify-center flex my-6 md:px-3  p-3 xl:py-2  w-fit 0 m-auto bg-orange-600  rounded from-cyan-900 to-slate-500
                text-white hover:bg-slate-700  text-sm"
        >
          {but}
        </a>
      </div>
    </li>
  );
};

const News = () => {
  return (
    <section className="bg-[#F8F9FA] xl:mt-20 py-3 px-2 md:pt-10">
      <h2 className="text-center text-4xl  font-bold text-black mt-4 mb-8 md:mb-5">
        News
      </h2>
      <p className="text-center text-[#0000008e]">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts.
      </p>
      <div className="px-5 grid gap-5 sm:flex list-none py-5 xl:px-32">
        <FirstCards
          img={img1}
          title="We Have Dilecious Food"
          summary="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          but="Read More"
        />
        <FirstCards
          img={img2}
          title="Chef Special Menu"
          summary="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          but="Read More"
        />
        <FirstCards
          img={img3}
          title="Merriage Celebrations"
          summary="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          but="Read More"
        />
      </div>
    </section>
  );
};

export default News;
