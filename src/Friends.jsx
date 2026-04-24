import React from 'react'
import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import FriendBox from './FriendBox'
import axios from 'axios'
import gsap from 'gsap'

const Friends = () => {

    const owner = "Priyank_Gupta_"

    const [friendUsername, setFriendUsername] = useState("")
    const [friendList, setFriendList] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const containerRef = useRef(null)
    const inputRef = useRef(null)
    const friendsListRef = useRef(null)
    const friendBoxesRef = useRef([])

    const loadFriends = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/api/friends/${owner}`)
            setFriendList(res.data)
        }
        catch (err) {
            console.log("Cannot load friends")
            setFriendList([])
        }
    }

    const addFriendFunction = async () => {
        if (!friendUsername.trim()) {
            setError("Please enter a username")
            return
        }

        setLoading(true)
        setError("")
        setSuccess("")

        try {
            const res = await axios.post(`http://localhost:8080/api/friends/${friendUsername}`)
            setFriendUsername("")
            setSuccess("Friend added successfully! ✓")
            loadFriends()
            setTimeout(() => setSuccess(""), 3000)
        }
        catch (err) {
            setError("User not found or already a friend")
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadFriends()
    }, [])

    useLayoutEffect(() => {
        if (containerRef.current) {
            const tl = gsap.timeline()

            
            tl.fromTo(inputRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
            )

            
            if (friendBoxesRef.current.length > 0) {
                tl.fromTo(
                    friendBoxesRef.current,
                    { x: -50, opacity: 0, y: 20 },
                    { x: 0, opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: "back.out(1.2)" },
                    "-=0.3"
                )
            }
        }
    }, [friendList])

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            addFriendFunction()
        }
    }

    return (
        <div ref={containerRef} className="min-h-screen w-full bg-white pt-[100px] pb-[50px]">
            <div className="max-w-[1200px] mx-auto px-6">

                {}
                <div ref={inputRef} className="mb-[40px]">
                    <div className="flex gap-4 items-center">
                        <div className="flex-1">
                            <input
                                type='text'
                                placeholder='ENTER THE USERNAME OF THE FRIEND'
                                value={friendUsername}
                                onChange={(e) => {
                                    setFriendUsername(e.target.value)
                                    setError("")
                                }}
                                onKeyPress={handleKeyPress}
                                className="w-full h-[50px] border-2 border-black rounded-[10px] bg-white px-[30px] text-[16px] font-semibold placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black transition-all"
                            />
                        </div>
                        <button
                            onClick={addFriendFunction}
                            disabled={loading}
                            className="h-[50px] w-[150px] bg-black text-white border-2 border-black rounded-[10px] text-[16px] font-bold hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? "Adding..." : "Add"}
                        </button>
                    </div>

                    {}
                    {error && (
                        <div className="mt-4 p-4 border-2 border-red-500 bg-red-50 rounded-[8px] text-red-700 font-semibold text-sm">
                            {error}
                        </div>
                    )}
                    {success && (
                        <div className="mt-4 p-4 border-2 border-green-500 bg-green-50 rounded-[8px] text-green-700 font-semibold text-sm">
                            {success}
                        </div>
                    )}
                </div>

                {}
                <div>
                    {friendList.length === 0 ? (
                        <div className="text-center py-20">
                            <h3 className="text-[28px] font-bold text-black mb-3">No Friends Yet</h3>
                            <p className="text-gray-600 font-medium">
                                Start adding friends to see their profiles and track progress together!
                            </p>
                        </div>
                    ) : (
                        <div ref={friendsListRef} className="space-y-[20px]">
                            {
                                friendList.map((item, index) => (
                                    <div
                                        key={item.friendUsername}
                                        ref={(el) => friendBoxesRef.current[index] = el}
                                    >
                                        <FriendBox username={item.friendUsername} />
                                    </div>
                                ))
                            }
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Friends
