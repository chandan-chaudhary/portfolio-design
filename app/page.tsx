import LandingPage from "./(dashboard)/_components/LandingPage";
import Clients from "./(dashboard)/customer-review/page";
import Projects from "./(dashboard)/projects/page";
import Skills from "./(dashboard)/skills/page";



export default function Home() {
  return (
    <div className="flex flex-col max-w-6xl mx-auto w-full gap-y-12">
      <LandingPage />
      <Skills />
      <Projects />
      <Clients />
    </div>
  );
}
