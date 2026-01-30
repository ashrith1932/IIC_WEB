import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tracks = [
  { 
    title: "AI & Machine Learning", 
    tag: "Future Tech", 
    color: "#e2e8f0", 
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    title: "Web3 & Decentralized", 
    tag: "Blockchain", 
    color: "#ffd93d", 
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    title: "Robotics & Hardware", 
    tag: "Mechanics", 
    color: "#fff", 
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    title: "Cyber Security", 
    tag: "Infrastructure", 
    color: "#f4f4f5", 
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" 
  },
];

export default function Tracks() {
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".track-card");
    
    gsap.from(sections, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
      },
      scale: 0.9,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power2.out"
    });
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <h2 className="text-6xl font-black tracking-tighter uppercase italic">
          Explore <br /> Tracks
        </h2>
        <p className="max-w-md text-zinc-500 font-medium">
          Whether you're a beginner or a pro, we have a track designed specifically for your skills and interests.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {tracks.map((track, i) => (
          <div 
            key={i}
            className="track-card relative aspect-[3/4] overflow-hidden border-2 border-black group cursor-pointer"
            style={{ backgroundColor: track.color }}
          >
            <img 
              src={track.image} 
              alt={track.title}
              className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            
            <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
              <span className="inline-block px-3 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-widest mb-3">
                {track.tag}
              </span>
              <h3 className="text-2xl font-black text-white leading-none uppercase italic">
                {track.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}