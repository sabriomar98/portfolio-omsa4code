import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Master's degree in big data and decision support",
    location: "ENSA, Khouribga",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a full stack Developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Full-Stack Developer",
    location: "EKbloks, Marrakech",
    description:
      "I worked as a front-end developer for 3 months in 1 job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "sept. 2022 - févr. 2022",
  },
  {
    title: "JEE Consultant",
    location: "Fortil Group, Casablanca",
    description:
      "I worked as a Java EE consultant to provide a solution to process customer transactions in XML format, so they could download them to PDF efficiently and correctly.",
    icon: React.createElement(CgWorkAlt),
    date: "mars 2023 - janv. 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "AdLikeT Morocco, Rabat",
    description:
      "I'm now a full-stack developer working on the creation of websites and participating to the company's internet solutions. My stack includes Node.js(Express.js, Nest.js), React, Next.js, TypeScript, Tailwind, Prisma and MongoDB, and also everything related to JAVA EE. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "avril 2024 - présent",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "Redux",
  "Hasura",
  "Git",
  "GitHub",
  "GitLab",
  "Tailwind",
  "Bootstrap",
  "Material UI",
  "AntDesign",
  "Prisma",
  "MongoDB",
  "MySql",
  "PostgreSQL",
  "GraphQL",
  "Java",
  "Spring Boot",
  "JPA",
  "Docker",

] as const;
