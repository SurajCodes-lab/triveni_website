"use client";

import { Zap, ShieldCheck, Headphones, Shield } from "@/components/ui/icons";

const defaultSignals = [
  { icon: Zap, title: 'Lowest Prices', desc: 'Starting \u20B911/km with no surge pricing' },
  { icon: ShieldCheck, title: 'Verified Drivers', desc: 'Background-checked professional chauffeurs' },
  { icon: Headphones, title: '24/7 Support', desc: 'Always available via call & WhatsApp' },
  { icon: Shield, title: 'No Hidden Fees', desc: 'Toll, tax, parking — all transparent' },
];

export default function TrustSignals({ signals, theme = "dark" }) {
  const items = signals || defaultSignals;
  const isDark = theme === "dark";

  return (
    <section className={`py-10 sm:py-14 ${isDark ? '' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {items.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className={`flex items-start gap-3 p-4 rounded-xl transition-colors duration-300 group ${
                  isDark
                    ? 'bg-white/[0.03] border border-white/[0.06] hover:border-[#FACF2D]/20'
                    : 'bg-gray-50 border border-gray-100 hover:border-[#FACF2D]/40 hover:shadow-md'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                    isDark
                      ? 'bg-[#FACF2D]/10 border border-[#FACF2D]/20 group-hover:bg-[#FACF2D]/15'
                      : 'bg-[#FACF2D]/10 group-hover:bg-[#FACF2D]/15'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isDark ? 'text-[#FACF2D]' : 'text-[#d4ad00]'}`} />
                </div>
                <div>
                  <h3 className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>{f.title}</h3>
                  <p className={`text-xs mt-0.5 leading-relaxed ${isDark ? 'text-white/35' : 'text-gray-500'}`}>{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
