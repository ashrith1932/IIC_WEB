export default function ExtrudedButton({
  text,
  onClick,
  className = "",
  bgColor = "#ffd93d",
  depth = 6,
}) {
  return (
    <button
      onClick={onClick}
      className={`group relative px-8 py-4 font-bold transition-all duration-200 active:translate-x-[2px] active:translate-y-[2px] ${className}`}
      style={{
        backgroundColor: bgColor,
        border: "3px solid #000",
        boxShadow: `${depth}px ${depth}px 0 #000`,
      }}
    >
      <span className="relative z-10 text-black uppercase tracking-widest">{text}</span>
    </button>
  );
}