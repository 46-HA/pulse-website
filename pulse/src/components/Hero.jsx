import React from 'react';

const Hero = () => (
  <section className="hero" style={{ textAlign: 'center' }}>
    <h1>Pulse - Your Spotify Web Studio (YSWS)</h1>
    <p style={{ maxWidth: 600, margin: '0 auto', fontSize: '1.2rem', lineHeight: '1.6' }}>
      Build creative projects related to the Spotify API — whether it's a website, tool, or app — and earn a
      free month of Spotify Premium!
    </p>
    <p style={{ fontStyle: 'italic', marginTop: 10 }}>
      (The song playing in the corner is “Places To Be” by Fred Again)
    </p>
  </section>
);

export default Hero;
