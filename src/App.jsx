import { Mail, MapPin, ExternalLink, Music, Cpu, Server, Bot, Cloud } from 'lucide-react'

function GitHubIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  )
}

function LinkedInIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="nav-logo"><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Jan Beckschewe</a></div>
        <ul className="nav-links">
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src="/lufthansa-a350-100-years-night-at-muc.avif" alt="" />
      </div>
      <div className="hero-content">
        <div className="hero-portrait">
          <img src="/jan-suit-face.avif" alt="Jan Beckschewe" />
        </div>
        <h1>Jan Beckschewe</h1>
        <p className="hero-subtitle">
          Software engineer with a M.Sc. in Computer Science from TU Berlin.
          Experienced in full-stack development, embedded UI systems, and AI.
          Passionate about building impactful software.
        </p>
        <div className="hero-links">
          <a href="https://github.com/jan-be" target="_blank" rel="noreferrer" className="btn btn-primary">
            <GitHubIcon size={18} /> GitHub
          </a>
          <a href="https://linkedin.com/in/jan-be" target="_blank" rel="noreferrer" className="btn btn-outline">
            <LinkedInIcon size={18} /> LinkedIn
          </a>
          <a href="mailto:jan@janbe.eu" className="btn btn-outline">
            <Mail size={18} /> Email
          </a>
        </div>
      </div>
    </section>
  )
}

function Experience() {
  const jobs = [
    {
      title: 'Software Engineering Intern',
      company: 'Lufthansa Technik AG (NICE Cabin Systems)',
      location: 'Hamburg, Germany',
      date: 'Nov 2025 - May 2026',
      logo: '/lufthansa_technik_logo.avif',
      image: '/jan-wide-shot-in-front-of-aircraft.avif',
      bullets: [
        'Main Qt/QML developer of a first-of-its-kind passenger control device featuring a touchscreen with a donut-shaped carveout acting as a rotary dial for cabin lighting, temperature, and entertainment.',
        'Eliminated rebuild wait times by building a custom hot-reloading plugin for Qt, enabling instant UI iteration during VIP In-Flight Entertainment development.',
        'Enabled next-generation internet access for passengers by integrating Starlink satellite connectivity into the Global 8000 IFE platform.',
        'Prototyped an AI-driven analytics pipeline spanning C++ telemetry on-aircraft, a FastAPI backend, and a React dashboard to align feature development with actual passenger needs.',
      ],
      tags: ['Qt/QML', 'C++', 'FastAPI', 'React', 'Starlink', 'Embedded UI'],
    },
    {
      title: 'Software Engineering Intern',
      company: 'Mittwald CM Service GmbH & Co. KG',
      location: 'Espelkamp, Germany',
      date: 'June - Sept 2018',
      logo: '/mittwald_logo.avif',
      bullets: [
        'Streamlined internal food ordering by building a system with PHP Slim, MySQL, and AngularJS.',
        'Reduced customer issue resolution time by adding context-sensitive action recommendations to the ticketing system with PHP Slim and Vue.js.',
      ],
      tags: ['PHP Slim', 'MySQL', 'AngularJS', 'Vue.js'],
    },
  ]

  return (
    <section id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="cards-grid">
        {jobs.map((job, i) => (
          <div className="card" key={i}>
            {job.image && (
              <div className="card-image">
                <img src={job.image} alt={job.company} />
              </div>
            )}
            <div className="card-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <img src={job.logo} alt={job.company} className="company-logo" />
                <div>
                  <div className="card-title">{job.title}</div>
                  <div className="card-subtitle">{job.company}</div>
                </div>
              </div>
              <span className="card-date">{job.date}</span>
            </div>
            <div className="card-location">
              <MapPin size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
              {job.location}
            </div>
            <div className="card-description">
              <ul>
                {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
            <div className="card-tags">
              {job.tags.map((t, j) => <span className="tag" key={j}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Education() {
  const degrees = [
    {
      degree: 'Master of Science in Computer Science',
      school: 'TU Berlin',
      date: '2022 - 2024',
      grade: 'Final grade: 1.5 (very good)',
      thesis: 'A Software Testbed for Drone Anti-Collision Systems Leveraging 6G Edge Computing',
      thesisUrl: 'https://github.com/jan-be/skybed/blob/main/documentation/thesis.pdf',
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'TU Berlin',
      date: '2018 - 2022',
      grade: 'Final grade: 2.4 (good)',
      thesis: 'A Unified Interface for Real Time Interactions on a Knowledge Graph',
    },
  ]

  return (
    <section id="education">
      <h2 className="section-title">Education</h2>
      <div className="education-grid">
        {degrees.map((d, i) => (
          <div className="card" key={i}>
            <div className="card-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <img src="/tu-berlin-icon.avif" alt="TU Berlin" className="company-logo" />
                <div>
                  <div className="card-title">{d.degree}</div>
                  <div className="card-subtitle">{d.school}</div>
                </div>
              </div>
              <span className="card-date">{d.date}</span>
            </div>
            <div className="card-description">
              <p style={{ marginBottom: '0.5rem' }}>{d.grade}</p>
              <p><strong>Thesis:</strong>{' '}
                {d.thesisUrl ? (
                  <a href={d.thesisUrl} target="_blank" rel="noreferrer">
                    {d.thesis} <ExternalLink size={12} style={{ display: 'inline', verticalAlign: 'middle' }} />
                  </a>
                ) : d.thesis}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  const projects = [
    {
      name: 'Singpro',
      description: 'Online singing competition game',
      url: 'https://singpro.app/',
      image: '/singpro-screenshot.avif',
      date: '2026',
      bullets: [
        'Built a karaoke web-app with real-time pitch accuracy scoring for 27,000+ songs and seamless online multiplayer.',
        'Added AI-based instrument-voice separation pipeline.',
        'Features include real-time pitch detection via ONNX/Web Audio API, WebSocket multiplayer, 21 language support, and Spotify-Wrapped-style share cards.',
      ],
      tags: ['React 19', 'TypeScript', 'Express.js', 'WebSocket', 'Web Audio API', 'Docker'],
    },
    {
      name: 'Skybed',
      description: 'Edge computing testbed for drone software',
      url: 'https://github.com/jan-be/skybed',
      image: '/skybed-screenshot.avif',
      date: '2024',
      bullets: [
        'Developed a scalable testbed for autonomous drone development and monitoring as master\'s thesis.',
        'Simulated 600+ concurrent drones in isolated Docker containers with user-deployable software.',
        'Monitored cell connectivity and visualized drone status via a real-time web interface with interactive map.',
        'Features collision detection using ball-tree algorithm and cellular network emulation.',
      ],
      tags: ['Python', 'FastAPI', 'Docker', 'GCP', 'ns-3'],
    },
    {
      name: '5G-Neural-Network',
      description: 'AI-powered 5G bandwidth predictor',
      url: 'https://github.com/jan-be/5G-neural-network',
      image: '/5g-neural-networks-loss-plot.avif',
      date: '2023',
      bullets: [
        'Designed a neural network-based link bandwidth predictor for 5G networks.',
        'Generated a synthetic dataset via ns-3 simulations, trained models with distributed Ray.',
        'Improved performance 400-fold compared to simulation.',
      ],
      tags: ['Python', 'PyTorch', 'FastAPI', 'Ray', 'Docker'],
    },
    {
      name: 'OpenCV Mazesolver',
      description: 'Raspberry Pi robot with computer vision',
      url: 'https://github.com/jan-be/opencv-mazesolver',
      image: '/mazesolver-vehicle.avif',
      date: '2019',
      bullets: [
        'Built a Raspberry Pi-based robot that autonomously navigates a maze using OpenCV computer vision.',
        'Live camera feed and maze solution visualization via a web interface.',
      ],
      tags: ['Python', 'OpenCV', 'Raspberry Pi', 'WebSocket'],
    },
    {
      name: 'Homelab',
      description: 'Self-hosted personal server infrastructure',
      url: null,
      image: '/home-assistant-dashboard.avif',
      date: '2020 - now',
      bullets: [
        'Run applications in containers and VMs with availability monitoring and secure remote access.',
        'Capture and visualize smart home data (temperature sensors, PV energy generation) with Grafana.',
      ],
      tags: ['Linux', 'Docker', 'Traefik', 'Proxmox', 'Grafana'],
    },
    {
      name: 'AWS Bootcamp',
      description: 'Interactive web game teaching AWS services',
      url: 'https://slsgame.janbe.eu/',
      image: '/aws-bootcamp-screenshot.avif',
      date: '2019',
      bullets: [
        'Created an interactive web game teaching 17 AWS services across 10 levels.',
        'Built a CI/CD pipeline for automated deployments, added cloud-based game saves.',
      ],
      tags: ['JavaScript', 'React.js', 'AWS EC2', 'S3', 'DynamoDB', 'Lambda'],
    },
  ]

  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="cards-grid">
        {projects.map((p, i) => (
          <div className="card" key={i}>
            {p.image && (
              <div className="card-image">
                <img src={p.image} alt={p.name} />
              </div>
            )}
            <div className="card-header">
              <div>
                <div className="card-title">
                  {p.url ? (
                    <a href={p.url} target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>
                      {p.name} <ExternalLink size={14} style={{ display: 'inline', verticalAlign: 'middle' }} />
                    </a>
                  ) : p.name}
                </div>
                <div className="card-subtitle">{p.description}</div>
              </div>
              <span className="card-date">{p.date}</span>
            </div>
            <div className="card-description">
              <ul>
                {p.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
            <div className="card-tags">
              {p.tags.map((t, j) => <span className="tag" key={j}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Skills() {
  const categories = [
    { name: 'Languages', items: ['Python', 'JavaScript/TypeScript', 'QML', 'PHP', 'Java', 'C++'] },
    { name: 'Frameworks', items: ['PyTorch', 'Node.js', 'React.js', 'FastAPI', 'Qt', 'Express.js', 'Vue.js'] },
    { name: 'Tools & Platforms', items: ['Docker', 'Linux', 'CI/CD', 'Git', 'REST APIs', 'Proxmox', 'Grafana', 'Traefik'] },
    { name: 'Cloud', items: ['AWS (EC2, S3, DynamoDB, Lambda)', 'GCP Compute Engine'] },
    { name: 'Specializations', items: ['Full-Stack', 'Embedded UI', 'Edge Computing', 'AI/ML', 'Real-time Systems'] },
  ]

  return (
    <section id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {categories.map((cat, i) => (
          <div className="skill-category" key={i}>
            <h3>{cat.name}</h3>
            <div className="skill-items">
              {cat.items.map((item, j) => (
                <span className="skill-item" key={j}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  const contacts = [
    { icon: <Mail size={20} />, label: 'Email', value: 'jan@janbe.eu', href: 'mailto:jan@janbe.eu' },
    { icon: <LinkedInIcon size={20} />, label: 'LinkedIn', value: 'linkedin.com/in/jan-be', href: 'https://linkedin.com/in/jan-be' },
    { icon: <GitHubIcon size={20} />, label: 'GitHub', value: 'github.com/jan-be', href: 'https://github.com/jan-be' },
    { icon: <MapPin size={20} />, label: 'Location', value: 'Hamburg, Germany', href: null },
  ]

  return (
    <section id="contact">
      <h2 className="section-title">Contact</h2>
      <div className="contact-grid">
        {contacts.map((c, i) => (
          <a
            key={i}
            className="contact-item"
            href={c.href || '#'}
            target={c.href?.startsWith('http') ? '_blank' : undefined}
            rel={c.href?.startsWith('http') ? 'noreferrer' : undefined}
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            <div className="contact-icon">{c.icon}</div>
            <div>
              <div className="contact-label">{c.label}</div>
              <div className="contact-value">{c.value}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>Jan Beckschewe &copy; {new Date().getFullYear()}</p>
    </footer>
  )
}

export default App
