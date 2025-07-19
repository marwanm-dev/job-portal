import Navbar from "./components/Navbar.tsx";
import Hero from "./sections/Hero/Hero.tsx";
import Features from "./sections/Features/Features.tsx";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-evenly pt-30 pb-30 gap-30">
        <Hero />
        <Features />
      </div>
    </>
  );
}

export default App;
