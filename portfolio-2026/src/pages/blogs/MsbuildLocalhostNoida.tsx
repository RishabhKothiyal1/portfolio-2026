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

export default function MsbuildLocalhostNoida() {
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
                18 June, 2026
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
              Microsoft{' '}
              <img
                src="/build.png"
                alt="BUILD"
                style={{
                  height: '1.2em',
                  width: 'auto',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                }}
              />
              <span
                style={{
                  color: '#FFD400',
                  textShadow: '-1px -1px 0 #1a1a1a, 1px -1px 0 #1a1a1a, -1px 1px 0 #1a1a1a, 1px 1px 0 #1a1a1a',
                }}
              >
                //localhost: Noida
              </span>
            </h1>
            <p style={{ fontSize: 14, color: 'rgba(26,26,26,0.6)', marginTop: 4 }}>
              Exploring the next generation of AI, cloud, and developer innovation.
            </p>
          </div>

          {/* Content */}
          <div>
            <ImageGallery
              images={[
                { src: '/microsoft-office.jpeg', alt: 'Microsoft Build //localhost: Noida', caption: 'Microsoft Build //localhost: Noida — A day dedicated to exploring the future of AI, cloud computing, and developer innovation.' },
                { src: '/build-venue.jpeg', alt: 'Build Venue', caption: 'The venue setup for Microsoft Build //localhost: Noida — ready for a day of learning and innovation.' },
              ]}
            />

            <p style={paragraph}>
              Technology conferences are more than just product announcements &#8212; they are places where ideas are exchanged, communities are built, and the future of software development begins to take shape.
            </p>
            <p style={paragraph}>
              I recently had the opportunity to attend <span style={highlight}>Microsoft Build //localhost: Noida</span>, an event that brought together developers, students, professionals, cloud architects, AI enthusiasts, and technology leaders to explore Microsoft's latest innovations.
            </p>
            <p style={paragraph}>
              Walking into the venue, the excitement was immediately noticeable. Developers from different backgrounds were discussing AI, cloud technologies, Azure, GitHub Copilot, and modern development practices. The atmosphere reflected one thing clearly:{' '}
              <span style={highlight}>
                Artificial Intelligence is no longer an emerging technology &#8212; it has become one of the foundations of the next generation of software.
              </span>
            </p>
            <p style={paragraph}>
              The event wasn't simply about introducing new technologies &#8212; it demonstrated how Microsoft's ecosystem is enabling developers to build intelligent, scalable, and enterprise-ready applications. Every session offered practical insights into how AI is reshaping software engineering and how developers can leverage these advancements in real-world projects.
            </p>

            {/* The Event Atmosphere */}
            <h2 style={heading}>The Event Atmosphere</h2>
            <p style={paragraph}>
              One of the things I appreciated most about the event was its vibrant and collaborative environment. The venue was filled with developers, students, industry professionals, and Microsoft experts, all eager to exchange ideas and learn from one another.
            </p>
            <p style={paragraph}>
              Whether it was during the keynote sessions, networking breaks, or technical discussions, there was a shared enthusiasm for innovation. It was inspiring to see people from different backgrounds coming together with a common goal &#8212; to explore the future of technology.
            </p>
            <figure style={figure}>
              <img src="/build intro 1.jpg" alt="Registration area" style={figImg} />
              <figcaption style={figCaption}>
                The excitement began right from the registration area as developers and technology enthusiasts gathered for a day full of learning and innovation.
              </figcaption>
            </figure>

            {/* The Evolution of AI */}
            <h2 style={heading}>The Evolution of AI: From Assistants to Intelligent Systems</h2>
            <p style={paragraph}>
              One of the strongest themes throughout the conference was the evolution of Artificial Intelligence.
            </p>
            <p style={paragraph}>
              For years, AI has primarily been viewed as a chatbot or virtual assistant capable of answering questions or generating content. However, Microsoft showcased a much broader vision.
            </p>
            <p style={paragraph}>
              Today's AI systems are evolving beyond simple text generation. They are becoming reasoning systems capable of understanding context, making decisions, coordinating multiple tasks, interacting with external tools, and producing meaningful outcomes.
            </p>
            <p style={paragraph}>Instead of asking,</p>
            <blockquote style={blockquote}>What can AI answer?</blockquote>
            <p style={paragraph}>the industry is now asking,</p>
            <blockquote style={blockquote}>What can AI accomplish?</blockquote>
            <p style={paragraph}>
              That shift in thinking completely changes how developers approach building software.
            </p>
            <figure style={figure}>
              <img src="/build 4.jpg" alt="Technical sessions" style={figImg} />
              <figcaption style={figCaption}>
                Technical sessions explored how AI is evolving from traditional assistants into intelligent systems capable of solving complex real-world problems.
              </figcaption>
            </figure>

            {/* Azure Cobalt 200 */}
            <h2 style={heading}>Azure Cobalt 200 Virtual Machines</h2>
            <div className="blog-session-card" style={sessionCard}>
              <div style={speaker}>Technical Session</div>
              <p style={paragraph}>
                One of the most technically fascinating sessions introduced <span style={highlight}>Azure Cobalt 200 Virtual Machines</span>.
              </p>
              <p style={paragraph}>
                Behind every powerful AI model lies equally powerful infrastructure. Microsoft explained how its custom-built Cobalt processors are designed specifically for cloud-native workloads and modern AI applications.
              </p>
              <p style={paragraph}>
                Unlike traditional processors built for general-purpose computing, these processors are optimized for:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0' }}>
                {['High-performance AI workloads', 'Better energy efficiency', 'Enterprise scalability', 'Faster inference', 'Improved cloud performance'].map((item) => (
                  <li key={item} style={listItem}>
                    <span style={{ position: 'absolute', left: 0, color: '#FFD400', fontWeight: 700 }}>+</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p style={paragraph}>
                This session highlighted that innovation in AI doesn't stop at models &#8212; it extends deep into the hardware powering the cloud.
              </p>
            </div>

            {/* Azure AI Foundry */}
            <h2 style={heading}>Azure AI Foundry</h2>
            <div className="blog-session-card" style={sessionCard}>
              <div style={speaker}>Technical Session</div>
              <p style={paragraph}>
                Another major highlight was <span style={highlight}>Azure AI Foundry</span>.
              </p>
              <p style={paragraph}>
                Building AI-powered applications involves much more than connecting an LLM to an interface. Azure AI Foundry provides developers with a complete ecosystem for building, customizing, evaluating, deploying, and monitoring enterprise-ready AI applications.
              </p>
              <p style={paragraph}>Some capabilities include:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0' }}>
                {['Foundation model integration', 'Prompt engineering', 'Fine-tuning', 'Model evaluation', 'Enterprise data integration', 'Responsible AI practices', 'Secure deployment', 'Monitoring and observability'].map((item) => (
                  <li key={item} style={listItem}>
                    <span style={{ position: 'absolute', left: 0, color: '#FFD400', fontWeight: 700 }}>+</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p style={paragraph}>
                The session reinforced the importance of building AI systems that are not only intelligent but also secure, reliable, and production-ready.
              </p>
            </div>
            <figure style={figure}>
              <img src="/azure cobalt 200.jpeg" alt="Azure AI Foundry session" style={figImg} />
              <figcaption style={figCaption}>
                Learning how Azure AI Foundry simplifies the development and deployment of enterprise-grade AI applications.
              </figcaption>
            </figure>

            {/* Microsoft Discovery */}
            <h2 style={heading}>Microsoft Discovery</h2>
            <p style={paragraph}>
              Among all the announcements, <span style={highlight}>Microsoft Discovery</span> stood out as one of the most inspiring.
            </p>
            <p style={paragraph}>
              Instead of focusing only on software development, Microsoft demonstrated how AI can assist scientists and researchers by accelerating experimentation, analyzing complex datasets, identifying patterns, and generating new hypotheses.
            </p>
            <p style={paragraph}>
              It was exciting to see AI being positioned as a catalyst for innovation in fields such as healthcare, biology, chemistry, and environmental science.
            </p>
            <figure style={figure}>
              <img src="/build event 1.jpeg" alt="Microsoft Discovery session" style={figImg} />
              <figcaption style={figCaption}>
                Exploring how AI is accelerating scientific research and opening new possibilities for innovation.
              </figcaption>
            </figure>

            {/* CoreUtils for Windows */}
            <h2 style={heading}>CoreUtils for Windows</h2>
            <p style={paragraph}>
              As someone who frequently works across different development environments, I found the announcement of <span style={highlight}>CoreUtils for Windows</span> particularly interesting.
            </p>
            <p style={paragraph}>
              Bringing familiar Linux command-line utilities directly to Windows reduces friction for developers and creates a smoother cross-platform development experience.
            </p>
            <p style={paragraph}>
              Although it may seem like a smaller announcement compared to AI, improvements like these have a significant impact on developers' day-to-day workflows.
            </p>

            {/* Agentic AI */}
            <h2 style={heading}>Agentic AI &#8212; The Highlight of the Event</h2>
            <div className="blog-session-card" style={sessionCard}>
              <div style={speaker}>Key Concept</div>
              <p style={paragraph}>
                The concept that fascinated me the most throughout the conference was <span style={highlight}>Agentic AI</span>.
              </p>
              <p style={paragraph}>
                Traditional AI systems generally follow a simple pattern: <strong>Input &#8594; Output</strong>
              </p>
              <p style={paragraph}>
                Agentic AI introduces an intelligent orchestrator that performs several steps before generating a response.
              </p>
              <p style={paragraph}>These include:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0' }}>
                {['Understanding user intent', 'Breaking problems into subtasks', 'Retrieving relevant information', 'Using external tools', 'Reasoning through multiple steps', 'Evaluating intermediate outcomes', 'Producing an informed response'].map((item) => (
                  <li key={item} style={listItem}>
                    <span style={{ position: 'absolute', left: 0, color: '#FFD400', fontWeight: 700 }}>+</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p style={paragraph}>
                This architecture enables AI systems to solve much more complex problems than traditional conversational models.
              </p>
              <p style={paragraph}>
                The session completely changed my perspective on how intelligent software systems will be built in the coming years.
              </p>
            </div>
            <figure style={figure}>
              <img src="/agent1.jpeg" alt="Agentic AI architecture" style={figImg} />
              <figcaption style={figCaption}>
                One of the most exciting concepts discussed at the event &#8212; Agentic AI, where intelligent agents reason, plan, retrieve information, and use tools before generating responses.
              </figcaption>
            </figure>

            {/* Learning Beyond the Sessions */}
            <h2 style={heading}>Learning Beyond the Sessions</h2>
            <p style={paragraph}>
              While the technical sessions were incredibly insightful, one of the most rewarding aspects of the event was the opportunity to connect with fellow developers.
            </p>
            <p style={paragraph}>
              Conversations during networking breaks often led to discussions about open-source projects, AI experimentation, cloud computing, career growth, and emerging technologies.
            </p>
            <p style={paragraph}>
              These interactions reminded me that some of the best learning happens outside the presentation hall.
            </p>

            {/* Appreciation for the Speakers */}
            <h2 style={heading}>Appreciation for the Speakers</h2>
            <p style={paragraph}>
              A heartfelt thank you to the incredible speakers who shared their knowledge and practical experiences throughout the event.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0' }}>
              {['Shivani Joshi', 'Manisha Talreja', 'Sarthak Jain'].map((item) => (
                <li key={item} style={listItem}>
                  <span style={{ position: 'absolute', left: 0, color: '#FFD400', fontWeight: 700 }}>+</span>
                  {item}
                </li>
              ))}
            </ul>
            <p style={paragraph}>
              Their sessions were informative, engaging, and filled with practical insights into Microsoft's AI ecosystem, cloud technologies, and developer tools.
            </p>

            {/* Capturing Memories */}
            <h2 style={heading}>Capturing Memories</h2>
            <p style={paragraph}>
              Events like Microsoft Build are not just about learning &#8212; they're also about creating memorable experiences and building lasting connections within the developer community.
            </p>
            <p style={paragraph}>
              Taking a few moments to capture memories with fellow attendees made the experience even more special.
            </p>
            <ImageGallery
              images={[
                { src: '/group1.jpeg', alt: 'Selfie with fellow attendees', caption: 'Ending the day with new connections, fresh ideas, and unforgettable memories from Microsoft Build //localhost: Noida.' },
                { src: '/group2.jpeg', alt: 'Group selfie at Microsoft Build', caption: 'The amazing community at Microsoft Build //localhost: Noida — developers, students, and tech enthusiasts coming together.' },
                { src: '/group3.jpeg', alt: 'Group photo at Microsoft Build', caption: 'Memories from Microsoft Build //localhost: Noida — a day of learning, connection, and inspiration.' },
              ]}
            />

            {/* Key Takeaways */}
            <h2 style={heading}>Key Takeaways</h2>
            <p style={paragraph}>The conference left me with several important lessons:</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0' }}>
              {[
                'AI is evolving from assistants to intelligent reasoning systems.',
                'Enterprise AI requires robust infrastructure, governance, and scalability.',
                "Microsoft's investment in custom hardware demonstrates the growing importance of AI infrastructure.",
                'Platforms like Azure AI Foundry simplify the journey from AI experimentation to production.',
                'AI has the potential to transform not only software development but also scientific research and enterprise innovation.',
                'Continuous learning and community engagement remain essential for developers in this rapidly evolving landscape.',
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
              Microsoft Build //localhost: Noida was much more than a technical conference &#8212; it was an opportunity to witness the future of software development unfolding in real time.
            </p>
            <p style={paragraph}>
              From <span style={highlight}>Azure Cobalt 200 Virtual Machines</span> and <span style={highlight}>Azure AI Foundry</span> to <span style={highlight}>Microsoft Discovery</span>, <span style={highlight}>CoreUtils for Windows</span>, and the transformative potential of <span style={highlight}>Agentic AI</span>, every session provided valuable insights into where technology is headed.
            </p>
            <p style={paragraph}>
              The event reinforced that the future belongs to developers who are willing to continuously learn, experiment, and embrace emerging technologies. AI is no longer just a feature &#8212; it is becoming an integral part of software engineering, cloud computing, research, and enterprise solutions.
            </p>
            <p style={paragraph}>
              I am grateful to Microsoft for organizing such an insightful event and to all the speakers for sharing their expertise. I leave inspired to continue exploring these technologies, applying these learnings to future projects, and contributing to the ever-growing developer community.
            </p>
            <p style={paragraph}>
              Every conference leaves behind knowledge, connections, and memories. Microsoft Build //localhost: Noida gave me all three, and I look forward to applying these learnings in the projects and challenges ahead.
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
