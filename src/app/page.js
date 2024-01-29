import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Offer from "./components/Offer";
import News from "./components/News";
// import AchievementsSection from "./components/AchievementsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#ffffff] text-black">
      <Navbar />
      <HeroSection />
      <div className="container mt-5 mx-auto px-5 md:px-5 py-4">
        {/* <AchievementsSection /> */}
        <AboutSection />
      </div>
      <Offer />

      <div className="container mt-5 mx-auto px-5 md:px-5 py-4">
        <ProjectsSection />
      </div>
      <News />
      <div className="container mt-5 mx-auto px-5 md:px-5 py-4">
        <Gallery />
        <EmailSection />
      </div>

      <Footer />
    </main>
  );
}
