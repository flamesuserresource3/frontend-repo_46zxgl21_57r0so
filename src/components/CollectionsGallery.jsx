import React from 'react';

const items = [
  {
    id: 1,
    title: 'Aurum Edge – Gold Framed Oval',
    price: 249,
    img: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Noir Line – Black Rectangular',
    price: 199,
    img: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Rosé Luxe – Rose Gold Round',
    price: 279,
    img: 'https://images.unsplash.com/photo-1596079890748-4731b872f9fc?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Studio Glow – Backlit Circle',
    price: 329,
    img: 'https://images.unsplash.com/photo-1592874905799-2ba8d2e0fc95?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Modern Edge – Frameless Arch',
    price: 219,
    img: 'https://images.unsplash.com/photo-1616137390984-cbfa1b625cc1?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Gallery Curve – Organic Oval',
    price: 259,
    img: 'https://images.unsplash.com/photo-1542718610-a1d656d1884b?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function CollectionsGallery() {
  return (
    <section id="collections" className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Collections</h2>
          <p className="text-gray-600 mt-2 max-w-2xl">Explore our signature pieces across shapes and finishes. Prices shown are indicative and vary with size and customization.</p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(item => (
          <article key={item.id} className="group rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"/>
              <div className="absolute bottom-3 left-3 right-3 text-white drop-shadow">
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
            </div>
            <div className="p-4 flex items-center justify-between">
              <span className="text-sm text-gray-500">Indicative</span>
              <span className="text-lg font-semibold">${item.price}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
