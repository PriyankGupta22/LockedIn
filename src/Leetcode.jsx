import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { TbBrandCpp } from "react-icons/tb";
import { LuFlame } from "react-icons/lu";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Topic from './components/Topic'

import Level from './Level';
import RecentSubmissionBox from './RecentSubmissionBox';

const Leetcode = () => {

    const user = "Priyanshu_singh001"
    const [data, setData] = useState({
        solved: 452,
        total: 3300,
        easy: 156,
        medium: 245,
        hard: 51,
        acceptanceRate: "62.5",
        languages: [
            { langName: "C++", totalNumber: 280 },
            { langName: "Python", totalNumber: 120 },
            { langName: "Java", totalNumber: 52 }
        ],
        recentSubmissions: [
            { id: 1, questionDetails: { title: "Two Sum", difficulty: "Easy", acRate: "50.1" }, timestamp: "2 hours ago" },
            { id: 2, questionDetails: { title: "3Sum", difficulty: "Medium", acRate: "33.5" }, timestamp: "5 hours ago" },
            { id: 3, questionDetails: { title: "Trapping Rain Water", difficulty: "Hard", acRate: "59.2" }, timestamp: "1 day ago" },
            { id: 4, questionDetails: { title: "Longest Substring Without Repeating Characters", difficulty: "Medium", acRate: "34.1" }, timestamp: "2 days ago" },
            { id: 5, questionDetails: { title: "Median of Two Sorted Arrays", difficulty: "Hard", acRate: "37.4" }, timestamp: "3 days ago" }
        ]
    })
    const [langList, setLangList] = useState(["C++", "Python", "Java"])
    const [langNumList, setLangNumList] = useState([280, 120, 52])

    useEffect(() => {
        // Data is now hardcoded for showing purposes
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
    <div className="w-full max-w-[1300px] mx-auto py-10 flex flex-col items-center gap-10">
      {/* Top Stats Cards */}
      <div className="w-full flex flex-col lg:flex-row gap-8 justify-center">
        <div className="w-full lg:w-[700px] h-[220px] flex justify-center flex-col relative bg-zinc-900 rounded-lg overflow-hidden p-8 shadow-sm">
            <div className="absolute left-[30px] top-[20px] text-[13px] font-bold text-zinc-500 tracking-wider">
                TOTAL PROBLEMS SOLVED
            </div>
            <div className="flex flex-row items-baseline mt-4">
                <div className="text-[60px] font-bold text-white leading-none">{data.solved}</div>
                <div className="text-[24px] font-bold text-zinc-500 ml-3">/ {data.total}</div>
            </div>
            <div className="w-full mt-6 flex flex-row items-center gap-4">
                <div className="flex-1 h-[12px] bg-zinc-700 rounded-full overflow-hidden">
                    <div className="h-full bg-white transition-all duration-500" style={{width: `${(data.solved/data.total)*100}%`}}></div>
                </div>
                <div className="font-bold text-[16px] text-white">{(data.solved/data.total*100).toFixed(1)}%</div>
            </div>
        </div>
        
        <div className="w-full lg:w-[260px] h-[220px] border border-zinc-200 flex flex-col justify-center px-8 rounded-lg bg-white shadow-sm transition-transform hover:scale-[1.02]">
            <TbBrandCpp className="w-10 h-10 text-zinc-900 mb-4"/>
            <div className="text-[13px] font-bold text-zinc-500 mb-1">
                ACCEPTANCE RATE
            </div>
            <div className="text-zinc-900 font-bold text-[40px] leading-tight">
                {totalAcceptanceRate}%
            </div>
        </div>
        
        <div className="w-full lg:w-[260px] h-[220px] border border-zinc-200 flex flex-col justify-center px-8 rounded-lg bg-white shadow-sm transition-transform hover:scale-[1.02]">
            <LuFlame className="w-10 h-10 text-orange-500 mb-4"/>
            <div className="text-[13px] font-bold text-zinc-500 mb-1">
                CURRENT STREAK
            </div>
            <div className="flex items-baseline gap-2 text-zinc-900 font-bold text-[40px] leading-tight">
                10 <span className="text-zinc-500 text-[13px]">DAYS</span>
            </div>
        </div>
      </div>

      {/* Difficulty Levels */}
      <div className="w-full flex flex-col md:flex-row gap-8 justify-center">
        <Level level="EASY" icon={<IoMdCheckmarkCircleOutline className="h-[30px] w-[30px] text-green-700"/>} solved={data.easy} total={300} bgColor="bg-green-50" textColor="text-green-700" borderColor="border-green-200" barColor="bg-green-600"/>
        <Level level="MEDIUM" icon={<IoMdCheckmarkCircleOutline className="h-[30px] w-[30px] text-yellow-700"/>} solved={data.medium} total={1200} bgColor="bg-yellow-50" textColor="text-yellow-700" borderColor="border-yellow-200" barColor="bg-yellow-600"/>
        <Level level="HARD" icon={<IoMdCheckmarkCircleOutline className="h-[30px] w-[30px] text-red-700"/>} solved={data.hard} total={300} bgColor="bg-red-50" textColor="text-red-700" borderColor="border-red-200" barColor="bg-red-600"/>
      </div>

      {/* Topics and Charts Section */}
      <div className="w-full flex flex-col lg:flex-row gap-8 justify-center mb-10">
        <div className="w-full lg:w-[636px] min-h-[450px] border border-zinc-200 rounded-lg flex flex-col items-center justify-center p-8 bg-white shadow-sm">
            <h3 className="text-[13px] font-bold text-zinc-500 self-start mb-6 tracking-wider uppercase">Languages Used</h3>
            <div className="w-full max-w-[500px]">
                <Topic langList={langList} langNumList={langNumList} />
            </div>
        </div>
        <div className="w-full lg:w-[636px] min-h-[450px] border border-zinc-200 rounded-lg bg-white shadow-sm p-8 flex items-center justify-center">
            <p className="text-zinc-400 font-medium">Activity Heatmap Placeholder</p>
        </div>
      </div>

      {/* Recent Submissions */}
      <div className="w-full max-w-[1100px] border border-zinc-200 rounded-lg bg-white shadow-sm overflow-hidden mb-20">
            <div className="px-10 py-8 border-b border-zinc-100">
                <div className="font-extrabold text-[14px] text-zinc-900 tracking-wider">
                    RECENT SUBMISSIONS
                </div>
                <div className="text-zinc-500 text-[14px] mt-1">
                    Latest activity on LeetCode
                </div>
            </div>
            <div className="h-[3px] w-full bg-zinc-900"></div>
            <div className="p-6 flex flex-col gap-4">
                {
                    data?.recentSubmissions?.map(item => (
                        <RecentSubmissionBox 
                            key={item.id}
                            title={item.questionDetails.title}
                            difficulty={item.questionDetails.difficulty}
                            acRate={item.questionDetails.acRate}
                            timestamp={item.timestamp}
                        />
                    ))
                }
            </div>
      </div>
    </div>
  )
}

export default Leetcode
