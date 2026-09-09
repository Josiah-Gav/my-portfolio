
function Projects(props){
    return(
        <div>
            <img src={props.image} alt={props.alt}></img>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
}

export default Projects;