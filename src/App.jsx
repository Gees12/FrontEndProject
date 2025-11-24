import { useState } from "react";
import SignupForm from "./Pages/SignUpForm";
import Footer from "./Components/Footer";
import Testimonials from "./Components/Testimonials";
import Navbar from "./Components/Navbar";

const App = () => {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      <Navbar openSignup={() => setShowSignup(true)} />

      {showSignup && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-start pt-20 z-50">
          <div className="relative">
            <button
              onClick={() => setShowSignup(false)}
              className="absolute -top-5 -right-5 bg-red-500 text-white rounded-full w-10 h-10"
            >
              ✕
            </button>
            <SignupForm />
          </div>
        </div>
      )}

      <div className="bg-slate-950 text-white min-h-screen flex flex-col">
        <div className="max-w-7xl mx-auto pt-10 px-6 flex flex-col gap-20">
          <Testimonials />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
