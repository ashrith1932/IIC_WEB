import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cpu, Rocket, Globe, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: Cpu, title: "Cutting Edge", desc: "Experience the latest in AI, Robotics and Web3 technology." },
  { icon: Rocket, title: "Innovation", desc: "Push your boundaries and build solutions for real-world problems." },
  { icon: Globe, title: "Global Network", desc: "Connect with experts and enthusiasts from across the globe." },
  { icon: Users, title: "Collaboration", desc: "Work in teams to create impactful products and experiences." },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".feature-card");
    
    gsap.from(cards, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-zinc-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-black tracking-tight text-black mb-6">
              REDEFINING THE <br />
              <span className="text-zinc-400 italic font-light">DIGITAL FRONTIER</span>
            </h2>
            <p className="text-xl text-zinc-600 leading-relaxed mb-8">
              TECHNOVA is more than just a tech fest. It's a sanctuary for builders, 
              thinkers, and creators who dare to challenge the status quo. 
              Join thousands of participants for a 3-day journey into the heart of innovation.
            </p>
            <div className="flex gap-4">
              <div className="p-4 bg-white border-2 border-black shadow-[4px_4px_0_#000]">
                <span className="block text-3xl font-bold">50+</span>
                <span className="text-sm text-zinc-500 font-bold uppercase">Events</span>
              </div>
              <div className="p-4 bg-white border-2 border-black shadow-[4px_4px_0_#000]">
                <span className="block text-3xl font-bold">10k+</span>
                <span className="text-sm text-zinc-500 font-bold uppercase">Attendees</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f, i) => {
              const IconComponent = f.icon;
              return (
                <div 
                  key={i} 
                  className="feature-card p-8 bg-white border-2 border-black hover:shadow-[8px_8px_0_#ffd93d] transition-all duration-300 group"
                >
                  <IconComponent className="w-12 h-12 mb-4 text-black group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">{f.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}