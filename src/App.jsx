import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Impact from './components/Impact';
import Stakeholders from './components/Stakeholders';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased">
      <Hero />
      <Features />
      <Impact />
      <Stakeholders />
      <footer className="border-t border-white/10 py-10 text-center text-sm text-slate-400 bg-slate-950">
        <p>© {new Date().getFullYear()} Alumni Nexus. Built for connected campuses.</p>
      </footer>
    </div>
  );
}

export default App;
