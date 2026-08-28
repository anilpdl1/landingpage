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
    <nav className="mx-auto max-w-6xl   px-6 py-3 flex justify-between items-center my-5  ">
       <div className="">
        <FaGithub className="text-5xl text-primary"/>
       </div>
       <div className="w-2/3 hidden md:flex justify-between   ">
        <a href="">
        features
        </a>
        <a href="">pricing</a>
        <a href="">
        About
        </a>
        <Button/>
       </div>
        <button onClick={()=>setOpen(true)} className="md:hidden">
       <Menu size={30}/>
       </button>
        <div className={`flex flex-col  fixed top-0 w-[65%] right-0 h-2/3 bg-accent transition-all ease-out ${Isopen?  "translate-x-0":"translate-x-full"}`}>
        <div className="flex justify-between mt-5 py-3 px-6 text-3xl">
        <Button/>
        <button onClick={closeMenu}>
            <X size={30}/>
        </button>
        </div>
        <div className="flex flex-col p-10 jusfify-center items-end gap-10  py-3 px-6 my-3 text-2xl">
        {links.map((el,idx)=>(
            <a key={idx} href="">{el}</a>
        ))}

        </div>
        </div>
    </nav>
)
}
export default Navbar;