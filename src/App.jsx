import { useState } from "react"
import ProjectCard from "./components/projectCard"
import ContactForm from "./components/contactForm"


function App() {
  const [projects, setProjects] = useState([
    {
      name: "arya workout generator",
      liveLink: "https://arya-workout-generator.vercel.app/",
      codeLink: "https://github.com/AriaHemin/arya-workout-generator",
      id: "1"
    },{
      name: "react playground",
      liveLink: "https://react-playground-v0-2.vercel.app/react-playground",
      codeLink: "https://github.com/AriaHemin/react-playground-v0.2",
      id: "2"
    },{
      name: "vue todo list app",
      liveLink: "https://vue-todo-list-app.vercel.app/",
      codeLink: "https://github.com/AriaHemin/vue-todo-list-app",
      id: "3"
    },{
      name: "templator v0.1",
      liveLink: "https://ariahemin.github.io/the-templator-v0.1/",
      codeLink: "https://github.com/AriaHemin/the-templator-v0.1",
      id: "4"
    },{
      name: "stop watch",
      liveLink: "https://ariahemin.github.io/stop-watch/",
      codeLink: "https://github.com/AriaHemin/stop-watch",
      id: "5"
    },{
      name: "number guesser",
      liveLink: "https://ariahemin.github.io/numb-guesser-game/",
      codeLink: "https://github.com/AriaHemin/numb-guesser-game",
      id: "6"
    },{
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
      <div className="p-5" >
        <p>tools and technology</p>
        <ul>
          <li>1. react</li>
          <li>2. html</li>
          <li>3. css</li>
          <li>4. tailwind</li>
          <li>5. git and github</li>
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
        <div className="p-5" >
          <ContactForm/>
        </div>
        <div className="flex flex-row" >
          <button className="mx-2" >github</button>
          <button className="mx-2">linked in</button>

        </div>
      </div>
    </div>
  )
}

export default App
