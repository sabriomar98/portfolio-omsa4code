"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Software Engineering</span> from{" "}
        <span className="font-medium">Faculty of Science and Technology, (Errachidia | Morocco)</span>,
        and completing a Master in{" "}
        <span className="font-medium">Big Data and Decision Support</span> at{" "}
        <span className="font-medium">National School of Applied Sciences, (Khouribga | Morocco)</span>,
        I have been passionate about programming and development. I have professional experience
        as a{" "}
        <span className="font-medium">Full-Stack Developer</span> at AdLikeT Morocco and as a{" "}
        <span className="font-medium">JEE Consultant</span> at Fortil Group,
        where I worked on various backend and frontend projects.
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript, Prisma, and a wide range of other
        technologies including Spring Boot, Angular, and various database systems.
        I am always looking to learn new technologies.
      </p>

    </motion.section>
  );
}
