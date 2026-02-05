import React from 'react'
import { Link , useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { IoMdSettings } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";
import { LuUserRound } from "react-icons/lu";
import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap';

const Navbar = () => {

    const [open, setOpen] = useState(false)
    const profileref = useRef(null)

    useLayoutEffect(() => {
        if(open && profileref.current){
        gsap.fromTo(profileref.current.querySelectorAll(".profilediv"), 
        {x: 50, opacity: 0},
        {
            x: -10,
            opacity: 1,
            stagger: 0.2,
            duration: 1,
            ease: "power3.out"
        });
    }
    else{
        gsap.to(profileref.current.querySelectorAll(".profilediv"), {
            x: 60,
            opacity: 0,
            stagger: -0.2,
            duration: 1,
            ease: "power3.out"
        })
}}, [open]);

  return (
    <div className='w-screen h-[100px] flex flex-row items-center relative text-[19px] font-inter text-black'>
        
            <Link to = "/dash" className = " absolute  left-[100px] text-[35px]">LockedIn</Link>
        
        <div className = "absolute  left-[800px] flex gap-[60px]">
                <Link to = "/platforms" className = "flex flex-col group">
                Platforms
                <div className = "h-[3px] w-0 bg-black transition-all duration-400 group-hover:w-[85px]"></div>
                </Link>
            
                <Link to = "/rankings" className = "flex flex-col group">
                Rankings
                <div className = "h-[3px] w-0 bg-black transition-all duration-400 group-hover:w-[83px]"></div>
                </Link>
            
                <Link to = "/friends" className = "flex flex-col group">
                Friends
                <div className = "h-[3px] w-0 bg-black transition-all duration-400 group-hover:w-[67px]"></div>
                </Link>
          
                <Link to = "/searchUser" className = "flex flex-col group">
                SearchUser
                <div className = "h-[3px] w-0 bg-black transition-all duration-400 group-hover:w-[107px]"></div>
                </Link>

            
        </div>
        <div className = "absolute right-[100px] ">
        <div className = " relative flex justify-center ">
        <button onClick={() => setOpen(!open)} className = "h-[40px] w-[40px] rounded-[20px]  bg-black flex items-center justify-center">
            <LuUserRound className = "h-[23px] w-[23px] text-white"/>
        </button>
            <div ref = {profileref} className = {`h-[160px] w-[50px]  absolute left-[90px] flex flex-col items-center gap-[15px] ${open ? "pointer-events-auto" : "pointer-events-none"}`}>
                    <Link to = "/profile" className = "profilediv">
                    <div  className = "h-[40px] w-[40px] rounded-[20px] bg-black flex items-center justify-center">
                        <LuUserRound className = "h-[23px] w-[23px] text-white"/>
                    </div>
                    </Link>
                    <Link to = "/settings" className = "profilediv h-[50px] w-[50px] hover:bg-zinc-100 rounded-[5px] flex items-center justify-center z-10">
                    <IoMdSettings className = "h-[30px] w-[30px] text-black hover:rotate-90 transition-transform duration-400"/>
                    </Link>
                    <Link to = "/logOut" className = "profilediv h-[50px] w-[50px] hover:bg-zinc-100 rounded-[5px] flex items-center justify-center z-10">
                    <IoMdLogOut className = "h-[30px] w-[30px] text-red-600"/>
                    </Link>                   
            </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar
