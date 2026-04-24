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
    <div className='w-full h-[100px] flex items-center bg-white border-b border-zinc-100 sticky top-0 z-[100]'>
        <div className="w-full max-w-[1300px] mx-auto px-6 flex flex-row items-center justify-between font-inter text-[17px] text-black">
            
            <Link to="/dash" className="text-[32px] font-black tracking-tighter">LockedIn</Link>
            
            <div className="hidden lg:flex gap-10 items-center">
                    <Link to="/platforms" className="flex flex-col group relative py-2">
                        Platforms
                        <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-black transition-all duration-300 group-hover:w-full"></div>
                    </Link>
                
                    <Link to="/rankings" className="flex flex-col group relative py-2">
                        Rankings
                        <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-black transition-all duration-300 group-hover:w-full"></div>
                    </Link>
                
                    <Link to="/friends" className="flex flex-col group relative py-2">
                        Friends
                        <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-black transition-all duration-300 group-hover:w-full"></div>
                    </Link>
              
                    <Link to="/searchfriend" className="flex flex-col group relative py-2">
                        SearchUser
                        <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-black transition-all duration-300 group-hover:w-full"></div>
                    </Link>
            </div>

            <div className="relative flex items-center">
                <button onClick={() => setOpen(!open)} className="h-[45px] w-[45px] rounded-full bg-black flex items-center justify-center hover:scale-110 transition-transform shadow-md">
                    <LuUserRound className="h-[24px] w-[24px] text-white"/>
                </button>
                
                <div ref={profileref} className={`absolute right-0 top-[60px] flex flex-col items-center gap-3 bg-white p-3 rounded-xl shadow-2xl border border-zinc-100 transition-all ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}`}>
                        <Link to="/profile" className="profilediv h-[45px] w-[45px] rounded-full bg-zinc-900 flex items-center justify-center hover:bg-black transition-colors">
                            <LuUserRound className="h-[22px] w-[22px] text-white"/>
                        </Link>
                        <Link to="/settings" className="profilediv h-[45px] w-[45px] hover:bg-zinc-100 rounded-full flex items-center justify-center transition-colors">
                            <IoMdSettings className="h-[28px] w-[28px] text-black hover:rotate-90 transition-transform duration-500"/>
                        </Link>
                        <Link to="/logOut" className="profilediv h-[45px] w-[45px] hover:bg-red-50 rounded-full flex items-center justify-center transition-colors">
                            <IoMdLogOut className="h-[28px] w-[28px] text-red-600"/>
                        </Link>                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
