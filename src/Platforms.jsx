import React, { useState, useRef, useLayoutEffect, useEffect } from 'react'
import { SiLeetcode, SiCodeforces, SiGeeksforgeeks, SiCodechef } from "react-icons/si";
import { FaHackerrank, FaGithub } from "react-icons/fa";
import gsap from 'gsap'

const platforms = [
  {
    id: 'leetcode',
    name: 'LeetCode',
    placeholder: 'Username',
    color: '#FFA116',
    bg: 'rgba(255, 161, 22, 0.05)',
    darkBg: '#1a1a1a',
    icon: <SiLeetcode className='h-24 w-24' />
  },
  {
    id: 'codeforces',
    name: 'Codeforces',
    placeholder: 'Handle',
    color: '#1976D2',
    bg: 'rgba(25, 118, 210, 0.05)',
    darkBg: '#0f172a',
    icon: <SiCodeforces className='h-24 w-24' />
  },
  {
    id: 'hackerrank',
    name: 'HackerRank',
    placeholder: 'Username',
    color: '#00C853',
    bg: 'rgba(0, 200, 83, 0.05)',
    darkBg: '#064e3b',
    icon: <FaHackerrank className='h-24 w-24' />
  },
  {
    id: 'github',
    name: 'GitHub',
    placeholder: 'Username',
    color: '#21262D',
    bg: 'rgba(33, 38, 45, 0.05)',
    darkBg: '#0d1117',
    icon: <FaGithub className='h-24 w-24' />
  },
  {
    id: 'codechef',
    name: 'CodeChef',
    placeholder: 'Username',
    color: '#A0522D',
    bg: 'rgba(160, 82, 45, 0.05)',
    darkBg: '#451a03',
    icon: <SiCodechef className='h-24 w-24' />
  },
  {
    id: 'gfg',
    name: 'GeeksforGeeks',
    placeholder: 'Username',
    color: '#2F8D46',
    bg: 'rgba(47, 141, 70, 0.05)',
    darkBg: '#064e3b',
    icon: <SiGeeksforgeeks className='h-24 w-24' />
  }
]

const PlatformCard = ({ p, value, active, onChange }) => {
  return (
    <div className={`flex flex-col items-center gap-6 p-8 transition-all duration-500 ${active ? 'scale-110' : 'opacity-60 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105'}`}>
      <div
        className="transition-all duration-500"
        style={{ color: active ? p.color : '#cbd5e1' }}
      >
        {p.icon}
      </div>

      <div className="flex flex-col items-center gap-2 w-full max-w-[200px]">
        <h3 className="font-bold text-xl tracking-tight" style={{ color: active ? p.color : '#64748b' }}>
          {p.name}
        </h3>
        <input
          type="text"
          placeholder={p.placeholder}
          value={value}
          onChange={(e) => onChange(p.id, e.target.value)}
          className="w-full bg-transparent border-b-2 py-2 px-1 text-center font-mono outline-none transition-all duration-300"
          style={{
            borderColor: active ? p.color : '#e2e8f0',
            color: active ? '#1e293b' : '#94a3b8'
          }}
        />
      </div>
    </div>
  )
}

const Platforms = () => {
  const [platformData, setPlatformData] = useState(
    Object.fromEntries(platforms.map(p => [p.id, '']))
  )
  const [activePlatform, setActivePlatform] = useState(null)

  const handleChange = (id, val) => {
    setPlatformData(prev => ({ ...prev, [id]: val }))
    if (val.trim() !== '') {
      setActivePlatform(id)
    } else if (activePlatform === id) {
      setActivePlatform(null)
    }
  }

  const activeData = platforms.find(p => p.id === activePlatform)
  const bgColor = activeData ? activeData.bg : '#ffffff'
  const accentColor = activeData ? activeData.color : '#000000'

  return (
    <div
      className="min-h-screen w-full transition-all duration-700 ease-in-out py-20 flex flex-col items-center"
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-6xl w-full mx-auto px-6">
        <header className="text-center mb-20 space-y-4">
          <h1
            className="text-5xl font-black tracking-tighter transition-colors duration-500"
            style={{ color: accentColor }}
          >
            Connect Platforms
          </h1>
          <p className="text-zinc-500 font-medium text-lg">
            Enter your usernames to sync your performance data
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center justify-items-center">
          {platforms.map(p => (
            <PlatformCard
              key={p.id}
              p={p}
              value={platformData[p.id]}
              active={activePlatform === p.id || platformData[p.id].trim() !== ''}
              onChange={handleChange}
            />
          ))}
        </div>

        {activePlatform && (
          <div className="mt-24 text-center animate-bounce">
            <p className="text-sm font-bold tracking-widest uppercase" style={{ color: accentColor }}>
              Syncing {activeData.name} Data...
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Platforms
