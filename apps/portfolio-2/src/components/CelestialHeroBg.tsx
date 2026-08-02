'use client';

interface CelestialHeroBgProps {
  variant?: 0 | 1 | 2; // 0: Amber Solar, 1: Cyan Orbit, 2: Emerald Pulsar
}

export default function CelestialHeroBg({ variant = 0 }: CelestialHeroBgProps) {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {/* VARIANT 0: AMBER SOLAR ECLIPSE */}
      <div
        className={`absolute top-[38%] -right-[320px] sm:-right-[440px] lg:-right-[540px] -translate-y-1/2 w-[650px] sm:w-[900px] lg:w-[1100px] h-[650px] sm:h-[900px] lg:h-[1100px] rounded-full transition-opacity duration-1000 ease-in-out ${
          variant === 0 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Glowing Left Crescent Edge & Solar Eclipse Gradient */}
        <div className="absolute inset-0 rounded-full border-l-2 border-[#FFA94D]/45 shadow-[-40px_0_130px_rgba(255,169,77,0.35)] bg-[radial-gradient(circle_at_15%_50%,rgba(255,169,77,0.14)_0%,rgba(19,20,23,0.96)_70%)]"></div>
        {/* Subtle Outer Atmosphere Flare */}
        <div className="absolute -inset-6 rounded-full border-l border-emerald-400/25 blur-[12px]"></div>
        {/* Orbital Ring Line */}
        <div className="absolute -inset-16 rounded-full border-l border-[#FFA94D]/15 opacity-60"></div>
      </div>

      {/* VARIANT 1: CYAN CYBER ORBIT */}
      <div
        className={`absolute top-[38%] -right-[320px] sm:-right-[440px] lg:-right-[540px] -translate-y-1/2 w-[650px] sm:w-[900px] lg:w-[1100px] h-[650px] sm:h-[900px] lg:h-[1100px] rounded-full transition-opacity duration-1000 ease-in-out ${
          variant === 1 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Glowing Left Crescent Edge & Cyber Blue Gradient */}
        <div className="absolute inset-0 rounded-full border-l-2 border-cyan-400/50 shadow-[-40px_0_140px_rgba(56,189,248,0.38)] bg-[radial-gradient(circle_at_15%_50%,rgba(56,189,248,0.15)_0%,rgba(19,20,23,0.96)_70%)]"></div>
        {/* Outer Cyan Atmosphere */}
        <div className="absolute -inset-6 rounded-full border-l border-sky-400/30 blur-[12px]"></div>
        {/* Concentric Cyber Orbit Rings */}
        <div className="absolute -inset-14 rounded-full border-l border-cyan-400/20"></div>
        <div className="absolute -inset-28 rounded-full border-l border-cyan-400/10"></div>
      </div>

      {/* VARIANT 2: EMERALD PULSAR */}
      <div
        className={`absolute top-[38%] -right-[320px] sm:-right-[440px] lg:-right-[540px] -translate-y-1/2 w-[650px] sm:w-[900px] lg:w-[1100px] h-[650px] sm:h-[900px] lg:h-[1100px] rounded-full transition-opacity duration-1000 ease-in-out ${
          variant === 2 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Glowing Left Crescent Edge & Emerald Gradient */}
        <div className="absolute inset-0 rounded-full border-l-2 border-emerald-400/50 shadow-[-40px_0_140px_rgba(52,211,153,0.38)] bg-[radial-gradient(circle_at_15%_50%,rgba(52,211,153,0.15)_0%,rgba(19,20,23,0.96)_70%)]"></div>
        {/* Outer Emerald Atmosphere */}
        <div className="absolute -inset-6 rounded-full border-l border-emerald-300/30 blur-[12px]"></div>
        {/* Pulsar Orbit Line */}
        <div className="absolute -inset-16 rounded-full border-l border-emerald-400/20"></div>
      </div>
    </div>
  );
}
