import React from 'react';
import { GraduationCap, Users, Building2, Briefcase } from 'lucide-react';

const stakeholders = [
  {
    title: 'Alumni',
    icon: Users,
    desc: 'Stay connected, mentor students, share opportunities, and grow your professional network.'
  },
  {
    title: 'Current Students',
    icon: GraduationCap,
    desc: 'Access mentorship, internships, and career guidance from verified alumni.'
  },
  {
    title: 'Faculty & Admin',
    icon: Building2,
    desc: 'Manage data, run campaigns, track engagement, and measure outcomes securely.'
  },
  {
    title: 'Employers & Recruiters',
    icon: Briefcase,
    desc: 'Discover qualified candidates, post opportunities, and collaborate with institutions.'
  },
];

const Stakeholders = () => {
  return (
    <section id="stakeholders" className="relative py-20 bg-slate-900/40">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Stakeholders and Beneficiaries</h2>
          <p className="mt-3 text-slate-300">Designed to serve everyone in the academic ecosystem with verified access and clear outcomes.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stakeholders.map(({ title, icon: Icon, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stakeholders;
