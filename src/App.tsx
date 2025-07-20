import Navbar from "./components/Navbar.tsx";
import Hero from "./sections/Hero/Hero.tsx";
import Features from "./sections/Features/Features.tsx";
import Overview from "./sections/Overview/Overview.tsx";
import Workflow from "./sections/Workflow/Workflow.tsx";
import WhyUs from "./sections/WhyUs/WhyUs.tsx";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-evenly sm:pt-30 pt-15 sm:pb-30 pb-15 sm:gap-30 gap-15">
        <Hero />
        <Features />
        <Overview />
        <Workflow />
        <WhyUs />
      </div>
    </>
  );
}

export default App;
