

function ProjectCard(props){
    return(
        <div className="flex items-center justify-items-center flex-col shrink-0 m-5 " >
            <img src="" alt="" className="w-[200]" />
            <p className="text-xl" >{props.project.name}</p>
            <div>
                <a href={props.project.liveLink} >
                    <button>live view</button>
                </a>
                <a href={props.project.codeLink} >
                    <button>code</button>
                </a>
            </div>
        </div>
    )
}


export default ProjectCard;
