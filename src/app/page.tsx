import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { VideoSection } from "@/components/VideoSection";
import { PhotoGallery } from "@/components/PhotoGallery";
import { WorkExperience } from "@/components/WorkExperience";
import { UpcomingShows } from "@/components/UpcomingShows";
import { Testimonials } from "@/components/Testimonials";
import { BookingSection } from "@/components/BookingSection";
import { ContactSocial } from "@/components/ContactSocial";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-spotlight focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-stage-bg"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <VideoSection />
        <PhotoGallery />
        <WorkExperience />
        <UpcomingShows />
        <Testimonials />
        <BookingSection />
        <ContactSocial />
      </main>
      <Footer />
    </>
  );
}
