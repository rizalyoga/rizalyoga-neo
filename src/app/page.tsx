import Navigation from "./components/navigations/Navigation";
import Contact from "./components/pages/Contact";
import HeroSection from "./components/pages/Hero";
import Projects from "./components/pages/Projects";
import Technologies from "./components/pages/Technologies";
import ToTopButton from "./components/buttons/ToTopButton";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Toaster />
      <Navigation />
      <HeroSection />
      <Technologies />
      <Projects />
      <Contact />
      <ToTopButton />
    </>
  );
}
