import { useEffect, useState } from "react"
import ProjectCard from "./components/projectCard"
import ContactForm from "./components/contactForm"
import {initializeApp,} from 'firebase/app'
import {
  collection,
  getDocs,
  getFirestore,
  
} from 'firebase/firestore'
import { Modal } from "./components/modal"


function App() {
  const innerComp = <ContactForm/>
  const [isModalActive, setIsModalActive] = useState(false);


  const firebaseConfig = {
    apiKey: "AIzaSyAn99FAujXicyFcTGTjKXYmNveeJQPZmbY",
    authDomain: "personal-website-2e6c1.firebaseapp.com",
    projectId: "personal-website-2e6c1",
    storageBucket: "personal-website-2e6c1.appspot.com",
    messagingSenderId: "655037834977",
    appId: "1:655037834977:web:c4ac5c4bacc7cce0e439a0",
    measurementId: "G-ZL0D2S9NYS"
  };

  initializeApp(firebaseConfig);

  const db = getFirestore()
  const colRef = collection(db, 'myProjects')
  useEffect(()=>{
    getDocs(colRef)
      .then((snapshot)=>{
        let projects = []
        snapshot.docs.forEach((doc)=>{
          projects.push({...doc.data(), id: doc.id})
        })
        setProjects(projects)
        console.log(projects)
      })
  },[])

  const [projects, setProjects] = useState([
   {
      name: "rock paper scissors game",
      liveLink: "https://ariahemin.github.io/rock-paper-scissors-game/",
      codeLink: "https://github.com/AriaHemin/rock-paper-scissors-game",
      id: "7"
    }


  ])
  
  return (
    <div className="flex flex-col justify-items-center items-center " >
      <div className="flex flex-col py-10 justify-items-center items-center " >
        <div className="text-7xl">
          hello my name is Arya Hemin
        </div>
        <p>i am a self taught web developer, and student of pharmacy at QIU. 
          I specialize in the front end. 
          i work with react.
        </p>
      </div>
      <div className="w-1/2" >  
      <h1>my journey :</h1>
        <p  >
          i finished highschool and i started my coding journey. 
          i have an intate curiosity for how things works, and so i wanted to learn more about software engineering. 
          so i started with web development making basic sites. copying one part of popular websites like google search bar and youtube's nav bar.
          i learned html and css then javascript. i tried react but i couldn't understand a thing ,but vue was easier so after dabbling with vue for a while i picked up react and this time it was easy. 
        </p>
      </div>
      <div className="w-1/2 my-10" >
        <h1>tool and technology :</h1>
        <ul>
          <li>1. react</li>
          <li>2. vue</li>
          <li>3. html</li>
          <li>4. css</li>
          <li>5. tailwind</li>
          <li>6. git and github</li>
        </ul>
      </div>
      <div className="grid grid-cols-3 justify-items-stretch items-center px-10 " >{
        projects.map((project)=>{
          return(
            <ProjectCard project={project} key={project.id}/>
          )
        })
      }</div>
      <div className="flex flex-col justify-items-center items-center my-4 " >
        <div className="flex flex-row" >
          <div>
            <button onClick={()=>{setIsModalActive(true)}} >
              email
            </button>
            <Modal isModalActive={isModalActive} setIsModalActive={setIsModalActive} innerComp={innerComp} />
          </div>
          <a className="" href="https://github.com/AriaHemin" >
              <button>
                  github   
              </button>
          </a>
          <a className="" href="https://www.linkedin.com/in/aria-hemin-60b604251/" >
              <button>
                  linked in   
              </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
