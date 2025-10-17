import Hero from "@/components/Hero";
import ModeToggle from "@/components/ModeToggle";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between">
      <nav className="flex items-center justify-center min-w-full">
        <Navbar />
        <ModeToggle />
      </nav>
      <Hero />
      <footer className="p-8 text-xs">
        ~ $ built with next.js + shadcn/ui @ archlinux
      </footer>
    </div>
  );
}
