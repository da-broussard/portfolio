import React, {useState} from "react";
import "../styles/Projects.css"

function Projects() {

  const [isClicked, setIsClicked]= useState(false);

  function handleRoll(){
    setIsClicked(true)
  }

  return (
    <div className="projects_container">
     
        <div className="project_container">
          <h2>Truthy Jerseryz Outlet</h2>
          <p>
            A full ecommerce web application developed by myself and classmates
            for our shared love of football. Developed using React, Axios, Express, Express Sessions, PostgresSQL, Bcrypt.
          </p>
          <a href="http://truthy-jerseyz-outlet.herokuapp.com/" target="_blank" rel="noreferrer">
          <img  className="project_nfl" src="nfl-logo.png" alt="nfl-logo"/>
          </a>
        </div>
        <div className="project_container">
          <h2> Stranger's Things</h2>
          <p>
            My first application using React. Stranger's Things is a React application that utlizes outside API.  Users can 
            create profiles, post items for sale, and message other users regarding items they have posted.  
          </p>
          <a href="https://strangersthingsdustin.netlify.app" target="_blank" rel="noreferrer">
          <h1 className="ST_logo">ST</h1>
          </a>
        </div>
      
     
        <div className="project_container">
          <h2>Tic-Tac-Toe</h2>
          <p>
            
            Simple tic-tac-toe game web game. Built with just Javascript and DOM
            manipulation. Currently in the process of rebuilding using React.
          </p>
          <a href="https://ultimatetic-tac-toe.netlify.app" target="_blank" rel="noreferrer">
          <img className="tictactoe_img" src="tic-tac-toe.png" alt="tictactoe"/>
          </a>
        </div>
        <div className="project_container">
          <h2>Powerball Prediction</h2>
          <p>
            Web application that utlizes IBM's Deep Blue AI to analyze and track selection patterns of past played numbers and frequency
            of.  Able to generate potential winning numbers with percent chance of winning given current trends.
          </p>
          <a href="https://www.youtube.com/watch?v=eBGIQ7ZuuiU" target="_blank" rel="noreferrer" onClick={handleRoll}>
          <img className="powerball_img" src="powerball.png" alt="powerball"/>
          </a>
          {!isClicked?null:<p>I'm sorry I had to do that, but I could not resist the urge. But really, sharing powerball numbers, never!</p>}
        </div> 
      
    </div>
  );
}

export default Projects;
