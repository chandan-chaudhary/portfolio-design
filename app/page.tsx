import Footer from "./(dashboard)/_components/Footer";
import LandingPage from "./(dashboard)/_components/LandingPage";
import Clients from "./(dashboard)/customer-review/page";
import Projects from "./(dashboard)/projects/page";
import Skills from "./(dashboard)/skills/page";
import WorkExperience from "./(dashboard)/work-experience/page";



export default function Home() {
  return (
    <div className="flex flex-col max-w-6xl mx-auto w-full gap-y-12">
      <LandingPage />
      <Skills />
      <Projects />
      <WorkExperience />
      <Clients />
      <Footer />
    </div>
  );
}
