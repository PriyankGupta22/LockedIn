import React from 'react'
import { useState } from 'react'

const ProfileCard = ({open, setOpen, solved, total}) => {

  return (
    <>
    {open && 
    <div className = "h-[600px] w-[800px] border border-black rounded-[5px] absolute top-[125px] left-[370px] bg-neutral-50 flex flex-col items-center justify-center gap-[20px]">
      <div className = "h-[100px] w-[750px] flex flex-row items-center">
        <div className = "h-[100px] w-[450px] border border-neutral-300 rounded-[5px] bg-slate-900 flex flex-col pt-[15px] pb-[20px]">
            <div className = "h-[40px] w-[450px] text-white font-extrabold flex items-center pl-[20px]">
                Total Questions Solved
            </div>
            <div className = "h-[60px] w-[450px] text-white font-bold text-[30px] pl-[20px] flex items-center">
                262 / <p className='text-[20px] ml-[10px] mt-[7px]'>3800</p>
            </div>
        </div>
        <div className = "h-[100px] w-[280px] border border-blue-300 rounded-[5px] ml-[20px] flex flex-col pt-[15px] pb-[20px] bg-blue-50 text-blue-950">
            <div className = "h-[40px] w-[300px] font-extrabold flex items-center pl-[20px]">
                Acceptance Rate
            </div>
            <div className = "h-[60px] w-[300px] font-bold text-[30px] pl-[20px] flex items-center">
                51 %
            </div>
        </div>
      </div>
      <div className = "h-[100px] w-[750px] flex flex-row items-center gap-[20px]">
        <div className = "h-[100px] w-[245px] border border-green-300 rounded-[5px] flex flex-col pt-[15px] pb-[20px] bg-green-50 text-green-950">
            <div className = "h-[40px] w-[230px] font-extrabold flex items-center pl-[20px]">
                Easy Solved
            </div>
            <div className = "h-[60px] w-[230px] font-bold text-[30px] pl-[20px] flex items-center">
                120
            </div>
        </div>
        <div className = "h-[100px] w-[245px] border border-yellow-300 rounded-[5px] flex flex-col pt-[15px] pb-[20px] bg-yellow-50 text-yellow-950">
            <div className = "h-[40px] w-[230px] font-extrabold flex items-center pl-[20px]">
                Medium Solved
            </div>
            <div className = "h-[60px] w-[230px] font-bold text-[30px] pl-[20px] flex items-center">
                120
            </div>
        </div>
        <div className = "h-[100px] w-[245px] border border-red-300 rounded-[5px] flex flex-col pt-[15px] pb-[20px] bg-red-50 text-red-950">
            <div className = "h-[40px] w-[230px] font-extrabold flex items-center pl-[20px]">
                Hard Solved
            </div>
            <div className = "h-[60px] w-[230px] font-bold text-[30px] pl-[20px] flex items-center">
                4
            </div>
        </div>
      </div>
      <div className = "h-[100px] w-[750px] flex flex-row items-center">
        <div className = "h-[100px] w-[385px] border border-neutral-300 rounded-[5px]"></div>
        <div className = "h-[100px] w-[385px] border border-neutral-300 rounded-[5px] ml-[20px]"></div>
      </div>
      <div className = "h-[100px] w-[750px] border border-neutral-300 rounded-[5px]"></div>
      <button className = "h-[40px] w-[100px] bg-black text-white rounded-[5px] absolute left-[675px] top-[543px]"
      onClick = {setOpen}
      >Close</button>
    </div>}
    </>
  )
}

export default ProfileCard
