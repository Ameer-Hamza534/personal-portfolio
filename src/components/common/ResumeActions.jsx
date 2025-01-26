"use client";

import { useMemo, useState, useRef, useEffect } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import { Download, Headphones, Pause } from "lucide-react";
import FamilyButton from "../ui/FamilyButton";

export function ResumeActions() {
  return (
    <div className="fixed bottom-4 right-4 z-[100]">
      <FamilyButton>
        <ResumeActionsToggle />
      </FamilyButton>
    </div>
  );
}

const tabs = [
  { id: 0, label: "Download" },
  // { id: 1, label: "Listen" },
];

export function ResumeActionsToggle() {
  const [activeTab, setActiveTab] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const [ref, bounds] = useMeasure();
  const audioRef = useRef(null);

  // Replace this with your Google Drive file ID
  const RESUME_PDF_ID = "1LxnxX3AoSnV_Uti9feKEjjOSI0vV7c_-";
  // Google Drive direct download link
  const PDF_URL = `https://drive.google.com/uc?export=download&id=${RESUME_PDF_ID}`;

  // Function to handle PDF download from Google Drive
  const handleDownload = () => {
    try {
      window.open(PDF_URL, "_blank");
    } catch (error) {
      console.error("Error in download handler:", error);
      alert(
        "Sorry, there was an error downloading the resume. Please try again later."
      );
    }
  };

  // For audio playback using TTS (Text-to-Speech)
  const handleAudioPlayback = () => {
    if (!window.speechSynthesis) {
      alert(
        "Sorry, your browser doesn't support text-to-speech functionality."
      );
      return;
    }

    try {
      if (!audioRef.current) {
        // Initialize speech synthesis
        const utterance = new SpeechSynthesisUtterance(RESUME_TEXT);
        // Customize voice settings
        utterance.rate = 1.0; // Speed of speech
        utterance.pitch = 1.0; // Pitch of voice
        utterance.volume = 1.0; // Volume

        // Try to set a natural-sounding voice
        const voices = window.speechSynthesis.getVoices();
        const englishVoice =
          voices.find(
            (voice) =>
              voice.lang.startsWith("en") && voice.name.includes("Natural")
          ) || voices.find((voice) => voice.lang.startsWith("en"));

        if (englishVoice) {
          utterance.voice = englishVoice;
        }

        // Add event listeners
        utterance.onend = () => {
          setIsPlaying(false);
        };
        utterance.onerror = () => {
          setIsPlaying(false);
          setAudioError(true);
          alert("Sorry, there was an error with the text-to-speech playback.");
        };

        audioRef.current = utterance;
      }

      if (isPlaying) {
        window.speechSynthesis.cancel();
        setIsPlaying(false);
      } else {
        window.speechSynthesis.speak(audioRef.current);
        setIsPlaying(true);
      }
    } catch (error) {
      console.error("Error in audio handler:", error);
      setAudioError(true);
      alert(
        "Sorry, there was an error with the audio playback. Please try again later."
      );
    }
  };

  // Cleanup speech synthesis on component unmount
  useEffect(() => {
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Replace this with your resume text content
  const RESUME_TEXT = `
    Name: Hamza Javed
    Location: Rahimyar Khan, Punjab
    Contact: +92 3218155205
    Email: itishamza.pk@gmail.com

    I am a Full-Stack Developer with 6+ months of experience specializing in MERN stack development (MongoDB, Express, React, Node.js). Skilled in designing and building scalable, maintainable, and user-friendly web applications. Experienced in WordPress front-end development using Elementor.

    Key Skills:
    - Full-Stack Development (MERN Stack)
    - WordPress Development
    - Problem-Solving & Debugging
    - Responsive UI/UX Design

    Education:
    - Bachelor of Arts in Computer Science | Virtual University | June 2024
    - Faculty of Arts in Computer Science | Govt. Degree College Sadiqabad | June 2024

    Experience:
    - Full Stack Developer (Intern) | Zawata Afnan Technologies | Jan - July 2024
      * Developed scalable applications using MERN stack.
      * Collaborated with cross-functional teams to meet deadlines.
      * Debugged and optimized application performance.
    - Web Developer & WordPress Frontend Developer | Fiverr | Apr 2021 - Present
      * Designed and developed responsive WordPress websites using Elementor.
      * Delivered pixel-perfect implementations and tailored designs.

    Certifications:
    - The Complete Web Development Zero to Mastery (Udemy)
    - Explore a Career in Front-End Web Development (LinkedIn)
  `.trim();

  const content = useMemo(() => {
    switch (activeTab) {
      case 0:
        return (
          <button
            onClick={handleDownload}
            className="flex items-center justify-center p-2 rounded-full hover:bg-neutral-600 transition-colors"
            aria-label="Download Resume"
          >
            <Download size={32} className="text-white" />
          </button>
        );
      // case 1:
      //      return (
      //           <button
      //                onClick={handleAudioPlayback}
      //                className="flex items-center justify-center p-2 rounded-full hover:bg-neutral-600 transition-colors"
      //                aria-label={isPlaying ? "Pause Audio" : "Play Audio"}
      //                disabled={audioError}
      //           >
      //                {isPlaying ? (
      //                     <Pause size={32} className="text-white" />
      //                ) : (
      //                     <Headphones size={32} className="text-white" />
      //                )}
      //           </button>
      //      )
      default:
        return null;
    }
  }, [activeTab, isPlaying, audioError]);

  // Handle tab switching only
  const handleTabClick = (newTabId) => {
    if (newTabId !== activeTab && !isAnimating) {
      const newDirection = newTabId > activeTab ? 1 : -1;
      setDirection(newDirection);
      setActiveTab(newTabId);
      playClickSound();
    }
  };

  // Cleanup audio on component unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener("ended", () => {
          setIsPlaying(false);
        });
      }
    };
  }, []);

  const variants = {
    initial: (direction) => ({
      x: 300 * direction,
      opacity: 0,
      filter: "blur(4px)",
    }),
    active: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
    exit: (direction) => ({
      x: -300 * direction,
      opacity: 0,
      filter: "blur(4px)",
    }),
  };

  return (
    <div className="flex flex-col items-center pt-4 text-white">
      <div className="flex space-x-1 border border-none rounded-[8px] cursor-pointer bg-neutral-700 px-[3px] py-[3.2px] shadow-inner-shadow">
        {tabs.map((tab, i) => (
          <button
            key={`${tab.id}-i-${i}`}
            onClick={() => handleTabClick(tab.id)}
            className={`${
              activeTab === tab.id ? "text-white" : "hover:text-white-300/60"
            } relative rounded-[5px] px-3 py-1.5 text-xs sm:text-sm font-medium text-white-600 transition focus-visible:outline-1 focus-visible:ring-1 focus-visible:ring-blue-light focus-visible:outline-none`}
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="resume-action-bubble"
                className="absolute inset-0 z-10 bg-neutral-800 mix-blend-difference shadow-inner-shadow"
                style={{ borderRadius: 5 }}
                transition={{ type: "spring", bounce: 0.19, duration: 0.4 }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </div>
      <MotionConfig transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}>
        <motion.div
          className="relative mx-auto my-[10px] w-[60px] md:w-[150px] overflow-hidden"
          initial={false}
          animate={{ height: bounds.height }}
        >
          <div className="md:p-6 p-2" ref={ref}>
            <AnimatePresence
              custom={direction}
              mode="popLayout"
              onExitComplete={() => setIsAnimating(false)}
            >
              <motion.div
                key={activeTab}
                variants={variants}
                initial="initial"
                animate="active"
                exit="exit"
                custom={direction}
                onAnimationStart={() => setIsAnimating(true)}
                onAnimationComplete={() => setIsAnimating(false)}
                className="flex items-center justify-center"
              >
                {content}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </MotionConfig>
    </div>
  );
}
