
import { projects } from "../data"
import codeIcon from"../assets/code-icon.svg"


export default function Projects(){
    const projectComponent = projects.map(project=>{
        return (
            <a 
                href={project.link}
                target="_blank"
                key={project.image}
                className="project-item">
                <div className="project-div">
                    <img
                        alt="gallery"
                        src={project.image}
                    />
                    <div className="proj-info">
                        <h2 className="proj-subtitle">{project.subtitle}</h2>
                        <h1 className="proj-title">{project.title}</h1>
                        <p className="proj-description">{project.description}</p>
                    </div>
                </div>
            </a>
    )})

    return(
        <section id="projects">
            <div className="container">
                <div className="projects-description">
                    <img className="code-icon" src={codeIcon} />
                    <h1 className="projects-title"> Take A Look At My Projects</h1>
                    <p className="projects-description">These are a few of the web apps I have created using JavaScript and ReactJS, as well as applying styles through CSS.</p>
                </div>
                <div className="projects">
                    {projectComponent}
                </div>  
            </div>
        </section>
    )
}