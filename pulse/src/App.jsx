import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
import AudioPlayer from './components/AudioPlayer'
import FAQ from './components/FAQ'
import Demo from './pages/Demo'
import SpotifyGuide from './pages/SpotifyGuide'

export default function App() {
  const [hasEntered, setHasEntered] = useState(false)

  return (
    <div className={`app ${hasEntered ? 'entered' : ''}`}>
      <Navbar />
      {!hasEntered ? (
        <div className="landing">
          <h1>Pulse</h1>
          <button onClick={() => setHasEntered(true)}>Enter Pulse</button>
        </div>
      ) : (
        <>
          <AudioPlayer />
          <FAQ />
          <div className="controls">
            <button>Spotify API Guide</button>
            <button>Demo Project</button>
            <button>Submit</button>
          </div>
        </>
      )}
    </div>
  )
}
