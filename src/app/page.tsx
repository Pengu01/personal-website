"use client";
import Link from "next/link"
import Image from "next/image";
import tesseract from "@/images/tesseract.png"
import { useState } from "react"
import pImage from "@/images/project.png"
import pImage1 from "@/images/project1.png"
import pImage2 from "@/images/project2.png"
import pImage3 from "@/images/project3.png"
import {AiOutlineTwitter, AiOutlineMail, AiOutlinePhone, AiOutlineLinkedin, AiOutlineGithub} from "react-icons/ai"
//Array to be able to go through them easaly
export const projects = [
    pImage,
    pImage1,
    pImage2,
    pImage3
]
//Simple true or false variable
export default function Page() {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  //Variables for changing project image with animations
  const [resetting, setReset] = useState(false)
  const [projectId, setProject] = useState(0)
  const handleProject = () => {
    if(resetting)
    {
      return
    }
    else 
    {
      setReset(true)
    }
    if (projectId < projects.length-1) {
      setLastProject(projectId)
      setProject(projectId+1)
    } else {
      setLastProject(projectId)
      setProject(0)
    }
    let current = document.getElementById("currentimage")
    let last = document.getElementById("lastimage")
    if(isCurrent)
      {
        current?.classList.add("opacity-0")
        current?.classList.remove("opacity-100")
        current?.classList.add("right-[140%]")
        current?.classList.remove("right-[20%]")
        last?.classList.add("opacity-100")
        last?.classList.remove("opacity-0")
        last?.classList.add("right-[20%]")
        last?.classList.remove("right-[-100%]")
        setTimeout(() => {
          current?.classList.add("right-[-100%]")
          current?.classList.remove("right-[140%]")
        }, 600);
        setCurrent(!isCurrent)
      }
      else{
        current?.classList.add("opacity-100")
        current?.classList.remove("opacity-0")
        current?.classList.add("right-[20%]")
        current?.classList.remove("right-[-100%]")
        last?.classList.add("opacity-0")
        last?.classList.remove("opacity-100")
        last?.classList.add("right-[140%]")
        last?.classList.remove("right-[20%]")
        setTimeout(() => {
          last?.classList.add("right-[-100%]")
          last?.classList.remove("right-[140%]")
        }, 500);
        setCurrent(!isCurrent)
      }
      setTimeout(() => {
        setReset(false)
      }, 1500);
  }
  const [lastProjectId, setLastProject] = useState(0)
  const [isCurrent, setCurrent] = useState(true)

  return (
    <>
      <ul className={nav ? "gap-8 fixed flex flex-col justify-center items-center h-screen w-screen z-10 bg-[#121212] ease-in-out duration-1000 top-[0]" : 'md:hidden gap-8 flex flex-col justify-center items-center h-screen w-screen z-10 fixed top-[-100%] ease-in-out duration-1000 bg-black'}>
        <Link href={"/projects"}><li id="projects" className="font-bold text-5xl bg-gradient-to-r from-[#91ffff] to-[#e9ffff] text-transparent bg-clip-text ">Projects</li></Link>
        <Link href={"/contact"}><li id="contact" className="font-bold text-5xl bg-gradient-to-r from-[#91ffff] to-[#e9ffff] text-transparent bg-clip-text">Contact</li></Link>
        <Link href={"/about"}><li id="about" className="font-bold text-5xl bg-gradient-to-r from-[#91ffff] to-[#e9ffff] text-transparent bg-clip-text">About</li></Link>
        <div onClick={handleNav} className="mt-12">
        {nav ? <div className="fixed w-10 h-[2px] ease-in-out duration-1000 rotate-45 delay-1000 bg-[#e9ffff] translate-x-[-48.5%]"></div> : <div className="fixed rotate-45 w-0 h-[2px] ease-in-out duration-1000 bg-[#e9ffff] translate-x-[-48.5%]"></div>}
        {nav ? <div className="fixed w-10 h-[2px] ease-in-out duration-1000 rotate-[315deg] delay-1000 bg-[#e9ffff] translate-x-[-48.5%]"></div> : <div className="fixed rotate-[315deg] w-0 h-[2px] ease-in-out duration-1000 bg-[#e9ffff] translate-x-[-48.5%]"></div>}
          </div>
      </ul>
      <header className="z-20 w-screen flex h-20 items-center bg-[#121212] sticky">
        <h1 className="md:text-3xl mx-6 font-bold text-xl bg-gradient-to-r from-[#91ffff] to-[#e9ffff] text-transparent bg-clip-text">Alfons Stoltz.</h1>
        <nav className="self-center">
          <ul className="hidden md:flex">
            <li className="m-6 hover:underline">
              <Link href={"/about"}>About</Link>
            </li>
            <li className="m-6 hover:underline">
              <Link href={"/projects"}>Projects</Link>
            </li>
            <li className="m-6 hover:underline">
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="mr-8 ml-auto md:hidden content">
        <div onClick={handleNav}>
        {!nav ? <div className="border-y-2 border-y-[#e9ffff] w-7 h-4 ease-in-out duration-1000"></div> : <div className="border-y-2 border-y-[#e9ffff] w-0 h-4 ease-in-out duration-1000"></div>}
          </div>
        </div>
      </header>
      <div className="flex flex-col flex-wrap md:flex-row">
        <div className="h-[54vh] min-w-[300px] md:order-3 md:mx-12 md:mr-[8rem]">
          <Image src={tesseract} alt="Picture of tesseract" className="m-auto mt-[8vh] invert drop-shadow-glow min-w-[240px]"/>
            </div>
        <div className="flex flex-col md:order-1 md:ml-[8rem] md:mt-[30rem] mx-12">
          <h1 className="text-5xl md:max-w-[300px] md:text-8xl font-semibold max-w-[250px] my-1 bg-gradient-to-r from-[#91ffff] to-[#e9ffff] text-transparent bg-clip-text">
            Alfons Stoltz
          </h1>
          <p className="text-1xl md:text-3xl font-medium my-1">
           Technology Student
          </p>
        </div>
      
      <hr className="mt-[18vh] h-[2px] md:hidden" />
      <div className="mt-[10vh] md:mt-0 md:order-2 m-auto">
        <div className="flex flex-col">
          <div className="h-[64vh] w-screen md:w-[29rem] overflow-hidden relative">
          <Image alt="Picture of project" src={projects[projectId]} onClick={handleProject} className={"m-auto h-[64vh] w-[60%] drop-shadow-glow absolute ease-in-out duration-1000 opacity-100 right-[20%]"} id="currentimage"/>
          <Image alt="Picture of project" src={projects[lastProjectId]} onClick={handleProject} className={"m-auto h-[64vh] w-[60%] drop-shadow-glow absolute ease-in-out duration-1000 opacity-0 right-[-100%]"} id="lastimage"/>
          </div>
          <div className="flex h-10 gap-4 m-auto my-10">
            <div className={projectId!==0 ? "ease-in-out duration-1000 w-1 h-8 rounded-md bg-gray-500" : "w-1 ease-in-out duration-1000 h-10 rounded-md bg-gradient-to-r from-[#91ffff] to-[#e9ffff]"}></div>
            <div className={projectId!==1 ? "ease-in-out duration-1000 w-1 h-8 rounded-md bg-gray-500" : "w-1 ease-in-out duration-1000 h-10 rounded-md bg-gradient-to-r from-[#91ffff] to-[#e9ffff]"}></div>
            <div className={projectId!==2 ? "ease-in-out duration-1000 w-1 h-8 rounded-md bg-gray-500" : "w-1 ease-in-out duration-1000 h-10 rounded-md bg-gradient-to-r from-[#91ffff] to-[#e9ffff]"}></div>
            <div className={projectId!==3 ? "ease-in-out duration-1000 w-1 h-8 rounded-md bg-gray-500" : "w-1 ease-in-out duration-1000 h-10 rounded-md bg-gradient-to-r from-[#91ffff] to-[#e9ffff]"}></div>
          </div>
        </div>
      </div>
      </div>
      <div className="h-20 w-screen flex justify-center items-center gap-5 md:fixed md:bottom-0">
        <AiOutlineGithub size={32}/>
        <AiOutlineTwitter size={32}/>
        <AiOutlineLinkedin size={32}/>
        <AiOutlineMail size={32}/>
        <AiOutlinePhone size={32}/>
      </div>
   </>
  )
}
 