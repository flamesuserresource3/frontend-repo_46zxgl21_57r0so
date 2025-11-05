import React from 'react';
import { Lightbulb, Wind, Bluetooth, Square } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { icon: Lightbulb, title: '3‑Way Lighting', desc: 'White, warm & natural tones for perfect ambience.' },
  { icon: Wind, title: 'Defogger', desc: 'Crystal clear visibility after every shower.' },
  { icon: Bluetooth, title: 'Smart Add‑ons', desc: 'Bluetooth speaker with date & time clock.' },
  { icon: Square, title: 'Custom Frames', desc: 'Black, gold or rose gold—or go frameless.' },
];

export default function Highlights() {
  return (
    <section className="bg-gradient-to-b from-black to-zinc-950 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Why Our Mirrors</h2>
        <p className="text-zinc-400 mt-2 max-w-2xl">Designed to glow with your personality and engineered for everyday ease.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] transition group"
            >
              <div className="absolute inset-px rounded-xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition pointer-events-none"/>
              <f.icon className="text-emerald-300" size={22} />
              <h3 className="mt-3 text-white font-medium">{f.title}</h3>
              <p className="mt-1 text-sm text-zinc-400">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
