import React from 'react';

const Header = () => (
  <a href="https://hackclub.com/" className="hackclub-header" aria-label="Hack Club homepage">
    <img
      src="https://assets.hackclub.com/flag-orpheus-top.svg"
      alt="Hack Club"
      loading="lazy"
      decoding="async"
      width={256}
      height={64}
      style={{ border: 0 }}
    />
  </a>
);

export default Header;
