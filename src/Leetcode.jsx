import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { TbBrandCpp } from "react-icons/tb";
import { LuFlame } from "react-icons/lu";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import Level from './Level';
import RecentSubmissionBox from './RecentSubmissionBox';

const Leetcode = () => {

    const user = "Priyank_Gupta_"
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:8080/api/leetcode/${user}`)
        .then((res) => {
            console.log(res)
            setData(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    console.log(data?.recentSubmissions)
    
    const totalAcceptanceRate = data?.acceptanceRate
  ? Number(data.acceptanceRate).toFixed(1)
  : "0.0";

  if (!data) {
  return (
    <div className="w-screen h-screen flex items-center justify-center text-xl">
      Loading...
    </div>
  );
}

  return (
    <div className = "w-screen h-[2400px] mt-[40px] relative overflow-visible flex flex-col items-center">
      <div className = "w-[1327px] h-[220px] absolute left-[100px] flex flex-row gap-[55px]">
        <div className = "w-[700px] h-[220px] flex justify-center flex-col relative bg-slate-900 rounded-[6px] overflow-hidden">
            <div className = "h-[100px] w-[100px] absolute left-[602px] bottom-[133px] z-10 bg-yellow-300 opacity-10 rounded-[5px]"></div>
            <div className = "h-[140px] w-[140px] absolute left-[100px] top-[130px] z-9 bg-green-300 opacity-10 rounded-[5px]"></div>
            <div className = "h-[40px] w-[400px] absolute left-[30px] top-[20px] flex items-center text-[15px] font-bold text-gray-500">
                TOTAL PROBLEMS SOLVED
            </div>
            <div className = "h-[60px] w-[200px]  absolute left-[30px] top-[70px] flex flex-row">
                <div className = "h-[60px] w-[120px]  text-[60px] flex items-center font-semibold text-white">{data.solved}</div>
                <div className = "h-[60px] w-[120px]  text-[25px] flex items-center ml-[15px] mt-[10px] font-bold text-gray-500">/ {data.total}</div>
            </div>
            <div className = "h-[30px] w-[650px]  absolute left-[30px] top-[140px] flex flex-row items-center z-10">
                <div className = "h-[12px] w-[550px] flex items-center bg-gray-600 rounded-[4px]">
                    <div className = "h-[12px] bg-white rounded-[4px]" style = {{width: `${(550)*(data.solved/data.total)}px`}}></div>
                </div>
                <div className = "h-[30px] w-[40px]  ml-[15px] font-semibold text-[16px] flex items-center mt-[-2px] text-white">{data.solved/20}%</div>
            </div>
        </div>
        <div className = "w-[260px] h-[220px] border border-gray-300 flex flex-col justify-center pl-[30px] rounded-[6px] overflow-hidden z-10 bg-white relative">
            <div className = "h-[100px] w-[100px] bg-slate-100 rounded-[6px] -z-10 absolute top-[150px] right-[180px]"></div>
            <div className = "w-[60px] h-[60px] flex items-center">
                <TbBrandCpp className = "w-[40px] h-[40px] text-slate-900"/>
            </div>
            <div className = "w-[150px] h-[60px] flex items-center text-[14px] font-bold text-slate-500">
                ACCEPTANCE RATE
            </div>
            <div className = "w-[80px] h-[60px] flex items-center text-slate-900 font-bold text-[40px]">
                {totalAcceptanceRate}%
            </div>
        </div>
        <div className = "w-[260px] h-[220px] border border-gray-300 flex flex-col justify-center pl-[30px] rounded-[6px] overflow-hidden z-10 bg-white relative">
            <div className = "h-[100px] w-[100px] bg-yellow-900 opacity-7 rounded-[6px] -z-10 absolute left-[180px] top-[-5px]"></div>
            <div className = "w-[60px] h-[60px] flex items-center">
                <LuFlame className = "w-[40px] h-[40px] text-yellow-700"/>
            </div>
            <div className = "w-[150px] h-[60px] flex items-center text-[14px] font-bold text-slate-500">
                CURRENT STREAK
            </div>
            <div className = "w-[150px] h-[60px] flex items-center text-slate-900 font-bold text-[40px]">
                10 <p className = "text-slate-500 text-[14px] font-bold ml-[10px] mt-[19px]">DAYS</p>
            </div>
        </div>
      </div>

      <div className = "w-[1327px] h-[170px] absolute left-[100px] top-[260px] flex flex-row gap-[55px]">
        <Level level = "EASY" icon = {<IoMdCheckmarkCircleOutline className = "h-[30px] w-[30px] text-green-900"/>} solved = {data.easy} total = {300} bgColor = "bg-green-50" textColor = "text-green-900" borderColor = "border-green-300 " barColor = "bg-green-900"/>
        <Level level = "MEDIUM" icon = {<IoMdCheckmarkCircleOutline className = "h-[30px] w-[30px] text-yellow-900"/>} solved = {data.medium} total = {1200} bgColor = "bg-yellow-50" textColor = "text-yellow-900" borderColor = "border-yellow-300" barColor = "bg-yellow-900"/>
        <Level level = "HARD" icon = {<IoMdCheckmarkCircleOutline className = "h-[30px] w-[30px] text-red-900"/>} solved = {data.hard} total = {300} bgColor = "bg-red-50" textColor = "text-red-900" borderColor = "border-red-300" barColor = "bg-red-900"/>
      </div>

      <div className = "w-[1327px] h-[450px] absolute left-[100px] top-[470px] flex flex-row gap-[55px]">
        <div className = "w-[636px] h-[450px] border border-black"></div>
        <div className = "w-[636px] h-[450px] border border-black"></div>
      </div>

    

      <div className = "w-[1100px] h-[1250px] absolute left-[200px] top-[1000px] flex flex-col items-center gap-[20px] border border-gray-300 z-50 rounded-[5px] ">
            <div className = "w-[1100px] h-[85px] flex flex-col items-center justify-center pt-[25px] gap-[10px]">
                <div className = "w-[1000px] h-[20px] font-extrabold text-[14px] flex items-center pl-[60px]">
                    RECENT SUBMISSIONS
                </div>
                <div className = "w-[1000px] h-[20px] text-gray-600 text-[15px] flex items-center pl-[60px]">
                    Latest activity on LeetCode
                </div>
            </div>
            <div className = "w-[900px] h-[3px] bg-black"></div>
            {
                data?.recentSubmissions?.map(item => (
                    <RecentSubmissionBox 
                    key = {item.id}
                    title = {item.questionDetails.title}
                    difficulty = {item.questionDetails.difficulty}
                    acRate = {item.questionDetails.acRate}
                    timestamp = {item.timestamp}
                    />
                ))
            }
      </div>
    </div>
  )
}

export default Leetcode
