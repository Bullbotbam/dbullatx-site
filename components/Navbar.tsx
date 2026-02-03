"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-[100] flex justify-between items-center px-6 md:px-12 py-5 overflow-hidden">
      {/* 1. SEPARATE BACKGROUND LAYER: This handles the glass look */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xl border-b border-white/5 z-[-1]" />

      {/* 2. LOGO: Now outside the blur's reach */}
      <Link href="/" className="flex items-center gap-4 group relative z-10">
        <div className="relative h-10 w-10 p-1.5 transition-transform duration-500 group-hover:scale-105">
          <Image 
            src="/assets/image/dbullatx_logo.png" 
            alt="dbullatx logo" 
            fill
            priority
            className="object-contain rounded-full brightness-200" 
          />
        </div>
        <div className="flex flex-col">
          <span className="font-black tracking-tighter text-xl leading-none uppercase italic text-white">
            dBull<span className="text-white/40 font-thin not-italic">ATX</span>
          </span>
          <span className="text-[7px] tracking-[0.5em] text-gold uppercase font-bold mt-1">
            Strategic Adaptation
          </span>
        </div>
      </Link>

      {/* 3. NAVIGATION BUTTONS */}
      <div className="flex items-center gap-6 relative z-10">
        <div className="hidden lg:flex items-center gap-8 mr-6">
          {["Management", "consulting", "development","Strategy"].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-[9px] uppercase tracking-[0.3em] font-bold text-white/50 hover:text-gold transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        <Link 
          href="#book" 
          className="group relative flex items-center gap-3 bg-white text-black text-[9px] uppercase tracking-luxury font-black px-8 py-3 overflow-hidden active:scale-95 transition-transform"
        >
          <span className="relative z-10">Start Project</span>
          <ArrowRight size={14} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
          <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-gold transition-transform duration-300" />
        </Link>
      </div>
    </nav>
  );
}