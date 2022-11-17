
import githubLogo from "../assets/github-logo.svg"
import linkedinLogo from "../assets/linkedin-logo.svg"
import emailIcon from "../assets/email-icon.svg"
import contactIcon from "../assets/contact-icon.svg"
import documentIcon from "../assets/document-icon.svg"
import andreaCuevasCv from "../assets/andrea-cuevas-cv.pdf"

export default function Contact(){
    return (
        <section id="contact">
            <div className="container">
                <img src={contactIcon} className="contact-icon"/>
                <h1>Contact Me</h1>
                <p>Want to hire or learn more about me?</p>
                <h2>Find me on:</h2>
                <div className="contact-logos">
                    <a href="https://github.com/andicuevasp"
                    target="_blank"
                    className="contact-logo">
                         <img src={githubLogo}/>
                    </a>
                    <a href="https://www.linkedin.com/in/andrea-cuevas-85206592/"
                    target="_blank"
                    className="contact-logo">
                         <img src={linkedinLogo}/> 
                    </a>
                    <a href="mailto:andicuevasp@gmail.com"
                    className="contact-logo">
                        <img src={emailIcon} />
                    </a>
                    <a href={andreaCuevasCv}
                    target="_blank"
                    className="contact-logo">
                        <img src={documentIcon} />
                    </a>
                </div>
                <footer>
                    <p>© 2022 Andrea Cuevas</p>
                </footer>
            </div>
        </section>
    )
}