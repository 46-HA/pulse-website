const audio = document.getElementById('radio-audio');
const playBtn = document.getElementById('radio-toggle');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');
const volumeBar = document.getElementById('volume-bar');
const volumeMuteIcon = document.getElementById('volume-mute');
const volumeFullIcon = document.getElementById('volume-full');
const progressBar = document.getElementById('progress-bar');
const rewindBtn = document.getElementById('rewind-btn');
const fastforwardBtn = document.getElementById('fastforward-btn');

audio.volume = volumeBar.value / 100;

playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'block';
  } else {
    audio.pause();
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
  }
});

volumeBar.addEventListener('input', () => {
  audio.volume = volumeBar.value / 100;
  if (audio.volume === 0) {
    volumeMuteIcon.style.display = 'inline';
    volumeFullIcon.style.display = 'none';
  } else {
    volumeMuteIcon.style.display = 'none';
    volumeFullIcon.style.display = 'inline';
  }
});

progressBar.addEventListener('input', () => {
  audio.currentTime = (progressBar.value / 100) * audio.duration;
});

audio.addEventListener('timeupdate', () => {
  if (audio.duration) {
    progressBar.value = (audio.currentTime / audio.duration) * 100;
  }
});

rewindBtn.addEventListener('click', () => {
  audio.currentTime = Math.max(0, audio.currentTime - 5);
});

fastforwardBtn.addEventListener('click', () => {
  audio.currentTime = Math.min(audio.duration, audio.currentTime + 5);
});

audio.addEventListener('ended', () => {
  playIcon.style.display = 'block';
  pauseIcon.style.display = 'none';
});
