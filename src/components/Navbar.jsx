import React from 'react';
import { Image, Shapes, Info, Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-zinc-900 to-zinc-600 text-white flex items-center justify-center font-bold">M</div>
          <div className="leading-tight">
            <p className="text-lg font-semibold">MirrorCraft</p>
            <p className="text-xs text-gray-500">Custom Mirrors Studio</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#collections" className="inline-flex items-center gap-2 text-gray-700 hover:text-black"><Image size={18}/>Collections</a>
          <a href="#customize" className="inline-flex items-center gap-2 text-gray-700 hover:text-black"><Shapes size={18}/>Customize</a>
          <a href="#about" className="inline-flex items-center gap-2 text-gray-700 hover:text-black"><Info size={18}/>About</a>
          <a href="#contact" className="inline-flex items-center gap-2 text-gray-700 hover:text-black"><Phone size={18}/>Contact</a>
        </nav>
        <a href="#contact" className="ml-4 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-black text-white text-sm hover:bg-zinc-800">Get a Quote</a>
      </div>
    </header>
  );
}
