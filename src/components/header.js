import {Bars3Icon} from '@heroicons/react/24/solid'
import { useState } from 'react'
function Header()
{
 const[toggleMenu,setToggleMenu]=useState(false);


return(
    <header className="flex justify-between px-5 py-2 bg-secondary sticky top-0">
        <a  className="font-bold text-white text-2xl "href="#">Shalini Vijay</a>
<nav className="hidden md:block ">

        <ul className="flex text-white cursor-pointer">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Project</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </nav>
        { toggleMenu && <nav className="block md:hidden">

        <ul  onClick={()=>setToggleMenu(!toggleMenu)}  className="flex flex-col text-white mobile-nav ">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Project</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </nav>}
        <button  onClick={()=> setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
    </header>
)
}
export default Header