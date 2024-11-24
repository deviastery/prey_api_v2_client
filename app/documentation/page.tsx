"use client";
import Navigation from "../components/DocPage/Navigation";
import Documentation from "../components/DocPage/Documentation";
import Header from "../components/Header";

// import styles from "./DocPage.module.css";

const DocPage = () => {
  function scrollToSection(to: string) {
    const section = document.getElementById(to);
    console.log(section);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Header />
      <div>
        <Navigation scrollToSection={scrollToSection} />
        <Documentation />
      </div>
    </>
  );
};

export default DocPage;
