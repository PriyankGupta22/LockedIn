import React from 'react'
import { useState, useEffect } from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";


const RecentSubmissionBox = ({title, difficulty, acRate, timestamp}) => {

    const [date, setDate] = useState(0)
    const [label, setLabel] = useState("")

    let color = "text-gray-700";
  let bgColor = "bg-gray-100";

  if (difficulty === "Hard") {
    color = "text-red-800";
    bgColor = "bg-red-100";
  } else if (difficulty === "Medium") {
    color = "text-yellow-800";
    bgColor = "bg-yellow-100";
  } else if (difficulty === "Easy") {
    color = "text-green-800";
    bgColor = "bg-green-100";
  }

    const acceptance =
  acRate !== undefined && acRate !== null
    ? Number(acRate).toFixed(2)
    : "0.00";

    useEffect(() => {
    if (!timestamp) return;

    const now = Date.now()
    const submissionTime = timestamp * 1000

    const differenceInTime = now - submissionTime
    const minutes = Math.floor(differenceInTime/(1000 * 60))
    const hours = Math.floor(differenceInTime/(1000 * 60 * 60))
    const days = Math.floor(hours/24)

    if(minutes < 60){
      setDate(minutes)
      setLabel(" minutes ago")
    } else if (hours < 24) {
      setDate(hours)
      setLabel(" hours ago")
    }else{
      setDate(days)
      setLabel(" days ago")
    }
  }, [timestamp]);


  return (
    <div className = "w-[1000px] h-[90px]  left-[200px] flex items-center justify-center gap-[10px] text-black">
      <div className = "w-[40px] h-[40px]  flex items-center justify-center text-green-700 text-[30px]">
            <IoMdCheckmarkCircleOutline />
      </div>
      <div className = "w-[700px] h-[80px]  flex flex-col justify-center ">
        <div className = "w-[500px] h-[40px]  flex flex-col justify-center ml-[30px] font-bold ">{title}</div>
        <div className = "w-[700px] h-[40px]  flex flex-row items-center ">
            <div className = "w-[100px] h-[40px]  flex flex-col  justify-center  ml-[30px] text-gray-500 text-[14px]">{date}{label}</div>
            <div className = "h-[40px] w-[40px] flex items-center justify-center">
              <div className = "h-[7px] w-[7px] rounded-[7px] bg-gray-500"></div>
            </div>
            <div className = "w-[70px] h-[40px]  flex flex-col  justify-center text-gray-500 text-[14px]">{acceptance} %</div>
        </div>
      </div>
      <div className = {`w-[100px] h-[40px] flex items-center justify-center ${color} ${bgColor}`}>{difficulty}</div>
    </div>
  )
}

export default RecentSubmissionBox
