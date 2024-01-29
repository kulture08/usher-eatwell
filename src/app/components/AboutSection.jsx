"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";



const AboutSection = () => {
  return (
    <section className="text-black" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h4 className="text-base mb-5 lg:text-md">OUR STORY</h4>
          <h2 className="text-4xl font-bold text-black mb-4 md:text-[30px]">
            Welcome
          </h2>
          <p className="text-base mb-5 text-[#ADB7BE] lg:text-md">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <p className="text-base text-[#ADB7BE] lg:text-md">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
          <div>
            <Link
              href="/#contact"
              className="justify-center flex my-6 md:px-3  py-3 w-full sm:w-fit border border-solid
                border-gray-700 md:mr-4 bg-transparent from-cyan-900 to-slate-500
                hover:text-white hover:bg-slate-700 text-gray-700  text-sm rounded"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
        <Image
          src="/images/about_img_1.jpg"
          width={600}
          alt="images"
          height={800}
          className=" md:h-[40vh]  lg:h-[40vh] object-cover xl:h-[56vh]"
        />
      </div>
    </section>
  );
};

export default AboutSection;
