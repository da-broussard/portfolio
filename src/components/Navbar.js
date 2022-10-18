import React from "react";
import "../styles/Navbar.css";
import ScrollIntoView from "react-scroll-into-view";
import { About, Skills, Projects, Footer } from "./";

function Navbar() {
  return (
    <>
      <nav className="main_navbar">
       
        <ScrollIntoView selector="#skills_scroll">
          <p className="navbar_p">Skills</p>
        </ScrollIntoView>
        <ScrollIntoView selector="#project_scroll">
          <p className="navbar_p" >Projects</p>
        </ScrollIntoView>
        <ScrollIntoView selector="#footer_scroll">
          <p className="navbar_p"> Contact Links</p>
        </ScrollIntoView>
      </nav>

      
        <About />
      
      <div id="skills_scroll">
        <Skills />
      </div>
      <div id="project_scroll">
        <Projects />
      </div>
      <div id="footer_scroll">
        <Footer/>
      </div>
    </>
  );
}

export default Navbar;
