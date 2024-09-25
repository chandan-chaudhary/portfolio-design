import Header from "./header/page";

import About from "./about/page";
import LandingPage from "./landinPage/page";
export default function Home() {
  return (
    <div className="mx-auto h-screen bg-base-100">
      <Header />
      <div className="px-72 flex flex-col gap-y-44" >
        <LandingPage />
        <About />
      </div>
    </div>
  );
}
