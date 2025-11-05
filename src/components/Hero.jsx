import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] lg:min-h-[88vh] bg-black" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black pointer-events-none"/>

      <div className="relative max-w-6xl mx-auto px-4 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white leading-[1.05]">
            Reflections, Redefined.
          </h1>
          <p className="mt-4 text-zinc-300 text-lg">
            Smart. Sleek. Stunning. Premium mirrors with 3‑way lighting, defoggers and Bluetooth clock.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#collections" className="inline-flex items-center justify-center rounded-md bg-white text-black px-5 py-3 text-sm font-medium hover:bg-zinc-100">Explore Our Collection</a>
            <a href="#customize" className="inline-flex items-center justify-center rounded-md border border-white/20 text-white px-5 py-3 text-sm font-medium hover:bg-white/10">Customize Your Mirror</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
