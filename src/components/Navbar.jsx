import React from "react";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import Button from "./Button";
import { Menu,X} from "lucide-react";

function Navbar(){
    const [Isopen,setOpen]=useState(false);
    const closeMenu=()=>{
        setOpen(false);
    }
    const links=['Features','About','Pricing'];
return(
    <nav className="mx-auto max-w-6xl   px-6 py-3 flex justify-between items-center my-2  ">
       <div className="h-full w-20 rounded-2xl bg-background overflow-hidden">
  <img
    src="/logo.jpg"
    alt="Chelsea boots logo"
    className="h-full w-full object-contain mix-blend-multiply"
  />
</div>
       <div className="w-2/3 hidden md:flex justify-around  text-xl font-sans ">
        <a href="#features">
        Features
        </a>
        <a href="">Pricing</a>
        <a href="">
        About
        </a>
        <Button text="Login"/>
       </div>
        <button onClick={()=>setOpen(true)} className="md:hidden">
       <Menu size={30}/>
       </button>
        <div className={`flex flex-col z-50  fixed top-0 w-[65%] right-0 h-2/3 bg-accent transition-all ease-out ${Isopen?  "translate-x-0":"translate-x-full"}`}>
        <div className="flex justify-between mt-5 py-3 px-6 text-3xl">
        <Button text="Login"/>
        <button onClick={closeMenu}>
            <X size={30}/>
        </button>
        </div>
        <div className="flex flex-col p-10 jusfify-center items-end gap-10  py-3 px-6 my-3 text-2xl">
        {links.map((el,idx)=>(
            <a key={idx} href="" className=" border-b-2 border-white ">{el}</a>
        ))}
        </div>
        </div>
    </nav>
)
}
export default Navbar;