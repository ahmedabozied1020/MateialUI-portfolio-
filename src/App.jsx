import React from "react";
import AboutMe from "./components/aboutMe";
import Cards from "./components/Cards";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import MyTeam from "./components/MyTeam";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <div style={{ width: "100%" }}>
      <Navbar />
      <Introduction />
      <Cards />
      <AboutMe />
      <MyTeam />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
