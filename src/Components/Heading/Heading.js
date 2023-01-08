import React from "react";
import { motion } from "framer-motion";
import "./style.css";

const Heading = () => {
  return (
    <div className="heading">
       <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          <h1>NBA TEAMS.</h1>
        </motion.h1>
    </div>
  );
};

export default Heading;
