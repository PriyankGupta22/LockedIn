import React from 'react'
import axios from 'axios'
import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import ProfileCard from './ProfileCard'


const FriendBox = ({username}) => {

const [profile, setProfile] = useState({})
const [open, setOpen] = useState(false)
const boxRef = useRef(null)

const getProfileFunction = async () => {
    const res = await axios.get(`http://localhost:8080/api/friend-profile/${username}`)
    try{
        setProfile(res.data)
    }
    catch(err){
        console.log("Profile not available", err)
    }
}

useLayoutEffect(() => {
    if (boxRef.current) {
        gsap.fromTo(boxRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.5 }
        )
    }
}, [])

const handleViewProfile = () => {
    getProfileFunction()
    setOpen(true)
}

  return (
    <>
      <div ref={boxRef} className="w-full h-[80px] border-2 border-black flex items-center justify-between rounded-[10px] px-[30px] hover:bg-gray-50 transition-all duration-300 group cursor-pointer">
        <div className="text-[20px] font-extrabold text-black">
          {username}
        </div>
        <button 
        className="h-[45px] px-[30px] text-white bg-black rounded-[8px] text-[14px] font-bold hover:bg-white hover:text-black border-2 border-black transition-all duration-300 transform group-hover:scale-105"
        onClick={handleViewProfile}
        >
          View Profile
        </button>
      </div>
      <ProfileCard open = {open} setOpen = {() => {setOpen(false)}}/>
    </>
  )
}

export default FriendBox
