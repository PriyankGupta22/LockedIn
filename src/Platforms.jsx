import React, { useState } from 'react'
import { SiLeetcode, SiCodeforces, SiGeeksforgeeks, SiCodechef } from "react-icons/si";
import { FaHackerrank, FaGithub } from "react-icons/fa";

const platforms = [
  {
    id: 'leetcode',
    name: 'LeetCode',
    placeholder: 'Username',
    color: '#FFA116',
    bg: 'linear-gradient(135deg, #1a1a1a 0%, #FFA116 100%)',
    textColor: '#ffffff',
    icon: <SiLeetcode className='h-32 w-32'/>
  },
  {
    id: 'codeforces',
    name: 'Codeforces',
    placeholder: 'Handle',
    color: '#1976D2',
    bg: 'linear-gradient(135deg, #1976D2 0%, #ffffff 100%)',
    textColor: '#1e293b',
    icon: <SiCodeforces className='h-32 w-32'/>
  },
  {
    id: 'hackerrank',
    name: 'HackerRank',
    placeholder: 'Username',
    color: '#2ec866',
    bg: 'linear-gradient(135deg, #2ec866 0%, #064e3b 100%)',
    textColor: '#ffffff',
    icon: <FaHackerrank className='h-32 w-32'/>
  },
  {
    id: 'github',
    name: 'GitHub',
    placeholder: 'Username',
    color: '#ffffff',
    bg: 'linear-gradient(135deg, #24292e 0%, #0d1117 100%)',
    textColor: '#ffffff',
    icon: <FaGithub className='h-32 w-32'/>
  },
  {
    id: 'codechef',
    name: 'CodeChef',
    placeholder: 'Username',
    color: '#5b4638',
    bg: 'linear-gradient(135deg, #5b4638 0%, #2e1d14 100%)',
    textColor: '#ffffff',
    icon: <SiCodechef className='h-32 w-32'/>
  },
  {
    id: 'gfg',
    name: 'GeeksforGeeks',
    placeholder: 'Username',
    color: '#2F8D46',
    bg: 'linear-gradient(135deg, #2F8D46 0%, #ffffff 100%)',
    textColor: '#1e293b',
    icon: <SiGeeksforgeeks className='h-32 w-32'/>
  }
]

const PlatformCard = ({ p, value, active, onChange }) => {
  return (
    <div className={`flex flex-col items-center gap-8 p-10 transition-all duration-700 ${active ? 'scale-125 z-50' : 'opacity-40 grayscale blur-[1px] hover:opacity-100 hover:grayscale-0 hover:blur-0 hover:scale-110'}`}>
      <div 
        className="transition-all duration-700 drop-shadow-2xl"
        style={{ color: active ? p.color : '#cbd5e1' }}
      >
        {p.icon}
      </div>
      
      <div className="flex flex-col items-center gap-4 w-full max-w-[250px]">
        <h3 className="font-black text-2xl tracking-tighter uppercase" style={{ color: active ? p.color : '#64748b' }}>
          {p.name}
        </h3>
        <input
          type="text"
          placeholder={p.placeholder}
          value={value}
          onChange={(e) => onChange(p.id, e.target.value)}
          className="w-full bg-white/10 backdrop-blur-md border-b-4 py-3 px-4 text-center font-mono text-lg outline-none transition-all duration-500 rounded-t-lg"
          style={{ 
            borderColor: active ? p.color : 'rgba(255,255,255,0.2)',
            color: active ? '#ffffff' : '#94a3b8',
            boxShadow: active ? `0 10px 30px -10px ${p.color}80` : 'none'
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
    } else {
      const otherActive = Object.keys(platformData).find(k => k !== id && platformData[k].trim() !== '')
      setActivePlatform(otherActive || null)
    }
  }

  const activeData = platforms.find(p => p.id === activePlatform)
  const bgStyle = activeData ? activeData.bg : '#ffffff'
  const textColor = activeData ? activeData.textColor : '#000000'

  return (
    <div 
      className="min-h-screen w-full transition-all duration-1000 ease-in-out py-24 flex flex-col items-center relative overflow-hidden"
      style={{ background: bgStyle }}
    >
      <div className="max-w-7xl w-full mx-auto px-8 relative z-10">
        <header className="text-center mb-32 space-y-6">
          <h1 
            className="text-7xl font-black tracking-tightest transition-all duration-700 uppercase"
            style={{ color: textColor }}
          >
            Connect Hub
          </h1>
          <p className="text-zinc-500 font-bold text-xl uppercase tracking-widest opacity-60">
            Sync your identities across platforms
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 items-center justify-items-center">
          {platforms.map(p => (
            <PlatformCard
              key={p.id}
              p={p}
              value={platformData[p.id]}
              active={activePlatform === p.id}
              onChange={handleChange}
            />
          ))}
        </div>

        {activePlatform && (
          <div className="mt-32 text-center animate-pulse">
            <p className="text-xl font-black tracking-widest uppercase" style={{ color: textColor }}>
              Syncing {activeData.name}...
            </p>
          </div>
        )}
      </div>
      
      {activePlatform && (
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ 
            backgroundImage: `radial-gradient(circle at 50% 50%, ${activeData.color} 0%, transparent 70%)`,
            transition: 'all 1s ease'
          }}
        />
      )}
    </div>
  )
}

export default Platforms
