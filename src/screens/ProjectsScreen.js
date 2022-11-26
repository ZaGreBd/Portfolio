import React from "react";
import "./ProjectsScreen.css"

import Header from "../components/Header";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

function ProjectsScreen(){
    return (
        <div className="projects_screen">
            <Header title="Projetos"/>
            <Projects/>
            <Footer/>
        </div>
    )
}

export default ProjectsScreen