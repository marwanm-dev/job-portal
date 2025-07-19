import Navbar from "./components/Navbar.tsx";
import Hero from "./sections/Hero/Hero.tsx";
import Features from "./sections/Features/Features.tsx";

function App() {
  return (
    <div className="flex flex-col gap-20">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}

export default App;
