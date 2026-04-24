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
    <div className="relative min-h-screen text-slate-50">
      <div className="h-[160px] w-full font-inter relative flex flex-row items-center">
        {/* Background decorative elements */}
        <div className="h-[150px] w-[150px] ml-[300px] mt-[-100px] -z-30 bg-amber-400/10 rounded-full blur-3xl absolute"></div>
        <div className="h-[160px] w-[160px] ml-[600px] mt-[130px] -z-30 bg-blue-500/10 rounded-full blur-3xl absolute"></div>
        
        <div ref={headerRef} className="h-[100px] w-[600px] absolute left-[100px]">
          <div className="h-[70px] w-[600px] text-[50px] font-bold flex flex-row items-center tracking-tight">
            Performance Dashboard
          </div>
          <div className="h-[30px] w-[600px] text-[17px] flex flex-row items-center text-slate-400">
            Track your coding journey across platforms
          </div>
        </div>
      
        <button 
          ref={buttonRef}
          className="glass glass-hover h-[70px] w-[285px] rounded-xl absolute right-[85px] flex flex-row items-center"
          onClick={() => setOpen(!open)}
        >
          <div className="absolute h-[50px] w-[50px] left-[15px] flex items-center justify-center bg-slate-800/50 rounded-lg">
            {platform === "leetcode" && <SiLeetcode className="h-[28px] w-[28px] text-amber-400"/>}
            {platform === "hackerrank" && <FaHackerrank className="h-[28px] w-[28px] text-green-500"/>}
            {platform === "codeforces" && <SiCodeforces className="h-[28px] w-[28px] text-blue-400"/>}
          </div>
          <div className="absolute h-[50px] w-[150px] left-[70px] flex flex-col gap-[0px]">
            <div className="h-[25px] w-[150px] text-slate-400 text-[13px] font-bold flex items-center tracking-wider">
              PLATFORM
            </div>
            <div className="h-[25px] w-[150px] text-white text-[15px] flex items-center font-extrabold">
              <p>
                {platform === "leetcode" && "Leetcode"}
                {platform === "hackerrank" && "HackerRank"}
                {platform === "codeforces" && "CodeForces"}
              </p>
            </div>
          </div>
          <div className="absolute right-[20px] h-[30px] w-[30px] flex items-center justify-center">
            {open ? 
                (<FaChevronUp className="h-[16px] w-[16px] text-slate-400"/>)
                : (<FaChevronDown className="h-[16px] w-[16px] text-slate-400"/>)
            }
          </div>
        </button>
        
        {open && (
          <div ref={dropref} className="glass rounded-xl h-[210px] w-[285px] flex flex-col items-center justify-center absolute right-[85px] top-[120px] z-20 overflow-hidden shadow-2xl">
            <button onClick={() => {setPlatform("leetcode"); setOpen(false);}} className="linkref h-[70px] w-full flex flex-row items-center hover:bg-slate-800/80 transition-colors">
                <div className="h-[40px] w-[40px] ml-[20px] flex justify-center items-center">
                    <SiLeetcode className="h-[24px] w-[24px] text-amber-400"/>
                </div>
                <div className="h-[40px] w-[150px] flex items-center text-[16px] font-semibold pl-[10px] text-slate-200">
                    LeetCode
                </div>
            </button>
            <div className="w-full h-[1px] bg-slate-700/50"></div>
            <button onClick={() => {setPlatform("hackerrank"); setOpen(false);}} className="linkref h-[70px] w-full flex flex-row items-center hover:bg-slate-800/80 transition-colors">
                <div className="h-[40px] w-[40px] ml-[20px] flex justify-center items-center">
                    <FaHackerrank className="h-[24px] w-[24px] text-green-500"/>
                </div>
                <div className="h-[40px] w-[150px] flex items-center text-[16px] font-semibold pl-[10px] text-slate-200">
                    HackerRank
                </div>
            </button>
            <div className="w-full h-[1px] bg-slate-700/50"></div>
            <button onClick={() => {setPlatform("codeforces"); setOpen(false);}} className="linkref h-[70px] w-full flex flex-row items-center hover:bg-slate-800/80 transition-colors">
                <div className="h-[40px] w-[40px] ml-[20px] flex justify-center items-center">
                    <SiCodeforces className="h-[24px] w-[24px] text-blue-400"/>
                </div>
                <div className="h-[40px] w-[150px] flex items-center text-[16px] font-semibold pl-[10px] text-slate-200">
                    CodeForces
                </div>
            </button>
          </div>
        )}
      </div>
      
      <div className="h-[1px] w-[calc(100%-200px)] bg-slate-800 mx-auto mt-4 mb-8"></div>
      
      {platform === "leetcode" && <Leetcode />}
      {platform === "hackerrank" && <HackerRank />}
      {platform === "codeforces" && <CodeForces />}
    </div>
  )
}

export default Dash
