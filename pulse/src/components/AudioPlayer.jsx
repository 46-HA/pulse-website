import { useRef, useState } from 'react'
import { IoPlayCircleOutline, IoPauseCircleOutline, IoVolumeHighOutline } from 'react-icons/io5'

export default function AudioPlayer() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(1)

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleVolumeChange = (e) => {
    setVolume(e.target.value)
    audioRef.current.volume = volume
  }

  return (
    <div className="audio-player">
      <audio ref={audioRef} src="/fred-again.mp3" />
      <div className="controls">
        <button onClick={togglePlay}>
          {isPlaying ? <IoPauseCircleOutline /> : <IoPlayCircleOutline />}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
        <IoVolumeHighOutline />
      </div>
    </div>
  )
}
