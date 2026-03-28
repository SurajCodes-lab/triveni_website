"use client";

import Link from "next/link";
import { ArrowRight, Phone, Shield, CheckCircle, Headphones } from "@/components/ui/icons";

export default function CTASection({
  heading = "Ready to Start Your Journey?",
  subheading = "Professional drivers, modern vehicles, and 24/7 support. Book now and experience premium travel.",
  theme = "dark",
}) {
  return (
    <section className={`py-14 sm:py-20 relative overflow-hidden ${theme === "dark" ? 'bg-gray-950' : 'bg-gray-950'}`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#FACF2D]/[0.05] rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-2xl mx-auto px-4 text-center">
        <p className="text-xs font-semibold text-[#FACF2D] uppercase tracking-widest mb-2">Get Started</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">{heading}</h2>
        <p className="text-white/45 text-base mb-7 max-w-lg mx-auto">{subheading}</p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <a href="https://wa.me/917668570551?text=Hello!%20I%27m%20interested%20in%20booking.%20Can%20you%20provide%20a%20free%20quote%3F" target="_blank" rel="noopener noreferrer">
            <button className="w-full sm:w-auto px-9 py-3.5 bg-gradient-to-r from-[#FACF2D] to-[#e6bb15] text-gray-900 font-bold text-base rounded-full shadow-xl shadow-[#FACF2D]/10 hover:shadow-[#FACF2D]/25 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
              Get Free Quote <ArrowRight className="w-4 h-4" />
            </button>
          </a>
          <a href="tel:7668570551">
            <button className="w-full sm:w-auto px-9 py-3.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold text-base rounded-full hover:bg-white/15 transition-all duration-300 flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" /> Call: 7668570551
            </button>
          </a>
        </div>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          {[
            { icon: Shield, text: 'No Hidden Charges' },
            { icon: CheckCircle, text: 'Instant Confirmation' },
            { icon: Headphones, text: '24/7 Support' },
          ].map((b, i) => (
            <div key={i} className="flex items-center gap-1.5 text-xs text-white/35">
              <b.icon className="w-3.5 h-3.5 text-[#FACF2D]/50" />
              <span>{b.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
