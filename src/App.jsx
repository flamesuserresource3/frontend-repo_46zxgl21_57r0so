import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Showcase from './components/Showcase';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans" id="home">
      <Navbar />
      <Hero />
      <Highlights />
      <Showcase />
      <footer className="border-t border-white/10 bg-black">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-zinc-500 flex flex-col sm:flex-row gap-2 items-center justify-between">
          <p>© {new Date().getFullYear()} MirrorCraft — All rights reserved.</p>
          <p>
            <a href="#home" className="hover:text-zinc-300">Back to top</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
