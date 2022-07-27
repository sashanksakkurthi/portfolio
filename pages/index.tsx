import type { NextPage } from "next";
import AboutMe from "../components/aboutme";
import Contact from "../components/contact";
import Header from "../components/header";
import Navbar from "../components/navbar";
import TechStack from "../components/techstack";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <TechStack />
      <Contact />
    </>
  );
};

export default Home;
