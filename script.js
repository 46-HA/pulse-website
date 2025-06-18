  const audio = document.getElementById('radio-audio');
  const playBtn = document.getElementById('radio-toggle');
  const playIcon = document.getElementById('play-icon');
  const pauseIcon = document.getElementById('pause-icon');
  const progressBar = document.getElementById('progress-bar');
  const volumeBar = document.getElementById('volume-bar');
  const volumeMuteIcon = document.getElementById('volume-mute');
  const volumeFullIcon = document.getElementById('volume-full');
  const rewindBtn = document.getElementById('rewind-btn');
  const fastforwardBtn = document.getElementById('fastforward-btn');

  function togglePlay() {
    if (audio.paused) {
      audio.play();
      playIcon.style.display = 'none';
      pauseIcon.style.display = 'inline';
    } else {
      audio.pause();
      playIcon.style.display = 'inline';
      pauseIcon.style.display = 'none';
    }
  }
  playBtn.addEventListener('click', togglePlay);

  audio.addEventListener('timeupdate', () => {
    if (!progressBar.dragging) {
      progressBar.value = (audio.currentTime / audio.duration) * 100 || 0;
    }
  });

  progressBar.addEventListener('input', () => {
    progressBar.dragging = true;
  });

  progressBar.addEventListener('change', () => {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
    progressBar.dragging = false;
  });

  function updateVolumeIcon(volume) {
    if (volume > 0.05) {
      volumeFullIcon.style.display = 'inline';
      volumeMuteIcon.style.display = 'none';
    } else {
      volumeFullIcon.style.display = 'none';
      volumeMuteIcon.style.display = 'inline';
    }
  }

  volumeBar.addEventListener('input', () => {
    audio.volume = volumeBar.value / 100;
    updateVolumeIcon(audio.volume);
  });

  audio.volume = 1;
  volumeBar.value = 100;
  updateVolumeIcon(audio.volume);

  rewindBtn.addEventListener('click', () => {
    audio.currentTime = Math.max(0, audio.currentTime - 5);
  });

  fastforwardBtn.addEventListener('click', () => {
    audio.currentTime = Math.min(audio.duration, audio.currentTime + 5);
  });

  // Rotation on logos
  const hackclubLogo = document.querySelector('.hackclub-logo');
  const spotifyLogo = document.querySelector('.spotify-logo');

  function rotateLogo(e) {
    const el = e.currentTarget;
    if(el.classList.contains('rotate')) return; // prevent multi spins
    el.classList.add('rotate');
    setTimeout(() => {
      el.classList.remove('rotate');
    }, 1000);
  }
  hackclubLogo.addEventListener('click', rotateLogo);
  spotifyLogo.addEventListener('click', rotateLogo);

  hackclubLogo.addEventListener('keydown', e => {
    if(e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      rotateLogo({currentTarget: hackclubLogo});
    }
  });
  spotifyLogo.addEventListener('keydown', e => {
    if(e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      rotateLogo({currentTarget: spotifyLogo});
    }
  });

  // Scroll fade in
  const sections = document.querySelectorAll('.section');
  function checkInView() {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < triggerBottom) {
        section.classList.add('in-view');
      }
    });
  }
  window.addEventListener('scroll', checkInView);
  window.addEventListener('load', checkInView);
