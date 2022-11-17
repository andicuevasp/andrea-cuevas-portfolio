import headshot from "../assets/headshot.jpg"
import TypeIt from "typeit-react";

export default function About(){
    return (
        <section id="about">
            <div className="container">
                <div className="about-description">
                    <h1 className="heading">
                        <TypeIt>
                            Hello, I'm Andrea. <br/> I love to build web apps!
                        </TypeIt>
                    </h1>
                    <p className="description">
                    I became a programmer in 2021 and fell in love with coding. JavaScript is one of my passions, and I have recently been developing my React Skills to build compact, easy-to-use web apps. After five years as a marketing project manager, I have learned how to manage multiple projects in a fast-paced environment and keep others motivated. My previous work experience has prepared me to handle any difficulties I may face with creativity and efficiency. I am seeking a full-time position as a Frontend Developer in a collaborative company where I can contribute to meaningful projects and grow together.
                        
                    </p>
                    <div className="contact-projects">
                        <a href="#contact" className="contact-button">
                            Contact Me
                        </a>
                        <a href="#projects" className="projects-button">
                            Projects
                        </a>
                    </div>
                </div>
                <div className="hero-div">
                    <img
                    className="hero-img" 
                    alt="hero"
                    src={headshot}
                    />
                </div>
            </div>
        </section>
    )
}