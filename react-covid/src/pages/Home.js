import { useState } from "react";
import AddCovidForm from "../components/AddCovidForm";
import Footer from "../components/Footer";
import Global from "../components/Global";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Provinsi from "../components/Provinsi";
import data from "../utils/constants/provinces";

function Main() {
  const [provinces,setProvinces] = useState(data.provinces)

  return (
    <main>
      {/* <h1>Final Project - Covid ID</h1>
      <h2>Good Luck, paissss</h2> */}
      <Hero />
      <Global />
      <Provinsi provinces={provinces} setProvinces={setProvinces} />
      <AddCovidForm provinces={provinces} setProvinces={setProvinces} />
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
