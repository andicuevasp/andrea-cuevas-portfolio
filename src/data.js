
import quizzical from "./assets/quizzical.png"
import tenzies from "./assets/tenzies-app.png"
import stickyNote from "./assets/sticky-notes.png"
import mockHotel from "./assets/mock-hotel-booking.png"

export const projects = [
    {
        title: "Quizzical App",
        subtitle: "JavaScript, React, working with API's, React Hooks",
        description: "A quiz app created using React that fetches five random questions from an API and tallies up the score.",
        image: quizzical,
        link: "https://illustrious-melba-096b48.netlify.app/"
    }, 
    {
        title: "Tenzies App",
        subtitle: "JavaScript, React, React Hooks",
        description: "A dice game that lets you hold and roll the dice until all of them have the same value.",
        image: tenzies,
        link: "https://melodic-klepon-a8257b.netlify.app/"
    },
    {
        title: "Sticky Note App",
        subtitle: "JavaScript, React, Class Components",
        description: "A sticky note app that lets you create, edit, save locally and delete the notes.",
        image: stickyNote,
        link: "https://andicuevasp.github.io/sticky-note-ui/"
    },
    {
        title: "Mock Hotel Booking App",
        subtitle: "JavaScript, React, Class Components",
        description: "A mock hotel booking UI that updates when filters are applied or removed.",
        image: mockHotel,
        link: "https://andicuevasp.github.io/mock-hotel-booking-ui/"
    }
]

export const skills = ["Vanilla JavaScript", "ReactJS", "CSS","Git/Github","Netlify","Vite"]