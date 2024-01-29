import React from "react";
import Facebook from "../../../public/svgs/facebook.svg";
import Twit from "../../../public/svgs/twitter.svg";
import Insta from "../../../public/svgs/instagram.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer  bg-[#222] xl:justify-center text-white">
      <div className="container py-12 px-5  xl:px-20 xl:py-20 lg:px-9 xl:m-auto">
        <div className="grid gap-8 md:grid-cols-3 md:gap-14 xl:gap-20 lg:grid-cols-4 xl:flex  xl:grid-cols-none pb-5">
          <div className=" xl:w-3/5">
            <h6 className="text-white pb-3">ABOUT US</h6>
            <p className="text-gray-400 pb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque,
              similique, delectus blanditiis odit expedita amet. Sed labore
              ipsum vel dolore, quis, culpa et magni autem sequi facere eos
              tenetur, ex?
            </p>
          </div>
          <div className="xl:w-[24%]">
            <h6 className="text-white pb-3">THE RESTAURANT</h6>
            <ul className="d-grid">
              <li>
                <a href="#" className="text-gray-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400">
                  Chefs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="xl:w-1/5">
            <h6 className="text-white pb-3">USEFUL LINKS</h6>
            <ul className="d-grid">
              <li>
                <a href="#" className="text-gray-400">
                  Foods
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400">
                  Drinks
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400">
                  Breakfast
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400">
                  Brunch
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400">
                  Dinner
                </a>
              </li>
            </ul>
          </div>
          <div className="xl:w-1/5">
            <h6 className="text-white pb-3 ">USEFUL LINKS</h6>
            <ul className="d-grid">
              <li>
                <a href="#" className="text-gray-400">
                  Foods
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400">
                  Drinks
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400">
                  Breakfast
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400">
                  Brunch
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400">
                  Dinner
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="socials flex justify-center md:mt-9 lg:mt-5 flex-row gap-2">
          <a
            href="github.com"
            target={"_blank"}
            className="w-7 h-7  mx-3 p-1 bg-gray-400 rounded-full sm:mx-1"
          >
            <Image src={Twit} alt="Github Icon" />
          </a>
          <a
            href="github.com"
            target={"_blank"}
            className="w-7 h-7 p-1 mx-3  bg-gray-400 rounded-full sm:mx-1"
          >
            <Image src={Facebook} alt="Github Icon" />
          </a>
          <a
            href="linkedin.com"
            target={"_blank"}
            className="w-7 h-7 mx-3 px-1 pt-[1%] xl:pt-[0.2%] bg-gray-400 rounded-full sm:mx-1"
          >
            <Image className="w-96" src={Insta} alt="Linkedin Icon" />
          </a>
        </div>
        <p className="text-gray-400 pt-5 xl:mt-5 text-center">
          © Copyright {new Date().getFullYear()}&copy; All rights reserved |
          This template is made with{" "}
          <a href="!">
            <i className="fa-solid fa-heart text-secondary"></i>
          </a>{" "}
          by Colorlib
        </p>
      </div>
    </footer>
  );
};

export default Footer;
