"use client";

import { Icon } from "lucide-react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data

const about = {
  title: "About me",
  description:
    "Saya adalah seorang Website Developer dengan latar belakang Informatika, memiliki keahlian dalam pengembangan aplikasi web dan mobile. Berpengalaman dalam membangun UI/UX interaktif menggunakan React, Next.js, dan Tailwind CSS, serta mengelola backend dengan Node.js. Selain itu, saya juga memiliki keterampilan dalam pengembangan aplikasi Android menggunakan Kotlin dan Firestore untuk manajemen data. Saya senang memecahkan masalah dan mengoptimalkan performa aplikasi agar lebih efisien. Dengan semangat untuk terus belajar dan berinovasi, saya selalu mencari tantangan baru dalam dunia teknologi.",
  items: [
    {
      fieldName: "Name",
      fieldValue: "Renaldi Fauzi Adnan",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+62)81347378620",
    },
    {
      fieldName: "Email",
      fieldValue: "renaldikun299@gmail.com",
    },
    {
      fieldName: "Experience Progamming",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Open for WFO",
      fieldValue: "Yes",
    },
    {
      fieldName: "Languages",
      fieldValue: "Indonesia, English",
    },
  ],
};

// experiance data

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experiance",
  description:
    "Website Developer dengan latar belakang Informatika dan pengalaman dalam pengembangan aplikasi Android menggunakan Kotlin. Terampil dalam membangun UI interaktif, mengintegrasikan API (seperti NewsAPI), serta menerapkan Dependency Injection dengan Hilt. Berpengalaman dalam pengelolaan database Firestore. Memiliki kemampuan problem-solving yang baik, terutama dalam debugging dan pengembangan fitur pencarian. Antusias dalam menciptakan solusi inovatif dan user-friendly dalam dunia teknologi.",
  items: [
    {
      company: "Freelance",
      position: "Full Stack Developer",
      duration: "2024 - Present",
    },
    {
      company: "Freelance",
      position: "Front-End Developer",
      duration: "2024 - Present",
    },
  ],
};

// education data

const education = {
  icon: "/assets/resume/badge.svg",
  title: "My Education",
  description:
    "Saya merupakan lulusan Sarjana Informatika dengan pemahaman yang kuat dalam pengembangan perangkat lunak, struktur data, dan algoritma. Selama studi, saya mendalami pengembangan aplikasi mobile khususnya Android menggunakan Kotlin, serta memahami konsep arsitektur yang baik untuk aplikasi yang scalable. Saya juga memiliki pengalaman dalam pengelolaan database seperti Firestore dan integrasi API untuk berbagai kebutuhan aplikasi. Salah satu pencapaian saya adalah berhasil menyelesaikan proyek Drive And Discover, yang memberikan saya pengalaman dalam pengembangan aplikasi berbasis data dan mendapatkan sertifikat sebagai pengakuan atas keberhasilannya.",
  items: [
    {
      institution: "Universitas Teknologi Yogyakarta",
      degree: "IPK 3.53",
      duration: "2020 - 2024",
    },
    {
      institution: "Smartpath Website Developer Minicourse Program",
      degree: "Full Stack Web Application Project React",
      duration: "2024",
    },
    {
      institution: "Data Engineering Professional Certification",
      degree: "Rapid Miner",
      duration: "2022",
    },
    {
      institution: "Commonity College",
      degree: "Associate Dagree in Computer Science",
      duration: "2021 - 2023",
    },
  ],
};

// skill data

const skills = {
  title: "My Skills",
  description:
    "Saya memiliki keahlian dalam pengembangan web front-end dan back-end, dengan pengalaman dalam menggunakan HTML5, CSS3, dan JavaScript untuk membangun antarmuka yang responsif dan interaktif. Saya juga menguasai framework modern seperti React dan Next.js untuk membangun aplikasi web yang efisien dan performa tinggi. Untuk styling, saya terbiasa menggunakan Tailwind CSS, yang memungkinkan pengembangan UI lebih cepat dan konsisten. Di sisi back-end, saya memiliki pengalaman dengan Node.js untuk membangun server-side applications. Selain itu, saya juga familiar dengan Figma untuk merancang dan mengimplementasikan desain UI/UX yang intuitif dan menarik.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "../../components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/70 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-x flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/70 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-x flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-l max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.institution}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.degree}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div>
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 ms:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-100">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60 ">{item.fieldName}</span>
                        <span className="text-accent ">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
