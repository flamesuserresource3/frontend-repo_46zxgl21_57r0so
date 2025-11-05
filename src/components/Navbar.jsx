import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/50 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-white">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-zinc-900 to-zinc-700 text-white flex items-center justify-center">
            <Sparkles size={18} className="text-emerald-300"/>
          </div>
          <div className="leading-tight">
            <p className="text-lg font-semibold tracking-tight">MirrorCraft</p>
            <p className="text-xs text-zinc-400">Reflections, Redefined</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#collections" className="text-zinc-300 hover:text-white transition-colors">Collections</a>
          <a href="#customize" className="text-zinc-300 hover:text-white transition-colors">Customize</a>
          <a href="#story" className="text-zinc-300 hover:text-white transition-colors">Our Story</a>
          <a href="#contact" className="text-zinc-300 hover:text-white transition-colors">Contact</a>
        </nav>
        <a href="#contact" className="ml-4 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white text-black text-sm hover:bg-zinc-100">Get a Quote</a>
      </div>
    </header>
  );
}
