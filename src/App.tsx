import Navbar from "./components/Navbar.tsx";
import HeroSection from "./sections/Hero/Hero.tsx";
import FeaturesSection from "./sections/Features/Features.tsx";

function App() {
  return (
    <div className="flex flex-col gap-20">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
    </div>
  );
}

export default App;
