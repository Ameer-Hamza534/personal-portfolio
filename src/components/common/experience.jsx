"use client";

import { motion } from "framer-motion";
import Star from "../../assets/skills/star.svg";
import wordpressIcon from "../../assets/skills/wordpress.svg";

const experiences = [
  {
    title: "WordPress Developer",
    company: "Freelancer (Fiverr, Upwork, Local Clients)",
    description:
      "Designed and developed responsive WordPress websites using Elementor Pro, WP Bakery, and DIVI theme for various clients. Specialized in converting Figma, PSD, or PDF designs to WordPress Elementor and creating custom templates. Delivered tailored solutions for e-commerce, trasport, logistics, business, and portfolio websites.",
    icon: wordpressIcon,
    technologies: ["Elementor Pro", "WP Bakery", "DIVI Theme", "HTML5", "CSS3"],
    duration: "4 years (January 2021 - Present)",
  },
  {
    title: "MERN Developer (Intern)",
    company: "Zawata Afnan Technologies",
    description:
      "Completed a 6-month internship, gaining hands-on experience in designing and developing admin panels (dashboards) using the MERN stack. Learned advanced concepts in frontend and backend development, improving skills in React.js, Node.js, MongoDB, and Express.js.",
    icon: Star,
    technologies: ["MERN", "MySQL"],
    duration: "6 months (July 2024 - December 2024)",
  },
];

export default function Experience() {
  return (
    <section className="min-h-screen bg-[#F2F2F4] py-24 px-4 sm:px-6 lg:px-8 rounded-tl-[40px] md:rounded-tl-[60px]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-green-600  mb-10 tracking-wider"
        >
          EXPERIENCE
        </motion.h2>

        <div className="">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left column - Title and Company */}
                <div className="lg:col-span-4 ">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
                      <img src={experience.icon} alt="" />
                    </div>
                    <div>
                      <h3 className="text-2xl font- ">{experience.title}</h3>
                      <p className=" mt-1">{experience.company}</p>
                      <p className=" text-sm mt-1">{experience.duration}</p>
                    </div>
                  </div>
                </div>

                {/* Right column - Description and Technologies */}
                <div className="lg:col-span-8 space-y-2">
                  <p className=" leading-relaxed text-gray-600">
                    {experience.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold text-gray-800 bg-green-300 hover:bg-gray-300 cursor-pointer transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Divider */}
              {index !== experiences.length - 1 && (
                <div className="w-full h-px bg-gray-300 my-8" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
