"use client";

import { motion } from "framer-motion";

const Blog = () => {
  return (
    <section className="h-[100px] flex flex-col justify-center items-center gap-5">
      <motion.img
        src="./assets/gear.svg"
        alt="An illustration of a spinning gear, indicating something is coming soon"
        className="w-20 h-20 animate-slow-spin gap-3"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
      />
      <div className="text-center text-xl font-semibold hover:text-accent">
        COMING SOON
      </div>
    </section>
  );
};

export default Blog;
