import React, { useRef } from "react";
import Navbar from "@components/Navbar";
import Hero from "@components/Hero/Hero";
import Footer from "@components/Footer";
import Section from "@components/layout/Section";
import Skills from "@components/Skills";
import ProjectsSummary from "@components/ProjectsSummary";
import Hobbies from "@components/Hobbies";

const Home = () => {
  const heroRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const hobbiesRef = useRef(null)

  return (
    <main>
      {/* Hero */}
      <Section ref={heroRef} className="bg-blue-700">
        <Navbar {...{skillsRef, projectsRef, hobbiesRef}} />
        <Hero />
      </Section>

      {/* Skills */}
      <Section ref={skillsRef} className="bg-purple-600">
        <Skills />
      </Section>

      {/* Portfolio */}
      <Section ref={projectsRef} className="bg-blue-700">
        <ProjectsSummary />
      </Section>

      {/* Hobbies */}
      <Section ref={hobbiesRef} className="bg-purple-600">
        <Hobbies /> 
      </Section>

      <Footer/>

    </main>
  );
};

export default Home;