"use client"; // Critical for interactivity and hover states
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-[100] flex justify-between items-center px-6 md:px-12 py-6 backdrop-blur-sm bg-black/10">
      {/* Branding */}
      <Link href="/" className="flex items-center gap-3 group">
        <Image 
          src="/assets/image/dbullatx_logo.png" 
          alt="dbullatx logo" 
          width={32} 
          height={32} 
          className="invert brightness-200 group-hover:scale-110 transition-transform duration-500"
        />
        <div className="flex flex-col">
          <span className="font-bold tracking-tighter text-lg leading-none uppercase">
            dBull<span className="text-gray-500 font-light">ATX</span>
          </span>
          <span className="text-[8px] tracking-[0.3em] text-gold uppercase font-semibold">
            Austin, Texas
          </span>
        </div>
      </Link>

      {/* Navigation / Ghost Button */}
      <div className="flex items-center gap-8">
        <Link 
          href="#book" 
          className="group flex items-center gap-2 text-[10px] uppercase tracking-luxury font-bold border border-white/20 px-6 py-2.5 hover:bg-white hover:text-black transition-all duration-500"
        >
          Project Management Consulting with Product Development Services<ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </nav>
  );
}



