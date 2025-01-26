import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { RevealLinks } from "../components/common/RevealLinks";
import SEO from "../components/SEO";
import ScrollElement from "../components/ui/scroll-element";
import { FlipWords } from "../components/ui/flip-words";
export const AboutsPage = () => {
  const words = [
    "Creative",
    "Innovative",
    "Dynamic",
    "Interactive",
    "Visionary",
    "Passionate",
    "Adaptive",
    "Tech-Savvy",
    "Problem-Solving",
    "Skilled",
    "Experienced",
    "Efficient",
    "Impactful",
    "Curious",
    "Collaborative",
    "Frontend",
    "Backend",
    "Full-Stack",
    "Freelance",
    "Pixel-Perfect",
    "Cutting-Edge",
    "Scalable",
    "Empathetic",
    "Versatile",
    "Growth-Focused",
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SEO
        title="About Us"
        description="Welcome to my portfolio website. I'm a WordPress Developer with expertise in Elementor Pro and modern web technologies."
        path="/about"
      />
      <section className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-[#fff]]">
        <h2 className="relative z-0 text-[14vw] font-black text-neutral-800 md:text-[200px]">
          AMEER HAMZA<span className="text-orange-500">.</span>
        </h2>
        <Cards />
      </section>
      <div className="overflow-hidden min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-20 space-y-32">
          <ScrollElement
            direction="top"
            viewport={{ amount: 0.3, margin: "0px 0px 0px 0px" }}
            className="flex flex-col items-start"
          >
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 p-8">
              I&apos;m Hamza,{" "}
              <FlipWords
                className="bg-gradient-to-r from-green-600 to-green-400 text-white px-4 py-2 rounded-xl shadow-lg"
                words={words}
              />{" "}
              <span className="block mt-4">
                Developer living in Rahimyar Khan & focused on creating
                innovative and impactful digital experiences.
              </span>
            </div>
          </ScrollElement>

          <ScrollElement
            direction="top"
            viewport={{ amount: 0.3, margin: "0px 0px 0px 0px" }}
          >
            <div className="p-8 rounded-2xl transition-all duration-500 ">
              <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-800">
                With{" "}
                <span className="font-semibold text-green-600">
                  4 years of experience
                </span>
                in WordPress development, I have built websites using Elementor
                Pro, WP Bakery, and DIVI theme. I specialize in converting
                Figma, PSD, or PDF designs to WordPress Elementor and developing
                custom templates for clients on Fiverr, Upwork, and local
                businesses.
              </p>
            </div>
          </ScrollElement>

          <ScrollElement
            direction="top"
            viewport={{ amount: 0.3, margin: "0px 0px 0px 0px" }}
            className="group"
          >
            <div className="p-8 rounded-2xl ">
              <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-800">
                During my{" "}
                <span className="font-semibold text-green-600">
                  6-month internship
                </span>{" "}
                at Zawata Afnan Technologies, I gained hands-on experience with
                the MERN stack and designed and developed admin panels
                (dashboards). This experience honed my skills in creating
                user-friendly and scalable web applications.
              </p>
            </div>
          </ScrollElement>

          <ScrollElement
            direction="top"
            viewport={{ amount: 0.3, margin: "0px 0px 0px 0px" }}
            className="group"
          >
            <div className="p-8 rounded-2xl">
              <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed ">
                My expertise in{" "}
                <span className="font-semibold text-green-400">WordPress</span>,
                <span className="font-semibold text-green-400">
                  Elementor Pro
                </span>
                , and{" "}
                <span className="font-semibold text-green-400">React.js</span>
                allows me to create solutions that are both user-focused and
                highly scalable. I am passionate about crafting websites and
                dashboards that deliver value and functionality.
              </p>
            </div>
          </ScrollElement>
        </div>
      </div>

      <RevealLinks />
    </>
  );
};

const Cards = () => {
  const containerRef = useRef(null);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      <Card
        containerRef={containerRef}
        src="https://res.cloudinary.com/daqj8xuyr/image/upload/v1737719532/rp_mxz4a0.jpg"
        alt="Example image"
        rotate="12deg"
        top="10%"
        left="10%"
        className="w-36 md:w-56"
      />
      <Card
        containerRef={containerRef}
        src="https://res.cloudinary.com/daqj8xuyr/image/upload/v1737704058/personal-dark_vewfkk.jpg"
        alt="Example image"
        rotate="12deg"
        top="50%"
        left="80%"
        className="w-24 md:w-48"
      />
    </div>
  );
};

const Card = ({ containerRef, src, alt, top, left, rotate, className }) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge(
        "drag-elements absolute w-48 bg-neutral-200 p-1 pb-4",
        className
      )}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      // Uncomment below and remove dragElastic to remove movement after release
      //   dragMomentum={false}
      dragElastic={0.65}
    />
  );
};
