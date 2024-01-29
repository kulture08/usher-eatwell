"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import '../components/styles.css'

const HeroSection = () => {
  return (
    <section className=" h-[100vh] flex justify-center hero  items-center relative md:h-[50vh] xl:h-[100vh]">
      <div className="grid px-5 md:px-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8  text-center sm:text-center "
        >
          <h1 className="text-white mb-4 md:mt-20 text-[30px] md:text-[37px] sm:text-[30px] lg:leading-normal   xl:m-0 font-[900]">
            <br></br>
            <TypeAnimation
              sequence={["Welcome To EatWell", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE]  sticky text-base sm:text-lg mb-6 lg:text-[16px] lg:mt-2">
            Come and eat well with our delicious & healthy foods.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block rounded py-3 w-full sm:w-fit border-2 border-solid border-gray-50 mr-4 bg-transparent from-cyan-900 to-slate-500 hover:text-black hover:bg-slate-200 text-white"
            >
              Reservation
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
