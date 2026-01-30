import { useEffect, useRef } from "react";
import gsap from "gsap";
import SolarSystem from "../../solarsystem";
import ExtrudedButton from "../../extrudedbutton";

export default function Hero() {
  const textRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;
    const chars = textRef.current.querySelectorAll(".char");
    
    const tl = gsap.timeline();
    
    tl.fromTo(chars, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.05, duration: 0.8, ease: "back.out(1.7)" }
    );

    gsap.to(cursorRef.current, {
      opacity: 0,
      repeat: -1,
      duration: 0.5,
      yoyo: true,
      ease: "power2.inOut"
    });
  }, []);

  const word = "TECHNOVA'25";

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-white px-6 pt-20">
      <div className="absolute inset-0 z-0 opacity-40">
        <SolarSystem />
      </div>

      <div className="relative z-10 text-center max-w-5xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">
          The Premier Tech Festival of MNNIT
        </p>
        
        <h1 
          ref={textRef}
          className="text-[12vw] md:text-[8vw] font-black leading-none tracking-tighter text-black flex flex-wrap justify-center"
        >
          {word.split("").map((char, i) => (
            <span key={i} className="char">
              {char === "'" ? "'" : char}
            </span>
          ))}
          <span ref={cursorRef} className="ml-1 text-yellow-400">|</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg md:text-xl text-zinc-600 font-medium">
          Dive into the future of technology with immersive workshops, high-stakes hackathons, and visionary speakers.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          <ExtrudedButton text="Register Now" bgColor="#ffd93d" />
          <button className="px-8 py-4 font-bold uppercase tracking-widest text-black border-b-2 border-black hover:bg-zinc-100 transition-colors">
            View Schedule
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-1 h-12 bg-gradient-to-b from-black to-transparent rounded-full" />
      </div>
    </section>
  );
}