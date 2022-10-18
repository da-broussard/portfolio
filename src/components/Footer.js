import React from "react";
import "../styles/Footer.css"


function Footer(){
    return(
<footer>
    <a href="https://github.com/da-broussard" target="_blank" rel="noreferrer"> 
    <img className="github_footer" src="github.png" alt="github" />
    </a>
    <a href="https://www.linkedin.com/in/dustin-broussard-8487a844/" target="_blank" rel="noreferrer">
    <img className="linkedin_footer" src="linkedin.png" alt="linkedin"/>
    </a>
    <a href="mailto:dustin.a.broussard@gmail.com?
    subject= Lets Talk">
    <img className="email_logo" src="email.png" alt="email" />
    </a>
</footer>

    )

}

export default Footer;