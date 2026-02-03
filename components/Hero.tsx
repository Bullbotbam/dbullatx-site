"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Code, Palette, Briefcase, Zap } from "lucide-react";

const services = [
  { name: "Product & Project Management", icon: <Briefcase size={16} /> },
  { name: "Strategic Consulting", icon: <Zap size={16} /> },
  { name: "Web Brand Design", icon: <Palette size={16} /> },
  { name: "Full-Stack Development", icon: <Code size={16} /> },
];

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax Speeds: Text moves up, Video stays relatively still
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={containerRef} className="relative h-[200vh] bg-black">
      {/* BACKGROUND LAYER: FIXED VIDEO */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div style={{ y: videoY }} className="absolute inset-0 h-full w-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover opacity-50 grayscale"
          >
            <source src="/assets/video/dbullatx_video.3.mp4" type="video/mp4" />
          </video>
          {/* Noise/Overlay for Texture */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </motion.div>

        {/* CONTENT LAYER 1: HEADLINE */}
        <motion.div 
          style={{ y: textY }}
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
        >
          <h2 className="text-gold text-[10px] uppercase tracking-atx mb-6 font-bold">
            Architecture // Execution
          </h2>
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-8 italic">
            dBulla<span className="not-italic font-thin text-white/80">atx</span>
          </h1>
        </motion.div>
      </div>

      {/* CONTENT LAYER 2: PARALLAX SERVICES */}
      <div className="relative z-20 -mt-[30vh] px-6 md:px-24 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white/5 backdrop-blur-md border border-white/10 p-8 hover:bg-gold hover:border-gold transition-all duration-500 cursor-pointer"
            >
              <div className="text-gold group-hover:text-black mb-12 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-white group-hover:text-black text-xs uppercase font-bold tracking-widest leading-tight">
                {service.name}
              </h3>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={20} className="text-black" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FOOTER ACCENT */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-linear-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}