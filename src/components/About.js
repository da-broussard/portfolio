import React from "react";
import "../styles/About.css"



function About(){
    return (
    <div className="about_main">
        <div className="about_container">
            <div className="about_info">
            <p>Hi, I am Dustin Broussard, an aspiring web developer. I decided after some time of being unfulfilled and dissatisfied with my previous
                jobs to make a career change and take on a new challenge. I enjoy developing web applications because it's exciting to take
                an idea for a project, plan and design all aspects of it, work through the creative 
                process, deal with the struggles that one would encounter, all while learning new techniques and technologies to finally seeing the finished product.
                
            </p>
            
            </div>
            <img className="js_mug" src="js_mug.jpeg" alt="Javascript Code"/>
        </div>
        <hr/>
        <div className="more_about_info">
            <div className="football_info">
                
                    <div className="img_top">
                    <img className="football_img" src="brees.jpg" alt="Drew Brees"/>
                    </div>
                    <div className="img_mid">
                    <img className="football_img" src="lsu.jpeg" alt="lsu_football"/>
                    </div>
                    
                    
                    
                
                <div className="img_bottom">
                    <img className="football_img" src="ul.jpeg" alt="ul_football" />
                </div>
            </div>
            <div className="football_text">
                <p>Growing up in South Louisiana I have always loved football. The New Orleans Saints have been my team, even through
                    it seems like we might be in a bit of a slump.  I also support the LSU Tigers and ULL Ragin Cajuns. My love
                    for the game inspired my classmates and I, for our capstone project to design and build an ecommerce application
                    for NFL jerseys.
                </p>
            </div>
            
        </div>
        <hr/>

        
        
    </div>
    )
}


export default About;