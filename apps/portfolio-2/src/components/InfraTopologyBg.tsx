'use client';

import { useEffect, useRef, useState } from 'react';

interface NodeData {
  id: string;
  x: number;
  y: number;
  label: string;
  sub: string;
  tier: 'fe' | 'edge' | 'be' | 'cache' | 'infra';
  status: string;
  metrics: string;
}

export default function InfraTopologyBg() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [hoveredNode, setHoveredNode] = useState<NodeData | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    let mouseX = -1000;
    let mouseY = -1000;

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener('resize', handleResize);
    const parentEl = canvas.parentElement;
    parentEl?.addEventListener('mousemove', handleMouseMove);
    parentEl?.addEventListener('mouseleave', handleMouseLeave);

    const getNodes = (): Record<string, NodeData> => {
      const isMobile = width < 768;
      const col1X = width * (isMobile ? 0.05 : 0.07);
      const col2X = width * (isMobile ? 0.25 : 0.27);
      const col3X = width * (isMobile ? 0.50 : 0.50);
      const col4X = width * (isMobile ? 0.74 : 0.73);
      const col5X = width * (isMobile ? 0.94 : 0.92);

      return {
        feWeb: {
          id: 'feWeb',
          x: col1X,
          y: height * 0.28,
          label: 'React / Next.js Web',
          sub: 'SSR Edge App',
          tier: 'fe',
          status: '200 OK',
          metrics: 'p95: 14ms | 99.98%',
        },
        feApp: {
          id: 'feApp',
          x: col1X,
          y: height * 0.65,
          label: 'iOS / Android App',
          sub: 'Client App',
          tier: 'fe',
          status: 'Active',
          metrics: 'v3.2.1 | 4.9★',
        },
        cdn: {
          id: 'cdn',
          x: col2X,
          y: height * 0.32,
          label: 'CloudFront CDN',
          sub: 'Global Edge',
          tier: 'edge',
          status: 'Cache HIT',
          metrics: 'Hit Ratio: 94.2%',
        },
        gateway: {
          id: 'gateway',
          x: col2X,
          y: height * 0.60,
          label: 'API Gateway',
          sub: 'Nginx / ALB',
          tier: 'edge',
          status: 'Healthy',
          metrics: 'Rate: 1.4k req/s',
        },
        svc1: {
          id: 'svc1',
          x: col3X,
          y: height * 0.22,
          label: 'AZ-1: NestJS API',
          sub: 'Microservices',
          tier: 'be',
          status: 'Online',
          metrics: 'CPU: 18% | Mem: 240MB',
        },
        svc2: {
          id: 'svc2',
          x: col3X,
          y: height * 0.48,
          label: 'AZ-2: NestJS API',
          sub: 'Microservices',
          tier: 'be',
          status: 'Online',
          metrics: 'CPU: 22% | Mem: 280MB',
        },
        svc3: {
          id: 'svc3',
          x: col3X,
          y: height * 0.74,
          label: 'AZ-1: Rules Engine',
          sub: 'Recommendation Svc',
          tier: 'be',
          status: 'Optimal',
          metrics: 'Latency: 18ms',
        },
        redis: {
          id: 'redis',
          x: col4X,
          y: height * 0.30,
          label: 'Redis Cluster',
          sub: 'In-Memory Cache',
          tier: 'cache',
          status: '0.4ms P50',
          metrics: 'Keys: 142,000',
        },
        kafka: {
          id: 'kafka',
          x: col4X,
          y: height * 0.64,
          label: 'Kafka Event Bus',
          sub: 'Stream Processing',
          tier: 'cache',
          status: 'Streaming',
          metrics: 'Lag: 0ms | 4 Partitions',
        },
        dbPrimary: {
          id: 'dbPrimary',
          x: col5X,
          y: height * 0.25,
          label: 'Postgres Primary',
          sub: 'Leader DB',
          tier: 'infra',
          status: 'Leader',
          metrics: 'IOPS: 3.2k | Conns: 42',
        },
        dbReplica: {
          id: 'dbReplica',
          x: col5X,
          y: height * 0.52,
          label: 'Postgres Replica',
          sub: 'Read Replica',
          tier: 'infra',
          status: 'Synced',
          metrics: 'Replication Lag: 1ms',
        },
        s3Storage: {
          id: 's3Storage',
          x: col5X,
          y: height * 0.78,
          label: 'AWS S3 Bucket',
          sub: 'Asset Storage',
          tier: 'infra',
          status: '100% Avail',
          metrics: 'Storage: 1.2TB',
        },
      };
    };

    const connections = [
      ['feWeb', 'cdn'],
      ['feApp', 'gateway'],
      ['cdn', 'svc1'],
      ['cdn', 'svc2'],
      ['gateway', 'svc2'],
      ['gateway', 'svc3'],
      ['svc1', 'redis'],
      ['svc2', 'redis'],
      ['svc2', 'kafka'],
      ['svc3', 'kafka'],
      ['svc3', 's3Storage'],
      ['redis', 'dbPrimary'],
      ['kafka', 'dbReplica'],
      ['dbPrimary', 'dbReplica'],
    ];

    const pulses = Array.from({ length: 24 }, (_, i) => ({
      connIndex: i % connections.length,
      progress: Math.random(),
      speed: 0.002 + Math.random() * 0.003,
      reverse: i % 4 === 0,
      color: i % 3 === 0 ? '#38BDF8' : i % 3 === 1 ? '#FFA94D' : '#34D399',
    }));

    const waves: { x: number; y: number; r: number; maxR: number; alpha: number }[] = [];
    const triggerWave = (x: number, y: number) => {
      waves.push({ x, y, r: 4, maxR: 45, alpha: 0.5 });
    };

    let waveTimer = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const nodes = getNodes();

      waveTimer++;
      if (waveTimer % 180 === 0) {
        triggerWave(nodes.svc1.x, nodes.svc1.y);
        triggerWave(nodes.svc2.x, nodes.svc2.y);
      }

      // 0. Render Tier Boundary Container Cards
      if (width >= 640) {
        const tiersInfo = [
          { title: '1. FRONTEND TIER', x: width * 0.02, w: width * 0.15, col: '#38BDF8' },
          { title: '2. EDGE GATEWAY', x: width * 0.22, w: width * 0.18, col: '#0EA5E9' },
          { title: '3. NESTJS MICROSERVICES', x: width * 0.44, w: width * 0.20, col: '#FFA94D' },
          { title: '4. CACHE & STREAMING', x: width * 0.67, w: width * 0.18, col: '#34D399' },
          { title: '5. CLOUD INFRA & DB', x: width * 0.86, w: width * 0.12, col: '#10B981' },
        ];

        tiersInfo.forEach((t) => {
          ctx.fillStyle = 'rgba(22, 23, 27, 0.25)';
          ctx.strokeStyle = 'rgba(35, 36, 40, 0.4)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          if (ctx.roundRect) {
            ctx.roundRect(t.x, height * 0.12, t.w, height * 0.78, 8);
          } else {
            ctx.rect(t.x, height * 0.12, t.w, height * 0.78);
          }
          ctx.fill();
          ctx.stroke();

          ctx.font = '10px "JetBrains Mono", monospace';
          ctx.fillStyle = t.col;
          ctx.globalAlpha = 0.55;
          ctx.fillText(t.title, t.x + 12, height * 0.16);
          ctx.globalAlpha = 1.0;
        });
      }

      // 1. Render Curved Bezier Connection Lines
      connections.forEach(([fromKey, toKey]) => {
        const from = nodes[fromKey as keyof typeof nodes];
        const to = nodes[toKey as keyof typeof nodes];
        if (!from || !to) return;

        ctx.strokeStyle = 'rgba(255, 169, 77, 0.11)';
        ctx.lineWidth = 1.2;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        const cp1x = from.x + (to.x - from.x) * 0.5;
        const cp1y = from.y;
        const cp2x = from.x + (to.x - from.x) * 0.5;
        const cp2y = to.y;
        ctx.moveTo(from.x, from.y);
        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, to.x, to.y);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // 2. Render CPU Ripple Waves
      for (let i = waves.length - 1; i >= 0; i--) {
        const w = waves[i];
        w.r += 0.5;
        w.alpha -= 0.008;
        if (w.alpha <= 0 || w.r >= w.maxR) {
          waves.splice(i, 1);
          continue;
        }
        ctx.strokeStyle = `rgba(255, 169, 77, ${w.alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(w.x, w.y, w.r, 0, Math.PI * 2);
        ctx.stroke();
      }

      // 3. Render Data Packet Pulses
      pulses.forEach((p) => {
        p.progress += p.speed;
        if (p.progress >= 1) {
          p.progress = 0;
          p.connIndex = Math.floor(Math.random() * connections.length);
        }

        const [fromKey, toKey] = connections[p.connIndex];
        const from = nodes[fromKey as keyof typeof nodes];
        const to = nodes[toKey as keyof typeof nodes];
        if (!from || !to) return;

        const prg = p.reverse ? 1 - p.progress : p.progress;

        const cp1x = from.x + (to.x - from.x) * 0.5;
        const cp1y = from.y;
        const cp2x = from.x + (to.x - from.x) * 0.5;
        const cp2y = to.y;

        const t = prg;
        const cx =
          Math.pow(1 - t, 3) * from.x +
          3 * Math.pow(1 - t, 2) * t * cp1x +
          3 * (1 - t) * Math.pow(t, 2) * cp2x +
          Math.pow(t, 3) * to.x;
        const cy =
          Math.pow(1 - t, 3) * from.y +
          3 * Math.pow(1 - t, 2) * t * cp1y +
          3 * (1 - t) * Math.pow(t, 2) * cp2y +
          Math.pow(t, 3) * to.y;

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(cx, cy, 2.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle =
          p.color === '#38BDF8'
            ? 'rgba(56, 189, 248, 0.25)'
            : p.color === '#FFA94D'
            ? 'rgba(255, 169, 77, 0.25)'
            : 'rgba(52, 211, 153, 0.25)';
        ctx.beginPath();
        ctx.arc(cx, cy, 7, 0, Math.PI * 2);
        ctx.fill();
      });

      // 4. Render Topology Nodes & Mouse Interactivity
      let currentHover: NodeData | null = null;

      Object.entries(nodes).forEach(([_, n]) => {
        const dx = mouseX - n.x;
        const dy = mouseY - n.y;
        const isNear = Math.sqrt(dx * dx + dy * dy) < 32;

        if (isNear) {
          currentHover = n;
        }

        const dotColor =
          n.tier === 'fe'
            ? '#38BDF8'
            : n.tier === 'edge'
            ? '#0EA5E9'
            : n.tier === 'be'
            ? '#FFA94D'
            : '#34D399';

        ctx.strokeStyle = isNear ? dotColor : 'rgba(255, 169, 77, 0.3)';
        ctx.fillStyle = isNear ? 'rgba(22, 23, 27, 0.95)' : 'rgba(11, 12, 14, 0.85)';
        ctx.lineWidth = isNear ? 2 : 1;

        const nodeRadius = isNear ? 8 : 6;
        ctx.beginPath();
        ctx.arc(n.x, n.y, nodeRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = dotColor;
        ctx.beginPath();
        ctx.arc(n.x, n.y, isNear ? 3.5 : 2.2, 0, Math.PI * 2);
        ctx.fill();

        if (isNear && mouseX > 0 && mouseY > 0) {
          ctx.strokeStyle = dotColor;
          ctx.lineWidth = 1;
          ctx.setLineDash([2, 2]);
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();
          ctx.setLineDash([]);
        }

        if (width >= 480) {
          ctx.font = isNear ? 'bold 11px "JetBrains Mono", monospace' : '10px "JetBrains Mono", monospace';
          ctx.fillStyle = isNear ? '#F2F0EA' : 'rgba(154, 150, 145, 0.42)';
          ctx.fillText(n.label, n.x - 24, n.y + 20);
        }
      });

      setHoveredNode(currentHover);

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      parentEl?.removeEventListener('mousemove', handleMouseMove);
      parentEl?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-auto z-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0 opacity-20 sm:opacity-30 blur-[1.5px] transition-all duration-300"
      ></canvas>

      {/* LIVE HOVER TOOLTIP CARD */}
      {hoveredNode && (
        <div
          className="absolute z-20 pointer-events-none font-mono text-xs bg-[#16171B]/95 backdrop-blur-md border border-[#FFA94D]/40 rounded-md p-3 shadow-2xl space-y-1 transform -translate-x-1/2 -translate-y-full transition-all duration-150"
          style={{ left: `${hoveredNode.x}px`, top: `${hoveredNode.y - 14}px` }}
        >
          <div className="flex items-center justify-between gap-3 border-b border-[#232428] pb-1">
            <span className="font-bold text-[#F2F0EA]">{hoveredNode.label}</span>
            <span className="text-[10px] text-emerald-400 font-semibold border border-emerald-500/30 bg-emerald-500/10 px-1.5 py-0.5 rounded">
              ● {hoveredNode.status}
            </span>
          </div>
          <div className="text-[11px] text-[#9A9691]">{hoveredNode.sub}</div>
          <div className="text-[10px] text-[#FFA94D] pt-0.5">{hoveredNode.metrics}</div>
        </div>
      )}
    </div>
  );
}
