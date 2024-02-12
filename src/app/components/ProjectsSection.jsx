"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Salted Fried Chicken",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    price: ["$35.50"],
    image: "/images/menu_1.jpg",
    tag: ["BREAKFAST", "LUNCH"],
  },
  {
    id: 2,
    title: "Salted Fried Chicken",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    price: ["$35.50"],
    image: "/images/menu_2.jpg",
    tag: ["BREAKFAST", "DINNER"],
  },
  {
    id: 3,
    title: "Salted Fried Chicken",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    price: ["$35.50"],
    image: "/images/menu_3.jpg",
    tag: ["BREAKFAST", "DINNER"],
  },
  {
    id: 4,
    title: "Fried Potato w/ Garlic",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    price: ["$35.50"],
    image: "/images/menu_1.jpg",
    tag: ["BREAKFAST", "LUNCH"],
  },
  {
    id: 5,
    title: "Fried Potato w/ Garlic",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    price: ["$35.50"],
    image: "/images/menu_2.jpg",
    tag: ["BREAKFAST", "LUNCH"],
  },
  {
    id: 6,
    title: "Italian Sauce Mushroom",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    price: ["$35.50"],
    image: "/images/menu_3.jpg",
    tag: ["BREAKFAST", "DINNER"],
  },
  {
    id: 7,
    title: "Italian Sauce Mushroom",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    price: ["$35.50"],
    image: "/images/menu_1.jpg",
    tag: ["DINNER"],
  },
  {
    id: 8,
    title: "Italian Sauce Mushroom",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    price: ["$35.50"],
    image: "/images/menu_2.jpg",
    tag: ["DINNER"],
  },
  {
    id: 9,
    title: "Salted Fried Chicken",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    price: ["$35.50"],
    image: "/images/menu_3.jpg",
    tag: ["LUNCH"],
  },
  {
    id: 10,
    title: "Salted Fried Chicken",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    price: ["$35.50"],
    image: "/images/menu_1.jpg",
    tag: ["LUNCH"],
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("BREAKFAST");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 0, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="menu">
      <h2 className="text-center text-4xl  font-bold text-black mt-4 mb-8 md:mb-5">
        Delicious Menu
      </h2>
      <p className="text-center text-[#0000008e]">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts.
      </p>
      <div className="text-white flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-2 px-5 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="BREAKFAST"
          isSelected={tag === "BREAKFAST"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="LUNCH"
          isSelected={tag === "LUNCH"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="DINNER"
          isSelected={tag === "DINNER"}
        />
      </div>
      <ul
        ref={ref}
        className="grid md:grid-cols-2 md:px-14 xl:px-16 lg:p-0 gap-8 md:gap-16 lg:gap-8"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              price={project.price}
              imgUrl={project.image}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
