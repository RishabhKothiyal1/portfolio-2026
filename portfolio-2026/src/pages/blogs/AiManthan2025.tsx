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

const listItem: React.CSSProperties = {
  fontSize: 14,
  color: 'rgba(26,26,26,0.8)',
  padding: '5px 0 5px 24px',
  position: 'relative',
  lineHeight: 1.6,
}

export default function AiManthan2025() {
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
                13 December 2025
              </span>
            </div>
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(28px, 5vw, 42px)',
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
              AI Manthan 2025 at{' '}
              <img
                src="/google.png"
                alt="Google"
                style={{
                  height: '1.2em',
                  width: 'auto',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                  marginTop: 8,
                }}
              />
              Gurugram
            </h1>
            <p style={{ fontSize: 14, color: 'rgba(26,26,26,0.6)', marginTop: 4 }}>
              Hosted by GDG Cloud New Delhi
            </p>
          </div>

          {/* Content */}
          <div>
            <p style={paragraph}>
              Some events leave you with notes. Others leave you with ideas that continue to grow long after the event ends.
            </p>
            <p style={paragraph}>
              <span style={highlight}>AI Manthan 2025</span>, hosted by GDG Cloud New Delhi at the Google office in Gurugram, was one of those experiences for me. From insightful technical sessions to discussions around design, product thinking, and the future of AI systems, the event offered a complete learning experience that went beyond presentations and slides.
            </p>
            <p style={paragraph}>
              Walking into the Google office itself was exciting, but what truly made the day memorable was the quality of the conversations, the speakers, and the community. It was a gathering of developers, designers, AI enthusiasts, and students who shared the same curiosity about where technology is heading.
            </p>

            {/* Arriving at Google Gurugram */}
            <h2 style={heading}>Arriving at Google Gurugram</h2>
            <p style={paragraph}>
              Stepping into the Google office instantly set the tone for the day. The energy was incredible, with attendees networking, exchanging ideas, and eagerly waiting for the sessions to begin.
            </p>
            <p style={paragraph}>
              Seeing hundreds of passionate people in one place, all excited to learn and discuss artificial intelligence, reminded me why community events like these are so valuable. They bring together people from different backgrounds with one common goal&#8212;to learn, build, and grow.
            </p>
            <ImageGallery
              images={[
                { src: '/google office.jpg', alt: 'Google Office', caption: 'Walking into the Google office — the energy was incredible from the start.' },
                { src: '/arriving img google.jpg', alt: 'Arriving at Google', caption: 'The Google Gurugram office — an inspiring setting for a day of AI-focused learning.' },
                { src: '/registration desk.jpg', alt: 'Registration Desk', caption: 'AI Manthan Registrations Desk — where the journey began.' },
              ]}
            />

            {/* A Well-Balanced Technical Experience */}
            <h2 style={heading}>A Well-Balanced Technical Experience</h2>
            <p style={paragraph}>
              One thing I genuinely appreciated about AI Manthan 2025 was how balanced the event felt.
            </p>
            <p style={paragraph}>
              Instead of focusing on only one aspect of artificial intelligence, the sessions covered multiple perspectives:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0' }}>
              {['Large Language Models', 'Agentic AI Systems', 'Product Thinking', 'Design Principles', 'AI Applications', 'Developer Tools', 'Practical Workshops', 'Industry Discussions'].map((item) => (
                <li key={item} style={listItem}>
                  <span style={{ position: 'absolute', left: 0, color: '#FFD400', fontWeight: 700 }}>+</span>
                  {item}
                </li>
              ))}
            </ul>
            <p style={paragraph}>
              This made the event valuable regardless of whether you were interested in software engineering, AI research, design, or product development.
            </p>
            <p style={paragraph}>
              Each session built upon a different piece of the AI ecosystem, making the entire experience feel thoughtfully planned rather than a collection of unrelated talks.
            </p>
            <figure style={figure}>
              <img src="/main stage google.jpg" alt="Main stage at AI Manthan 2025" loading="lazy" style={figImg} />
              <figcaption style={figCaption}>
                The main stage &#8212; every session brought a fresh perspective on AI.
              </figcaption>
            </figure>

            {/* Understanding LLMs and Agent-Based Systems */}
            <h2 style={heading}>Understanding LLMs and Agent-Based Systems</h2>
            <div className="blog-session-card" style={sessionCard}>
              <div style={speaker}>Nikhil Sama Sir</div>
              <p style={paragraph}>
                The discussion explored Large Language Models and agent-based system design &#8212; not simply explaining how modern AI models work, but focusing on how intelligent systems should actually be designed.
              </p>
              <p style={paragraph}>
                Rather than treating AI as just another API, the session emphasized building structured systems where reasoning, planning, and execution work together.
              </p>
              <p style={paragraph}>A few important ideas that resonated with me included:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0' }}>
                {['Thinking in terms of workflows instead of isolated prompts.', 'Designing agents that can make decisions and complete tasks.', 'Breaking complex problems into smaller, manageable steps.', 'Building AI systems that are reliable, maintainable, and scalable.'].map((item) => (
                  <li key={item} style={listItem}>
                    <span style={{ position: 'absolute', left: 0, color: '#FFD400', fontWeight: 700 }}>+</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p style={paragraph}>The session reinforced an important lesson:</p>
              <blockquote style={blockquote}>
                Great AI products are not built only with powerful models &#8212; they are built with thoughtful system design.
              </blockquote>
              <p style={paragraph}>
                As someone interested in building AI-powered applications, this perspective was incredibly valuable.
              </p>
            </div>
            <figure style={figure}>
              <img src="/nikhil sama.jpg" alt="Nikhil Sama's session" loading="lazy" style={figImg} />
              <figcaption style={figCaption}>
                Nikhil Sama breaking down agent-based system design.
              </figcaption>
            </figure>

            {/* Design That Speaks Without Speaking */}
            <h2 style={heading}>Design That Speaks Without Speaking</h2>
            <div className="blog-session-card" style={sessionCard}>
              <div style={speaker}>Joy Banerjee Sir</div>
              <p style={paragraph}>
                The focus shifted from algorithms to something equally important &#8212; design.
              </p>
              <p style={paragraph}>
                One statement that stayed with me throughout the day was the idea that:
              </p>
              <blockquote style={blockquote}>
                Good design guides users naturally instead of demanding their attention.
              </blockquote>
              <p style={paragraph}>
                The session highlighted how thoughtful interfaces influence user behavior, simplify interactions, and create trust.
              </p>
              <p style={paragraph}>
                It served as a reminder that successful products are not only technically strong but also intuitive and enjoyable to use.
              </p>
              <p style={paragraph}>
                As developers, it's easy to focus solely on functionality, but this session demonstrated why design deserves equal attention when building products people genuinely love.
              </p>
            </div>
            <figure style={figure}>
              <img src="/joy sir google.jpg" alt="Joy Banerjee's design session" loading="lazy" style={figImg} />
              <figcaption style={figCaption}>
                Joy Banerjee exploring the intersection of design and user behavior.
              </figcaption>
            </figure>

            {/* Exploring the Future with Ravian AI */}
            <h2 style={heading}>Exploring the Future with Ravian AI</h2>
            <div className="blog-session-card" style={sessionCard}>
              <div style={speaker}>Lokesh Kumar Sir & SuryaPratap Singh Rathore Sir</div>
              <p style={paragraph}>
                One of the most interesting parts of the event was the introduction to <span style={highlight}>Ravian AI</span>.
              </p>
              <p style={paragraph}>
                Instead of viewing AI as a tool that simply generates responses, the session explored a broader vision where AI systems can:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0' }}>
                {['Observe', 'Plan', 'Decide', 'Execute', 'Adapt'].map((item) => (
                  <li key={item} style={listItem}>
                    <span style={{ position: 'absolute', left: 0, color: '#FFD400', fontWeight: 700 }}>+</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p style={paragraph}>
                The discussion shifted the focus from conversational AI to intelligent digital systems capable of acting within software environments.
              </p>
              <p style={paragraph}>
                This perspective opened up exciting possibilities for how AI can be integrated into future applications &#8212; not merely answering questions but actively assisting users in accomplishing complex tasks.
              </p>
              <p style={paragraph}>It was fascinating to see how rapidly this space is evolving.</p>
            </div>
            <figure style={figure}>
              <img src="/ravian ai.jpg" alt="Ravian AI presentation" loading="lazy" style={figImg} />
              <figcaption style={figCaption}>
                Lokesh Kumar and SuryaPratap Singh Rathore presenting the vision behind Ravian AI.
              </figcaption>
            </figure>

            {/* Industry Insights Through the Panel Discussion */}
            <h2 style={heading}>Industry Insights Through the Panel Discussion</h2>
            <div className="blog-session-card" style={sessionCard}>
              <div style={speaker}>Aman Bandvi Sir & Joy Banerjee Sir</div>
              <p style={paragraph}>
                The panel discussion provided a refreshing industry perspective.
              </p>
              <p style={paragraph}>
                Instead of theoretical concepts, the conversation centered around practical challenges faced while building products in today's AI landscape.
              </p>
              <p style={paragraph}>Topics included:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0' }}>
                {['Emerging AI trends', 'Product development strategies', 'Current industry practices', 'Career growth', 'Real-world expectations'].map((item) => (
                  <li key={item} style={listItem}>
                    <span style={{ position: 'absolute', left: 0, color: '#FFD400', fontWeight: 700 }}>+</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p style={paragraph}>
                Listening to professionals openly discuss both opportunities and challenges made the session particularly valuable.
              </p>
              <p style={paragraph}>
                It reminded me that continuous learning and adaptability remain some of the most important skills in technology.
              </p>
            </div>
            <figure style={figure}>
              <img src="/aman and joy sir.jpg" alt="Panel discussion" loading="lazy" style={figImg} />
              <figcaption style={figCaption}>
                Aman Bandvi and Joy Banerjee sharing practical industry insights.
              </figcaption>
            </figure>

            {/* Chrome DevTools Workshop */}
            <h2 style={heading}>Chrome DevTools Workshop</h2>
            <div className="blog-session-card" style={sessionCard}>
              <div style={speaker}>Saurabh Rajpal Sir</div>
              <p style={paragraph}>
                The day concluded with an engaging Chrome DevTools workshop.
              </p>
              <p style={paragraph}>
                Although Chrome DevTools is something many developers use regularly, the workshop introduced several techniques that can significantly improve debugging and development workflows.
              </p>
              <p style={paragraph}>The session was:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0' }}>
                {['Practical', 'Beginner-friendly', 'Interactive', 'Easy to follow'].map((item) => (
                  <li key={item} style={listItem}>
                    <span style={{ position: 'absolute', left: 0, color: '#FFD400', fontWeight: 700 }}>+</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p style={paragraph}>
                It served as a great reminder that mastering the tools we already have can often make us far more productive than constantly searching for new ones.
              </p>
            </div>
            <figure style={figure}>
              <img src="/saurabh sir.jpg" alt="Chrome DevTools workshop" loading="lazy" style={figImg} />
              <figcaption style={figCaption}>
                Saurabh Rajpal conducting the hands-on Chrome DevTools workshop.
              </figcaption>
            </figure>

            {/* Learning Beyond the Stage */}
            <h2 style={heading}>Learning Beyond the Stage</h2>
            <p style={paragraph}>
              While the sessions were excellent, one of the best parts of the event happened outside the auditorium.
            </p>
            <p style={paragraph}>
              Between talks and during breaks, I had the opportunity to interact with fellow developers, students, designers, and AI enthusiasts.
            </p>
            <p style={paragraph}>These conversations were filled with discussions about:</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0' }}>
              {['Side projects', 'Open source', 'Career paths', 'AI tools', 'Startups', 'Future collaborations'].map((item) => (
                <li key={item} style={listItem}>
                  <span style={{ position: 'absolute', left: 0, color: '#FFD400', fontWeight: 700 }}>+</span>
                  {item}
                </li>
              ))}
            </ul>
            <p style={paragraph}>
              Networking at community events isn't simply about exchanging LinkedIn profiles &#8212; it's about sharing experiences, learning from others, and discovering perspectives you might never encounter otherwise.
            </p>
            <p style={paragraph}>Those conversations were just as valuable as the sessions themselves.</p>
            <ImageGallery
              images={[
                { src: '/networking 1.jpg', alt: 'Networking', caption: 'The conversations between sessions were as enriching as the talks themselves.' },
                { src: '/networking 3.jpg', alt: 'Group Discussion', caption: 'Connecting with fellow developers and AI enthusiasts.' },
              ]}
            />

            {/* Appreciation for the Organizers */}
            <h2 style={heading}>Appreciation for the Organizers</h2>
            <p style={paragraph}>
              Events like AI Manthan require an incredible amount of planning behind the scenes.
            </p>
            <p style={paragraph}>
              A heartfelt thank you to <span style={highlight}>GDG Cloud New Delhi</span> for organizing such a well-structured event.
            </p>
            <p style={paragraph}>
              Special appreciation goes to <span style={highlight}>Abdullah Shahid</span> and <span style={highlight}>Mohd Kafeel Khan</span> for ensuring everything &#8212; from registrations and scheduling to audience engagement &#8212; ran smoothly throughout the day.
            </p>
            <p style={paragraph}>
              Their efforts created an environment where learning felt effortless and enjoyable.
            </p>
            <figure style={figure}>
              <img src="/networrking2.jpg" alt="AI Manthan organizers" loading="lazy" style={figImg} />
              <figcaption style={figCaption}>
                The team behind AI Manthan 2025 &#8212; their hard work made the event seamless.
              </figcaption>
            </figure>

            {/* My Key Takeaways */}
            <h2 style={heading}>My Key Takeaways</h2>
            <p style={paragraph}>Looking back, a few lessons stand out the most:</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0' }}>
              {[
                'AI systems should be designed thoughtfully, not just powered by large models.',
                'Great products combine engineering with exceptional design.',
                'Agentic AI represents an exciting direction for the future.',
                'Developer productivity often comes from mastering existing tools.',
                'Community events remain one of the best places to learn, network, and grow.',
              ].map((item) => (
                <li key={item} style={listItem}>
                  <span style={{ position: 'absolute', left: 0, color: '#FFD400', fontWeight: 700 }}>+</span>
                  {item}
                </li>
              ))}
            </ul>
            <p style={paragraph}>
              Every session contributed something different, making the overall experience incredibly well-rounded.
            </p>

            {/* Final Thoughts */}
            <h2 style={heading}>Final Thoughts</h2>
            <p style={paragraph}>
              AI Manthan 2025 wasn't just another technology conference &#8212; it was a day filled with learning, inspiration, and meaningful conversations.
            </p>
            <p style={paragraph}>
              I left the Google office with pages of notes, several new ideas for future projects, and an even stronger motivation to continue exploring artificial intelligence and modern software development.
            </p>
            <p style={paragraph}>
              A huge thank you once again to <span style={highlight}>GDG Cloud New Delhi</span>, all the speakers, volunteers, and organizers for creating such an impactful experience.
            </p>
            <p style={paragraph}>
              I'm looking forward to attending more community events like this, continuing to learn from experts, and connecting with people who share the same passion for technology.
            </p>
            <p style={paragraph}>Until the next event, happy building!</p>
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
