import type { NextPage } from "next";
import Header from "../components/header";
import Navbar from "../components/navbar";
import TechStack from "../components/techstack";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <TechStack />
    </>
  );
};

export default Home;
