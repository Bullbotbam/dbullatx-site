import Navbar from '@/components/Navbar';
// import Hero from '@/components/Hero';
// import About from '@/components/About';
// import Services from '@/components/Services';
// import Footer from '@/components/Footer';

export default function Home() {
  return (
<main className="relative min-h-screen">
      <Navbar />
      
      {/* We will add the Hero component next */}
      <section className="h-screen flex items-center justify-center pt-20">
        <h2 className="text-white/20 text-xs tracking-atx uppercase font-bold animate-pulse">
          Site Architecture Initializing...
        </h2>
      </section>
      {/* <Hero />
      <About />
      <Services />
      <Footer /> */}
    </main>
  );
}