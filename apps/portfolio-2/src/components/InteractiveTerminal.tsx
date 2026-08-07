'use client';

import React, { useState, useRef, useEffect } from 'react';
import { DATA } from '@/data/resume';

interface LogItem {
  type: 'input' | 'output' | 'system' | 'link' | 'suggestion';
  text: string;
  link?: string;
  command?: string;
}

const KNOWN_COMMANDS = [
  'help',
  'bio',
  'about',
  'experience',
  'work',
  'projects',
  'skills',
  'observe',
  'graph',
  'logs',
  'metrics',
  'trace',
  'topology',
  'contact',
  'clear',
];

function levenshteinDistance(a: string, b: string): number {
  const matrix: number[][] = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

function getClosestCommand(input: string, commands: string[]): string | null {
  let minDistance = Infinity;
  let closest: string | null = null;

  for (const cmd of commands) {
    if (cmd.startsWith(input) || input.startsWith(cmd)) {
      return cmd;
    }
    const dist = levenshteinDistance(input, cmd);
    if (dist < minDistance && dist <= 3) {
      minDistance = dist;
      closest = cmd;
    }
  }
  return closest;
}

export function InteractiveTerminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<LogItem[]>([
    { type: 'system', text: 'Welcome to Vivek\'s Interactive CLI [v2.4.0]' },
    { type: 'system', text: 'Type "help" or click shortcut commands below to explore.' },
  ]);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const lowerInput = input.toLowerCase();
  const trimmedLower = lowerInput.trim();
  const matchingCommands = trimmedLower
    ? KNOWN_COMMANDS.filter((c) => c.startsWith(trimmedLower))
    : [];
  const topMatch = matchingCommands.length > 0 ? matchingCommands[0] : null;
  const suggestionHint =
    topMatch && trimmedLower && topMatch.startsWith(trimmedLower) && topMatch !== trimmedLower
      ? topMatch.slice(trimmedLower.length)
      : '';

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Tab' || (e.key === 'ArrowRight' && inputRef.current?.selectionStart === input.length)) {
      if (topMatch) {
        e.preventDefault();
        setInput(topMatch);
      }
    }
  };

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    const newHistory: LogItem[] = [...history, { type: 'input', text: `$ ${cmdStr}` }];

    switch (trimmed) {
      case 'help':
        newHistory.push(
          { type: 'output', text: 'Available commands:' },
          { type: 'output', text: '  bio        - View summary and background' },
          { type: 'output', text: '  experience - View software engineering experience' },
          { type: 'output', text: '  projects   - View live production projects' },
          { type: 'output', text: '  skills     - View backend, frontend & infra stack' },
          { type: 'output', text: '  observe    - View live telemetry & service observability' },
          { type: 'output', text: '  graph      - View ASCII latency sparklines & bar charts' },
          { type: 'output', text: '  logs       - View streaming system telemetry logs' },
          { type: 'output', text: '  metrics    - View P95/P99 latency & performance' },
          { type: 'output', text: '  trace      - View distributed microservice trace flow' },
          { type: 'output', text: '  contact    - Get email & social profiles' },
          { type: 'output', text: '  clear      - Clear terminal screen' }
        );
        break;

      case 'bio':
      case 'about':
        newHistory.push(
          { type: 'output', text: `Role: ${DATA.role}` },
          { type: 'output', text: `Tagline: ${DATA.tagline}` },
          { type: 'output', text: `Focus: ${DATA.about}` }
        );
        break;

      case 'experience':
      case 'work':
        DATA.work.forEach((w) => {
          newHistory.push({ type: 'output', text: `● ${w.company} (${w.totalPeriod}) - ${w.location}` });
          w.roles.forEach((r) => {
            newHistory.push({ type: 'output', text: `   └─ ${r.title} [${r.start} - ${r.end}]` });
          });
        });
        break;

      case 'projects':
        newHistory.push({ type: 'output', text: 'Live Production Projects:' });
        DATA.projects.forEach((p) => {
          newHistory.push({
            type: 'link',
            text: `↳ ${p.title}: ${p.description}`,
            link: p.href,
          });
        });
        break;

      case 'skills':
        newHistory.push(
          { type: 'output', text: `Backend:  ${DATA.skills.backend.join(', ')}` },
          { type: 'output', text: `Frontend: ${DATA.skills.frontend.join(', ')}` },
          { type: 'output', text: `DevOps:   ${DATA.skills.devops.join(', ')}` }
        );
        break;

      case 'observe':
      case 'topology': {
        const nowTS = new Date().toTimeString().slice(0, 8);
        newHistory.push(
          { type: 'output', text: '══ MICROSERVICE TOPOLOGY & HEALTH ══' },
          { type: 'output', text: `[${nowTS}] STATUS: ALL SYSTEMS OPERATIONAL (P99: 4.2ms)` },
          { type: 'output', text: '  ● api-gateway-edge       34ms  [HEALTHY - 100%]' },
          { type: 'output', text: '  ● auth-identity-service  48ms  [HEALTHY - 100%]' },
          { type: 'output', text: '  ● core-payment-engine    82ms  [HEALTHY - 100%]' },
          { type: 'output', text: '  ● postgres-primary-db    28ms  [HEALTHY - 100%]' }
        );
        break;
      }

      case 'graph': {
        newHistory.push(
          { type: 'output', text: '══ LATENCY SPARKLINE & SPECTRUM ══' },
          { type: 'output', text: 'LATENCY TREND (Last 20 Requests):' },
          { type: 'output', text: '  P50:  ▂▃ ▂  ▂▃ ▂  ▂ 12ms' },
          { type: 'output', text: '  P95:  ▅▆▅ ▅▆ ▅▆▅  ▅ 34ms' },
          { type: 'output', text: '  P99: ▇██▇ ▇█ ▇██▇ █ 42ms' },
          { type: 'output', text: '' },
          { type: 'output', text: 'LATENCY SPECTRUM BY SERVICE:' },
          { type: 'output', text: '  api-gateway-edge       [████████░░░░░░░░░░░░]  34ms' },
          { type: 'output', text: '  auth-identity-service  [███████████░░░░░░░░░]  48ms' },
          { type: 'output', text: '  core-payment-engine    [██████████████████░░]  82ms' },
          { type: 'output', text: '  postgres-primary-db    [██████░░░░░░░░░░░░░░]  28ms' }
        );
        break;
      }

      case 'logs': {
        const nowTS = new Date().toTimeString().slice(0, 8);
        newHistory.push(
          { type: 'output', text: '══ LIVE TELEMETRY STREAM ══' },
          { type: 'output', text: `  ${nowTS} INFO  api-gateway-edge     GET /api/v2/recommendations 200 OK - 34ms` },
          { type: 'output', text: `  ${nowTS} INFO  auth-identity-svc    JWT validation token_type=Bearer - 12ms` },
          { type: 'output', text: `  ${nowTS} INFO  core-payment-engine  Process checkout_session_id=cs_892a - 82ms` },
          { type: 'output', text: `  ${nowTS} OK    postgres-primary-db  WAL commit write_time=0.4ms replica_lag=<1ms` }
        );
        break;
      }

      case 'metrics': {
        newHistory.push(
          { type: 'output', text: '══ PERFORMANCE & QUERY METRICS ══' },
          { type: 'output', text: '  API P95 Target:  < 100ms' },
          { type: 'output', text: '  Connection Pool: 42 / 100 active' },
          { type: 'output', text: '  Buffer Cache:    99.8% Hit Ratio' },
          { type: 'output', text: '  Replication Lag: < 1ms' },
          { type: 'output', text: 'RECENT QUERY PERFORMANCE:' },
          { type: 'output', text: '  SELECT users WHERE id = $1            0.4ms (Cache HIT)' },
          { type: 'output', text: '  UPDATE account_balance SET amt = $1   2.1ms (Tx Commit)' }
        );
        break;
      }

      case 'trace': {
        newHistory.push(
          { type: 'output', text: '══ DISTRIBUTED TRACE HOPS ══' },
          { type: 'output', text: 'Trace ID: tr_948f2190' },
          { type: 'output', text: '  [Client] ─(8ms)─► [Gateway] ─(14ms)─► [Auth Svc] ─(24ms)─► [Payment] ─(18ms)─► [Postgres]' },
          { type: 'output', text: '  Total End-to-End Latency: 64ms' }
        );
        break;
      }

      case 'contact':
        newHistory.push(
          { type: 'output', text: `Email: ${DATA.contact.email}` },
          { type: 'output', text: `Location: ${DATA.contact.location}` }
        );
        DATA.contact.social.forEach((s) => {
          newHistory.push({ type: 'link', text: `  🔗 ${s.name}`, link: s.url });
        });
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default: {
        const closest = getClosestCommand(trimmed, KNOWN_COMMANDS);
        newHistory.push({
          type: 'output',
          text: `zsh: command not found: ${trimmed}.`,
        });

        if (closest) {
          newHistory.push({
            type: 'suggestion',
            text: `Did you mean "${closest}"?`,
            command: closest,
          });
        } else {
          newHistory.push({
            type: 'output',
            text: 'Type "help" to view all valid commands.',
          });
        }
        break;
      }
    }

    setHistory(newHistory);
    setInput('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
  };

  const [copied, setCopied] = useState(false);

  const copyTerminalOutput = (e: React.MouseEvent) => {
    e.stopPropagation();
    const textToCopy = history.map((item) => item.text).join('\n');
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      onClick={() => {
        const selection = window.getSelection()?.toString();
        if (!selection || selection.length === 0) {
          inputRef.current?.focus();
        }
      }}
      className="w-full bg-[#16171B] border border-[#232428] rounded-xl overflow-hidden shadow-2xl font-mono text-xs flex flex-col min-h-[460px] sm:min-h-[500px] cursor-text select-text"
    >
      {/* TERMINAL HEADER */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#131417] border-b border-[#232428] select-none">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#FF5F57]"></span>
          <span className="w-3 h-3 rounded-full bg-[#FEBC2E]"></span>
          <span className="w-3 h-3 rounded-full bg-[#28C840]"></span>
        </div>
        <div className="text-xs text-[#9A9691] font-mono tracking-tight flex items-center gap-1.5">
          <span>vivek@arch-linux: ~</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={copyTerminalOutput}
            className="text-[10px] bg-[#0E0F12] hover:bg-[#FFA94D]/10 text-[#9A9691] hover:text-[#FFA94D] border border-[#232428] hover:border-[#FFA94D]/30 px-2 py-0.5 rounded transition-all font-mono cursor-pointer"
            title="Copy terminal text to clipboard"
          >
            {copied ? '✓ Copied!' : '📋 Copy'}
          </button>
          <div className="text-[10px] text-emerald-400/90 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-mono font-semibold">
            ONLINE
          </div>
        </div>
      </div>

      {/* QUICK SHORTCUT BUTTONS BAR */}
      <div className="px-4 py-2 bg-[#131417] border-b border-[#232428] flex flex-wrap gap-1.5 items-center text-[10px] sm:text-xs">
        <span className="text-[#66625D] mr-1">Quick:</span>
        {['help', 'bio', 'projects', 'experience', 'skills', 'contact', 'clear'].map((cmd) => (
          <button
            key={cmd}
            onClick={(e) => {
              e.stopPropagation();
              handleCommand(cmd);
            }}
            className="px-2.5 py-1 rounded bg-[#0E0F12] border border-[#232428] text-[#9A9691] hover:text-[#FFA94D] hover:border-[#FFA94D]/40 transition-colors font-mono cursor-pointer"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* TERMINAL STREAM CONTAINER */}
      <div ref={containerRef} className="p-4 sm:p-5 flex-1 overflow-y-auto space-y-2.5 max-h-[380px] sm:max-h-[420px] select-text selection:bg-[#FFA94D]/30 selection:text-[#F2F0EA]">
        {history.map((item, idx) => {
          if (item.type === 'input') {
            return (
              <div key={idx} className="text-[#FFA94D] font-semibold">
                {item.text}
              </div>
            );
          }
          if (item.type === 'system') {
            return (
              <div key={idx} className="text-[#9A9691] opacity-90">
                {item.text}
              </div>
            );
          }
          if (item.type === 'link') {
            return (
              <div key={idx} className="text-[#F2F0EA]">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-[#FFA94D] hover:underline inline-flex items-center gap-1"
                >
                  {item.text}
                </a>
              </div>
            );
          }
          if (item.type === 'suggestion') {
            return (
              <div key={idx} className="text-[#FFA94D] flex flex-wrap items-center gap-2 py-0.5">
                <span>{item.text}</span>
                {item.command && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCommand(item.command!);
                    }}
                    className="px-2 py-0.5 rounded bg-[#FFA94D]/15 hover:bg-[#FFA94D] text-[#FFA94D] hover:text-[#1A1200] border border-[#FFA94D]/40 transition-colors font-mono font-bold text-[10px] cursor-pointer"
                  >
                    Run "{item.command}" ↵
                  </button>
                )}
              </div>
            );
          }
          return (
            <div key={idx} className="text-[#F2F0EA] leading-relaxed">
              {item.text}
            </div>
          );
        })}

        {/* INLINE ACTIVE PROMPT LINE WITH ZSH GHOST SUGGESTION & TAB AUTOCOMPLETE */}
        <div className="space-y-1.5 pt-1 font-mono">
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <span className="text-[#FFA94D] font-bold text-sm select-none">$</span>
            <div className="relative flex-1 flex items-center">
              {/* GHOST SUGGESTION HINT TEXT IN BACKGROUND */}
              {suggestionHint && (
                <div className="absolute inset-0 pointer-events-none flex items-center font-mono text-xs sm:text-sm select-none z-0">
                  <span className="opacity-0">{input}</span>
                  <span className="text-[#9A9691]/50 font-semibold">{suggestionHint}</span>
                </div>
              )}
              <input
                ref={inputRef}
                type="text"
                value={input}
                onKeyDown={handleKeyDown}
                onChange={(e) => setInput(e.target.value)}
                placeholder="type 'help', 'observe', 'projects'..."
                className="w-full bg-transparent text-[#F2F0EA] outline-none font-mono text-xs sm:text-sm placeholder:text-[#66625D]/60 relative z-10"
              />
            </div>
            <button
              type="submit"
              className="text-xs bg-[#FFA94D]/10 text-[#FFA94D] hover:bg-[#FFA94D] hover:text-[#1A1200] border border-[#FFA94D]/30 px-3 py-1 rounded transition-colors font-mono font-semibold cursor-pointer flex-shrink-0"
            >
              RUN ↵
            </button>
          </form>

          {/* LIVE AUTOCOMPLETE MATCHES CHIPS */}
          {matchingCommands.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5 pl-4 text-[10px]">
              <span className="text-[#66625D]">Tab ↹ / → to complete:</span>
              {matchingCommands.slice(0, 5).map((cmd) => (
                <button
                  key={cmd}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setInput(cmd);
                    inputRef.current?.focus();
                  }}
                  className="px-2 py-0.5 rounded bg-[#FFA94D]/15 text-[#FFA94D] border border-[#FFA94D]/40 hover:bg-[#FFA94D] hover:text-[#1A1200] transition-colors cursor-pointer font-mono font-semibold"
                >
                  {cmd}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
