import Navbar from "./Components/Navbar/index.jsx";
import HeroSection from "./Components/HeroSection/index.jsx";
const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
      </div>
    </>
  );
};

export default App;
