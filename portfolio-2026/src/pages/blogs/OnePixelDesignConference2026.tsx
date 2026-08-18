import { useNavigate } from 'react-router-dom'
import ImageGallery from '../../components/ImageGallery/ImageGallery'
import AnimatedThemeToggler from '../../components/AnimatedThemeToggler/AnimatedThemeToggler'

const heading: React.CSSProperties = {
  fontSize: 22,
  fontWeight: 700,
  color: '#1a1a1a',
  marginTop: 40,
  marginBottom: 16,
  paddingBottom: 8,
  borderBottom: '3px solid #FFD400',
  display: 'inline-block',
}

const paragraph: React.CSSProperties = {
  fontSize: 15,
  lineHeight: 1.8,
  color: 'rgba(26,26,26,0.8)',
  marginBottom: 16,
}

const highlight: React.CSSProperties = {
  background: 'rgba(255,212,0,0.2)',
  padding: '2px 6px',
  borderRadius: 4,
  fontWeight: 500,
}

const blockquote: React.CSSProperties = {
  borderLeft: '4px solid #FFD400',
  padding: '16px 20px',
  margin: '20px 0',
  background: '#fafafa',
  borderRadius: '0 8px 8px 0',
  fontSize: 16,
  fontWeight: 500,
  color: '#1a1a1a',
  lineHeight: 1.7,
  fontStyle: 'italic',
}

const sessionCard: React.CSSProperties = {
  border: '1.5px solid #1a1a1a',
  borderRadius: 10,
  padding: 20,
  marginBottom: 20,
  background: '#fff',
}

const speaker: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 600,
  color: '#FFD400',
  textShadow: '-1px -1px 0 #1a1a1a, 1px -1px 0 #1a1a1a, -1px 1px 0 #1a1a1a, 1px 1px 0 #1a1a1a',
  letterSpacing: 0.5,
  marginBottom: 6,
}

const figure: React.CSSProperties = {
  margin: '28px 0',
  border: '1.5px solid #1a1a1a',
  borderRadius: 10,
  overflow: 'hidden',
  background: '#fff',
}

const figImg: React.CSSProperties = {
  width: '100%',
  height: 'auto',
  display: 'block',
}

const figCaption: React.CSSProperties = {
  fontSize: 12,
  color: 'rgba(26,26,26,0.6)',
  padding: '10px 14px',
  borderTop: '1px solid #e0e0e0',
  lineHeight: 1.5,
  fontStyle: 'normal',
}

const listItem: React.CSSProperties = {
  fontSize: 14,
  color: 'rgba(26,26,26,0.8)',
  padding: '5px 0 5px 24px',
  position: 'relative',
  lineHeight: 1.6,
}

export default function OnePixelDesignConference2026() {
  const navigate = useNavigate()

  return (
    <div className="page-shell" style={{ minHeight: '100vh',
        background: '#f2f1ee',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px 16px',
        fontFamily: "'Poppins', sans-serif",
      }}
    >
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
      <div className="page-card" style={{ width: '100%', maxWidth: 1150,
          background: '#fff',
          border: '2px solid #1a1a1a',
          borderRadius: 16,
          boxShadow: '12px 12px 0px rgba(26,26,26,1)',
        }}
      >
        <div className="page-content" style={{ maxWidth: 1000, margin: 0, padding: '60px 40px 80px' }}>
          {/* Header */}
          <div style={{ marginBottom: 32 }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
              <button
                onClick={() => navigate(-1)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 4,
                  fontSize: 13,
                  fontWeight: 500,
                  color: 'rgba(26,26,26,0.6)',
                  textDecoration: 'none',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                &#8592; Back to Portfolio
              </button>
              <span
                style={{
                  fontSize: 14,
                  color: 'rgba(26,26,26,0.7)',
                  letterSpacing: 1,
                  borderBottom: '2px solid #FFD400',
                  marginLeft: 'auto',
                }}
              >
                17&#8211;18 January 2026
              </span>
            </div>
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(24px, 4vw, 38px)',
                fontWeight: 900,
                color: '#1a1a1a',
                marginTop: 12,
                lineHeight: 1.15,
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '8px',
              }}
            >
              <img
                src="/1pixel.png"
                alt="1Pixel"
                style={{
                  height: '2em',
                  width: 'auto',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                  marginLeft: -8,
                }}
              />
              Design Conference 2026:{' '}
              <span
                style={{
                  color: '#FFD400',
                  textShadow: '-1px -1px 0 #1a1a1a, 1px -1px 0 #1a1a1a, -1px 1px 0 #1a1a1a, 1px 1px 0 #1a1a1a',
                }}
              >
                Two Days That Changed the Way I Think About Design
              </span>
            </h1>
            <p style={{ fontSize: 14, color: 'rgba(26,26,26,0.6)', marginTop: 4 }}>
              Indraprastha Institute of Technology, Delhi
            </p>
          </div>

          {/* Content */}
          <div>
            <figure style={figure}>
              <img src="/iiitD.jpeg" alt="1Pixel Design Conference 2026 venue" loading="lazy" style={figImg} />
              <figcaption style={figCaption}>
                1Pixel Design Conference 2026 at Indraprastha Institute of Technology, Delhi.
              </figcaption>
            </figure>

            <p style={paragraph}>
              There are conferences where you simply attend sessions, take a few notes, and move on. Then there are conferences that genuinely leave a lasting impact on how you think and approach your work.
            </p>
            <p style={paragraph}>
              For me, <span style={highlight}>1Pixel Design Conference 2026</span> was definitely the latter.
            </p>
            <p style={paragraph}>
              Over two days, I had the opportunity to learn from experienced designers, product leaders, and industry experts who shared practical insights about design, technology, careers, and building products that truly solve problems.
            </p>
            <p style={paragraph}>
              What made the event special wasn't just the speaker lineup &#8212; it was the conversations, the interactions, and the ideas that continued to stay with me long after the conference ended.
            </p>

            {/* Learning Beyond the Stage */}
            <h2 style={heading}>Learning Beyond the Stage</h2>
            <p style={paragraph}>
              Unlike many conferences where you simply listen, 1Pixel encouraged participation.
            </p>
            <p style={paragraph}>
              Whether it was asking questions, discussing ideas with fellow attendees, or hearing different perspectives from industry professionals, every session felt interactive and engaging.
            </p>
            <p style={paragraph}>
              Instead of filling pages with notes, I left with ideas that I wanted to implement immediately.
            </p>

            {/* Peter Dohyung Lee */}
            <h2 style={heading}>Peter Dohyung Lee: Why Timing Matters</h2>
            <div className="blog-session-card" style={sessionCard}>
              <div style={speaker}>Peter Dohyung Lee</div>
              <p style={paragraph}>
                One of the sessions that stayed with me the most was by Peter Dohyung Lee.
              </p>
              <p style={paragraph}>
                He spoke about product potential and explained how timing often determines whether an idea succeeds or fails.
              </p>
              <p style={paragraph}>One example instantly resonated with me.</p>
              <p style={paragraph}>He talked about <span style={highlight}>Google Glass</span>.</p>
              <p style={paragraph}>
                When it first launched, many people viewed it as futuristic but unnecessary.
              </p>
              <p style={paragraph}>
                Today, with AI becoming part of everyday life and wearable technology improving rapidly, the same idea feels far more relevant than it did years ago.
              </p>
              <p style={paragraph}>
                That discussion reminded me that innovation isn't only about having a great idea.
              </p>
              <blockquote style={blockquote}>
                Sometimes the world simply isn't ready yet.
              </blockquote>
            </div>
            <figure style={figure}>
              <img src="/peter.jpeg" alt="Peter Dohyung Lee speaking" loading="lazy" style={figImg} />
              <figcaption style={figCaption}>
                Peter Dohyung Lee sharing insights on product thinking and innovation.
              </figcaption>
            </figure>

            {/* A Memorable Interaction with Mayur Chaudhary */}
            <h2 style={heading}>A Memorable Interaction with Mayur Chaudhary</h2>
            <div className="blog-session-card" style={sessionCard}>
              <div style={speaker}>Mayur Chaudhary</div>
              <p style={paragraph}>
                One of the most enjoyable moments came during Mayur Chaudhary's session.
              </p>
              <p style={paragraph}>He asked the audience:</p>
              <blockquote style={blockquote}>
                &ldquo;If not Chrome, which browser would you choose?&rdquo;
              </blockquote>
              <p style={paragraph}>I got the opportunity to answer.</p>
              <p style={paragraph}>
                I mentioned Comet, explaining how its AI-powered search features make it easier to compare products, prices, and information while searching online.
              </p>
              <p style={paragraph}>
                It may have been a short interaction, but participating instead of simply listening made the session much more memorable.
              </p>
              <p style={paragraph}>
                Sometimes, a single conversation teaches more than an entire presentation.
              </p>
            </div>
            <figure style={figure}>
              <img src="/mayur.jpeg" alt="Mayur Chaudhary during his session" loading="lazy" style={figImg} />
              <figcaption style={figCaption}>
                One of my favorite moments during the conference.
              </figcaption>
            </figure>

            {/* Guidance That Stayed With Me */}
            <h2 style={heading}>Guidance That Stayed With Me</h2>
            <p style={paragraph}>
              I also had the chance to speak with <span style={highlight}>Aryendra bhaiya</span>.
            </p>
            <p style={paragraph}>
              We discussed career growth, learning continuously, and making thoughtful decisions instead of chasing every new trend.
            </p>
            <p style={paragraph}>It wasn't a formal session.</p>
            <p style={paragraph}>
              It was simply an honest conversation &#8212; but one that gave me much more clarity about how I want to approach my career going forward.
            </p>

            {/* Meeting Gaurav Juyal */}
            <h2 style={heading}>Meeting Gaurav Juyal</h2>
            <p style={paragraph}>
              One of the biggest highlights of the conference was meeting <span style={highlight}>Gaurav Juyal</span>.
            </p>
            <p style={paragraph}>
              Like many people of my generation, I grew up watching <span style={highlight}>Art Attack</span>.
            </p>
            <p style={paragraph}>Seeing him in person felt surreal.</p>
            <p style={paragraph}>
              Even though it was only for a brief moment, it instantly brought back so many childhood memories.
            </p>
            <p style={paragraph}>
              Some moments simply make you smile &#8212; and this was definitely one of them.
            </p>
            <ImageGallery
              images={[
                { src: '/gauravjuyal.jpeg', alt: 'Selfie with Gaurav Juyal', caption: 'A childhood memory brought to life.' },
                { src: '/gauravjuyal-workshop.jpeg', alt: 'Gaurav Juyal at Workshop', caption: 'Gaurav Juyal at the workshop — Building the Creative Muscle.' },
                { src: '/gauravjuyal-signature.jpeg', alt: "Gaurav Juyal's Signature", caption: "Gaurav Juyal's signature — a moment I'll never forget." },
              ]}
            />

            {/* Industry Panel Discussion */}
            <h2 style={heading}>Industry Panel Discussion</h2>
            <div className="blog-session-card" style={sessionCard}>
              <div style={speaker}>Panel: Kumar Rohit Chandra, Priyanka Srinivasagopalan, Anmol Arora, Vanshita Singh</div>
              <p style={paragraph}>
                The conference concluded with a panel discussion featuring experienced industry professionals.
              </p>
              <p style={paragraph}>The discussion wasn't just about design trends.</p>
              <p style={paragraph}>
                It focused on how products are built in the real world, what companies actually value, and how designers should prepare themselves for the future.
              </p>
              <p style={paragraph}>
                What impressed me most was how practical every discussion felt.
              </p>
              <p style={paragraph}>
                In fact, I started making improvements to my portfolio almost immediately after returning home.
              </p>
              <p style={paragraph}>
                That's probably the biggest sign that the conference created a real impact.
              </p>
            </div>
            <figure style={figure}>
              <img src="/panel.jpeg" alt="Panel discussion" loading="lazy" style={figImg} />
              <figcaption style={figCaption}>
                Real industry experiences shared by experienced professionals.
              </figcaption>
            </figure>

            {/* Conference Merch */}
            <h2 style={heading}>Conference Merch</h2>
            <p style={paragraph}>
              No conference experience is complete without picking up some merch, and 1Pixel did not disappoint. The design goodies, stickers, and conference kit were a nice touch &#8212; a tangible reminder of two incredible days.
            </p>
            <figure style={figure}>
              <img src="/1pixel-merch.jpeg" alt="1Pixel Design Conference merch" loading="lazy" style={figImg} />
              <figcaption style={figCaption}>
                The conference kit &#8212; stickers, a notebook, and some design swag to remember the experience.
              </figcaption>
            </figure>

            {/* My Biggest Takeaways */}
            <h2 style={heading}>My Biggest Takeaways</h2>
            <p style={paragraph}>Here are the lessons I'm taking with me:</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0' }}>
              {[
                'Great ideas need the right timing.',
                'Ask questions instead of only listening.',
                'AI is becoming an essential design companion.',
                'Build products that solve real problems.',
                'Your portfolio should demonstrate your thinking &#8212; not just your visuals.',
                'Networking often teaches as much as formal sessions.',
              ].map((item) => (
                <li key={item} style={listItem}>
                  <span style={{ position: 'absolute', left: 0, color: '#FFD400', fontWeight: 700 }}>+</span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Final Thoughts */}
            <h2 style={heading}>Final Thoughts</h2>
            <p style={paragraph}>
              Attending the 1Pixel Design Conference 2026 was much more than adding another event to my calendar.
            </p>
            <p style={paragraph}>
              It helped me think differently about design, products, technology, and my own career journey.
            </p>
            <p style={paragraph}>
              I'm grateful to every speaker, panelist, volunteer, and organizer who made these two days so memorable.
            </p>
            <p style={paragraph}>
              A huge thank you to the <span style={highlight}>1Pixel Team</span> for putting together such a well-executed conference.
            </p>
            <p style={paragraph}>I'm already looking forward to the next edition.</p>
          </div>
        </div>

        {/* Footer image with button overlay */}
        <div style={{ position: 'relative', width: '100%' }}>
          <img
            src="/1pixel-footer.png"
            alt="1Pixel Design Conference"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
          <div style={{
            position: 'absolute',
            bottom: 24,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 2,
          }}>
            <button
              onClick={() => navigate(-1)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '10px 24px',
                border: '1.5px solid #1a1a1a',
                borderRadius: 8,
                textDecoration: 'none',
                color: '#1a1a1a',
                fontSize: 13,
                fontWeight: 500,
                background: 'rgba(255,255,255,0.85)',
                backdropFilter: 'blur(4px)',
                cursor: 'pointer',
              }}
            >
              &#8592; Back to All Blogs
            </button>
          </div>
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
        .dark .blog-session-card {
          background: #222 !important;
          border-color: #444 !important;
        }
        .dark figure {
          background: #222 !important;
          border-color: #444 !important;
        }
        .dark figcaption {
          color: rgba(255,255,255,0.6) !important;
          border-color: #444 !important;
        }
        .dark blockquote {
          background: #222 !important;
          border-left-color: #FFD400 !important;
          color: #e0e0e0 !important;
        }
        .dark button[style*="color: rgb(26, 26, 26)"] {
          color: #e0e0e0 !important;
          border-color: #444 !important;
        }
        .dark svg {
          color: #e0e0e0;
        }
      `}</style>
    </div>
  )
}
