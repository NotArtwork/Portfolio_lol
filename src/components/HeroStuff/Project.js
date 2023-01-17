

const Project = ({name, stacks, link}) => {
    return (
        <div>
            <h1 href={link} >
               {name} 
            </h1>
            <h2>
                {stacks}
            </h2>

        </div>
    )
}

export default Project