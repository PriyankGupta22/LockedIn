import React, { useState, useRef, useLayoutEffect, useEffect } from 'react'
import gsap from 'gsap'









const mockUsers = [
  { id: 1, username: 'Priyanshu_singh001', score: 2850, problems: 450, streak: 24, rank: 1 },
  { id: 2, username: 'Priyank_Gupta_',     score: 2700, problems: 420, streak: 18, rank: 2 },
  { id: 3, username: 'tech_genius',         score: 2550, problems: 400, streak: 15, rank: 3 },
  { id: 4, username: 'code_warrior',        score: 2300, problems: 380, streak: 12, rank: 4 },
  { id: 5, username: 'ninja_dev',           score: 2100, problems: 350, streak: 10, rank: 5 },
  { id: 6, username: 'algorithm_pro',       score: 1950, problems: 320, streak: 8,  rank: 6 },
  { id: 7, username: 'python_master',       score: 1800, problems: 290, streak: 7,  rank: 7 },
  { id: 8, username: 'debug_master',        score: 1650, problems: 260, streak: 6,  rank: 8 },
  { id: 9, username: 'solution_finder',     score: 1500, problems: 240, streak: 5,  rank: 9 },
  { id: 10, username: 'coding_ninja',       score: 1350, problems: 210, streak: 3,  rank: 10 },
]

const maxScore = mockUsers[0].score


const ordinal = (n) => {
  const s = ['th','st','nd','rd']
  const v = n % 100
  return n + (s[(v - 20) % 10] || s[v] || s[0])
}


const MEDAL = { 1: '01', 2: '02', 3: '03' }


const PodiumCard = ({ user, order, cardRef }) => {
  
  const isFirst  = order === 'first'
  const isSecond = order === 'second'
  const isThird  = order === 'third'

  const barH     = isFirst ? '160px' : isSecond ? '110px' : '72px'
  const rankLabel = isFirst ? '1st' : isSecond ? '2nd' : '3rd'

  return (
    <div ref={cardRef} className="flex flex-col items-center">
      {}
      <div
        className="w-64 rounded-2xl border p-6 mb-4 flex flex-col gap-4"
        style={{
          background: '#ffffff',
          borderColor: isFirst ? '#F59E0B' : '#e5e7eb',
          boxShadow: isFirst ? '0 0 0 1px #F59E0B, 0 20px 50px rgba(245,158,11,0.15)' : '0 4px 24px rgba(0,0,0,0.08)',
        }}
      >
        {}
        <div className="flex items-center justify-between">
          <span
            className="font-black text-2xl tracking-tight"
            style={{
              fontFamily: "'Sora', sans-serif",
              color: isFirst ? '#F59E0B' : '#000000'
            }}
          >
            #{user.rank}
          </span>
          {isFirst && (
            <span
              className="text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                background: 'rgba(245,158,11,0.12)',
                color: '#F59E0B',
                border: '1px solid rgba(245,158,11,0.3)'
              }}
            >
              Leader
            </span>
          )}
        </div>

        {}
        <div>
          <div
            className="font-bold text-base text-black truncate"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            {user.username}
          </div>
          <div
            className="text-xs mt-0.5 text-gray-500"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {ordinal(user.rank)} place
          </div>
        </div>

        {}
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-xl p-3" style={{ background: '#f3f4f6' }}>
            <div className="text-[10px] font-bold tracking-widest uppercase text-gray-600 mb-1"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}>Score</div>
            <div className="text-lg font-black text-black" style={{ fontFamily: "'Sora', sans-serif" }}>
              {user.score.toLocaleString()}
            </div>
          </div>
          <div className="rounded-xl p-3" style={{ background: '#f3f4f6' }}>
            <div className="text-[10px] font-bold tracking-widest uppercase text-gray-600 mb-1"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}>Solved</div>
            <div className="text-lg font-black text-black" style={{ fontFamily: "'Sora', sans-serif" }}>
              {user.problems}
            </div>
          </div>
        </div>

        {}
        <div
          className="flex items-center gap-2 rounded-xl px-3 py-2.5"
          style={{ background: '#fef3c7', border: '1px solid #fde68a' }}
        >
          <span className="text-base">🔥</span>
          <div>
            <div className="text-[10px] font-bold tracking-widest uppercase text-yellow-900"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}>Streak</div>
            <div className="text-sm font-bold text-yellow-800" style={{ fontFamily: "'Sora', sans-serif" }}>
              {user.streak} days
            </div>
          </div>
        </div>
      </div>

      {}
      <div
        className="w-52 rounded-t-xl flex items-center justify-center"
        style={{
          height: barH,
          background: isFirst
            ? 'linear-gradient(180deg,#FCD34D 0%,#FBE547 100%)'
            : isSecond
            ? 'linear-gradient(180deg,#E5E7EB 0%,#D1D5DB 100%)'
            : 'linear-gradient(180deg,#F5D47D 0%,#F0B768 100%)',
          borderTop: isFirst ? '2px solid #F59E0B' : isSecond ? '2px solid #9CA3AF' : '2px solid #D97706',
          borderLeft: isFirst ? '2px solid #F59E0B' : isSecond ? '2px solid #9CA3AF' : '2px solid #D97706',
          borderRight: isFirst ? '2px solid #F59E0B' : isSecond ? '2px solid #9CA3AF' : '2px solid #D97706',
        }}
      >
        <span
          className="font-black"
          style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: isFirst ? '48px' : isSecond ? '36px' : '28px',
            color: isFirst ? '#92400E' : isSecond ? '#4B5563' : '#B45309',
            lineHeight: 1
          }}
        >
          {user.rank}
        </span>
      </div>
    </div>
  )
}


const Rankings = () => {
  const headerRef   = useRef(null)
  const podiumRefs  = useRef([])
  const listRef     = useRef(null)

  const [usersData, setUsersData] = useState([])

  useEffect(() => {
    setUsersData(mockUsers)
  }, [])

  useLayoutEffect(() => {
    if (!usersData.length) return

    const tl = gsap.timeline()

    
    tl.fromTo(headerRef.current,
      { y: -32, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power4.out' }
    )
    
    .fromTo(podiumRefs.current,
      { y: 60, opacity: 0, scale: 0.94 },
      { y: 0, opacity: 1, scale: 1, stagger: 0.15, duration: 0.75, ease: 'back.out(1.4)' },
      '-=0.3'
    )
    
    .fromTo(
      listRef.current?.querySelectorAll('.rank-row') || [],
      { x: -40, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.07, duration: 0.5, ease: 'power3.out' },
      '-=0.3'
    )
  }, [usersData])

  const topThree   = usersData.slice(0, 3)
  const otherUsers = usersData.slice(3)

  
  const podiumOrder = [
    { user: topThree[1], order: 'second' },
    { user: topThree[0], order: 'first'  },
    { user: topThree[2], order: 'third'  },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap');
      `}</style>

      <div
        className="w-full min-h-screen pt-20 pb-24"
        style={{
          background: '#ffffff',
          fontFamily: "'Sora', sans-serif",
        }}
      >
        <div className="max-w-5xl mx-auto px-6">

          {}
          <div ref={headerRef} className="mb-16">
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-1.5 h-12 rounded-full flex-shrink-0"
                style={{ background: 'linear-gradient(180deg,#F59E0B,#D97706)' }}
              />
              <h1
                className="text-4xl font-extrabold tracking-tight leading-tight"
                style={{ color: '#000000', fontFamily: "'Sora', sans-serif" }}
              >
                Rankings
              </h1>
            </div>
            <p className="ml-5 text-sm text-gray-600" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              Top performers on the LockedIn platform
              <span className="ml-3 text-gray-500">— {usersData.length} users</span>
            </p>
          </div>

          {}
          {usersData.length > 0 && (
            <div className="flex justify-center items-end gap-6 mb-20">
              {podiumOrder.map(({ user, order }, i) =>
                user ? (
                  <PodiumCard
                    key={user.id}
                    user={user}
                    order={order}
                    cardRef={el => podiumRefs.current[i] = el}
                  />
                ) : null
              )}
            </div>
          )}

          {}
          <div className="flex items-center gap-4 mb-6">
            <span
              className="text-xs font-bold tracking-widest uppercase text-gray-600"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              All Rankings
            </span>
            <div className="flex-1 h-px" style={{ background: '#e5e7eb' }} />
          </div>

          {}
          <div ref={listRef} className="flex flex-col gap-3">
            {otherUsers.map((user) => {
              const pct = Math.round((user.score / maxScore) * 100)
              return (
                <div
                  key={user.id}
                  className="rank-row group flex items-center gap-5 rounded-2xl border px-6 py-4 cursor-default"
                  style={{
                    background: '#ffffff',
                    borderColor: '#d1d5db',
                    transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#F59E0B'
                    e.currentTarget.style.boxShadow = '0 0 0 1px #F59E0B22, 0 8px 30px rgba(245,158,11,0.1)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#d1d5db'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  {}
                  <div
                    className="flex-shrink-0 w-10 text-right font-black text-xl"
                    style={{ fontFamily: "'Sora', sans-serif", color: '#000000' }}
                  >
                    {user.rank}
                  </div>

                  {}
                  <div className="w-px h-8 bg-gray-300 flex-shrink-0" />

                  {}
                  <div className="flex-1 min-w-0">
                    <div
                      className="font-bold text-sm text-black truncate"
                      style={{ fontFamily: "'Sora', sans-serif" }}
                    >
                      {user.username}
                    </div>
                    <div
                      className="text-xs text-gray-500 mt-0.5"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {ordinal(user.rank)} place
                    </div>
                  </div>

                  {}
                  <div className="flex items-center gap-8">
                    <div className="text-center">
                      <div
                        className="text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-1"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >Score</div>
                      <div
                        className="text-base font-black text-black"
                        style={{ fontFamily: "'Sora', sans-serif" }}
                      >
                        {user.score.toLocaleString()}
                      </div>
                    </div>

                    <div className="text-center">
                      <div
                        className="text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-1"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >Solved</div>
                      <div
                        className="text-base font-black text-black"
                        style={{ fontFamily: "'Sora', sans-serif" }}
                      >
                        {user.problems}
                      </div>
                    </div>

                    <div className="text-center">
                      <div
                        className="text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-1"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >Streak</div>
                      <div
                        className="text-base font-black text-black flex items-center gap-1"
                        style={{ fontFamily: "'Sora', sans-serif" }}
                      >
                        <span className="text-sm">🔥</span>{user.streak}d
                      </div>
                    </div>
                  </div>

                  {}
                  <div className="flex-shrink-0 flex flex-col items-end gap-1 w-28">
                    <span
                      className="text-[10px] text-gray-600"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {pct}%
                    </span>
                    <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: '#e5e7eb' }}>
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${pct}%`,
                          background: pct > 70
                            ? '#F59E0B'
                            : 'linear-gradient(90deg,#d1d5db,#9ca3af)',
                          transition: 'width 0.6s ease'
                        }}
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {}
          <div className="mt-10 flex justify-center">
            <span
              className="text-xs text-gray-600"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Rankings update every 24 hours
            </span>
          </div>

        </div>
      </div>
    </>
  )
}

export default Rankings