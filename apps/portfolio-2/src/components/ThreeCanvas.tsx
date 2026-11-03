'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function ThreeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      canvas.hidden = true;
      return;
    }

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
    } catch (err) {
      console.warn('WebGL unavailable; hiding particle canvas.', err);
      canvas.hidden = true;
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 17;

    // 14,500 particles wave field
    const n = 14500;
    const pos = new Float32Array(n * 3);
    const base = new Float32Array(n * 3);
    const col = new Float32Array(n * 3);

    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const lime = new THREE.Color(isLight ? '#386c2e' : '#c8f169');
    const pale = new THREE.Color(isLight ? '#678d59' : '#e0e9c8');

    for (let i = 0; i < n; i++) {
      const u = Math.random() * Math.PI * 2;
      const v = (Math.random() - 0.5) * 2;
      const k = i * 3;

      pos[k] = base[k] = (u - Math.PI) * 4.2;
      pos[k + 1] = base[k + 1] = Math.sin(u * 1.2) * 1.25 + v * 1.55;
      pos[k + 2] = base[k + 2] = (Math.random() - 0.5) * 1.7;

      const c = lime.clone().lerp(pale, Math.random() * 0.55);
      col[k] = c.r;
      col[k + 1] = c.g;
      col[k + 2] = c.b;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));

    const pts = new THREE.Points(
      geo,
      new THREE.PointsMaterial({
        size: 0.018,
        vertexColors: true,
        transparent: true,
        opacity: isLight ? 0.65 : 0.78,
        depthWrite: false,
        blending: isLight ? THREE.NormalBlending : THREE.AdditiveBlending,
      })
    );
    scene.add(pts);

    let mx = 0;
    let my = 0;
    let tx = 0;
    let ty = 0;

    const handlePointerMove = (e: PointerEvent) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 2;
      ty = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      const r = canvas.getBoundingClientRect();
      renderer.setSize(r.width, r.height, false);
      camera.aspect = r.width / Math.max(1, r.height);
      camera.updateProjectionMatrix();
    };

    const resizeObserver = new ResizeObserver(handleResize);
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }
    window.addEventListener('resize', handleResize, { passive: true });
    handleResize();

    // Theme mutation observer to update colors
    const themeObserver = new MutationObserver(() => {
      const light = document.documentElement.getAttribute('data-theme') === 'light';
      const newLime = new THREE.Color(light ? '#386c2e' : '#c8f169');
      const newPale = new THREE.Color(light ? '#678d59' : '#e0e9c8');
      const colors = geo.attributes.color.array as Float32Array;

      for (let i = 0; i < n; i++) {
        const k = i * 3;
        const c = newLime.clone().lerp(newPale, Math.random() * 0.55);
        colors[k] = c.r;
        colors[k + 1] = c.g;
        colors[k + 2] = c.b;
      }
      geo.attributes.color.needsUpdate = true;
      (pts.material as THREE.PointsMaterial).opacity = light ? 0.65 : 0.78;
      (pts.material as THREE.PointsMaterial).blending = light
        ? THREE.NormalBlending
        : THREE.AdditiveBlending;
    });

    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    const clock = new THREE.Clock();
    let animId: number;

    const render = () => {
      animId = requestAnimationFrame(render);
      const t = clock.getElapsedTime();
      mx += (tx - mx) * 0.025;
      my += (ty - my) * 0.025;

      const p = geo.attributes.position.array as Float32Array;
      for (let i = 0; i < n; i++) {
        const k = i * 3;
        const x = base[k];
        const y = base[k + 1];
        p[k + 1] = y + Math.sin(x * 0.72 + t * 0.62) * 0.36 + Math.sin(x * 1.7 - t * 0.34) * 0.13;
        p[k + 2] = base[k + 2] + Math.cos(x * 0.5 + t * 0.4) * 0.24;
      }
      geo.attributes.position.needsUpdate = true;

      pts.rotation.y = mx * 0.11;
      pts.rotation.x = -my * 0.08;
      pts.position.x = 1.8 + mx * 0.3;
      pts.position.y = -0.2 + Math.sin(t * 0.2) * 0.15;

      renderer.render(scene, camera);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
      themeObserver.disconnect();
      geo.dispose();
      (pts.material as THREE.Material).dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas id="field" ref={canvasRef} aria-hidden="true" />;
}

export default ThreeCanvas;
