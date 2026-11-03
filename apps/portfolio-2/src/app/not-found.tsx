import Link from 'next/link';

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f7f7f2',
        color: '#18221e',
        fontFamily: 'var(--sans, system-ui, sans-serif)',
        padding: '24px',
        textAlign: 'center',
      }}
    >
      <h1
        style={{
          fontSize: '4rem',
          fontWeight: 800,
          color: '#235b45',
          marginBottom: '1rem',
          letterSpacing: '-2px',
        }}
      >
        404
      </h1>
      <p style={{ color: '#68736c', marginBottom: '2rem', fontSize: '18px' }}>
        Page not found
      </p>
      <Link
        href="/"
        style={{
          color: '#ffffff',
          backgroundColor: '#235b45',
          padding: '12px 24px',
          borderRadius: '999px',
          fontWeight: 600,
          fontSize: '14px',
          textDecoration: 'none',
        }}
      >
        Return Home ↗
      </Link>
    </main>
  );
}
