import { useState } from "react"
import Project from "./Project"
const Projects = () => {

    const [projects, setProjects] = useState([])

    const fetchProjects = async () => {
        let req = await fetch('localhost5001/projects')
        let res = await req.json()
        setProjects(res)
    }

    return(
        <div className="Project_Showcase">
            {projects.map((project) => {
                return (
                    <Project
                    name={project.name}
                    stacks={project.stacks}
                    link={project.link}
                    />
                )
            })}
        </div>
    )
}

export default Projects