"use client";
import Link from "next/link"
import { useState } from "react"
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
export default function Home() {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <body>
      <ul className={nav ? "gap-8 fixed flex flex-col justify-center items-center h-screen w-screen z-10 bg-black ease-in-out duration-1000 top-[0]" : 'gap-8 flex flex-col justify-center items-center h-screen w-screen z-10 fixed top-[-100%] ease-in-out duration-1000 bg-black'}>
        <li id="about" className="font-bold text-5xl bg-gradient-to-r from-[#91ffff] to-[#e9ffff] text-transparent bg-clip-text">About</li>
        <li id="projects" className="font-bold text-5xl bg-gradient-to-r from-[#91ffff] to-[#e9ffff] text-transparent bg-clip-text">Projects</li>
        <li id="contact" className="font-bold text-5xl bg-gradient-to-r from-[#91ffff] to-[#e9ffff] text-transparent bg-clip-text">Contact</li>
      </ul>
      <header className="z-20 w-screen flex h-20 items-center bg-black sticky">
        <h1 className=" ml-8 mr-8 font-bold text-2xl bg-gradient-to-r from-[#91ffff] to-[#e9ffff] text-transparent bg-clip-text">Alfons Stoltz.</h1>
        <nav className="self-center">
          <ul className="hidden md:flex">
            <li className="m-6">
              <Link href="/about">About</Link>
            </li>
            <li className="m-6">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="m-6">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="mr-8 ml-auto md:hidden content">
        <div onClick={handleNav}>
        {!nav ? <AiOutlineMenu size={28}/> : <AiOutlineClose size={28}/>}
          </div>
        </div>
      </header>
   </body>
  )
}
