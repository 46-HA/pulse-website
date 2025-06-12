import React from 'react';

const SubmissionForm = () => (
  <section className="submission-form" style={{ textAlign: 'center' }}>
    <h2>Submit Your Project</h2>
    <form action="https://example.com" method="get" style={{ margin: '1rem auto', maxWidth: 400 }}>
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="project" placeholder="Describe your project" required />
      <button type="submit">Submit</button>
    </form>
    <button
      className="slack-button"
      onClick={() => window.open('https://join.slack.com/t/hackclub/shared_invite/xyz', '_blank')}
      aria-label="Join the Slack"
    >
      Join the Slack
    </button>
  </section>
);

export default SubmissionForm;
