import React from 'react';
import "./About.css";
import AboutImg from "./../../images/aboutImg.jpg"

const About = () => {
  return (
    <>
      <section className="aboutSection" id="about">
        <h3 className='heading'><span>ABOUT</span> US</h3>
        <div className="aboutDetails">
            <div className="aboutImg">
                <img src={AboutImg} alt="aboutImg" />
            </div>
            <div className="aboutSpecial">
                <h3>what makes our food special?</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui ea ullam, enim tempora ipsum fuga alias quae ratione a officiis id temporibus autem? Quod nemo facilis cupiditate. Ex, vel? <br /><br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit amet enim quod veritatis, nihil voluptas culpa! Neque consectetur obcaecati sapiente?</p>
                <button className='mainBTN'>Learn More</button>
            </div>

        </div>
      </section>
    </>
  );
};

export default About;
