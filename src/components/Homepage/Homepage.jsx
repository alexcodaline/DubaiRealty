import React from 'react'
import About from "./About/About";
import Articles from "./Articles/Articles";
import Clients from "./Clients/Clients";
import Faq from "./Faq/Faq.js";
import Projects from "./Projects/Projects.jsx";
import Title from "./Title/Title.jsx";

export default function Homepage() {
    return (
        <div>
            <Title />
            <Projects />
            <About />
            <Articles />
            <Clients />
            <Faq />
        </div>
    )
}
