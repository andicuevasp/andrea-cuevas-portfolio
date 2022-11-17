import arrow from "../assets/arrow-right.svg"

export default function Navbar(){
   
return  (
    <header>
        <div className="container">
            <div className="title-nav">
                <a href="#about" className="title">
                    <strong>Andrea Cuevas</strong>
                </a>
                <nav>
                    <a href="#projects" className="projects-nav">
                        Projects
                    </a>
                    <a href="#skills" className="skills-nav">
                        Skills
                    </a>
                </nav>
            </div>
            <a href="#contact" className="contact-nav">
                Hire Me
                <img src={arrow}/>
            </a>
        </div>
    </header>
)     
}