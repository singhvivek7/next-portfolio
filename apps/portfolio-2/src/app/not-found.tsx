import Link from 'next/link';

export default function NotFound() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0B0C0E', color: '#F2F0EA', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ fontSize: '3rem', color: '#FFA94D', marginBottom: '1rem' }}>404</h1>
      <p style={{ color: '#9A9691', marginBottom: '2rem' }}>Page not found</p>
      <Link href="/" style={{ color: '#FFA94D', textDecoration: 'none', border: '1px solid #FFA94D', padding: '10px 20px', borderRadius: '4px' }}>
        Return Home
      </Link>
    </main>
  );
}
