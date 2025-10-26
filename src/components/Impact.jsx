import React from 'react';
import { CheckCircle } from 'lucide-react';

const points = [
  'Strengthens alumni engagement and long-term relationships with institutions.',
  'Unlocks mentorships, internships, and collaborations for students.',
  'Boosts fundraising potential through segmented, data-driven outreach.',
  'Builds institutional credibility and community at scale.',
];

const Impact = () => {
  return (
    <section className="relative py-20 bg-slate-950">
      <div className="container mx-auto px-6 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Why this problem needs to be solved</h2>
          <p className="mt-3 text-slate-300 max-w-xl">Most institutions lack a reliable, centralized system to manage alumni data. Scattered records and informal channels make sustained engagement difficult. Our platform closes this gap.</p>
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-slate-200">
                <CheckCircle className="text-emerald-400 mt-0.5" size={18} />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-white font-semibold text-xl">Expected Outcomes</h3>
          <ul className="mt-4 grid gap-3 text-slate-300 text-sm">
            <li className="flex gap-2"><span className="text-emerald-400">•</span> Centralized alumni management with editable profiles.</li>
            <li className="flex gap-2"><span className="text-emerald-400">•</span> Integrated communication, networking, and event tools.</li>
            <li className="flex gap-2"><span className="text-emerald-400">•</span> Secure tracking for career progress and mentorship opportunities.</li>
            <li className="flex gap-2"><span className="text-emerald-400">•</span> Clean, intuitive interface for admins and alumni alike.</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#stakeholders" className="rounded-lg bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/15 border border-white/10">See who benefits</a>
            <a href="#features" className="rounded-lg bg-emerald-500 px-4 py-2 text-sm text-white hover:bg-emerald-600">View features</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
