export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1.5px solid #1a1a1a',
        padding: '24px',
        textAlign: 'center',
        background: '#fff',
      }}
    >
      <p style={{ fontSize: '13px', color: '#1a1a1a', margin: 0 }}>
        &copy; {new Date().getFullYear()} Rishabh Kothiyal. Built with React + GSAP.
      </p>
    </footer>
  )
}