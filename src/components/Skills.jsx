import {skills} from "../data"
import lightingIcon from "../assets/lightning-icon.svg"
import checkIcon from "../assets/check-icon.svg"

export default function Skills(){
    const skillsComponent = skills.map(skill=>(
        <div 
        key={skill}
        className="skill-div">
            <div>
            <img src={checkIcon} className="check-icon"/>
            <span className="skill">{skill}</span>
            </div>   
        </div>
    ))

    return (
        <section id="skills">
            <div className="container">
                <div className="skills-intro">
                    <img src={lightingIcon} />
                    <h1 className="skills-title">Skills &amp; Technologies</h1>
                </div>
                <div className="skills">
                    {skillsComponent}
                </div>
            </div>
            
        </section>
    )
}