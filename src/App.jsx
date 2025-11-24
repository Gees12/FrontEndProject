import Footer from "./Components/Footer";
// import Pricing from "./Components/Pricing";
import Testimonials from "./Components/Testimonials";
import Navbar from "./Components/Navbar/index.jsx";
import HeroSection from "./Components/HeroSection/index.jsx";
const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
      {/* <Navbar /> */}
        {/* <HeroSection />
        <FeatureSection />
        <Workflow /> */}
        {/* <Pricing /> */}
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default App;
