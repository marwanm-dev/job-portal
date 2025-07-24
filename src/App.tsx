import Navbar from "./components/Navbar.tsx";
import Hero from "./sections/Hero/Hero.tsx";
import Features from "./sections/Features/Features.tsx";
import Overview from "./sections/Overview/Overview.tsx";
import Workflow from "./sections/Workflow/Workflow.tsx";
import WhyUs from "./sections/WhyUs/WhyUs.tsx";
import JobRequest from "./sections/JobRequest/JobRequest.tsx";
import FAQ from "./sections/FAQ/FAQ.tsx";
import Contact from "./sections/Contact/Contact.tsx";
import { Toaster } from "react-hot-toast";
import Footer from "./sections/Footer/Footer.tsx";

function App() {
  return (
    <>
      <Toaster
        containerStyle={{
          top: 100,
          left: 20,
          bottom: 20,
          right: 20,
        }}
      />
      <Navbar />
      <div className="flex flex-col justify-between sm:pt-30 pt-15 sm:gap-30 gap-15">
        <Hero />
        <Features />
        <Overview />
        <Workflow />
        <WhyUs />
        <JobRequest />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
