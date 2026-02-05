import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";


const RecentSubmissionBox = ({title, difficulty, acRate, timestamp}) => {

    if(difficulty === "Hard"){
        var color = "text-red-800"
        var bgColor = "bg-red-100"
    }
    else if(difficulty === "Medium"){
        var color = "text-blue-800"
        var bgColor = "bg-yellow-100"
    }
    else if(difficulty === "Easy"){
        var color = "text-green-800"
        var bgColor = "bg-green-100"
    }

  return (
    <div className = "w-[1000px] h-[100px]  left-[200px] flex items-center justify-center gap-[20px] text-black">
      <div className = "w-[40px] h-[40px]  flex items-center justify-center text-green-700 text-[30px]">
            <IoMdCheckmarkCircleOutline />
      </div>
      <div className = "w-[700px] h-[80px]  flex flex-col justify-center ">
        <div className = "w-[500px] h-[40px]  flex flex-col justify-center ml-[30px]">{title}</div>
        <div className = "w-[700px] h-[40px]  flex flex-row items-center ">
            <div className = "w-[200px] h-[40px]  flex flex-col  justify-center  ml-[30px]">{timestamp}</div>
            <div className = "w-[200px] h-[40px]  flex flex-col  justify-center ">{acRate}</div>
        </div>
      </div>
      <div className = {`w-[100px] h-[40px] flex items-center justify-center ${color} ${bgColor}`}>{difficulty}</div>
    </div>
  )
}

export default RecentSubmissionBox
