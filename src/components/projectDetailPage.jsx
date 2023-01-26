function ProjectDetailPage(props){


    return(
        <div className="m-10 w-64 sm:w-[800px] bg-stone-900 text-white  flex flex-col">
            <div>
                {props.project.detail}
            </div>
            <div>{ typeof props.project.image !== "string" ? 
                <div className="flex justify-between flex-col sm:flex-row">
                    {props.project.image.map(image => {
                        return(
                        <img className="w-64 sm:1/3 " src={image} alt={"image of apps"} />)
                    })}
                </div> 
                :  
                <div className="flex justify-center items-center" ><img className="w-64" src={props.project.image} alt={"image of apps"}/></div>}
            </div>
            <div>
                <p className="font-bold " >tools and technologies : </p>
                {
                    props.project.tool.map(tool =>{
                        return(
                            <div>
                                {tool}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}

export default ProjectDetailPage;