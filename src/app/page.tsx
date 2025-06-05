import Navigation from "./components/navigations/Navigation";
import Contact from "./components/pages/Contact";
import HeroSection from "./components/pages/Hero";
import Projects from "./components/pages/Projects";
import Technologies from "./components/pages/Technologies";
import { Toaster } from "react-hot-toast";
import AboutMe from "./components/pages/AboutMe";

export default function Home() {
  return (
    <>
      <Toaster />
      <Navigation />
      <HeroSection />
      <AboutMe />
      <Projects />
      <Technologies />
      <Contact />
    </>
  );
}
