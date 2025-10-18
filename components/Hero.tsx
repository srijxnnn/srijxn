"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <main className="flex items-center justify-center px-6">
      <section className="text-center">
        <div className="text-5xl font-bold">
          Hi! I am
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gray-500"
          >
            Srijan Dhak
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-2xl m-6 max-w-2xl"
        >
          <div>A passionate developer building cool things on the web.</div>
          <Typewriter
            words={[
              "I build modern web apps",
              "I craft performant tools",
              "I love JS, TS & Rust",
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="flex items-center justify-center gap-3"
        >
          <Link href="/projects">
            <Button variant={"outline"} className="rounded-full">
              My projects
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant={"default"} className="rounded-full">
              Contact me
            </Button>
          </Link>
        </motion.div>
      </section>
    </main>
  );
};

export default Hero;
