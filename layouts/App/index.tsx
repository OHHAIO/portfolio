import React from "react";
import "./styles.scss";
import Header from "@components/Header";
import About from "../../pages/About";
import Footer from "@components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="mainBody">
        <About />
        <Footer />
      </main>
    </>
  );
};

export default App;
