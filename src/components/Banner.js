import React from "react";
import { Link } from "react-scroll";
import Image from "../assets/carlo.png";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              GIANCARLO <span>SCALISI</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={["Web Developer", 2000, "Fullstack", 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              As an aspiring web developer with one year of experience, I look
              forward to the upcoming challenges.
              <br />
              Als angehender Webentwickler mit einem Jahr Erfahrung, freue ich
              mich auf die nächsten Herausforderungen.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0" // Geändert: mb-12 zu mb-16
            >
              <Link
                to="contact"
                activeClass="active"
                smooth={true}
                spy={true}
                className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
              >
                <button className="btn btn-lg">Contact me</button>
              </Link>
              <a href="#" className="text-gradient btn-link ml-8">
                My Portfolio
              </a>
            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              {/* <a href="https://twitter.com/luxelevare" target="_blank">
                <FaTwitter />
              </a> */}
              <a href="https://github.com/Giancarlo49" target="_blank">
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/giancarlo-scalisi-92070926b/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img className="w-[450px] h-[450px]" src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
