import React, { useRef } from "react";
import Navbar from "@components/layout/Navbar";
import Hero from "@components/Hero/Hero";
import Section from "@components/layout/Section";
import Skills from "@components/Skills";
import ProjectsSummary from "@components/ProjectsSummary";
import Hobbies from "@components/Hobbies";
import { RefProvider } from "@components/providers/refProvider";
import { Footer } from "@components/layout";


const Home = () => {
  const heroRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const hobbiesRef = useRef(null)

  return (
    <RefProvider value={{ heroRef, skillsRef, projectsRef, hobbiesRef}}>
      <main className="">

        {/* Hero */}
        <Section ref={heroRef} className="bg-gradient-to-br from-sky-600 via-blue-600 to-blue-900" height="min-h-[90vh]">
          <Navbar />
          <Hero />

          {/* https://codepen.io/goodkatz/details/LYPGxQz */}
          {/* https://codepen.io/plavookac/pen/QMwObb */}
          {/* https://codepen.io/supah/pen/prVVOx */}
        </Section>

        <Section ref={projectsRef} className="">
          <ProjectsSummary />
        </Section>

        {/* Skills */}
        <Section ref={skillsRef} className="">
          <Skills />
        </Section>

        {/* Hobbies */}
        <Section ref={hobbiesRef} className="">
          <Hobbies /> 
        </Section>

        <Footer/>

      </main>
    </RefProvider>
  );
};

export default Home;