import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Portfolio from "./components/Portfolio";
import InteriorGallery from "./components/InteriorGallery";
import Services from "./components/Services";
import Categories from "./components/Categories";
import Logistics from "./components/Logistics";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Categories />
      <Services />
      {/* <Logistics /> */}
      {/* <Portfolio /> */}
      {/* <InteriorGallery /> */}
      {/* <Testimonials /> */}
      {/* Logistic Management */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
