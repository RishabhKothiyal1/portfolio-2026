import { useNavigate } from 'react-router-dom';
import AnimatedThemeToggler from '../../components/AnimatedThemeToggler/AnimatedThemeToggler'

const docSectionStyle = {
  border: '1.5px solid #1a1a1a',
  borderRadius: 10,
  padding: 20,
  background: '#fff',
  marginBottom: 16,
};

const h2Style = {
  fontSize: 18,
  fontWeight: 700,
  color: '#1a1a1a',
  marginBottom: 12,
  display: 'flex',
  alignItems: 'center',
  gap: 8,
};

const pStyle = {
  fontSize: 14,
  color: 'rgba(26,26,26,0.8)',
  lineHeight: 1.7,
  marginBottom: 8,
};

const badgeStyle = {
  display: 'inline-block',
  fontSize: 11,
  fontWeight: 500,
  padding: '2px 8px',
  borderRadius: 6,
  background: '#FFD400',
  color: '#1a1a1a',
  marginRight: 4,
};

const linkBtnStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
  padding: '8px 16px',
  border: '1.5px solid #1a1a1a',
  borderRadius: 8,
  textDecoration: 'none',
  color: '#1a1a1a',
  fontSize: 13,
  fontWeight: 500,
  transition: 'all 0.2s ease',
};

const features = [
  'Live video streaming with low latency',
  'Real-time chat alongside streams',
  'Dynamic viewer count display',
  'Stream scheduling and management',
  'Responsive player for all devices',
  'Chat moderation tools',
];

export default function StreamieDocs() {
  const navigate = useNavigate()

  return (
    <div className="page-shell" style={{ minHeight: '100vh', background: '#f2f1ee', padding: '32px 16px', fontFamily: "'Poppins', sans-serif" }}>
      <AnimatedThemeToggler
  variant="circle"
  fromCenter
  style={{
    position: 'fixed',
    top: 16,
    right: 16,
    zIndex: 1000,
    background: 'rgba(255,255,255,0.9)',
    border: '1.5px solid #1a1a1a',
  }}
/>
      <div className="page-card" style={{ maxWidth: 800, margin: '0 auto', background: '#fff', border: '2px solid #1a1a1a', borderRadius: 16, boxShadow: '12px 12px 0px rgba(26,26,26,1)', padding: '56px 24px' }}>
        <div style={{ marginBottom: 24 }}>
          <button onClick={() => navigate(-1)} style={{ ...linkBtnStyle, display: 'inline-flex', cursor: 'pointer', background: 'transparent' }}>Back to Portfolio</button>
        </div>

        <div style={{ marginBottom: 32 }}>
          <span style={{ fontSize: 13, color: 'rgba(26,26,26,0.7)', letterSpacing: '0.05em', borderBottom: '2px solid #FFD400', paddingBottom: 2 }}>Documentation</span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, color: '#1a1a1a', fontSize: 44, marginTop: 8 }}>
            Stream<span style={{ color: '#FFD400', textShadow: '-1px -1px 0 #1a1a1a, 1px -1px 0 #1a1a1a, -1px 1px 0 #1a1a1a, 1px 1px 0 #1a1a1a' }}>ie</span>
          </h1>
          <p style={{ fontSize: 14, color: 'rgba(26,26,26,0.6)', marginTop: 8 }}>Live streaming platform for content creators.</p>
        </div>

        <div className="doc-section" style={docSectionStyle}>
          <h2 style={h2Style}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg> Overview</h2>
          <p style={pStyle}>Streamie is a live streaming platform that allows content creators to broadcast live video, interact with viewers through real-time chat, and manage their streaming schedule.</p>
        </div>

        <div className="doc-section" style={docSectionStyle}>
          <h2 style={h2Style}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg> Features</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {features.map((f, i) => (
              <li key={i} style={{ fontSize: 14, color: 'rgba(26,26,26,0.8)', padding: '4px 0', paddingLeft: 20, position: 'relative' as const }}>
                <span style={{ position: 'absolute', left: 0, color: '#FFD400', fontWeight: 700 }}>+</span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="doc-section" style={docSectionStyle}>
          <h2 style={h2Style}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg> Tech Stack</h2>
          <div style={{ marginBottom: 8 }}>
            <span style={badgeStyle}>React</span>
            <span style={badgeStyle}>WebRTC</span>
            <span style={badgeStyle}>Node.js</span>
            <span style={badgeStyle}>Express</span>
            <span style={badgeStyle}>MongoDB</span>
          </div>
          <p style={pStyle}>WebRTC handles peer-to-peer video streaming, with Express and MongoDB managing stream metadata and user data.</p>
        </div>

        <div className="doc-section" style={docSectionStyle}>
          <h2 style={h2Style}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg> Links</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            <a href="https://streamie.netlify.app" target="_blank" rel="noopener noreferrer" style={linkBtnStyle}>Live Demo</a>
            <a href="https://github.com/RishabhKothiyal1/streamie" target="_blank" rel="noopener noreferrer" style={linkBtnStyle}>GitHub</a>
          </div>
        </div>

        <div style={{ marginTop: 32, textAlign: 'center' }}>
          <button onClick={() => navigate(-1)} style={{ ...linkBtnStyle, display: 'inline-flex', cursor: 'pointer', background: 'transparent' }}>Back to Portfolio</button>
        </div>
      </div>
      <style>{`
  .dark .page-shell {
    background: #111 !important;
  }
  .dark .page-card {
    background: #1a1a1a !important;
    border-color: #333 !important;
    box-shadow: 12px 12px 0px rgba(51,51,51,1) !important;
  }
  .dark h1, .dark h2, .dark h3 {
    color: #e0e0e0 !important;
  }
  .dark p, .dark li {
    color: rgba(255,255,255,0.8) !important;
  }
  .dark .doc-section {
    background: #222 !important;
    border-color: #444 !important;
  }
  .dark pre, .dark code {
    background: #333 !important;
    border-color: #555 !important;
    color: #e0e0e0 !important;
  }
  .dark a {
    color: #FFD400 !important;
  }
  .dark svg {
    color: #e0e0e0;
  }
`}</style>
    </div>
  );
}
