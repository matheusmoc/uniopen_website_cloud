import React, { useState } from 'react';
import { disciplines } from '../constants/index'
import { motion } from "framer-motion";

const DropDownDisciplines = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  return (
    <section className="w-screen overflow-hidden h-full common-padding bg-zinc">
      {disciplines.map((discipline, index) => (
        <motion.div key={index} className="mb-6 mx-24"
            initial={{ opacity: 0, x: -150 }}
            transition={{ duration: 1.5 }}
            whileInView={{ x: 0, opacity: 1}}
        >
          <button
            className="flex justify-between items-center w-full p-4 rounded-md text-indigo-100 transition-colors duration-150 bg-fuchsia-700 focus:shadow-outline hover:bg-transparent hover:border hover:border-fuchsia-600 text-xl hover:text-fuchsia-600 font-semibold"
            onClick={() => toggleDropdown(index)}
          >
            <h2 className="text-xl font-semibold">{discipline.title}</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${activeDropdown === index ? 'transform rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={activeDropdown === index ? 'M19 9l-7 7-7-7' : 'M9 5l7 7-7 7'}
              />
            </svg>
          </button>
          {activeDropdown === index && (
            <div className="mt-2 p-4 bg-transparent border border-transparent hover:border-fuchsia-600 rounded-md text-fuchsia-300 text-xl font-semibold">
              <p className="mb-1">
                <strong>Conteúdo:</strong> {discipline.content.description}
              </p>
              <p>
                <strong>Aprendizado:</strong> {discipline.content.learning}
              </p>
            </div>
          )}
        </motion.div>
      ))}
    </section>
  );
};

export default DropDownDisciplines;
