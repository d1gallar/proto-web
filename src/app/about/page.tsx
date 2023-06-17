import AboutLanding from "@/components/AboutLanding";
import BrainstormSection from "@/components/BrainstormSection";
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <main className="w-full h-full bg-white">
      <Navbar />
      <AboutLanding />
      <BrainstormSection />
    </main>
  )
}