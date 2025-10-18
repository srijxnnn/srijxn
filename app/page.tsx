import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ModeToggle from "@/components/ModeToggle";
import Navbar from "@/components/Navbar";
import { Particles } from "@/components/ui/shadcn-io/particles";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between">
      <nav className="flex items-center justify-center border rounded-full mt-5 gap-1">
        <Navbar />
        <ModeToggle />
      </nav>
      <Hero />

      <Footer />

      <Particles className="-z-50 fixed inset-0 h-full w-full" />
    </div>
  );
}
