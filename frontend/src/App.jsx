import Hero from "./components/pages/Home/hero";
import About from "./components/pages/about/about";
import Tracks from "./components/pages/tracks/tracks";
import Schedule from "./components/pages/schedule/schedule";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function App() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <main className="relative min-h-screen bg-white">
      {/* Custom Cursor */}
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-8 h-8 bg-yellow-400 mix-blend-difference rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-6 flex items-center justify-between mix-blend-difference">
        <div className="text-2xl font-black italic tracking-tighter text-white">T'25</div>
        <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-white">
          <a href="#" className="hover:text-yellow-400 transition-colors">About</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">Tracks</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">Schedule</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">Register</a>
        </div>
      </nav>

      <Hero />
      <About />
      <Tracks />
      <Schedule />

      {/* Footer */}
      <footer className="py-20 px-6 border-t-2 border-black bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <h2 className="text-7xl font-black italic tracking-tighter mb-6 uppercase">Technova</h2>
            <p className="max-w-xs text-zinc-500 font-medium leading-relaxed">
              Empowering the next generation of innovators at MNNIT. Join us for a weekend of pure creation.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-20">
            <div className="space-y-4">
              <h4 className="font-black uppercase text-xs tracking-widest text-zinc-400">Socials</h4>
              <ul className="space-y-2 font-bold uppercase text-sm">
                <li><a href="#" className="hover:underline">Twitter</a></li>
                <li><a href="#" className="hover:underline">Instagram</a></li>
                <li><a href="#" className="hover:underline">LinkedIn</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-black uppercase text-xs tracking-widest text-zinc-400">Legal</h4>
              <ul className="space-y-2 font-bold uppercase text-sm">
                <li><a href="#" className="hover:underline">Privacy</a></li>
                <li><a href="#" className="hover:underline">Conduct</a></li>
                <li><a href="#" className="hover:underline">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-zinc-100 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-zinc-400">
          <span>© 2025 Technova MNNIT</span>
          <span>Designed with ❤️ by the Core Team</span>
        </div>
      </footer>
    </main>
  );
}