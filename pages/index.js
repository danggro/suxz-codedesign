import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import SectionAbout from "@/components/SectionAbout";
import SectionContact from "@/components/SectionContact";
import SectionHero from "@/components/SectionHero";
import SectionLearnings from "@/components/SectionLearnings";
import SectionTestimonials from "@/components/SectionTestimonial";

export default function Home() {
  return (
    <>
      <NavBar />
      <SectionHero />
      <SectionLearnings />
      <SectionAbout />
      <SectionTestimonials />
      <SectionContact />
      <Footer />
    </>
  );
}
