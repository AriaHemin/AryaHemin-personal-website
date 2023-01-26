import { Modal } from "./modal";
import { useState } from "react";
import ProjectDetailPage from "./projectDetailPage";

function ProjectCard(props){
    const innerComp = <ProjectDetailPage className="bg-stone-900"  project={props.project}/>
    const [isModalActive, setIsModalActive] = useState(false);
    return(
        <div>
        <div onClick={()=>{setIsModalActive(true)}} >
            <div className="flex items-center justify-between flex-col shrink-0 m-5 text-white bg-black py-10 px-8  " >
                <img src="" alt="" className="w-[200]" />
                <p className="text-xl" >{props.project.name}</p>
                <div onClick={(e)=>{e.stopPropagation();}} >
                    <a className="mx-1" href={props.project.live} >
                        <button>
                            live view
                        </button>
                    </a>
                    <a className="mx-1" href={props.project.code} >
                        <button>
                            code
                        </button>
                    </a>
                </div>
            </div>
        </div>
        <Modal isModalActive={isModalActive} setIsModalActive={setIsModalActive} innerComp={innerComp} />
        </div>
    )
}


export default ProjectCard;
