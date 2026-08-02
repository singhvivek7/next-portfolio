'use client';

import { useEffect, useRef, useState } from 'react';
import { DATA } from '@/data/resume';
import CelestialHeroBg from '@/components/CelestialHeroBg';

interface Hop {
  name: string;
  ms: number;
}

const HOPS: Hop[] = [
  { name: 'client → api-gateway-edge', ms: 8 },
  { name: 'api-gateway-edge → auth-identity-service', ms: 14 },
  { name: 'auth-identity-service → core-payment-engine', ms: 24 },
  { name: 'core-payment-engine → postgres-primary-db', ms: 18 },
];

const SERVICES_DATA = [
  { name: 'api-gateway-edge', base: 34 },
  { name: 'auth-identity-service', base: 48 },
  { name: 'core-payment-engine', base: 82 },
  { name: 'user-analytics-service', base: 56 },
  { name: 'postgres-primary-db', base: 28 },
];

const LOG_POOL = [
  ['info', 'core-payment-engine', 'stripe webhook verified: charge.succeeded'],
  ['info', 'user-analytics-service', 'kafka topic ingested 14,200 events/sec'],
  ['info', 'auth-identity-service', 'OAuth2 token issued uid=usr_88213'],
  ['info', 'api-gateway-edge', 'WAF rate limit checked · 200 OK'],
  ['info', 'postgres-primary-db', 'WAL checkpoint synced · 0.4ms latency'],
  ['info', 'core-payment-engine', 'ledger reconciliation completed · 1,204 txs'],
  ['info', 'auth-identity-service', 'session refreshed uid=usr_41007'],
  ['warn', 'core-payment-engine', 'p95 latency spike 280ms (threshold 250ms)'],
  ['info', 'user-analytics-service', 'clickhouse partition compacted'],
  ['info', 'api-gateway-edge', 'TLS handshake cached · TLS_AES_256'],
];

function randHex(len: number) {
  let s = '';
  const chars = '0123456789abcdef';
  for (let i = 0; i < len; i++) s += chars[Math.floor(Math.random() * 16)];
  return s;
}

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeWidget, setActiveWidget] = useState<0 | 1 | 2>(0);
  const [planetVariant, setPlanetVariant] = useState<0 | 1 | 2>(0);

  // Auto-switch right side mac browser tabs continuously every 3.8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveWidget((prev) => ((prev + 1) % 3) as 0 | 1 | 2);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  // Auto-switch celestial planet background styles every 7 seconds
  useEffect(() => {
    const planetTimer = setInterval(() => {
      setPlanetVariant((prev) => ((prev + 1) % 3) as 0 | 1 | 2);
    }, 7000);
    return () => clearInterval(planetTimer);
  }, []);

  // Trace panel state
  const [reqId, setReqId] = useState('req_8f2c1a94');
  const [totalTop, setTotalTop] = useState('- ms');
  const [totalBottom, setTotalBottom] = useState('200 OK');
  const [activeHops, setActiveHops] = useState<{ active: boolean; width: string; ms: string }[]>(
    HOPS.map(() => ({ active: false, width: '0%', ms: '' }))
  );
  const traceCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const [traceHistory, setTraceHistory] = useState<number[]>([
    68, 72, 65, 80, 75, 71, 69, 78, 74, 70, 76, 73, 67, 75, 72, 77, 71, 75
  ]);

  const drawTraceGraph = () => {
    const canvas = traceCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    const data = traceHistory;
    const max = Math.max(...data, 90);
    const min = Math.min(...data, 50);
    const range = Math.max(max - min, 1);

    // Grid Line
    ctx.strokeStyle = '#232428';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, h / 2);
    ctx.lineTo(w, h / 2);
    ctx.stroke();

    // Area Gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, h);
    gradient.addColorStop(0, 'rgba(255, 169, 77, 0.35)');
    gradient.addColorStop(1, 'rgba(255, 169, 77, 0.0)');

    ctx.beginPath();
    ctx.moveTo(0, h);
    data.forEach((v, i) => {
      const x = (i / (data.length - 1)) * w;
      const y = h - ((v - min) / range) * (h - 8) - 4;
      ctx.lineTo(x, y);
    });
    ctx.lineTo(w, h);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    // Stroke Line
    ctx.beginPath();
    data.forEach((v, i) => {
      const x = (i / (data.length - 1)) * w;
      const y = h - ((v - min) / range) * (h - 8) - 4;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.strokeStyle = '#FFA94D';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Endpoint Glowing Dot
    const lastX = w;
    const lastY = h - ((data[data.length - 1] - min) / range) * (h - 8) - 4;
    ctx.beginPath();
    ctx.arc(lastX - 2, lastY, 3, 0, Math.PI * 2);
    ctx.fillStyle = '#FFA94D';
    ctx.fill();
  };

  useEffect(() => {
    drawTraceGraph();
  }, [traceHistory, activeWidget]);

  // Ops panel state
  const [statusText, setStatusText] = useState('ALL SYSTEMS OPERATIONAL');
  const [isDegraded, setIsDegraded] = useState(false);
  const [logs, setLogs] = useState<{ ts: string; lvl: string; svc: string; msg: string }[]>([]);
  const [services, setServices] = useState(
    SERVICES_DATA.map((s) => ({
      ...s,
      latency: s.base,
      history: Array.from({ length: 20 }, () => s.base + (Math.random() * 10 - 5)),
      warn: false,
    }))
  );

  const canvasRefs = useRef<(HTMLCanvasElement | null)[]>([]);

  // Draw sparkline canvas
  const drawSpark = (idx: number, svcData: typeof services[0]) => {
    const canvas = canvasRefs.current[idx];
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    const hist = svcData.history;
    const max = Math.max(...hist);
    const min = Math.min(...hist);
    const range = Math.max(max - min, 1);
    ctx.beginPath();
    hist.forEach((v, i) => {
      const x = (i / (hist.length - 1)) * w;
      const y = h - ((v - min) / range) * (h - 4) - 2;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.strokeStyle = svcData.warn ? '#FFA94D' : '#4ADE80';
    ctx.lineWidth = 1.3;
    ctx.stroke();
  };

  // Trace animation
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const runTrace = () => {
      setReqId(`req_${randHex(8)}`);
      setTotalTop('- ms');
      setTotalBottom('...');
      setActiveHops(HOPS.map(() => ({ active: false, width: '0%', ms: '' })));

      let cumulative = 0;
      HOPS.forEach((h, i) => {
        cumulative += h.ms;
        setTimeout(() => {
          setActiveHops((prev) => {
            const next = [...prev];
            const pct = Math.min(100, (h.ms / 32) * 100);
            next[i] = { active: true, width: `${pct}%`, ms: `${h.ms}ms` };
            return next;
          });
          if (i === HOPS.length - 1) {
            setTotalTop(`${cumulative}ms`);
            setTotalBottom('200 OK');
            setTraceHistory((prev) => [...prev.slice(1), cumulative]);
          }
        }, i * 380);
      });
    };

    runTrace();
    if (!reduceMotion) {
      const interval = setInterval(runTrace, 5200);
      return () => clearInterval(interval);
    }
  }, []);

  // Ops log & live update animation
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const initialLogs: { ts: string; lvl: string; svc: string; msg: string }[] = [];
    for (let i = 0; i < 6; i++) {
      const [lvl, svc, msg] = LOG_POOL[Math.floor(Math.random() * LOG_POOL.length)];
      const ts = new Date().toTimeString().slice(0, 8);
      initialLogs.push({ ts, lvl, svc, msg });
    }
    setLogs(initialLogs);

    if (reduceMotion) return;

    const pushLog = () => {
      const [lvl, svc, msg] = LOG_POOL[Math.floor(Math.random() * LOG_POOL.length)];
      const ts = new Date().toTimeString().slice(0, 8);
      setLogs((prev) => [...prev.slice(-8), { ts, lvl, svc, msg }]);
    };

    const logInterval = setInterval(pushLog, 2200);

    const latencyInterval = setInterval(() => {
      setServices((prev) =>
        prev.map((s) => {
          const jitter = s.warn ? Math.random() * 60 : Math.random() * 10 - 5;
          const newLat = Math.max(20, s.base + jitter + (s.warn ? 120 : 0));
          const newHist = [...s.history.slice(1), newLat];
          return { ...s, latency: newLat, history: newHist };
        })
      );
    }, 1400);

    const triggerIncident = () => {
      const idx = Math.floor(Math.random() * SERVICES_DATA.length);
      setServices((prev) =>
        prev.map((s, i) => (i === idx ? { ...s, warn: true } : s))
      );
      setIsDegraded(true);
      const warnSvc = SERVICES_DATA[idx].name;
      setStatusText(`DEGRADED · ${warnSvc} elevated latency`);

      const ts = new Date().toTimeString().slice(0, 8);
      setLogs((prev) => [
        ...prev.slice(-8),
        { ts, lvl: 'warn', svc: warnSvc, msg: 'latency spike detected, auto-scaling...' },
      ]);

      setTimeout(() => {
        setServices((prev) =>
          prev.map((s, i) => (i === idx ? { ...s, warn: false } : s))
        );
        setIsDegraded(false);
        setStatusText('ALL SYSTEMS OPERATIONAL');
        const ts2 = new Date().toTimeString().slice(0, 8);
        setLogs((prev) => [
          ...prev.slice(-8),
          { ts: ts2, lvl: 'info', svc: warnSvc, msg: 'recovered · p95 back to baseline' },
        ]);
      }, 2600);
    };

    const incidentInterval = setInterval(triggerIncident, 9000);

    return () => {
      clearInterval(logInterval);
      clearInterval(latencyInterval);
      clearInterval(incidentInterval);
    };
  }, []);

  useEffect(() => {
    services.forEach((s, i) => drawSpark(i, s));
  }, [services]);

  return (
    <div className="min-h-screen bg-[#0B0C0E] text-[#F2F0EA] font-body overflow-x-hidden selection:bg-[#FFA94D] selection:text-[#0B0C0E]">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B0C0E]/80 backdrop-blur-md border-b border-[#1B1C20]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="font-mono text-sm text-[#FFA94D] tracking-wider font-semibold">{DATA.initials}.</div>
          <button
            className="md:hidden flex items-center gap-1.5 px-3 py-1.5 rounded border border-[#232428] bg-[#131417] text-xs font-mono text-[#F2F0EA]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? '✕ Close' : '☰ Menu'}
          </button>
          <ul className={`md:flex gap-8 font-mono text-xs text-[#9A9691] ${mobileMenuOpen ? 'flex flex-col absolute top-full left-0 right-0 bg-[#0B0C0E]/95 backdrop-blur-xl border-b border-[#232428] p-6 gap-5 shadow-2xl' : 'hidden'}`}>
            <li><a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#F2F0EA] transition-colors">about</a></li>
            <li><a href="#experience" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#F2F0EA] transition-colors">experience</a></li>
            <li><a href="#projects" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#F2F0EA] transition-colors">projects</a></li>
            <li><a href="#skills" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#F2F0EA] transition-colors">skills</a></li>
            <li><a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#F2F0EA] transition-colors">contact</a></li>
          </ul>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-12 w-full overflow-hidden">
        <CelestialHeroBg variant={planetVariant} />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full min-w-0 relative z-10">
          <div className="lg:col-span-7 min-w-0 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/25 bg-emerald-500/10 font-mono text-xs text-emerald-400 tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)] animate-pulse"></span>
              <span>{DATA.availability}</span>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-[#F2F0EA] break-words">
              Building distributed systems that <span className="text-[#FFA94D]">scale & stay up</span>.
            </h1>

            <p className="text-sm sm:text-base text-[#9A9691] max-w-lg leading-relaxed font-body">
              <strong className="text-[#F2F0EA] font-semibold">{DATA.role}</strong> - {DATA.bio.split(' - ')[1] || DATA.bio}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full">
              <a href="#contact" className="bg-[#FFA94D] hover:bg-[#ffb968] text-[#1A1200] font-mono text-xs font-semibold px-6 py-3.5 rounded transition-all transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 w-full sm:w-auto">
                Get in touch →
              </a>
              <a href="#experience" className="border border-[#FFA94D] text-[#FFA94D] bg-[#FFA94D]/5 hover:bg-[#FFA94D] hover:text-[#1A1200] font-mono text-xs font-semibold px-6 py-3.5 rounded transition-all transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 w-full sm:w-auto">
                View experience
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 min-w-0 w-full">
            {/* UNIFIED MACOS BROWSER WINDOW CONTAINER */}
            <div className="w-full bg-[#16171B] border border-[#232428] rounded-xl overflow-hidden shadow-2xl font-mono text-xs flex flex-col min-h-[380px] sm:min-h-[400px]">
              {/* MAC WINDOW TITLEBAR / BROWSER TABBAR */}
              <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 bg-[#131417] border-b border-[#232428] select-none gap-2">
                {/* Traffic Lights */}
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57] shadow-[0_0_6px_rgba(255,95,87,0.4)]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E] shadow-[0_0_6px_rgba(254,188,46,0.4)]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28C840] shadow-[0_0_6px_rgba(40,200,64,0.4)]"></span>
                </div>

                {/* 3 BROWSER TABS IN HEADER WITH HIGH-TECH VECTOR SVGs */}
                <div className="flex items-center gap-1 bg-[#0E0F12] p-1 rounded-lg border border-[#232428]">
                  <button
                    onClick={() => setActiveWidget(0)}
                    className={`px-2.5 sm:px-3 py-1 rounded transition-all duration-300 flex items-center gap-1.5 text-[10px] sm:text-[11px] ${
                      activeWidget === 0
                        ? 'bg-[#FFA94D] text-[#1A1200] font-semibold shadow-sm'
                        : 'text-[#9A9691] hover:text-[#F2F0EA]'
                    }`}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Trace</span>
                  </button>
                  <button
                    onClick={() => setActiveWidget(1)}
                    className={`px-2.5 sm:px-3 py-1 rounded transition-all duration-300 flex items-center gap-1.5 text-[10px] sm:text-[11px] ${
                      activeWidget === 1
                        ? 'bg-[#FFA94D] text-[#1A1200] font-semibold shadow-sm'
                        : 'text-[#9A9691] hover:text-[#F2F0EA]'
                    }`}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                    <span>Infra</span>
                  </button>
                  <button
                    onClick={() => setActiveWidget(2)}
                    className={`px-2.5 sm:px-3 py-1 rounded transition-all duration-300 flex items-center gap-1.5 text-[10px] sm:text-[11px] ${
                      activeWidget === 2
                        ? 'bg-[#FFA94D] text-[#1A1200] font-semibold shadow-sm'
                        : 'text-[#9A9691] hover:text-[#F2F0EA]'
                    }`}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                    <span>Query</span>
                  </button>
                </div>

                {/* Status Indicator */}
                <div className="hidden sm:flex items-center gap-1.5 text-[10px] text-emerald-400 font-semibold flex-shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>200 OK</span>
                </div>
              </div>

              {/* BROWSER BODY CONTAINER */}
              <div className="relative flex-1 w-full bg-[#16171B] overflow-hidden min-h-[330px] sm:min-h-[350px]">
                {/* TAB 1: REQUEST TRACE */}
                <div
                  className={`absolute inset-0 w-full p-4 flex flex-col justify-between transition-all duration-500 transform ${
                    activeWidget === 0
                      ? 'opacity-100 scale-100 translate-y-0 z-10 pointer-events-auto'
                      : 'opacity-0 scale-95 -translate-y-2 z-0 pointer-events-none'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-[#232428] text-[11px] text-[#66625D]">
                      <span>trace <span className="text-[#FFA94D]">{reqId}</span></span>
                      <span className="font-semibold text-emerald-400">{totalTop}</span>
                    </div>

                    {/* LATENCY TREND CANVAS CHART */}
                    <div className="p-3 mb-3 border border-[#232428] rounded-md bg-[#0E0F12]">
                      <div className="flex items-center justify-between text-[10px] text-[#66625D] mb-1.5 font-mono">
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FFA94D]"></span>
                          LATENCY TREND (P95)
                        </span>
                        <span className="text-[#FFA94D] font-semibold">{traceHistory[traceHistory.length - 1]}ms</span>
                      </div>
                      <canvas
                        ref={traceCanvasRef}
                        width="320"
                        height="45"
                        className="w-full h-11 block"
                      ></canvas>
                    </div>

                    {/* HOPS WATERFALL */}
                    <div className="space-y-2 py-1">
                      {HOPS.map((h, i) => (
                        <div key={i} className={`flex items-center gap-2 text-[11px] transition-opacity duration-300 ${activeHops[i]?.active ? 'opacity-100' : 'opacity-30'}`}>
                          <span className={`w-1.5 h-1.5 rounded-full transition-all ${activeHops[i]?.active ? 'bg-[#FFA94D] shadow-[0_0_6px_#FFA94D]' : 'bg-[#66625D]'}`}></span>
                          <span className="text-[#F2F0EA] truncate min-w-0 flex-1">{h.name}</span>
                          <div className="w-12 sm:w-16 h-1 bg-[#232428] rounded overflow-hidden flex-shrink-0">
                            <div className="h-full bg-[#FFA94D] transition-all duration-500" style={{ width: activeHops[i]?.width || '0%' }}></div>
                          </div>
                          <span className="text-[#9A9691] w-10 text-right flex-shrink-0">{activeHops[i]?.ms || ''}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* EDGE METADATA FOOTER */}
                  <div className="pt-2 border-t border-[#232428] flex items-center justify-between text-[10px] font-mono text-[#66625D]">
                    <span>x-cache: <span className="text-emerald-400 font-semibold">HIT (ap-south-1)</span></span>
                    <span className="text-[#9A9691]">HTTP/3 · TLS_AES_256</span>
                  </div>
                </div>

                {/* TAB 2: LIVE INFRA OPS */}
                <div
                  className={`absolute inset-0 w-full p-4 flex flex-col transition-all duration-500 transform ${
                    activeWidget === 1
                      ? 'opacity-100 scale-100 translate-y-0 z-10 pointer-events-auto'
                      : 'opacity-0 scale-95 translate-y-2 z-0 pointer-events-none'
                  }`}
                >
                  <div className="space-y-2.5 flex-1 flex flex-col">
                    <div className={`flex items-center justify-between pb-2 border-b border-[#232428] text-[11px] font-semibold ${isDegraded ? 'text-[#FFA94D]' : 'text-emerald-400'}`}>
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full animate-pulse ${isDegraded ? 'bg-[#FFA94D] shadow-[0_0_6px_#FFA94D]' : 'bg-emerald-400 shadow-[0_0_6px_#4ADE80]'}`}></span>
                        <span>{statusText}</span>
                      </div>
                      <span className="text-[10px] text-[#66625D]">prod · ap-south-1</span>
                    </div>

                    <div className="space-y-1.5 border-b border-[#232428] pb-2.5">
                      {services.map((s, i) => (
                        <div key={i} className="grid grid-cols-[10px_1fr_42px_44px] items-center gap-2 text-[11px] py-0.5 border-b border-[#1B1C20] last:border-b-0">
                          <span className={`w-2 h-2 rounded-full ${s.warn ? 'bg-[#FFA94D] shadow-[0_0_6px_#FFA94D]' : 'bg-emerald-400'}`}></span>
                          <span className="text-[#F2F0EA] truncate min-w-0">{s.name}</span>
                          <span className="text-[#9A9691] text-right">{Math.round(s.latency)}ms</span>
                          <div className="flex justify-end">
                            <canvas
                              ref={(el) => {
                                canvasRefs.current[i] = el;
                              }}
                              width="44"
                              height="16"
                            ></canvas>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* STREAMING LOGS TERMINAL */}
                    <div className="bg-[#0E0F12] p-2.5 rounded border border-[#232428] flex-1 overflow-hidden relative min-w-0 min-h-[100px]">
                      <div className="text-[9px] text-[#66625D] font-semibold mb-1 flex items-center justify-between border-b border-[#1B1C20] pb-1">
                        <span>LIVE DEPLOYMENT LOGS</span>
                        <span className="text-emerald-400 font-normal">STREAMING ●</span>
                      </div>
                      <div className="space-y-1 pt-1">
                        {logs.map((l, i) => {
                          const lvlClass = l.lvl === 'warn' ? 'text-[#FFA94D]' : l.lvl === 'err' ? 'text-red-400' : 'text-emerald-400';
                          return (
                            <div key={i} className="text-[9px] text-[#66625D] truncate animate-log-in min-w-0">
                              <span className="opacity-70">{l.ts}</span>{' '}
                              <span className={`font-semibold ${lvlClass}`}>{l.lvl.toUpperCase().padEnd(4, ' ')}</span>{' '}
                              <span className="text-[#9A9691]">{l.svc.padEnd(18, ' ')}</span> {l.msg}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* TAB 3: QUERY LATENCY */}
                <div
                  className={`absolute inset-0 w-full p-4 flex flex-col justify-between transition-all duration-500 transform ${
                    activeWidget === 2
                      ? 'opacity-100 scale-100 translate-y-0 z-10 pointer-events-auto'
                      : 'opacity-0 scale-95 translate-y-2 z-0 pointer-events-none'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-[#232428]">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(56,189,248,0.9)] animate-pulse"></span>
                        <span className="text-[11px] text-[#66625D]">database · <span className="text-cyan-400 font-semibold">postgres-v15</span></span>
                      </div>
                      <span className="font-semibold text-emerald-400 text-[11px]">P99: 4.2ms</span>
                    </div>

                    {/* DB METRICS SUMMARY */}
                    <div className="grid grid-cols-3 divide-x divide-[#232428] border border-[#232428] rounded-md bg-[#0E0F12] py-2 text-center text-[10px] mb-3">
                      <div>
                        <span className="text-[#66625D] block text-[9px]">CONN POOL</span>
                        <span className="text-[#F2F0EA] font-semibold">42 / 100</span>
                      </div>
                      <div>
                        <span className="text-[#66625D] block text-[9px]">BUFFER HIT</span>
                        <span className="text-emerald-400 font-semibold">99.8%</span>
                      </div>
                      <div>
                        <span className="text-[#66625D] block text-[9px]">REPL LAG</span>
                        <span className="text-[#FFA94D] font-semibold">&lt; 1ms</span>
                      </div>
                    </div>

                    {/* REALTIME SQL QUERY LATENCY */}
                    <div className="space-y-2 text-[11px]">
                      <div className="flex items-center justify-between bg-[#111215] p-2 rounded border border-[#232428]">
                        <div className="min-w-0 flex-1 pr-2">
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <span className="text-cyan-400 font-semibold text-[10px] bg-cyan-500/10 px-1 py-0.2 rounded border border-cyan-500/20">SELECT</span>
                            <span className="text-[#F2F0EA] truncate text-[11px]">users WHERE id = $1</span>
                          </div>
                          <span className="text-[9px] text-[#66625D] block">Index Scan pk_users</span>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <span className="text-emerald-400 font-semibold block text-[11px]">0.4ms</span>
                          <span className="text-[9px] text-emerald-400/80 font-semibold">Cache HIT</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between bg-[#111215] p-2 rounded border border-[#232428]">
                        <div className="min-w-0 flex-1 pr-2">
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <span className="text-[#FFA94D] font-semibold text-[10px] bg-[#FFA94D]/10 px-1 py-0.2 rounded border border-[#FFA94D]/20">UPDATE</span>
                            <span className="text-[#F2F0EA] truncate text-[11px]">account_balance SET amt = $1</span>
                          </div>
                          <span className="text-[9px] text-[#66625D] block">Row Lock WAL Write</span>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <span className="text-[#FFA94D] font-semibold block text-[11px]">2.1ms</span>
                          <span className="text-[9px] text-[#FFA94D]/80">Tx Commit</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between bg-[#111215] p-2 rounded border border-[#232428]">
                        <div className="min-w-0 flex-1 pr-2">
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <span className="text-purple-400 font-semibold text-[10px] bg-purple-500/10 px-1 py-0.2 rounded border border-purple-500/20">INSERT</span>
                            <span className="text-[#F2F0EA] truncate text-[11px]">audit_logs (event, payload)</span>
                          </div>
                          <span className="text-[9px] text-[#66625D] block">Async Write Buffer</span>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <span className="text-emerald-400 font-semibold block text-[11px]">0.8ms</span>
                          <span className="text-[9px] text-emerald-400/80">Async OK</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* FOOTER METRICS */}
                  <div className="pt-2 border-t border-[#232428] flex items-center justify-between text-[10px] font-mono text-[#66625D]">
                    <span>pg_stat_statements: <span className="text-[#9A9691]">active</span></span>
                    <span className="text-emerald-400 font-semibold">3,420 QPS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-16 sm:py-24 border-t border-[#1B1C20]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 font-mono text-xs text-[#FFA94D] mb-8">
            <span>GET /about</span>
            <span className="text-emerald-400 border border-[#232428] bg-[#131417] px-2 py-0.5 rounded text-[10px]">200 OK</span>
          </div>
          <h2 className="font-display font-semibold text-2xl sm:text-4xl text-[#F2F0EA] mb-6">A bit about how I work</h2>
          <p className="text-base sm:text-xl text-[#9A9691] max-w-3xl leading-relaxed">
            {DATA.about}
          </p>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-16 sm:py-24 border-t border-[#1B1C20]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 font-mono text-xs text-[#FFA94D] mb-8">
            <span>GET /experience</span>
            <span className="text-emerald-400 border border-[#232428] bg-[#131417] px-2 py-0.5 rounded text-[10px]">200 OK</span>
          </div>
          <h2 className="font-display font-semibold text-2xl sm:text-4xl text-[#F2F0EA] mb-12">Deployment history</h2>

          <div className="space-y-12">
            {DATA.work.map((companyGroup, idx) => (
              <div key={idx} className="border-b border-[#1B1C20] pb-10 last:border-b-0">
                {/* COMPANY HEADER */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#16171B] border border-[#232428] p-2 flex items-center justify-center font-bold text-xs text-[#FFA94D] font-mono shadow-sm shrink-0">
                      {companyGroup.company.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-xl text-[#F2F0EA]">
                        {companyGroup.company}
                      </h3>
                      <span className="font-mono text-xs text-[#66625D]">
                        {companyGroup.location}
                      </span>
                    </div>
                  </div>
                  <div className="font-mono text-xs text-[#FFA94D] bg-[#16171B] border border-[#232428] px-3 py-1.5 rounded-lg w-fit">
                    {companyGroup.totalPeriod}
                  </div>
                </div>

                {/* ROLES / PROMOTION TIMELINE */}
                <div className="pl-6 border-l-2 border-[#232428] space-y-8 relative ml-4 sm:ml-5">
                  {companyGroup.roles.map((role, rIdx) => (
                    <div key={rIdx} className="relative">
                      {/* Timeline Dot */}
                      <span className={`absolute -left-[29px] top-1.5 w-3 h-3 rounded-full border-2 border-[#131417] ${
                        role.isLive
                          ? 'bg-emerald-400 shadow-[0_0_8px_#4ADE80]'
                          : role.isPromotion
                          ? 'bg-[#FFA94D] shadow-[0_0_8px_#FFA94D]'
                          : 'bg-[#66625D]'
                      }`}></span>

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="font-display font-semibold text-base sm:text-lg text-[#F2F0EA]">
                            {role.title}
                          </h4>
                          {role.isLive && (
                            <span className="font-mono text-[10px] text-emerald-400 border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 rounded">
                              ● LIVE
                            </span>
                          )}
                          {role.version && (
                            <span className="font-mono text-[10px] text-[#66625D] border border-[#232428] px-2 py-0.5 rounded">
                              {role.version}
                            </span>
                          )}
                        </div>
                        <span className="font-mono text-xs text-[#66625D]">
                          {role.start} - {role.end}
                        </span>
                      </div>

                      <ul className="space-y-2 text-sm sm:text-base text-[#9A9691] mt-2">
                        {role.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="relative pl-5 before:content-['▸'] before:absolute before:left-0 before:text-[#FFA94D]">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-16 sm:py-24 border-t border-[#1B1C20]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 font-mono text-xs text-[#FFA94D] mb-8">
            <span>GET /projects</span>
            <span className="text-emerald-400 border border-[#232428] bg-[#131417] px-2 py-0.5 rounded text-[10px]">200 OK</span>
          </div>
          <h2 className="font-display font-semibold text-2xl sm:text-4xl text-[#F2F0EA] mb-12">Services in production</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full min-w-0">
            {DATA.projects.map((project, idx) => (
              <div key={idx} className="bg-[#16171B] border border-[#232428] hover:border-[#FFA94D] rounded-lg p-6 sm:p-8 transition-all transform hover:-translate-y-1 w-full min-w-0">
                <div className="font-mono text-[11px] text-[#66625D] mb-3">{project.date}</div>
                <h3 className="font-display text-xl font-bold text-[#F2F0EA] mb-3">{project.title}</h3>
                <p className="text-sm text-[#9A9691] mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="grid grid-cols-3 gap-2 p-3 bg-[#131417] border border-[#1B1C20] rounded mb-6 font-mono text-xs">
                  {project.stats.map((stat, i) => (
                    <div key={i}>
                      <div className="text-emerald-400 font-semibold text-xs sm:text-sm">{stat.value}</div>
                      <div className="text-[9px] text-[#66625D] uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mb-6 font-mono text-xs">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-[#9A9691] border border-[#232428] px-2.5 py-1 rounded bg-[#131417]">{tech}</span>
                  ))}
                </div>
                <a href={project.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-mono text-xs text-[#FFA94D] hover:underline">
                  View live →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-16 sm:py-24 border-t border-[#1B1C20]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 font-mono text-xs text-[#FFA94D] mb-8">
            <span>GET /skills</span>
            <span className="text-emerald-400 border border-[#232428] bg-[#131417] px-2 py-0.5 rounded text-[10px]">200 OK</span>
          </div>
          <h2 className="font-display font-semibold text-2xl sm:text-4xl text-[#F2F0EA] mb-12">Technical Skills & Layer Breakdown</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="font-mono text-xs text-[#FFA94D] uppercase tracking-wider font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFA94D]"></span>
                Backend & Persistence
              </h4>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                {DATA.skills.backend.map((s) => (
                  <span key={s} className="bg-[#131417] border border-[#232428] px-3 py-1.5 rounded text-[#F2F0EA] hover:border-[#FFA94D]/50 transition-colors">{s}</span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-mono text-xs text-amber-400 uppercase tracking-wider font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                Frontend & UI Architecture
              </h4>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                {DATA.skills.frontend.map((s) => (
                  <span key={s} className="bg-[#131417] border border-[#232428] px-3 py-1.5 rounded text-[#F2F0EA] hover:border-[#FFA94D]/50 transition-colors">{s}</span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-mono text-xs text-emerald-400 uppercase tracking-wider font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Tools / DevOps / Cloud
              </h4>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                {DATA.skills.devops.map((s) => (
                  <span key={s} className="bg-[#131417] border border-[#232428] px-3 py-1.5 rounded text-[#F2F0EA] hover:border-[#FFA94D]/50 transition-colors">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section id="education" className="py-16 sm:py-24 border-t border-[#1B1C20]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 font-mono text-xs text-[#FFA94D] mb-8">
            <span>GET /education</span>
            <span className="text-emerald-400 border border-[#232428] bg-[#131417] px-2 py-0.5 rounded text-[10px]">200 OK</span>
          </div>
          <h2 className="font-display font-semibold text-2xl sm:text-4xl text-[#F2F0EA] mb-8">Learning, formal and otherwise</h2>

          <div className="divide-y divide-[#1B1C20]">
            {DATA.education.map((edu, idx) => (
              <div key={idx} className="py-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <div className="font-medium text-[#F2F0EA] text-base">{edu.school}</div>
                  <div className="text-sm text-[#9A9691]">{edu.degree}</div>
                </div>
                <div className="font-mono text-xs text-[#66625D]">{edu.start} - {edu.end}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER & CONTACT SECTION */}
      <footer id="contact" className="py-16 sm:py-24 border-t border-[#1B1C20]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 font-mono text-xs text-[#FFA94D] mb-8">
            <span>POST /contact</span>
            <span className="text-emerald-400 border border-[#232428] bg-[#131417] px-2 py-0.5 rounded text-[10px]">200 OK</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#F2F0EA] mb-6 tracking-tight">
            Let's build something <span className="text-[#FFA94D]">solid</span>.
          </h2>
          <p className="text-sm sm:text-base text-[#9A9691] max-w-lg mb-8 leading-relaxed">
            Open to backend-leaning full-stack roles. DM on LinkedIn with a direct question and I'll respond when I can (no soliciting, please).
          </p>

          <div className="w-full max-w-2xl bg-[#16171B] border border-[#232428] rounded-lg overflow-hidden font-mono text-[11px] sm:text-xs text-[#9A9691] mb-10">
            <div className="p-3.5 sm:p-4 border-b border-[#232428] whitespace-pre-wrap break-words leading-relaxed">
              <span className="text-[#FFA94D] font-semibold">POST</span> /v1/contact HTTP/1.1{'\n'}
              Content-Type: application/json{'\n\n'}
              {'{'}{'\n'}
              {'  '}"from": <span className="text-emerald-400">"you@company.com"</span>,{'\n'}
              {'  '}"message": <span className="text-emerald-400">"let's talk"</span>{'\n'}
              {'}'}
            </div>
            <div className="p-3.5 sm:p-4 bg-[#0E0F12] whitespace-pre-wrap break-words leading-relaxed">
              HTTP/1.1 <span className="text-emerald-400">200 OK</span>{'\n'}
              {'{'}{'\n'}
              {'  '}<span className="text-[#9A9691]">"status"</span>: <span className="text-[#F2F0EA]">"reachable"</span>,{'\n'}
              {'  '}<span className="text-[#9A9691]">"linkedin"</span>: <a href="https://linkedin.com/in/singhvivek7" target="_blank" rel="noopener noreferrer" className="text-[#F2F0EA] hover:text-[#FFA94D] transition-colors">"linkedin.com/in/singhvivek7"</a>,{'\n'}
              {'  '}<span className="text-[#9A9691]">"github"</span>: <a href="https://github.com/singhvivek7" target="_blank" rel="noopener noreferrer" className="text-[#F2F0EA] hover:text-[#FFA94D] transition-colors">"github.com/singhvivek7"</a>,{'\n'}
              {'  '}<span className="text-[#9A9691]">"email"</span>: <a href={`mailto:${DATA.contact.email}`} className="text-[#F2F0EA] hover:text-[#FFA94D] transition-colors">"{DATA.contact.email}"</a>,{'\n'}
              {'  '}<span className="text-[#9A9691]">"response_time"</span>: <span className="text-[#F2F0EA]">"~24h"</span>{'\n'}
              {'}'}
            </div>
          </div>

          <div className="flex flex-wrap justify-center sm:justify-start gap-6 sm:gap-8 mb-12 font-mono text-xs">
            {DATA.contact.social.map((s, i) => (
              <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" className="text-[#9A9691] hover:text-[#FFA94D] hover:underline transition-colors">
                {s.name}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-[#1B1C20] flex flex-col sm:flex-row items-center text-center sm:items-start sm:text-left justify-between gap-2 font-mono text-xs text-[#66625D]">
            <span>© {new Date().getFullYear()} {DATA.name}</span>
            <span>{DATA.contact.location}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
