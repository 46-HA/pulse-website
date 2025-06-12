import React from 'react';
import Header from './components/Header.jsx';
import Radio from './components/Radio.jsx';
import Hero from './components/Hero.jsx';
import FAQ from './components/FAQ.jsx';
import SubmissionForm from './components/SubmissionForm.jsx';

function App() {
  return (
    <div className="app">
      <Header />
      <Radio />
      <main>
        <Hero />
        <FAQ />
        <SubmissionForm />
      </main>
    </div>
  );
}

export default App;
