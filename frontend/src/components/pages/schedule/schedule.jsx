import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const schedule = [
  { time: "09:00 AM", event: "Opening Ceremony", day: "Day 01" },
  { time: "11:30 AM", event: "Keynote: Future of AI", day: "Day 01" },
  { time: "02:00 PM", event: "Hackathon Begins", day: "Day 01" },
  { time: "10:00 AM", event: "Workshop: Web3 Dev", day: "Day 02" },
  { time: "03:00 PM", event: "Robo-Wars Round 1", day: "Day 02" },
  { time: "11:00 AM", event: "Final Pitch Deck", day: "Day 03" },
  { time: "05:00 PM", event: "Award Night", day: "Day 03" },
];

export default function Schedule() {
  const listRef = useRef(null);

  useEffect(() => {
    const items = gsap.utils.toArray(".schedule-item");
    
    gsap.from(items, {
      scrollTrigger: {
        trigger: listRef.current,
        start: "top 80%",
      },
      x: -50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out"
    });
  }, []);

  return (
    <section className="py-24 bg-black text-white px-6">
      <div className="max-w-4xl mx-auto" ref={listRef}>
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black uppercase tracking-tighter italic mb-4">The Agenda</h2>
          <div className="w-20 h-2 bg-yellow-400 mx-auto" />
        </div>

        <div className="space-y-4">
          {schedule.map((item, i) => (
            <div 
              key={i}
              className="schedule-item group flex flex-col md:flex-row items-center justify-between p-6 border-b border-zinc-800 hover:bg-zinc-900 transition-colors cursor-default"
            >
              <div className="flex items-center gap-8 mb-4 md:mb-0">
                <span className="text-zinc-500 font-bold text-sm uppercase tracking-widest">{item.day}</span>
                <span className="text-3xl font-black italic">{item.time}</span>
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight group-hover:text-yellow-400 transition-colors">
                {item.event}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}