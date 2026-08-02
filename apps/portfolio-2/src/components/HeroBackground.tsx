'use client';

import { useEffect, useRef } from 'react';

interface HeroBackgroundProps {
  mode: number; // 0: Topology, 1: Matrix, 2: Mesh
}

export default function HeroBackground({ mode }: HeroBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // MODE 0 DATA (SYSTEM TOPOLOGY)
    const getNodes = () => {
      const isMobile = width < 768;
      const col1X = width * (isMobile ? 0.05 : 0.06);
      const col2X = width * (isMobile ? 0.25 : 0.26);
      const col3X = width * (isMobile ? 0.50 : 0.50);
      const col4X = width * (isMobile ? 0.74 : 0.73);
      const col5X = width * (isMobile ? 0.94 : 0.92);

      return {
        feWeb: { x: col1X, y: height * 0.28, label: 'React / Next.js Web', tier: 'fe' },
        feApp: { x: col1X, y: height * 0.65, label: 'iOS / Android App', tier: 'fe' },
        cdn: { x: col2X, y: height * 0.32, label: 'CloudFront CDN', tier: 'edge' },
        gateway: { x: col2X, y: height * 0.60, label: 'API Gateway', tier: 'edge' },
        svc1: { x: col3X, y: height * 0.22, label: 'AZ-1: NestJS API', tier: 'be' },
        svc2: { x: col3X, y: height * 0.48, label: 'AZ-2: NestJS API', tier: 'be' },
        svc3: { x: col3X, y: height * 0.74, label: 'AZ-1: Rules Engine', tier: 'be' },
        redis: { x: col4X, y: height * 0.30, label: 'Redis Cache Cluster', tier: 'cache' },
        kafka: { x: col4X, y: height * 0.64, label: 'Kafka Event Bus', tier: 'cache' },
        dbPrimary: { x: col5X, y: height * 0.25, label: 'Postgres Primary', tier: 'infra' },
        dbReplica: { x: col5X, y: height * 0.52, label: 'Postgres Replica', tier: 'infra' },
        s3Storage: { x: col5X, y: height * 0.78, label: 'AWS S3 Bucket', tier: 'infra' },
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

    const topoPulses = Array.from({ length: 20 }, (_, i) => ({
      connIndex: i % connections.length,
      progress: Math.random(),
      speed: 0.002 + Math.random() * 0.003,
      color: i % 4 === 0 ? '#38BDF8' : i % 4 === 1 ? '#FFA94D' : '#34D399',
    }));

    // MODE 1 DATA (MATRIX LOG DATA STREAM)
    const logTokens = [
      'GET /api/v2/recommendations 200 14ms',
      'POST /v1/checkout/charge 201 32ms',
      'CACHE_HIT redis:user:88219 0.4ms',
      'KAFKA_PRODUCE topic=orders partition=2',
      'AUTH_JWT verify uid=41007 tenant_id=traya',
      'POSTGRES_EXEC query=SELECT * FROM users',
      'P95_LATENCY 42ms ok threshold=200ms',
      'DOCKER_POD restart policy=Always healthy',
      'AWS_S3 upload_stream bucket=traya-assets',
      'NGINX_PROXY 127.0.0.1:3000 upstream_ok',
    ];
    const columnsCount = Math.floor(width / 170) || 5;
    const matrixColumns = Array.from({ length: columnsCount }, (_, i) => ({
      x: (i + 0.5) * (width / columnsCount),
      y: Math.random() * height,
      speed: 1.2 + Math.random() * 1.5,
      tokens: Array.from({ length: 8 }, () => logTokens[Math.floor(Math.random() * logTokens.length)]),
    }));

    // MODE 2 DATA (SERVICE MESH CONSTELLATION)
    const meshNodes = Array.from({ length: 22 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      label: ['svc-auth', 'svc-pay', 'svc-rank', 'redis', 'pg-db', 'kafka', 'alb'][Math.floor(Math.random() * 7)],
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      if (mode === 0) {
        // MODE 0: SYSTEM TOPOLOGY
        const nodes = getNodes();

        if (width >= 640) {
          ctx.font = '10px "JetBrains Mono", monospace';
          ctx.fillStyle = 'rgba(102, 98, 93, 0.25)';
          ctx.fillText('FRONTEND TIER', width * 0.03, 32);
          ctx.fillText('EDGE GATEWAY', width * 0.23, 32);
          ctx.fillText('BACKEND SERVICES', width * 0.46, 32);
          ctx.fillText('CACHE & STREAM', width * 0.69, 32);
          ctx.fillText('INFRA & DATABASES', width * 0.87, 32);
        }

        connections.forEach(([fromKey, toKey]) => {
          const from = nodes[fromKey as keyof typeof nodes];
          const to = nodes[toKey as keyof typeof nodes];
          if (!from || !to) return;

          ctx.strokeStyle = 'rgba(255, 169, 77, 0.08)';
          ctx.lineWidth = 1;
          ctx.setLineDash([4, 4]);
          ctx.beginPath();
          ctx.moveTo(from.x, from.y);
          ctx.lineTo(to.x, to.y);
          ctx.stroke();
          ctx.setLineDash([]);
        });

        topoPulses.forEach((p) => {
          p.progress += p.speed;
          if (p.progress >= 1) {
            p.progress = 0;
            p.connIndex = Math.floor(Math.random() * connections.length);
          }

          const [fromKey, toKey] = connections[p.connIndex];
          const from = nodes[fromKey as keyof typeof nodes];
          const to = nodes[toKey as keyof typeof nodes];
          if (!from || !to) return;

          const currX = from.x + (to.x - from.x) * p.progress;
          const currY = from.y + (to.y - from.y) * p.progress;

          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(currX, currY, 2.5, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle =
            p.color === '#38BDF8'
              ? 'rgba(56, 189, 248, 0.18)'
              : p.color === '#FFA94D'
              ? 'rgba(255, 169, 77, 0.18)'
              : 'rgba(52, 211, 153, 0.18)';
          ctx.beginPath();
          ctx.arc(currX, currY, 6, 0, Math.PI * 2);
          ctx.fill();
        });

        Object.entries(nodes).forEach(([_, n]) => {
          const strokeColor =
            n.tier === 'fe'
              ? 'rgba(56, 189, 248, 0.35)'
              : n.tier === 'edge'
              ? 'rgba(14, 165, 233, 0.35)'
              : n.tier === 'be'
              ? 'rgba(255, 169, 77, 0.35)'
              : 'rgba(52, 211, 153, 0.35)';

          const dotColor =
            n.tier === 'fe'
              ? '#38BDF8'
              : n.tier === 'edge'
              ? '#0EA5E9'
              : n.tier === 'be'
              ? '#FFA94D'
              : '#34D399';

          ctx.strokeStyle = strokeColor;
          ctx.fillStyle = 'rgba(11, 12, 14, 0.85)';
          ctx.lineWidth = 1;

          ctx.beginPath();
          ctx.arc(n.x, n.y, 6, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = dotColor;
          ctx.beginPath();
          ctx.arc(n.x, n.y, 2.2, 0, Math.PI * 2);
          ctx.fill();

          if (width >= 480) {
            ctx.font = '10px "JetBrains Mono", monospace';
            ctx.fillStyle = 'rgba(154, 150, 145, 0.38)';
            ctx.fillText(n.label, n.x - 20, n.y + 18);
          }
        });
      } else if (mode === 1) {
        // MODE 1: MATRIX LOG DATA STREAM
        ctx.font = '11px "JetBrains Mono", monospace';

        matrixColumns.forEach((col) => {
          col.y += col.speed;
          if (col.y > height + 200) {
            col.y = -200;
          }

          col.tokens.forEach((token, idx) => {
            const tokenY = col.y - idx * 24;
            if (tokenY > -20 && tokenY < height + 20) {
              const alpha = Math.max(0.05, 0.38 - (idx / col.tokens.length) * 0.35);
              const isHead = idx === 0;
              ctx.fillStyle = isHead ? '#FFA94D' : `rgba(52, 211, 153, ${alpha})`;
              ctx.fillText(token, col.x - 60, tokenY);
            }
          });
        });
      } else if (mode === 2) {
        // MODE 2: SERVICE MESH CONSTELLATION
        meshNodes.forEach((n) => {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 20 || n.x > width - 20) n.vx *= -1;
          if (n.y < 20 || n.y > height - 20) n.vy *= -1;
        });

        for (let i = 0; i < meshNodes.length; i++) {
          for (let j = i + 1; j < meshNodes.length; j++) {
            const dx = meshNodes[i].x - meshNodes[j].x;
            const dy = meshNodes[i].y - meshNodes[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 180) {
              const alpha = (1 - dist / 180) * 0.22;
              ctx.strokeStyle = `rgba(255, 169, 77, ${alpha})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(meshNodes[i].x, meshNodes[i].y);
              ctx.lineTo(meshNodes[j].x, meshNodes[j].y);
              ctx.stroke();
            }
          }
        }

        meshNodes.forEach((n) => {
          ctx.fillStyle = 'rgba(19, 20, 23, 0.9)';
          ctx.strokeStyle = 'rgba(255, 169, 77, 0.4)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(n.x, n.y, 5, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = '#FFA94D';
          ctx.beginPath();
          ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
          ctx.fill();

          ctx.font = '10px "JetBrains Mono", monospace';
          ctx.fillStyle = 'rgba(154, 150, 145, 0.35)';
          ctx.fillText(n.label, n.x - 18, n.y + 16);
        });
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [mode]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-45 sm:opacity-60 transition-opacity duration-700"
    ></canvas>
  );
}
