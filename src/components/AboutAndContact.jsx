import React, { useMemo, useState } from 'react';
import { Mail, Phone, Clock, CheckCircle } from 'lucide-react';

export default function AboutAndContact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      <section id="about" className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Our Story</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">We started MirrorCraft with a simple belief: reflective surfaces should do more than show you the day—they should set the tone for it. From boutique hotels to cozy homes, our mirrors are hand‑finished with premium materials, precision edges and optional smart features to elevate everyday rituals.</p>
            <p className="mt-3 text-gray-700 leading-relaxed">Every piece is made to order in your desired shape and size, with options like 3‑way LED lighting, defoggers and integrated Bluetooth speakers with a date & time display. Choose a bold metal frame in black, gold or rose gold—or go frameless for a floating, modern look.</p>
            <ul className="mt-6 space-y-2 text-gray-700">
              <li className="inline-flex items-center gap-2"><CheckCircle className="text-green-600" size={18}/> Custom sizes for any space</li>
              <li className="inline-flex items-center gap-2"><CheckCircle className="text-green-600" size={18}/> Three curated packages: Basic, Premium, Luxury</li>
              <li className="inline-flex items-center gap-2"><CheckCircle className="text-green-600" size={18}/> Local craftsmanship, 1‑year warranty</li>
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <img src="https://images.unsplash.com/photo-1623652554515-91c833e3080e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXb3Jrc2hvcHxlbnwwfDB8fHwxNzYyMzMwNzcyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Workshop" className="w-full h-full object-cover"/>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-zinc-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-semibold tracking-tight">Contact & Quotes</h2>
              <p className="mt-3 text-gray-700">Tell us about your space and what you’re envisioning. We’ll reply with a tailored quote and timeline.</p>

              <div className="mt-6 space-y-3 text-sm text-gray-700">
                <p className="inline-flex items-center gap-2"><Mail size={18}/> hello@mirrorcraft.studio</p>
                <p className="inline-flex items-center gap-2"><Phone size={18}/> +1 (555) 123‑4567</p>
                <p className="inline-flex items-center gap-2"><Clock size={18}/> Mon–Sat: 9:00 AM – 7:00 PM</p>
              </div>

              <div className="mt-8 p-4 rounded-xl border border-gray-200 bg-white">
                <h3 className="font-semibold">Available Customizations</h3>
                <ul className="mt-2 text-sm text-gray-700 list-disc list-inside space-y-1">
                  <li>3‑way LED lights: white, warm white, natural white</li>
                  <li>Defogger</li>
                  <li>Bluetooth speaker with date & time clock</li>
                  <li>Metal frame: black, gold, rose gold (optional)</li>
                  <li>Any shape or size: rectangle, circle, oval and more</li>
                  <li>Packages: Basic, Premium, Luxury</li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-2">
              <form onSubmit={onSubmit} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input name="name" value={form.name} onChange={onChange} required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black"/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" name="email" value={form.email} onChange={onChange} required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black"/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                    <input name="phone" value={form.phone} onChange={onChange} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black"/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Preferred Frame</label>
                    <select name="frame" onChange={onChange} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black">
                      <option value="none">No frame</option>
                      <option value="black">Black</option>
                      <option value="gold">Gold</option>
                      <option value="rose-gold">Rose Gold</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Approx Width (in)</label>
                    <input name="width" inputMode="decimal" onChange={onChange} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black"/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Approx Height (in)</label>
                    <input name="height" inputMode="decimal" onChange={onChange} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black"/>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea name="message" rows="4" value={form.message} onChange={onChange} placeholder="Tell us about shape, lighting (3‑way), defogger, Bluetooth clock, timeline…" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black"></textarea>
                  </div>
                </div>
                <button className="mt-4 inline-flex items-center gap-2 rounded-md bg-black text-white px-4 py-2 text-sm hover:bg-zinc-800" type="submit">Send Request</button>
                {submitted && (
                  <div className="mt-4 inline-flex items-center gap-2 text-green-700 bg-green-50 border border-green-200 px-3 py-2 rounded-md">
                    <CheckCircle size={18}/> Thanks! We received your request and will get back shortly.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
