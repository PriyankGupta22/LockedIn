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

  return (
    <div className = "relative">
    <div className = "h-[160px] w-screen font-interrelative flex flex-row items-center">
        <div className = "h-[150px] w-[150px]  ml-[300px] mt-[-100px] -z-30  bg-zinc-100"></div>
        <div className = "h-[160px] w-[160px]  ml-[600px] mt-[130px] -z-30  bg-zinc-100"></div>
      <div className = "h-[100px] w-[600px]  absolute left-[100px]">
        <div className = "h-[70px] w-[600px] text-[50px] font-bold flex flex-row items-center">
            Performance Dashboard
        </div>
        <div className = "h-[30px] w-[600px] text-[17px] flex flex-row items-center text-zinc-500">
            Track your coding journey across platforms
        </div>
      </div>
    
        <button className = "h-[70px] w-[285px] border-[1px] border-black absolute right-[85px] flex flex-row items-center bg-black"
        onClick = {() => setOpen(!open)}
        >
        <div className = "border-[1px] border-black absolute h-[50px] w-[50px] left-[15px] flex items-center justify-center">
            {platform === "leetcode" && <SiLeetcode className = "h-[28px] w-[28px] text-white"/>}
            {platform === "hackerrank" && <FaHackerrank className = "h-[28px] w-[28px] text-white"/>}
            {platform === "codeforces" && <SiCodeforces className = "h-[28px] w-[28px] text-white"/>}
        </div>
        <div className = "border-[1px] border-black absolute h-[50px] w-[150px] left-[70px] flex flex-col gap-[0px]">
            <div className = " h-[25px] w-[150px] text-zinc-400 text-[13px] font-bold flex items-center ">
                PLATFORM
            </div>
            <div className = " h-[25px] w-[150px] text-white text-[15px] flex items-center font-extrabold">
                <p>{platform === "leetcode" && "Leetcode"}
                {platform === "hackerrank" && "HackerRank"}
                {platform === "codeforces" && "CodeForces"}
                </p>
            </div>
        </div>
        <div className = " absolute left-[220px] h-[30px] w-[30px] flex items-center justify-center">
            {open ? 
                (<FaChevronUp className = "h-[20px] w-[20px] text-white"/>)
                : (<FaChevronDown className = "h-[20px] w-[20px] text-white"/>)
            }
        </div>
      </button>
      {open && <div ref = {dropref} className = "h-[210px] w-[285px] border border-black flex flex-col items-center justify-center absolute right-[85px] top-[120px] z-20 overflow-hidden">
            <button onClick = {() => {setPlatform("leetcode"); setOpen(false);}} className = "linkref h-[70px] w-[283px] flex flex-row items-center  bg-white hover:bg-zinc-100 ">
                <div className = "h-[40px] w-[40px] ml-[20px] flex justify-center items-center">
                    <SiLeetcode className = "h-[28px] w-[28px]"/>
                </div>
                <div className = "h-[40px] w-[150px] flex items-center text-[17px] font-bold pl-[10px]">
                    LeetCode
                </div>
            </button>
            <div className = "w-[283px] h-[0.3px] border-[0.3px] border-zinc-100"></div>
            <button onClick = {() => {setPlatform("hackerrank"); setOpen(false);}} className = "linkref h-[70px] w-[283px] flex flex-row items-center  bg-white hover:bg-zinc-100 ">
                <div className = "h-[40px] w-[40px] ml-[20px] flex justify-center items-center">
                    <FaHackerrank className = "h-[28px] w-[28px]"/>
                </div>
                <div className = "h-[40px] w-[150px] flex items-center text-[17px] font-bold pl-[10px]">
                    HackerRank
                </div>
            </button>
            <div className = "w-[283px] h-[0.3px] border-[0.3px] border-zinc-100"></div>
            <button onClick = {() => {setPlatform("codeforces"); setOpen(false);}} className = "linkref h-[70px] w-[283px] flex flex-row items-center  bg-white hover:bg-zinc-100 ">
                <div className = "h-[40px] w-[40px] ml-[20px] flex justify-center items-center">
                    <SiCodeforces className = "h-[28px] w-[28px]"/>
                </div>
                <div className = "h-[40px] w-[150px] flex items-center text-[17px] font-bold pl-[10px]">
                    CodeForces
                </div>
            </button>
      </div>
        }
    </div>
    <div className = "h-[4px] w-[1328px] bg-black ml-[100px]"></div>
    {platform === "leetcode" && <Leetcode />}
    {platform === "hackerrank" && <HackerRank />}
    {platform === "codeforces" && <CodeForces />}
    </div>
  )
}

export default Dash
