import { useNavigate } from 'react-router-dom'
import ImageGallery from '../../components/ImageGallery/ImageGallery'

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

export default function GdgDevfest2025() {
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
                December 6, 2025
              </span>
            </div>
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(24px, 4vw, 32px)',
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
              My First Experience at{' '}
              <span
                style={{
                  color: '#FFD400',
                  textShadow: '-1px -1px 0 #1a1a1a, 1px -1px 0 #1a1a1a, -1px 1px 0 #1a1a1a, 1px 1px 0 #1a1a1a',
                }}
              >
                GDG Noida DevFest 2025
              </span>
              <img
                src="/gdg.png"
                alt="GDG"
                style={{
                  height: '2.6em',
                  width: 'auto',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                }}
              />
            </h1>
          </div>

          {/* Content */}
          <div>
            <ImageGallery
              images={[
                { src: '/devfest1.jpg', alt: 'Venue', caption: 'The main stage at GDG Noida DevFest 2025 — the energy was electric from the moment we walked in.' },
                { src: '/devfest2.jpg', alt: 'Stage', caption: 'The event setup — everything was organized to perfection.' },
                { src: '/devfest 3.jpg', alt: 'Badges', caption: 'Name badges of fellow attendees — every badge represented a story and a shared passion for tech.' },
                { src: '/devfest 4.jpg', alt: 'Sessions', caption: 'Sessions in full swing — learning from the best in the industry.' },
              ]}
            />

            <p style={paragraph}>
              Attending <span style={highlight}>GDG Noida DevFest 2025</span> was something I had been looking forward to for quite some time, and it definitely lived up to my expectations.
            </p>
            <p style={paragraph}>
              It was my first DevFest, so I wasn't exactly sure what the day would be like. As soon as I reached the venue, I could feel the excitement. The place was full of developers, designers, founders, students, and tech enthusiasts who were all there to learn and meet people with similar interests. The atmosphere was energetic, and every conversation seemed to teach me something new.
            </p>
            <p style={paragraph}>
              By the end of the day, I came back with a notebook full of ideas, a lot of inspiration, and a fresh perspective on where technology is heading.
            </p>

            <figure style={figure}>
              <img src="/devfest 3.jpg" alt="Attendee name badges" style={figImg} />
              <figcaption style={figCaption}>
                Name badges of fellow attendees &#8212; every badge represented a story and a shared passion for tech.
              </figcaption>
            </figure>

            {/* Sessions That Stood Out */}
            <h2 style={heading}>Sessions That Stood Out</h2>

            <div className="blog-session-card" style={sessionCard}>
              <div style={speaker}>AI Swarms &#8212; Aashish Pahwa</div>
              <p style={paragraph}>
                This was one of my favorite sessions of the event.
              </p>
              <p style={paragraph}>
                Before attending the talk, I mostly thought of AI as interacting with a single language model. The session introduced the idea of multiple AI agents working together, where each agent has a specific responsibility such as planning, executing tasks, or reviewing results.
              </p>
              <p style={paragraph}>
                What I found most interesting was how practical the concept felt. The discussion around self-correcting workflows and human checkpoints made it easy to imagine how these systems could be used in real products.
              </p>
              <figure style={figure}>
                <img src="/devfest ashish pahwa.jpg" alt="Aashish Pahwa presenting" style={figImg} />
                <figcaption style={figCaption}>
                  Aashish Pahwa breaking down how multiple AI agents can collaborate on complex tasks.
                </figcaption>
              </figure>
              <p style={paragraph}>
                I left the session with a completely different perspective on how AI applications are evolving.
              </p>
            </div>

            <div className="blog-session-card" style={sessionCard}>
              <div style={speaker}>Product Market Fit &#8212; Shruti Tiwari</div>
              <p style={paragraph}>
                This session reminded me that AI can be useful much earlier than the development phase.
              </p>
              <p style={paragraph}>
                Shruti explained how founders and product teams can use AI to validate ideas, understand customer needs, and analyze market trends before spending months building something.
              </p>
              <p style={paragraph}>One simple idea stayed with me throughout the day.</p>
              <blockquote style={blockquote}>
                Building the right product is often more important than simply building a product.
              </blockquote>
            </div>

            <div className="blog-session-card" style={sessionCard}>
              <div style={speaker}>Design & Nature &#8212; Joy Banerjee</div>
              <p style={paragraph}>
                This was probably the most unique session I attended.
              </p>
              <p style={paragraph}>
                Instead of talking only about interfaces or design trends, Joy Banerjee shared how nature influences the way people think, behave, and interact with products.
              </p>
              <figure style={figure}>
                <img src="/devfest joy banerjee.jpg" alt="Joy Banerjee presenting" style={figImg} />
                <figcaption style={figCaption}>
                  Joy Banerjee drawing unexpected parallels between natural patterns and product design.
                </figcaption>
              </figure>
              <p style={paragraph}>
                Listening to someone connect natural patterns with product design was something I had never experienced before. It made me realize that good design is not only about making something look beautiful. It is about creating experiences that feel natural and intuitive.
              </p>
            </div>

            {/* The Best Part Was Meeting People */}
            <h2 style={heading}>The Best Part Was Meeting People</h2>
            <p style={paragraph}>
              The sessions were amazing, but the conversations between them were just as valuable.
            </p>
            <p style={paragraph}>
              During breaks, I got the chance to interact with students, developers, designers, and startup founders. Everyone was open to sharing their experiences, discussing ideas, and talking about technology.
            </p>
            <p style={paragraph}>
              Since it was my first DevFest, I expected to feel a little nervous, but the community was incredibly welcoming. By the end of the day, I had met people who were just as passionate about building and learning as I was.
            </p>
            <figure style={figure}>
              <img src="/devfest 4.jpg" alt="Group selfie at DevFest" style={figImg} />
              <figcaption style={figCaption}>
                A group selfie with some of the amazing people I met &#8212; the community made the event unforgettable.
              </figcaption>
            </figure>

            {/* Winning a Goodie Bag */}
            <h2 style={heading}>Winning a Goodie Bag</h2>
            <p style={paragraph}>
              One of the most unexpected moments of the day was winning a <span style={highlight}>GDG Noida goodie bag</span>.
            </p>
            <figure style={figure}>
              <img src="/goodie.jpeg" alt="GDG Noida goodie bag" style={figImg} />
              <figcaption style={figCaption}>
                The goodie bag I won &#8212; a small surprise that made the day even more special.
              </figcaption>
            </figure>
            <p style={paragraph}>
              It was a small surprise, but it made the experience even more memorable. I still have it, and every time I look at it, it reminds me of everything I learned that day.
            </p>

            {/* What Was in the Swag Bag? */}
            <h2 style={heading}>What Was in the Swag Bag?</h2>
            <p style={paragraph}>Curiosity got the better of me, so I had to see what was inside.</p>
            <figure style={figure}>
              <img src="/what was in goodie.jpeg" alt="Contents of the goodie bag" style={figImg} />
              <figcaption style={figCaption}>
                The goodie bag contents &#8212; stickers, a notebook, a pen, and a lot of excitement.
              </figcaption>
            </figure>
            <p style={paragraph}>
              The bag had some cool stickers, a notebook, a pen, and a few other goodies. Honestly, it wasn't about what was inside &#8212; it was the fact that I won it. (And no, the MacBook in the photo was not part of the swag, unfortunately. A man can dream.)
            </p>

            {/* Finally Meeting Mona */}
            <h2 style={heading}>Finally Meeting Mona</h2>
            <p style={paragraph}>
              Another fun moment was finally seeing <span style={highlight}>Mona</span>, GitHub's mascot, in person.
            </p>
            <p style={paragraph}>
              It might seem like a small thing, but after seeing Mona on GitHub for years, it was exciting to see the mascot at the event. It was one of those little moments that made the day even more enjoyable.
            </p>
            <figure style={figure}>
              <img src="/devfest2.jpg" alt="GitHub mascot Mona" style={figImg} />
              <figcaption style={figCaption}>
                Finally meeting Mona in person &#8212; a small but memorable highlight of the day.
              </figcaption>
            </figure>

            {/* Looking Back */}
            <h2 style={heading}>Looking Back</h2>
            <p style={paragraph}>
              When I think about DevFest now, I don't just remember the technical sessions.
            </p>
            <p style={paragraph}>
              I remember the people I met, the conversations I had, the ideas I wrote down, the excitement of winning a goodie bag, and the feeling of being surrounded by a community that genuinely loves technology.
            </p>
            <p style={paragraph}>
              A huge thank you to the entire <span style={highlight}>GDG Noida</span> team and all the volunteers for organizing such a wonderful event. Everything was managed smoothly, and it was clear how much effort had gone into making the experience enjoyable for everyone.
            </p>
            <p style={paragraph}>
              My first DevFest gave me new ideas, new connections, and plenty of motivation to keep learning.
            </p>
            <p style={paragraph}>
              I'm already looking forward to attending many more community events in the future.
            </p>
          </div>

          {/* Back to Portfolio */}
          <div style={{ textAlign: 'center', marginTop: 48 }}>
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
                background: 'transparent',
                cursor: 'pointer',
              }}
            >
              &#8592; Back to Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
