import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
// import About from '@/components/About';
// import Services from '@/components/Services';
// import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative bg-black">
      <Navbar />
      
      {/* Hero handles the 200vh scroll height for parallax */}
      <Hero />

      {/* Future sections will go here. 
          Since Hero is 'relative', these will naturally 
          stack below the parallax content. 
      */}
      {/* <About /> */}
      {/* <Services /> */}
      {/* <Footer /> */}
    </main>
  );
}