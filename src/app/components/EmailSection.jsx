"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
// import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="my-9 mb-0 md:my-8 grid py-24 xl:px-16 pb-10 gap-1 relative"
    >
      <h2 className="text-center text-4xl  font-bold text-black mt-4 mb-8 md:mb-5">
        Get In Touch
      </h2>
      <p className="text-center text-[#0000008e]">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts.
      </p>
      <div className="grid md:grid-cols-2 lg:gap-10 my-1 mb-0 md:my-1 xl:mt-10 py-2 xl:gap-20 pb-10 gap-4 relative">
        <div>
          {emailSubmitted ? (
            <p className="text-green-500 text-sm mt-2">
              Email sent successfully!
            </p>
          ) : (
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="mb-6">
                <input
                  name="name"
                  type="name"
                  id="name"
                  required
                  className="bg-[#E6E6E6] bg-[#E6E6E6]] placeholder-[#6b6f74]  text-sm   block w-full p-2.5"
                  placeholder="Name"
                />
              </div>
              <div className="mb-6">
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  className="bg-[#E6E6E6]  bg-[#E6E6E6]] placeholder-[#6b6f74]   text-sm   block w-full p-2.5"
                  placeholder="Email"
                />
              </div>
              <div className="mb-6">
                <textarea
                  name="message"
                  id="message"
                  className="bg-[#E6E6E6] bg-[#E6E6E6]] placeholder-[#6b6f74]  text-sm   block w-full p-2.5"
                  placeholder="  Write your message"
                />
              </div>
              <button
                type="submit"
                className="bg-orange-500 hover:bg-slate-500 text-white font-medium py-2.5 px-5 rounded w-fit"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
        <div className="">
          <Image
            src="/images/about_img_1.jpg"
            width={600}
            alt="images"
            height={800}
            className=" md:h-[40vh]  lg:h-[20vh] xl:w-[90%]  object-cover xl:h-[45vh]"
          />
          <p class="pt-3 pb-2">Address:</p>
          <p class="pb-2">121 Street, Melbourne Victoria </p>
          <p>3000 Australia </p>
          <p class="pt-4 pb-2">Phone: </p>
          <span>90 987 65 44 </span>
          <p class="pt-4 pb-2">Email: </p>
          <a href="#" className="text-orange-500">
            info@yoursite.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
