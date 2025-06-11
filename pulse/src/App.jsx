import { Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import AudioPlayer from './components/AudioPlayer'
import FAQ from './components/FAQ'
import Demo from './pages/Demo'
import SpotifyGuide from './pages/SpotifyGuide'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <AudioPlayer />
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Routes>
          <Route path="/" element={<FAQ />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/guide" element={<SpotifyGuide />} />
        </Routes>
      </motion.main>
    </div>
  )
}
