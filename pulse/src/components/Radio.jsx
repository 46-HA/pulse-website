import React, { useRef, useState, useEffect } from 'react';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const Radio = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      audioRef.current.play();
      setPlaying(true);
    } else {
      audioRef.current.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    if (audioRef.current.volume > 0) {
      setVolume(0);
    } else {
      setVolume(1);
    }
  };

  const handleVolumeChange = (e) => {
    setVolume(Number(e.target.value));
  };

  return (
    <div className="radio" aria-label="Radio player">
      <button onClick={togglePlay} aria-label={playing ? 'Pause music' : 'Play music'}>
        {playing ? <FaPause size={18} /> : <FaPlay size={18} />}
      </button>
      <button onClick={toggleMute} aria-label={volume === 0 ? 'Unmute' : 'Mute'}>
        {volume === 0 ? <FaVolumeMute size={18} /> : <FaVolumeUp size={18} />}
      </button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
        aria-label="Volume control"
      />
      <audio ref={audioRef} src="/places-to-be.mp3" />
    </div>
  );
};

export default Radio;
