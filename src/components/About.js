import React from "react";
import { Link } from "react-scroll";
// countup
import CountUp from "react-countup";
// intersection observer
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div
          className="flex flex-col gap-y-10 lg:flex-row lg:items-center
         lg:gap-x-20 lg:gap-y-0 h-screen"
        >
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" flex-1 bg-about bg-contain bg-no-repeat h-[640px]
        mix-blend-lighten bg-top"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">I'm a Fullstack Web Developer. </h3>
            <p className="mb-6">
              Experience with HTML5, CSS, JavaScript, React, Bootstrap,
              Tailwind, MongoDb and more...
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[35px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={1} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of
                  <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[35px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={5} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects
                  <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[35px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={73} duration={4} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied
                  <br />
                  Clients
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center ml-10">
              <Link
                to="contact"
                activeClass="active"
                smooth={true}
                spy={true}
                className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
              >
                <button className="btn btn-lg ">Contact me</button>
              </Link>

              <a href="#" className="text-gradient btn-link ml-5">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
