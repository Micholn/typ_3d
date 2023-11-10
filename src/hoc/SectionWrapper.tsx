import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer, StaggerContainerVariants } from "../utils/motion";

const StarWrapper = (Component: React.FC, idName: string) => {
  const variants: StaggerContainerVariants = staggerContainer(1, 0);

  function HOC() {
    return (
      <motion.section
        variants={variants}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  }
  
  return HOC;
};

export default StarWrapper;
