import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Navbar'
import Dash from './Dash.jsx'
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import './App.css'
import LeetcodeBarChart from './components/Topic.jsx'
import RecentSubmissionBox from './RecentSubmissionBox.jsx'
import Friends from './Friends.jsx'
import Platforms from './Platforms.jsx'
import Rankings from './Rankings.jsx'
import SearchFriend from './SearchFriend.jsx'
import Loader from './components/Loader.jsx'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading && <Loader />}
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Navigate to="/dash" replace />}/>
        <Route path = "/dash" element = {<Dash />}/>
        <Route path = "/friends" element = {<Friends />}/>
        <Route path = "/searchfriend" element = {<SearchFriend />}/>
        <Route path = "/platforms" element = {<Platforms />}/>
        <Route path = "/rankings" element = {<Rankings />}/>
      </Routes>
    </Router>
  )
}

export default App
