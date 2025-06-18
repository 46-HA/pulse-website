// Animated cursor alternative (optional)
// If you want a fancy animated cursor circle instead of default cursor,
// uncomment below code and comment out 'cursor: url(...)' in CSS

/*
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

window.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});
*/

// Show radio player only on desktop (PC)
function isDesktop() {
  const minDesktopWidth = 769;
  return window.innerWidth >= minDesktopWidth && !/Mobi|Android|iPhone|iPad|iPod|Tablet/i.test(navigator.userAgent);
}

window.addEventListener('load', () => {
  const radioPlayer = document.querySelector('.radio-player');
  if (isDesktop()) {
    radioPlayer.classList.remove('hidden');
  } else {
    radioPlayer.classList.add('hidden');
  }
});

// Radio player controls
const audio = document.getElementById('radio-audio');
const playBtn = document.getElementById('radio-toggle');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');
const rewindBtn = document.getElementById('rewind-btn');
const fastforwardBtn = document.getElementById('fastforward-btn');
const progressBar = document.getElementById('progress-bar');
const volumeBar = document.getElementById('volume-bar');
const volumeMute = document.getElementById('volume-mute');
const volumeFull = document.getElementById('volume-full');

document.querySelectorAll('.spotify-logo, .hackclub-logo').forEach(logo => {
  logo.addEventListener('click', () => {
    logo.classList.add('rotate');
    logo.addEventListener('animationend', () => {
      logo.classList.remove('rotate');
    }, { once: true });
  });
});


function updatePlayPauseIcons() {
  if (audio.paused) {
    playIcon.style.display = 'inline';
    pauseIcon.style.display = 'none';
  } else {
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'inline';
  }
}

playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
  updatePlayPauseIcons();
});

rewindBtn.addEventListener('click', () => {
  audio.currentTime = Math.max(0, audio.currentTime - 5);
});

fastforwardBtn.addEventListener('click', () => {
  audio.currentTime = Math.min(audio.duration, audio.currentTime + 5);
});

audio.addEventListener('timeupdate', () => {
  if (audio.duration) {
    progressBar.value = (audio.currentTime / audio.duration) * 100;
  }
});

progressBar.addEventListener('input', () => {
  if (audio.duration) {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
  }
});

volumeBar.addEventListener('input', () => {
  audio.volume = volumeBar.value / 100;
  updateVolumeIcons();
});

function updateVolumeIcons() {
  if (audio.volume === 0) {
    volumeMute.style.display = 'inline';
    volumeFull.style.display = 'none';
  } else {
    volumeMute.style.display = 'none';
    volumeFull.style.display = 'inline';
  }
}

volumeMute.addEventListener('click', () => {
  audio.volume = 1;
  volumeBar.value = 100;
  updateVolumeIcons();
});

volumeFull.addEventListener('click', () => {
  audio.volume = 0;
  volumeBar.value = 0;
  updateVolumeIcons();
});

// Initialize icons on load
window.addEventListener('load', () => {
  updatePlayPauseIcons();
  updateVolumeIcons();
});


