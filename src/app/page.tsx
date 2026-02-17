import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Equipment from "@/components/Equipment";
import GalleryPreview from "@/components/GalleryPreview";
import NovicePreview from "@/components/NovicePreview";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Equipment />
      <GalleryPreview />
      <NovicePreview />
      <Contact />
    </>
  );
}
