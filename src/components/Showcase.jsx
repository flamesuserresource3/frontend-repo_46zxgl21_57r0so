import React from 'react';
import { motion } from 'framer-motion';

const gallery = [
  { title: 'Minimal Edge', img: 'https://images.unsplash.com/photo-1616137390984-cbfa1b625cc1?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Luxe Aura', img: 'https://images.unsplash.com/photo-1592874905799-2ba8d2e0fc95?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Studio Glow', img: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Custom Creations', img: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1600&auto=format&fit=crop' },
];

export default function Showcase() {
  return (
    <>
      <section id="collections" className="bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Collections Preview</h2>
              <p className="text-zinc-400 mt-2 max-w-2xl">A glimpse of our best‑sellers. Hover to light them up.</p>
            </div>
            <a href="#customize" className="text-sm text-emerald-300 hover:text-emerald-200">Customize your mirror →</a>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {gallery.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition relative"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-500 group-hover:scale-105"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"/>
                  <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.25),transparent_60%)] opacity-0 group-hover:opacity-100 transition"/>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium">{item.title}</h3>
                      <span className="text-xs text-zinc-300">View Collection →</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="customize" className="bg-gradient-to-b from-zinc-950 to-black border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-br from-zinc-900 to-black">
                <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent,rgba(255,255,255,0.06),transparent)] animate-[spin_6s_linear_infinite]"/>
                <div className="absolute inset-6 rounded-xl border border-white/20 shadow-inner"/>
                <div className="absolute inset-0 m-6 rounded-xl ring-2 ring-white/10 shadow-[0_0_40px_rgba(255,255,255,0.2)]"/>
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Your Mirror. Your Way.</h2>
              <p className="text-zinc-400 mt-2">Toggle features to imagine your build.</p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {['Add Frame','Add Defogger','Add Speaker','3‑Way Lights'].map((t) => (
                  <button key={t} className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-zinc-200 hover:bg-white/[0.08]">{t}</button>
                ))}
              </div>
              <a href="#contact" className="mt-6 inline-flex items-center justify-center rounded-md bg-white text-black px-5 py-3 text-sm font-medium hover:bg-zinc-100">Get a Detailed Quote</a>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="bg-black border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <img src="https://images.unsplash.com/photo-1623652554515-91c833e3080e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXb3Jrc2hvcHxlbnwwfDB8fHwxNzYyMzMwNzcyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Workshop" className="w-full h-full object-cover opacity-90"/>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Our Story</h2>
              <p className="mt-4 text-zinc-300 leading-relaxed">We started with a single goal — to make mirrors that don’t just reflect you, but define your space. Crafted with precision, powered by innovation and designed to glow with your personality.</p>
              <a href="#contact" className="mt-6 inline-flex items-center justify-center rounded-md border border-white/20 text-white px-5 py-3 text-sm font-medium hover:bg-white/10">Read More & Connect</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h3 className="text-xl font-semibold text-white">Our Reflections in the World</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-5">
            {[1,2,3].map((i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-zinc-300">“Absolutely stunning. The lighting modes are perfect and the defogger is a game‑changer.”</p>
                <p className="mt-3 text-xs text-zinc-500">— Happy Customer #{i}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-black border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Ready to see yourself in a new light?</h2>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white text-black px-5 py-3 text-sm font-medium hover:bg-zinc-100">Get a Quote</a>
            <a href="#collections" className="inline-flex items-center justify-center rounded-md border border-white/20 text-white px-5 py-3 text-sm font-medium hover:bg-white/10">Explore Collections</a>
          </div>
          <div className="mt-10 text-sm text-zinc-400">
            <p>hello@mirrorcraft.studio · +1 (555) 123‑4567</p>
            <p className="mt-1">Mon–Sat: 9:00 AM – 7:00 PM</p>
          </div>
        </div>
      </section>
    </>
  );
}
