import Footer from "./Components/Footer";
import Testimonials from "./Components/Testimonials";
import SignupForm from "./Pages/SignUpForm";

const App = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <SignupForm />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
};

export default App;
