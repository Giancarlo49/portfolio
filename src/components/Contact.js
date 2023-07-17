// import React from "react";
// // motion
// import { motion } from "framer-motion";
// // variants
// import { fadeIn } from "../variants";

// const Contact = () => {
//   return (
//     <section className="py-16 lg:section" id="contact">
//       <div className="container mx-auto">
//         <div className="flex flex-col lg:flex-row">
//           {/* text */}
//           <motion.div
//             variants={fadeIn("right", 0.3)}
//             initial="hidden"
//             whileInView={"show"}
//             viewport={{ once: false, amount: 0.3 }}
//             className="flex-1 flex justify-start items-center"
//           >
//             <div>
//               <h4
//                 className="text-xl uppercase text-accent font-medium mb-2
//               tracking-wide"
//               >
//                 Get in touch
//               </h4>
//               <h2 className=" text-[45px] lg:text-[90px] leading-none mb-12">
//                 Let's work <br /> together!
//               </h2>
//             </div>
//           </motion.div>
//           {/* form */}
//           <motion.form
//             variants={fadeIn("left", 0.3)}
//             initial="hidden"
//             whileInView={"show"}
//             viewport={{ once: false, amount: 0.3 }}
//             className="flex-1 border rounded-2xl flex flex-col gap-y-6
//           pb-24 p-6 items-start"
//           >
//             <input
//               className="bg-transparent border-b py-3 outline-none w-full
//               placeholder:text-white focus:border-accent transition-all"
//               type="text"
//               placeholder="Your name"
//             />
//             <input
//               className="bg-transparent border-b py-3 outline-none w-full
//               placeholder:text-white focus:border-accent transition-all"
//               type="text"
//               placeholder="Your email"
//             />
//             <textarea
//               className="bg-transparent border-b py-3 outline-none w-full
//               placeholder:text-white focus:border-accent transition-all
//               resize-none mb-12"
//               placeholder="Your message"
//             ></textarea>
//             <button className="btn btn-lg">Send message</button>
//           </motion.form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

// Formular verlinkt

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { fadeIn } from "../variants";

// const Contact = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Hier kannst du den Code zum Senden der E-Mail hinzufügen
//     // Verwende die Variablen name, email und message, um die entsprechenden Daten zu erhalten
//     console.log("Formular wurde abgeschickt");
//     console.log("Name:", name);
//     console.log("E-Mail:", email);
//     console.log("Nachricht:", message);
//     // Du kannst hier die E-Mail-Versendung implementieren
//   };

//   return (
//     <section className="py-16 lg:section" id="contact">
//       <div className="container mx-auto">
//         <div className="flex flex-col lg:flex-row">
//           {/* text */}
//           <motion.div
//             variants={fadeIn("right", 0.3)}
//             initial="hidden"
//             whileInView={"show"}
//             viewport={{ once: false, amount: 0.3 }}
//             className="flex-1 flex justify-start items-center"
//           >
//             <div>
//               <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
//                 Get in touch
//               </h4>
//               <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
//                 Let's work <br /> together!
//               </h2>
//             </div>
//           </motion.div>
//           {/* form */}
//           <motion.form
//             onSubmit={handleSubmit}
//             variants={fadeIn("left", 0.3)}
//             initial="hidden"
//             whileInView={"show"}
//             viewport={{ once: false, amount: 0.3 }}
//             className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
//           >
//             <input
//               className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
//               type="text"
//               placeholder="Your Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//             <input
//               className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
//               type="email"
//               placeholder="Your E-Mail"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <textarea
//               className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
//               placeholder="message"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               required
//             ></textarea>
//             <button className="btn btn-lg" type="submit">
//               Send Message
//             </button>
//           </motion.form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

// Ohne Formular

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>
          {/* send message button */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <a
              href="mailto:luxelevare@gmail.com"
              className="btn btn-lg flex justify-center items-center"
            >
              {" "}
              <span className="text-xl">Message me</span>{" "}
              <span className="text-base"></span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
