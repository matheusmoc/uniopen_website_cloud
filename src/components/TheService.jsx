import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { robotImg } from "../utils";

export default function TheService() {
  return (
    <section className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <motion.div 
        initial={{ opacity: 0 }}
        transition={{ duration: 3.0 }}
        whileInView={{ opacity: 1 }}
        className="h-5/6 w-full flex flex-row items-center justify-start relative"
      >
        <motion.img
          initial={{
            x: -150,
            opacity: 0,
          }}
          transition={{
            duration: 1.3,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          src={robotImg}
          className="mt-24 flex-shrink-0 w-40 h-40 rounded-full object-cover md:rounded-lg md:w-42 md:h-95 xl:w-[500px] xl:h-[500px]"
        />
        <p className="xl:text-4xl text-2xl font-semibold z-10 ml-10">
          <Typewriter
            words={['Aqui você ficará um pouquinho por dentro sobre as disciplinas do curso de Sistemas de informação que abrangem a área de computação em nuvem.']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
      </motion.div>
    </section>
  );
}
