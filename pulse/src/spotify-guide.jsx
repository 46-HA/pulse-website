import React, { useEffect } from 'react';

const RedirectExample = () => {
  useEffect(() => {
    window.location.href = 'https://example.com';
  }, []);

  return <p>Redirecting...</p>;
};

export default RedirectExample;
