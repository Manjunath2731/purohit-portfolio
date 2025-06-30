import Footer from "./components/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

function App() {
  return (
    <div className="font-sans bg-[#fff9ec] text-gray-800">
      <Navbar />
      <Hero/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
}
export default App;
