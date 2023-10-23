"use client";
import Link from "next/link"
import { useState } from "react"
export default function Page() {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <body>
      <ul className={nav ? "gap-8 fixed flex flex-col justify-center items-center h-screen w-screen z-10 bg-[#121212] ease-in-out duration-1000 top-[0]" : 'gap-8 flex flex-col justify-center items-center h-screen w-screen z-10 fixed top-[-100%] ease-in-out duration-1000 bg-black'}>
        <Link href={"/projects"}><li id="projects" className="font-bold text-5xl bg-gradient-to-r from-[#91ffff] to-[#e9ffff] text-transparent bg-clip-text ">Projects</li></Link>
        <Link href={"/contact"}><li id="contact" className="font-bold text-5xl bg-gradient-to-r from-[#91ffff] to-[#e9ffff] text-transparent bg-clip-text">Contact</li></Link>
        <Link href={"/about"}><li id="about" className="font-bold text-5xl bg-gradient-to-r from-[#91ffff] to-[#e9ffff] text-transparent bg-clip-text">About</li></Link>
        <div onClick={handleNav} className="mt-12">
        {nav ? <div className="fixed w-10 h-[2px] ease-in-out duration-1000 rotate-45 delay-1000 bg-white translate-x-[-48.5%]"></div> : <div className="fixed rotate-45 w-0 h-[2px] ease-in-out duration-1000 bg-white translate-x-[-48.5%]"></div>}
        {nav ? <div className="fixed w-10 h-[2px] ease-in-out duration-1000 rotate-[315deg] delay-1000 bg-white translate-x-[-48.5%]"></div> : <div className="fixed rotate-[315deg] w-0 h-[2px] ease-in-out duration-1000 bg-white translate-x-[-48.5%]"></div>}
          </div>
      </ul>
      <header className="z-20 w-screen flex h-20 items-center bg-[#121212] sticky">
        <h1 className=" mx-6 font-bold text-xl bg-gradient-to-r from-[#91ffff] to-[#e9ffff] text-transparent bg-clip-text">Alfons Stoltz.</h1>
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
        {!nav ? <div className="border-y-2 border-y-white w-7 h-4 ease-in-out duration-1000"></div> : <div className="border-y-2 border-y-white w-0 h-4 ease-in-out duration-1000"></div>}
          </div>
        </div>
      </header>
      <div className="flex flex-col flex-wrap md:flex-row">
        <div className="h-[54vh] min-w-[300px] md:order-2">
        </div>
        <div className="flex flex-col md:order-1 md:ml-[8rem] md:mt-[14rem] mx-12">
          <h1 className="text-5xl md:text-8xl font-semibold max-w-[250px] my-1">
            Alfons Stoltz
          </h1>
          <p className="text-1xl md:text-3xl font-medium my-1">
           Technology Student
          </p>
        </div>
      </div>
   </body>
  )
}
 