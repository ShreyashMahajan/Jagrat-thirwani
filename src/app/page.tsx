import Hero from "@/components/Hero";
import StandupSection from "@/components/StandupSection";
import ContentSection from "@/components/ContentSection";
import FutureCreative from "@/components/FutureCreative";
import ContactSection from "@/components/ContactSection";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <StandupSection />
      <ContentSection />
      <FutureCreative />
      <ContactSection />
    </main>
  );
}
