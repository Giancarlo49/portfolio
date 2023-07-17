// import React from "react";
// // icon
// import { BsArrowUpRight } from "react-icons/bs";
// // motion
// import { motion } from "framer-motion";
// // variants
// import { fadeIn } from "../variants";

// //services data

// const services = [
//   {
//     name: "HTML5",
//     description:
//       "HTML5 is the latest version of the Hypertext Markup Language used for structuring and presenting content on the World Wide Web. It provides enhanced features and semantic elements for building modern web pages. Learn more",
//     link: "Learn more",
//   },
//   {
//     name: "CSS",
//     description:
//       "CSS (Cascading Style Sheets) is a styling language used to control the presentation and layout of web pages. It enables developers to customize the appearance of HTML elements and create visually appealing designs. Learn more",
//     link: "Learn more",
//   },
//   {
//     name: "JavaScript",
//     description:
//       "JavaScript is a versatile programming language commonly used for creating interactive web pages and web applications. It allows developers to add behavior and interactivity to their websites. Learn more",
//     link: "Learn more",
//   },
//   {
//     name: "React",
//     description:
//       "React is a popular JavaScript library for building user interfaces. It provides a component-based approach to web development, making it easier to manage and update UI components. Learn more",
//     link: "Learn more",
//   },
// ];

// const Services = () => {
//   return (
//     <section className="section" id="services">
//       <div className="container mx-auto">
//         <div className="flex flex-col lg:flex-row">
//           {/* text & image */}
//           <motion.div
//             variants={fadeIn("right", 0.3)}
//             initial="hidden"
//             whileInView={"show"}
//             viewport={{ once: false, amount: 0.3 }}
//             className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat
//           mix-blend-lighten mb-12 lg:mb-0"
//           >
//             <h2 className="h2 text-accent mix-blend-lighten mb-6">
//               Experiences.{" "}
//             </h2>
//             <h3 className="h3 max-w-[455px] mb-16">
//               Born in Italy, raised in Germany and Spain.
//               <br />
//               Open to the world and new experiences.
//               <br />
//               Offen für die Welt und neue Erfahrungen.
//             </h3>
//             <button className="btn btn-sm">See my work</button>
//           </motion.div>
//           {/* services */}
//           <motion.div
//             variants={fadeIn("left", 0.5)}
//             initial="hidden"
//             whileInView={"show"}
//             viewport={{ once: false, amount: 0.3 }}
//             className="flex-1"
//           >
//             {/* services list */}
//             <div>
//               {services.map((service, index) => {
//                 // destructure service
//                 const { name, description, link } = service;
//                 return (
//                   <div
//                     className="border-b border-white/20 h-[146px] mb-[38px]
//                     flex"
//                     key={index}
//                   >
//                     <div className="max-w-[476px]">
//                       <h4
//                         className="text-[20px] tracking-wider font-primary
//                       font-semibold mb-6"
//                       >
//                         {name}
//                       </h4>
//                       <p className="font-secondary leading-tight">
//                         {description}
//                       </p>
//                     </div>
//                     <div className="flex flex-col flex-1 items-end">
//                       <a
//                         href="#"
//                         className="btn w-9 h-9 mb-[42px] flex justify-center items-center "
//                       >
//                         <BsArrowUpRight />
//                       </a>
//                       <a href="#" className="text-gradient text-sm">
//                         {link}
//                       </a>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "HTML5",
    description:
      "HTML5 is the latest version of the Hypertext Markup Language used for structuring and presenting content on the World Wide Web. It provides enhanced features and semantic elements for building modern web pages. Learn more",
    link: "Learn more",
    url: "https://www.w3schools.com/html/default.asp",
  },
  {
    name: "CSS",
    description:
      "CSS (Cascading Style Sheets) is a styling language used to control the presentation and layout of web pages. It enables developers to customize the appearance of HTML elements and create visually appealing designs. Learn more",
    link: "Learn more",
    url: "https://www.w3schools.com/css/default.asp",
  },
  {
    name: "JavaScript",
    description:
      "JavaScript is a versatile programming language commonly used for creating interactive web pages and web applications. It allows developers to add behavior and interactivity to their websites. Learn more",
    link: "Learn more",
    url: "https://www.w3schools.com/js/default.asp",
  },
  {
    name: "React",
    description:
      "React is a popular JavaScript library for building user interfaces. It provides a component-based approach to web development, making it easier to manage and update UI components. Learn more",
    link: "Learn more",
    url: "https://react.dev/",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mix-blend-lighten mb-6">
              Experiences.
            </h2>
            <h3 className="h3 max-w-[455px] mb-16">
              Born in Italy, raised in Germany and Spain.
              <br />
              Open to the world and new experiences.
              <br />
              Offen für die Welt und neue Erfahrungen.
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* services list */}
            <div>
              {services.map((service, index) => {
                const { name, description, link, url } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gradient text-sm"
                      >
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
