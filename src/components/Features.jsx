import React from 'react';
import { Calendar, Mail, Shield, Users, Briefcase } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Centralized Alumni Profiles',
    desc: 'Unified database with verified academic records and career updates, owned and updated by alumni and administrators.'
  },
  {
    icon: Mail,
    title: 'Smart Communication',
    desc: 'Targeted outreach via email and in-app messaging, segmented by batch, department, location, or industry.'
  },
  {
    icon: Calendar,
    title: 'Event Management',
    desc: 'Plan reunions, webinars, and meetups with RSVP tracking, reminders, and attendance analytics.'
  },
  {
    icon: Briefcase,
    title: 'Mentorship & Opportunities',
    desc: 'Connect alumni with students for mentoring, internships, and jobs. Track impact over time.'
  },
  {
    icon: Shield,
    title: 'Privacy & Security',
    desc: 'Role-based access, consent-driven data sharing, and audit logs to keep information safe and compliant.'
  },
];

const Features = () => {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900/60">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Everything you need to grow alumni engagement</h2>
          <p className="mt-3 text-slate-300">A modern toolkit for institutions to manage alumni relationships, streamline communication, and unlock opportunities at scale.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/[0.08]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
