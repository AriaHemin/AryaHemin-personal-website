import { useEffect } from "react";




function ProjectDetailPage(props){


    return(
        <div className=" w-64 sm:w-[800px]  flex flex-col">
            <div  >
                {props.project.detail}
            </div>
            <div>{ typeof props.project.image !== "string" ? 
            <div className="flex flex-col sm:flex-row">
                <img className="w-64 sm:1/3 " src={props.project.image[0]} alt={"image of apps"} />
                <img className="w-64 sm:1/3 " src={props.project.image[1]} alt={"image of apps"} />
                <img className="w-64 sm:1/3 " src={props.project.image[2]} alt={"image of apps"} />
            </div> :  <img className="w-64" src={props.project.image} alt={"image of apps"}/>}
            </div>
        </div>
    )

}

export default ProjectDetailPage;