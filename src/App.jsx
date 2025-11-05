import React from 'react';
import Navbar from './components/Navbar';
import CollectionsGallery from './components/CollectionsGallery';
import CustomizationConfigurator from './components/CustomizationConfigurator';
import AboutAndContact from './components/AboutAndContact';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900" id="home">
      <Navbar />

      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">Mirrors made for your space</h1>
              <p className="mt-4 text-gray-700 text-lg">From minimal frameless to statement metal frames—custom sizes, 3‑way lights, defoggers and Bluetooth clock options. Build yours and get an instant estimate.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#customize" className="inline-flex items-center justify-center rounded-md bg-black text-white px-5 py-3 text-sm font-medium hover:bg-zinc-800">Customize & Price</a>
                <a href="#collections" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-3 text-sm font-medium hover:bg-zinc-50">View Collections</a>
              </div>
              <div className="mt-6 text-xs text-gray-500">Basic • Premium • Luxury packages available</div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1600&auto=format&fit=crop" alt="Hero Mirror" className="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </section>

      <CollectionsGallery />
      <CustomizationConfigurator />
      <AboutAndContact />

      <footer className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600 flex flex-col sm:flex-row gap-2 items-center justify-between">
          <p>© {new Date().getFullYear()} MirrorCraft — All rights reserved.</p>
          <p>
            <a href="#home" className="hover:text-black">Back to top</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
