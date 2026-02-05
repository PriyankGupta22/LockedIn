import React from 'react'

const Level = ({level, icon, solved, total, bgColor, textColor, borderColor, barColor}) => {

    const bar = Math.min((solved / total) * 100, 100);

  return (
    <div className = {`w-[410px] h-[170px] border ${bgColor} ${textColor} ${borderColor} flex justify-center pl-[30px] flex-col rounded-[6px]`}>
            <div className = "w-[370px] h-[25px] flex items-center">
                <div className = {`w-[200px] h-[25px] ${textColor} font-bold`}>
                    {level}
                </div>
                <div className = "w-[40px] h-[40px] ml-[117px] flex items-center justify-center">
                    {icon}
                </div>
            </div >
            <div className = {`w-[100px] h-[40px] flex items-center text-[30px] font-bold ${textColor}`}>
                {solved}
            </div>
            <div className = "w-[350px] h-[25px] flex items-center">
                <div className = {`w-[350px] h-[10px] bg-white border ${borderColor} rounded-[3px] flex items-center`}>
                    <div className = {`h-[9px] ${barColor} rounded-[3px]`} style = {{width: `${bar}%`}}></div>
                </div>
            </div>
            <div className = {`w-[300px] h-[25px] flex items-center ${textColor} font-bold`}>
                {total} total problems
            </div>
        </div>
  )
}

export default Level
