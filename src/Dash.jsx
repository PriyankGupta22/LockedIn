import React from 'react'
import gsap from 'gsap'
import { useRef, useLayoutEffect, useState} from 'react'
import { Link } from 'react-router';
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { SiHackerrank, SiLeetcode } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";
import Leetcode from "./Leetcode"
import HackerRank from "./HackerRank"
import CodeForces from "./CodeForces"

const Dash = () => {

    const [open, setOpen]  = useState(false)
    const [platform, setPlatform] = useState("leetcode")
    const dropref = useRef(null)
    const headerRef = useRef(null)
    const buttonRef = useRef(null)

   useLayoutEffect(() => {
   if (open && dropref.current) {
     gsap.from(dropref.current, {
       y: -10,
       opacity: 0,
       duration: 0.8,
       ease: "expo.out"
     });
     gsap.from(dropref.current.querySelectorAll(".linkref"), {
        x: -40,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        stagger: 0.2,
    });
   }
}, [open]);

    useLayoutEffect(() => {
        if (headerRef.current) {
            gsap.fromTo(headerRef.current,
                { x: -50, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
            )
        }
        if (buttonRef.current) {
            gsap.fromTo(buttonRef.current,
                { x: 50, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
            )
        }
    }, [])

  return (
    <div className="relative min-h-screen bg-white text-black font-inter">
      <div className="max-w-[1300px] mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div ref={headerRef} className="flex flex-col">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
              Performance Dashboard
            </h1>
            <p className="text-lg text-zinc-500 mt-2">
              Track your coding journey across platforms
            </p>
          </div>
        
          <div className="relative">
            <button 
              ref={buttonRef}
              className="h-[70px] w-[285px] border border-black flex flex-row items-center bg-black rounded-sm"
              onClick={() => setOpen(!open)}
            >
              <div className="absolute h-[50px] w-[50px] left-[15px] flex items-center justify-center border border-black">
                {platform === "leetcode" && <SiLeetcode className="h-[28px] w-[28px] text-white"/>}
                {platform === "hackerrank" && <FaHackerrank className="h-[28px] w-[28px] text-white"/>}
                {platform === "codeforces" && <SiCodeforces className="h-[28px] w-[28px] text-white"/>}
              </div>
              <div className="absolute h-[50px] w-[150px] left-[70px] flex flex-col justify-center">
                <div className="text-zinc-400 text-[11px] font-bold tracking-wider leading-none mb-1">
                  PLATFORM
                </div>
                <div className="text-white text-[15px] font-extrabold leading-none">
                  {platform === "leetcode" && "Leetcode"}
                  {platform === "hackerrank" && "HackerRank"}
                  {platform === "codeforces" && "CodeForces"}
                </div>
              </div>
              <div className="absolute right-[15px] h-[30px] w-[30px] flex items-center justify-center">
                {open ? 
                    (<FaChevronUp className="h-[18px] w-[18px] text-white"/>)
                    : (<FaChevronDown className="h-[18px] w-[18px] text-white"/>)
                }
              </div>
            </button>
            
            {open && (
              <div ref={dropref} className="h-[210px] w-[285px] border border-black flex flex-col absolute left-0 top-[75px] z-20 bg-white overflow-hidden shadow-lg">
                <button onClick={() => {setPlatform("leetcode"); setOpen(false);}} className="linkref h-[70px] w-full flex flex-row items-center hover:bg-zinc-100 transition-colors border-b border-zinc-100">
                    <div className="h-[40px] w-[40px] ml-[20px] flex justify-center items-center">
                        <SiLeetcode className="h-[28px] w-[28px] text-black"/>
                    </div>
                    <div className="h-[40px] flex items-center text-[17px] font-bold pl-[10px]">
                        LeetCode
                    </div>
                </button>
                <button onClick={() => {setPlatform("hackerrank"); setOpen(false);}} className="linkref h-[70px] w-full flex flex-row items-center hover:bg-zinc-100 transition-colors border-b border-zinc-100">
                    <div className="h-[40px] w-[40px] ml-[20px] flex justify-center items-center">
                        <FaHackerrank className="h-[28px] w-[28px] text-black"/>
                    </div>
                    <div className="h-[40px] flex items-center text-[17px] font-bold pl-[10px]">
                        HackerRank
                    </div>
                </button>
                <button onClick={() => {setPlatform("codeforces"); setOpen(false);}} className="linkref h-[70px] w-full flex flex-row items-center hover:bg-zinc-100 transition-colors">
                    <div className="h-[40px] w-[40px] ml-[20px] flex justify-center items-center">
                        <SiCodeforces className="h-[28px] w-[28px] text-black"/>
                    </div>
                    <div className="h-[40px] flex items-center text-[17px] font-bold pl-[10px]">
                        CodeForces
                    </div>
                </button>
              </div>
            )}
          </div>
        </div>
        
        <div className="h-[4px] w-full bg-black mb-12"></div>
        
        <div className="flex flex-col items-center">
          {platform === "leetcode" && <Leetcode />}
          {platform === "hackerrank" && <HackerRank />}
          {platform === "codeforces" && <CodeForces />}
        </div>
      </div>
    </div>
  )
}

export default Dash
