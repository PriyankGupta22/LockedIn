import React from 'react'
import { useState, useRef, useLayoutEffect } from 'react'
import axios from 'axios'
import gsap from 'gsap'

const SearchFriend = () => {

    const [searchUsername, setSearchUsername] = useState("")
    const [userProfile, setUserProfile] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const containerRef = useRef(null)
    const inputRef = useRef(null)
    const cardRef = useRef(null)

    const searchUserFunction = async () => {
        if (!searchUsername.trim()) {
            setError("Please enter a username")
            return
        }

        setLoading(true)
        setError("")
        setUserProfile(null)

        try {
            const res = await axios.get(`http://localhost:8080/api/friend-profile/${searchUsername}`)
            setUserProfile(res.data)
        }
        catch (err) {
            setError("User not found")
            setUserProfile(null)
        }
        finally {
            setLoading(false)
        }
    }

    useLayoutEffect(() => {
        if (containerRef.current) {
            const tl = gsap.timeline()

            
            tl.fromTo(inputRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
            )

            
            if (cardRef.current && userProfile) {
                tl.fromTo(
                    cardRef.current,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.6, ease: "back.out(1.2)" },
                    "-=0.3"
                )
            }
        }
    }, [userProfile])

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            searchUserFunction()
        }
    }

    return (
        <div ref={containerRef} className="min-h-screen w-full bg-white pt-[100px] pb-[50px]">
            <div className="flex justify-center">
                <div className="w-[1200px] px-6">

                    {}
                    <div ref={inputRef} className="mb-[40px]">
                        <div className="flex gap-4 items-center">
                            <div className="flex-1">
                                <input
                                    type='text'
                                    placeholder='SEARCH USERNAME'
                                    value={searchUsername}
                                    onChange={(e) => {
                                        setSearchUsername(e.target.value)
                                        setError("")
                                    }}
                                    onKeyPress={handleKeyPress}
                                    className="w-full h-[50px] border-2 border-black rounded-[10px] bg-white px-[30px] text-[16px] font-semibold placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black transition-all"
                                />
                            </div>
                            <button
                                onClick={searchUserFunction}
                                disabled={loading}
                                className="h-[50px] w-[150px] bg-black text-white border-2 border-black rounded-[10px] text-[16px] font-bold hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? "Searching..." : "Search"}
                            </button>
                        </div>

                        {}
                        {error && (
                            <div className="mt-4 p-4 border-2 border-red-500 bg-red-50 rounded-[8px] text-red-700 font-semibold text-sm">
                                {error}
                            </div>
                        )}
                    </div>

                    {}
                    {userProfile && (
                        <div ref={cardRef} className="w-full border-2 border-black rounded-[12px] bg-white p-[30px]">
                            <div className="space-y-[20px]">
                                {}
                                <div className="flex items-center justify-between pb-[20px] border-b-2 border-black">
                                    <div>
                                        <h2 className="text-[32px] font-black text-black mb-2">
                                            {userProfile.username}
                                        </h2>
                                        <p className="text-[16px] font-semibold text-gray-600">
                                            {userProfile.email || "No email provided"}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[14px] font-semibold text-gray-500 mb-2">Overall Rank</p>
                                        <p className="text-[36px] font-black text-black">
                                            #{userProfile.rank || "N/A"}
                                        </p>
                                    </div>
                                </div>

                                {}
                                <div className="grid grid-cols-3 gap-[20px]">
                                    {}
                                    <div className="border-2 border-black rounded-[10px] p-[20px] text-center">
                                        <h3 className="text-[14px] font-bold text-gray-600 mb-3 uppercase">LeetCode</h3>
                                        <p className="text-[28px] font-black text-black mb-2">
                                            {userProfile.leetcodeProblems || 0}
                                        </p>
                                        <p className="text-[12px] font-semibold text-gray-500">Problems Solved</p>
                                    </div>

                                    {}
                                    <div className="border-2 border-black rounded-[10px] p-[20px] text-center">
                                        <h3 className="text-[14px] font-bold text-gray-600 mb-3 uppercase">CodeForces</h3>
                                        <p className="text-[28px] font-black text-black mb-2">
                                            {userProfile.codeforcesRating || 0}
                                        </p>
                                        <p className="text-[12px] font-semibold text-gray-500">Rating</p>
                                    </div>

                                    {}
                                    <div className="border-2 border-black rounded-[10px] p-[20px] text-center">
                                        <h3 className="text-[14px] font-bold text-gray-600 mb-3 uppercase">HackerRank</h3>
                                        <p className="text-[28px] font-black text-black mb-2">
                                            {userProfile.hackerrankProblems || 0}
                                        </p>
                                        <p className="text-[12px] font-semibold text-gray-500">Problems Solved</p>
                                    </div>
                                </div>

                                {}
                                {(userProfile.bio || userProfile.location) && (
                                    <div className="border-t-2 border-black pt-[20px]">
                                        {userProfile.bio && (
                                            <div className="mb-[15px]">
                                                <p className="text-[12px] font-bold text-gray-600 uppercase mb-2">Bio</p>
                                                <p className="text-[14px] font-semibold text-black">
                                                    {userProfile.bio}
                                                </p>
                                            </div>
                                        )}
                                        {userProfile.location && (
                                            <div>
                                                <p className="text-[12px] font-bold text-gray-600 uppercase mb-2">Location</p>
                                                <p className="text-[14px] font-semibold text-black">
                                                    {userProfile.location}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {}
                    {searchUsername && !userProfile && !loading && !error && (
                        <div className="text-center py-[60px]">
                            <p className="text-[16px] font-semibold text-gray-600">
                                Search for a user to view their profile
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SearchFriend
