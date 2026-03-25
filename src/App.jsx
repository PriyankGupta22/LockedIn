import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Navbar'
import Dash from './Dash.jsx'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import LeetcodeBarChart from './components/Topic.jsx'
import RecentSubmissionBox from './RecentSubmissionBox.jsx'
import Friends from './Friends.jsx'
import Platforms from './Platforms.jsx'
import Rankings from './Rankings.jsx'
import SearchFriend from './SearchFriend.jsx'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path = "/dash" element = {<Dash />}/>
        <Route path = "/friends" element = {<Friends />}/>
        <Route path = "/searchfriend" element = {<SearchFriend />}/>
        <Route path = "/platforms" element = {<Platforms />}/>
        <Route path = "/rankings" element = {<Rankings />}/>
      </Routes>
      {/* <Routes>
        <Route path = "/" element = {<Dashboard />}/>
        <Route path = "/platforms" element = {<Platforms />}/>
        <Route path = "/rankings" element = {<Rankings />}/>
        <Route path = "/friends" element = {<Friends />}/>
        <Route path = "/searchUser" element = {<SearchUser />}/>
        <Route path = "/profile" element = {<Profile/>}/>
        <Route path = "/settings" element = {<Settings/>}/>
        <Route path = "/logOut" element = {<LogOut/>}/>
      </Routes> */}
      {/* <LeetcodeBarChart/> */}
      {/* <RecentSubmissionBox /> */}
    </Router>
  )
}

export default App
