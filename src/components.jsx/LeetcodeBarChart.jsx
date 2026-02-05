import React from 'react'
import axios from 'axios'
import { useEffect, useState } from "react"

const LeetcodeBarChart = () => {

  const username = "Priyank_Gupta_"
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.
          get(`http://localhost:8080/api/leetcode/${username}`)
          .then((res) => {
            console.log(res)
            setData(res.data)
          })
          .catch((err) => {
            console.log(`Backend error: ${err}`)
          })
  }, [])

  

 if (!data) {
    return <p>Loading Leetcode stats...</p>;
  }

    let rs = data.recentSubmissions

  return (
    <div>
      <h2>Leetcode Bar chart</h2>
      <p>Easy: {data.easy}</p>
      <p>Medium: {data.medium}</p>
      <p>Hard: {data.hard}</p>
      <ul>{
        rs.map((item) => (
          <li key={item.id}>
            {item.title}
          </li>
        ))
      }</ul>
    </div>
  )
}

export default LeetcodeBarChart
