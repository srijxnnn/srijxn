"use client";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ModeToggle from "@/components/ModeToggle";
import Navbar from "@/components/Navbar";
import { Particles } from "@/components/ui/shadcn-io/particles";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={"home"}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Hero />
        </motion.div>
      </AnimatePresence>

      <Footer />

      <Particles className="-z-50 fixed inset-0 h-full w-full" />
    </div>
  );
}
