import React from 'react';

const faqs = [
  { q: "What is a YSWS?", a: "A YSWS (You Ship, We Ship) is a program ran by Hack Club. You build a project with certain requirments and you recieve a prize/reward!" },
  { q: "Can I do this more than once?", a: "No, only once!" },
  { q: "How long will I have to work for?", a: "3 hours at the mininium (on Hackatime)! " },
  { q: "How will I recieve Spotify Premium?", a: "After you submit and your project is approved, you'll get a redeemable gift card." },
  { q: "How do I track my time?", a: <a href="https://hackatime.hackclub.com" target="_blank" rel="noreferrer">Use Hackatime</a> },
  { q: "Who is running this?", a: "Hack Club! We're a nonprofit that help teenagers discover code." },
  { q: "What can I make?", a: "Anything using the Spotify API—playlist. Think about tools, visualizers, or playlist generators!" },
  { q: "Do I have to be a teenager?", a: "Pulse is only running for high and middle schoolers." }
];

const FAQ = () => (
  <section className="faq">
    <h2>FAQs</h2>
    <ul>
      {faqs.map(({ q, a }, i) => (
        <li key={i} style={{ marginBottom: '1rem' }}>
          <strong>{q}</strong>
          <p>{a}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default FAQ;
