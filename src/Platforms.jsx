import React, { useState, useRef, useLayoutEffect, useEffect } from 'react'
import { SiLeetcode } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import gsap from 'gsap'

const platforms = [
  {
    id: 'leetcode',
    name: 'LeetCode',
    placeholder: 'your_lc_handle',
    gradient: 'linear-gradient(135deg,#FFA116,#FF6B00)',
    cardBg: 'linear-gradient(145deg,#FFF8F0,#FFF3E0)',
    accent: '#FFF7ED',
    textColor: '#92400E',
    border: '#FFA116',
    glow: 'rgba(255,161,22,0.35)',
    icon: (
      <SiLeetcode className='h-[25px] w-[25px]'/>
    )
  },
  {
    id: 'codeforces',
    name: 'Codeforces',
    placeholder: 'tourist',
    gradient: 'linear-gradient(135deg,#1976D2,#0D47A1)',
    cardBg: 'linear-gradient(145deg,#F0F8FF,#E3F2FD)',
    accent: '#EFF6FF',
    textColor: '#1e3a5f',
    border: '#1976D2',
    glow: 'rgba(25,118,210,0.3)',
    icon: (
      <SiCodeforces className='h-[25px] w-[25px]'/>
    )
  },
  {
    id: 'hackerrank',
    name: 'HackerRank',
    placeholder: 'coding_champ',
    gradient: 'linear-gradient(135deg,#00C853,#1B5E20)',
    cardBg: 'linear-gradient(145deg,#F0FFF4,#E8F5E9)',
    accent: '#F0FFF4',
    textColor: '#14532d',
    border: '#00C853',
    glow: 'rgba(0,200,83,0.3)',
    icon: (
      <FaHackerrank className='h-[25px] w-[25px]'/>
    )
  },
  {
    id: 'github',
    name: 'GitHub',
    placeholder: 'octocat',
    gradient: 'linear-gradient(135deg,#21262D,#0D1117)',
    cardBg: 'linear-gradient(145deg,#F6F8FA,#EAEEF2)',
    accent: '#F6F8FA',
    textColor: '#0f172a',
    border: '#30363D',
    glow: 'rgba(22,27,34,0.25)',
    icon: (
      <FaGithub className='h-[25px] w-[25px]'/>
    )
  },
  {
    id: 'codechef',
    name: 'CodeChef',
    placeholder: 'chef_supreme',
    gradient: 'linear-gradient(135deg,#A0522D,#5D2E0C)',
    cardBg: 'linear-gradient(145deg,#FDF8F4,#F5EDE6)',
    accent: '#FDF8F4',
    textColor: '#5D2E0C',
    border: '#A0522D',
    glow: 'rgba(139,69,19,0.3)',
    icon: (
      <SiCodechef className='h-[25px] w-[25px]'/>
    )
  },
  {
    id: 'gfg',
    name: 'GeeksforGeeks',
    placeholder: 'geek_genius',
    gradient: 'linear-gradient(135deg,#2F8D46,#1A5C2A)',
    cardBg: 'linear-gradient(145deg,#F1F8F2,#E8F5E9)',
    accent: '#F1F8F2',
    textColor: '#14532d',
    border: '#2F8D46',
    glow: 'rgba(47,141,70,0.3)',
    icon: (
      <SiGeeksforgeeks className='h-[25px] w-[25px]'/>
    )
  }
]

// ── Single Card Component ────────────────────────────────────────────────────
const PlatformCard = ({ p, value, focused, saved, onChange, onFocus, onBlur, onSave }) => {
  const cardRef = useRef(null)
  const glowRef = useRef(null)
  const iconRef = useRef(null)
  const btnRef  = useRef(null)
  const prevFocused = useRef(false)

  useEffect(() => {
    if (!cardRef.current) return

    if (focused && !prevFocused.current) {
      gsap.to(cardRef.current, {
        scale: 1.04,
        boxShadow: `0 0 0 2.5px ${p.border}, 0 20px 55px ${p.glow}, 0 4px 18px rgba(0,0,0,0.09)`,
        duration: 0.4, ease: 'power3.out'
      })
      gsap.to(glowRef.current, { opacity: 1, duration: 0.4 })
      gsap.fromTo(iconRef.current,
        { rotationY: 0 },
        {
          rotationY: 360, duration: 0.5, ease: 'power2.inOut',
          onComplete: () => gsap.to(iconRef.current, { rotation: 8, scale: 1.15, duration: 0.3, ease: 'back.out(2)' })
        }
      )
    }

    if (!focused && prevFocused.current) {
      gsap.to(cardRef.current, {
        scale: 1,
        boxShadow: '0 2px 14px rgba(0,0,0,0.07)',
        duration: 0.4, ease: 'power3.out'
      })
      gsap.to(glowRef.current, { opacity: 0, duration: 0.4 })
      gsap.to(iconRef.current, { rotation: 0, scale: 1, duration: 0.4, ease: 'power3.out' })
    }

    prevFocused.current = focused
  }, [focused])

  useEffect(() => {
    if (saved && cardRef.current) {
      gsap.to(cardRef.current, { y: -8, duration: 0.18, ease: 'power2.out', yoyo: true, repeat: 1 })
    }
  }, [saved])

  const hoverIn  = () => { if (!saved) gsap.to(btnRef.current, { scale: 1.04, duration: 0.18 }) }
  const hoverOut = () => gsap.to(btnRef.current, { scale: 1, duration: 0.18 })

  return (
    <div
      ref={cardRef}
      className="relative rounded-2xl border-2 p-7 flex flex-col gap-5 overflow-hidden"
      style={{
        background: focused ? p.cardBg : 'linear-gradient(145deg,#FAFAFA,#F3F4F6)',
        borderColor: focused ? p.border : '#E5E7EB',
        boxShadow: '0 2px 14px rgba(0,0,0,0.07)',
        transition: 'background 0.35s ease, border-color 0.3s ease',
      }}
    >
      {/* Glow layer */}
      <div
        ref={glowRef}
        className="absolute inset-0 rounded-2xl pointer-events-none z-0"
        style={{
          opacity: 0,
          background: `radial-gradient(circle at 20% 20%, ${p.glow} 0%, transparent 65%)`,
        }}
      />

      {/* Header */}
      <div className="relative z-10 flex items-center gap-3.5">
        <div
          ref={iconRef}
          className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg"
          style={{ background: p.gradient, transformOrigin: 'center' }}
        >
          {p.icon}
        </div>
        <div>
          <div
            className="font-bold text-lg tracking-tight"
            style={{
              fontFamily: "'Sora', sans-serif",
              color: focused ? p.textColor : '#0f172a',
              transition: 'color 0.3s ease'
            }}
          >
            {p.name}
          </div>
          <div
            className="text-xs mt-0.5"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: focused && value ? p.border : '#9CA3AF',
              transition: 'color 0.3s ease'
            }}
          >
            {value ? `@${value}` : 'not connected'}
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="relative z-10 flex flex-col gap-2">
        <label
          className="text-[10px] font-bold tracking-widest uppercase"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: focused ? p.border : '#9CA3AF',
            transition: 'color 0.3s ease'
          }}
        >
          Username
        </label>
        <div className="relative">
          <span
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-bold pointer-events-none z-10"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: focused ? p.border : '#D1D5DB',
              transition: 'color 0.3s ease'
            }}
          >@</span>
          <input
            type="text"
            placeholder={p.placeholder}
            value={value}
            onChange={(e) => onChange(p.id, e.target.value)}
            onFocus={() => onFocus(p.id)}
            onBlur={() => onBlur(p.id)}
            onKeyDown={(e) => e.key === 'Enter' && onSave(p.id)}
            className="w-full h-12 rounded-xl border-2 pl-8 pr-4 text-sm outline-none"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              borderColor: focused ? p.border : '#E5E7EB',
              background: focused ? p.accent : '#fff',
              color: focused ? p.textColor : '#374151',
              boxShadow: focused ? `0 0 0 3.5px ${p.glow}` : 'none',
              transition: 'border-color 0.3s ease, background 0.3s ease, color 0.3s ease, box-shadow 0.3s ease',
            }}
          />
        </div>
      </div>

      {/* Button */}
      <button
        ref={btnRef}
        onClick={() => onSave(p.id)}
        onMouseEnter={hoverIn}
        onMouseLeave={hoverOut}
        className="relative z-10 w-full h-12 rounded-xl font-bold text-[13px] flex items-center justify-center gap-2 border-0 cursor-pointer"
        style={{
          fontFamily: "'Sora', sans-serif",
          background: saved
            ? 'linear-gradient(135deg,#22C55E,#16A34A)'
            : focused ? p.gradient
            : 'linear-gradient(135deg,#E5E7EB,#D1D5DB)',
          color: focused || saved ? '#fff' : '#9CA3AF',
          boxShadow: saved
            ? '0 6px 20px rgba(34,197,94,0.35)'
            : focused ? `0 6px 22px ${p.glow}` : 'none',
          transition: 'background 0.35s ease, color 0.3s ease, box-shadow 0.35s ease',
        }}
      >
        {saved ? (
          <span className="flex items-center gap-2" style={{ animation: 'checkPop 0.45s cubic-bezier(.34,1.56,.64,1) forwards' }}>
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px]">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            Connected!
          </span>
        ) : (
          <>
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"/>
            </svg>
            Connect
          </>
        )}
      </button>
    </div>
  )
}

// ── Main Platforms Component ─────────────────────────────────────────────────
const Platforms = () => {
  const containerRef = useRef(null)
  const accentBarRef = useRef(null)
  const headerRef    = useRef(null)
  const summaryRef   = useRef(null)

  const [platformData, setPlatformData] = useState(
    Object.fromEntries(platforms.map(p => [p.id, '']))
  )
  const [focused, setFocused] = useState(null)
  const [saved, setSaved]     = useState({})

//   Entrance animations
  useLayoutEffect(() => {
    const tl = gsap.timeline()
    tl.fromTo(headerRef.current,
      { y: -36, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.75, ease: 'power4.out' }
    )
    .fromTo(
      containerRef.current.querySelectorAll('.platform-card-wrap'),
      { y: 55, opacity: 0, scale: 0.96 },
      { y: 0, opacity: 1, scale: 1, stagger: 0.1, duration: 0.65, ease: 'power3.out' },
      '-=0.4'
    )
    .fromTo(summaryRef.current,
      { y: 36, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
      '-=0.2'
    )
  }, [])

  // Accent bar follows focused platform
  useEffect(() => {
    if (!accentBarRef.current) return
    const p = platforms.find(x => x.id === focused)
    accentBarRef.current.style.background = p
      ? p.gradient
      : 'linear-gradient(180deg,#6366f1,#8b5cf6)'
  }, [focused])

  const handleChange = (id, val) => setPlatformData(prev => ({ ...prev, [id]: val }))
  const handleFocus  = (id) => setFocused(id)
  const handleBlur   = (id) => setFocused(prev => prev === id ? null : prev)
  const handleSave   = (id) => {
    if (!platformData[id].trim()) return
    setSaved(prev => ({ ...prev, [id]: true }))
    setTimeout(() => setSaved(prev => ({ ...prev, [id]: false })), 2500)
  }

  const connectedCount = platforms.filter(p => platformData[p.id].trim()).length

  return (
    <>
    
      <div
        className="w-full min-h-screen bg-white pt-20 pb-20"
        style={{
          fontFamily: "'Sora', sans-serif"
        }}
      >
        <div className="max-w-6xl mx-auto px-6">

          {/* Header */}
          <div ref={headerRef} className="mb-14">
            <div className="flex items-center gap-3 mb-3">
              <div
                ref={accentBarRef}
                className="w-1.5 h-12 rounded-full flex-shrink-0"
                style={{
                  background: 'linear-gradient(180deg,#6366f1,#8b5cf6)',
                  transition: 'background 0.4s ease'
                }}
              />
              <h1 className="text-4xl font-extrabold text-black tracking-tight leading-tight">
                Connect Your Platforms
              </h1>
            </div>
            <p className="ml-5 text-sm text-gray-600 leading-relaxed">
              Focus any card and enter your username — watch the theme transform live.{' '}
              <span className="text-xs text-gray-500 ml-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                {connectedCount}/{platforms.length} connected
              </span>
            </p>
          </div>

          {/* Cards Grid */}
          <div
            ref={containerRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14"
          >
            {platforms.map(p => (
              <div key={p.id} className="platform-card-wrap">
                <PlatformCard
                  p={p}
                  value={platformData[p.id]}
                  focused={focused === p.id}
                  saved={!!saved[p.id]}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  onSave={handleSave}
                />
              </div>
            ))}
          </div>

          {/* Summary */}
          <div
            ref={summaryRef}
            className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-300"
          >
            <p className="text-black font-bold text-xl tracking-tight mb-1">
              Your Coding Profile
            </p>
            <p className="text-xs text-gray-600 mb-5" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              {connectedCount === 0
                ? 'No platforms connected yet'
                : connectedCount === platforms.length
                  ? 'All platforms connected 🎉'
                  : `${connectedCount} platform${connectedCount > 1 ? 's' : ''} connected`}
            </p>

            <div className="flex flex-wrap gap-2.5">
              {platforms.map(p => {
                const isOn = !!platformData[p.id].trim()
                return (
                  <div
                    key={p.id}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      background: isOn ? p.gradient : '#f3f4f6',
                      color: isOn ? '#fff' : '#6b7280',
                      border: isOn ? 'none' : '1.5px solid #d1d5db',
                      transition: 'all 0.35s ease',
                    }}
                  >
                    {isOn && <span style={{ opacity: 0.8 }}>●</span>}
                    {p.name}
                    {isOn && <span style={{ opacity: 0.65 }}>@{platformData[p.id]}</span>}
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Platforms