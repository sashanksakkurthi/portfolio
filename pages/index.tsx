import { Divider } from "@chakra-ui/react";
import type { NextPage } from "next";
import Contact from "../components/contact";
import Header from "../components/header";
import Navbar from "../components/navbar";
import TechStack from "../components/techstack";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <TechStack />
      <Contact />
    </>
  );
};

export default Home;
