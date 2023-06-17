import Navbar from '@/components/Navbar';
import Landing from "@/components/Landing";
import DesignSection from "@/components/DesignSection";
import BrandingSection from "@/components/BrandingSection";
import Testimonials from "@/components/Testimonals";

export default function Home() {
  return (
    <main className="bg-[#B7E2D0] w-full h-full">
      <Navbar />
      <Landing />
      <DesignSection />
      <BrandingSection />
      <Testimonials />
    </main>
  );
}
