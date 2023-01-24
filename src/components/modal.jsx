
export function Modal(props){


    return(
        <>
            {props.isModalActive ? <div onClick={()=>{props.setIsModalActive(false)}} className="fixed inset-0 bg-black/25  w-screen h-screen flex justify-center items-center shrink-0 " >
                <div onClick={(e)=>{e.stopPropagation();}} className="bg-white w-96 h-56 flex flex-col items-center justify-center" >
                    {props.innerComp}
                </div>
            </div>: null}
        </>
    )
}