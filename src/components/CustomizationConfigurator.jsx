import React, { useMemo, useState } from 'react';
import { Ruler, Shapes, DollarSign, Check, Minus, Plus } from 'lucide-react';

function numberInput(e, setter) {
  const v = e.target.value;
  if (v === '') setter('');
  else if (/^\d*\.?\d*$/.test(v)) setter(v);
}

function toNumber(v, fallback = 0) {
  const n = parseFloat(v);
  return Number.isFinite(n) ? n : fallback;
}

export default function CustomizationConfigurator() {
  const [shape, setShape] = useState('rectangle');
  const [widthIn, setWidthIn] = useState('36');
  const [heightIn, setHeightIn] = useState('24');
  const [frame, setFrame] = useState('none'); // none | black | gold | rose-gold
  const [defogger, setDefogger] = useState(false);
  const [bluetoothClock, setBluetoothClock] = useState(false);
  const [packageTier, setPackageTier] = useState('none'); // none | basic | premium | luxury

  const dims = useMemo(() => {
    const w = toNumber(widthIn, 0);
    const h = toNumber(heightIn, 0);
    const areaSqFt = (() => {
      if (shape === 'rectangle') {
        return (w * h) / 144;
      }
      if (shape === 'circle') {
        const d = (w + h) / 2; // average as diameter proxy
        return Math.PI * Math.pow(d / 2, 2) / 144;
      }
      if (shape === 'oval') {
        return Math.PI * (w / 2) * (h / 2) / 144;
      }
      return 0;
    })();

    const shapeMultiplier = shape === 'rectangle' ? 1 : shape === 'circle' ? 1.1 : 1.08;

    return { w, h, areaSqFt, shapeMultiplier };
  }, [shape, widthIn, heightIn]);

  const pricing = useMemo(() => {
    // Simple, transparent pricing model for estimation only
    const basePerSqFt = 22; // base mirror material and finishing
    const base = Math.max(60, dims.areaSqFt * basePerSqFt) * dims.shapeMultiplier;

    const frameCost = frame === 'none' ? 0 : 55; // color doesn’t change price

    const tierAddons = {
      none: 0,
      basic: 80,     // 3-way LED
      premium: 130,  // 3-way LED + defogger
      luxury: 180,   // 3-way LED + defogger + BT clock
    };

    const standalone = (defogger ? 60 : 0) + (bluetoothClock ? 90 : 0);

    const estimated = base + frameCost + tierAddons[packageTier] + standalone;

    const tierPrices = {
      basic: base + frameCost + tierAddons.basic,
      premium: base + frameCost + tierAddons.premium,
      luxury: base + frameCost + tierAddons.luxury,
    };

    return { base, frameCost, standalone, estimated, tierPrices };
  }, [dims, frame, defogger, bluetoothClock, packageTier]);

  const increment = (setter) => setter((v) => String(toNumber(v) + 1));
  const decrement = (setter) => setter((v) => String(Math.max(1, toNumber(v) - 1)));

  return (
    <section id="customize" className="bg-gradient-to-b from-zinc-50 to-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Customize & Estimate</h2>
            <p className="text-gray-600 mt-2">Configure size, shape, frame and smart features. Get instant package pricing for your dimensions.</p>

            <div className="mt-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Shape</label>
                <div className="mt-2 grid grid-cols-3 gap-2">
                  {[
                    { id: 'rectangle', label: 'Rectangle' },
                    { id: 'circle', label: 'Circle' },
                    { id: 'oval', label: 'Oval' },
                  ].map(opt => (
                    <button
                      key={opt.id}
                      onClick={() => setShape(opt.id)}
                      className={`px-3 py-2 rounded-md border text-sm ${shape === opt.id ? 'bg-black text-white border-black' : 'bg-white hover:bg-zinc-50 border-gray-300'}`}
                    >
                      <span className="inline-flex items-center gap-2"><Shapes size={16}/>{opt.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Size (inches)</label>
                <div className="mt-2 grid grid-cols-2 gap-3">
                  <div className="flex items-center rounded-md border border-gray-300 overflow-hidden">
                    <button className="px-2 py-2 text-gray-600 hover:bg-gray-100" onClick={() => decrement(setWidthIn)} aria-label="decrease width"><Minus size={16}/></button>
                    <input
                      value={widthIn}
                      onChange={(e) => numberInput(e, setWidthIn)}
                      className="w-full px-3 py-2 outline-none text-sm"
                      placeholder="Width"
                      inputMode="decimal"
                    />
                    <span className="px-2 text-xs text-gray-500">W</span>
                    <button className="px-2 py-2 text-gray-600 hover:bg-gray-100" onClick={() => increment(setWidthIn)} aria-label="increase width"><Plus size={16}/></button>
                  </div>
                  <div className="flex items-center rounded-md border border-gray-300 overflow-hidden">
                    <button className="px-2 py-2 text-gray-600 hover:bg-gray-100" onClick={() => decrement(setHeightIn)} aria-label="decrease height"><Minus size={16}/></button>
                    <input
                      value={heightIn}
                      onChange={(e) => numberInput(e, setHeightIn)}
                      className="w-full px-3 py-2 outline-none text-sm"
                      placeholder="Height"
                      inputMode="decimal"
                    />
                    <span className="px-2 text-xs text-gray-500">H</span>
                    <button className="px-2 py-2 text-gray-600 hover:bg-gray-100" onClick={() => increment(setHeightIn)} aria-label="increase height"><Plus size={16}/></button>
                  </div>
                </div>
                <p className="mt-1 text-xs text-gray-500 inline-flex items-center gap-1"><Ruler size={14}/> Area ~ {dims.areaSqFt > 0 ? dims.areaSqFt.toFixed(2) : '0.00'} sq ft</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Metal Frame</label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {[
                    { id: 'none', label: 'No Frame' },
                    { id: 'black', label: 'Black' },
                    { id: 'gold', label: 'Gold' },
                    { id: 'rose-gold', label: 'Rose Gold' },
                  ].map(opt => (
                    <button
                      key={opt.id}
                      onClick={() => setFrame(opt.id)}
                      className={`px-3 py-2 rounded-md border text-sm ${frame === opt.id ? 'bg-black text-white border-black' : 'bg-white hover:bg-zinc-50 border-gray-300'}`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
                <p className="mt-1 text-xs text-gray-500">Frame adds ${frame === 'none' ? 0 : 55}.</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Smart Add‑ons</label>
                <div className="mt-2 flex flex-col gap-2">
                  <label className="inline-flex items-center gap-2">
                    <input type="checkbox" checked={defogger} onChange={(e) => setDefogger(e.target.checked)} />
                    <span>Defogger <span className="text-gray-500">(+$60)</span></span>
                  </label>
                  <label className="inline-flex items-center gap-2">
                    <input type="checkbox" checked={bluetoothClock} onChange={(e) => setBluetoothClock(e.target.checked)} />
                    <span>Bluetooth speaker with date & time <span className="text-gray-500">(+$90)</span></span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold inline-flex items-center gap-2"><DollarSign size={20}/> Estimated Pricing</h3>
                <span className="text-xs uppercase tracking-wide text-gray-500">Instant</span>
              </div>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'basic', label: 'Basic', desc: '3‑way lights' },
                  { id: 'premium', label: 'Premium', desc: 'Lights + defogger' },
                  { id: 'luxury', label: 'Luxury', desc: 'Lights, defogger + clock' },
                ].map(t => (
                  <button
                    key={t.id}
                    onClick={() => setPackageTier(t.id)}
                    className={`text-left rounded-xl border p-4 hover:shadow-sm transition ${packageTier === t.id ? 'border-black bg-black text-white' : 'border-gray-200 bg-white'}`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">{t.label}</p>
                        <p className={`text-xs ${packageTier === t.id ? 'text-white/80' : 'text-gray-500'}`}>{t.desc}</p>
                      </div>
                      <p className="text-lg font-semibold">${pricing.tierPrices[t.id]}</p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-6 border-t pt-6">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between"><span>Base (size & shape)</span><span>${pricing.base.toFixed(0)}</span></div>
                  <div className="flex items-center justify-between"><span>Frame</span><span>${pricing.frameCost.toFixed(0)}</span></div>
                  <div className="flex items-center justify-between"><span>Selected add‑ons</span><span>${pricing.standalone.toFixed(0)}</span></div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-gray-600 text-sm">Your current estimate</p>
                  <p className="text-2xl font-bold">${pricing.estimated.toFixed(0)}</p>
                </div>
                <p className="text-xs text-gray-500 mt-2">Prices are indicative. Final quote may vary with precise specifications and installation needs.</p>
              </div>

              <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-black text-white px-4 py-3 text-sm font-medium hover:bg-zinc-800">
                <Check size={16}/> Request a detailed quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
