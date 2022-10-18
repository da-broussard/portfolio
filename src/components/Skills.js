import React from "react";
import "../styles/Skills.css";

function Skills() {
  return (
    <>
      
        <div id="anchor1" className="skills_container">
          <div className="react_text">
            <p>
              As a fullstack developer, I try and stay up to date on the current technologies that are currently being used in the industry. 
            </p>
            <ul>
              <li>React</li>
              <li>Axios</li>
              <li>Express</li>
              <li>PostgresSQL</li>
              <li>Node.js</li>
              <li>Github</li>
              
            </ul>
          </div>
          <div className="logo_container">
            <img className="coding_img" src="coding.webp" alt="coding_img" />
          </div>
        </div>
        <div className="logo_banner">
        <img className="html_logo" src="html_logo.png" alt="html_logo" />
        <img className="react_logo" src="logo.svg" alt="react_logo" />
        <img className="postgres_logo" src="postgres.png" alt="postgres_logo" />
        <img className="node_logo" src="nodejs.png" alt="node_logo" />
      </div>
        <hr />
        
      

      
    </>
  );
}

export default Skills;
