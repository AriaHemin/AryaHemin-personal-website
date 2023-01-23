

function ProjectCard(props){
    return(
        <div className="flex items-center justify-between flex-col shrink-0 m-5 text-white bg-black py-10 px-8  " >
            <img src="" alt="" className="w-[200]" />
            <p className="text-xl" >{props.project.name}</p>
            <div>
                <a className="mx-1" href={props.project.liveLink} >
                    <button>
                        live view
                    </button>
                </a>
                <a className="mx-1" href={props.project.codeLink} >
                    <button>
                        code
                    </button>
                </a>
            </div>
        </div>
    )
}


export default ProjectCard;
