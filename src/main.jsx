import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowUpRight, BriefcaseBusiness, Camera, Code2, Mail } from 'lucide-react'
import './styles.css'

const links = [
  { label: 'GitHub', href: 'https://github.com/ThilakesB', icon: Code2 },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/thilakeswaran-b-50b431280/', icon: BriefcaseBusiness },
  { label: 'Instagram', href: null, icon: Camera },
  { label: 'Email', href: 'mailto:thilakesb@gmail.com', icon: Mail },
]

function SocialLinks() {
  return (
    <nav className="social-links" aria-label="Social links">
      {links.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          className={`social-link ${!href ? 'is-disabled' : ''}`}
          href={href || undefined}
          target={href?.startsWith('http') ? '_blank' : undefined}
          rel={href?.startsWith('http') ? 'noreferrer' : undefined}
          aria-label={href ? label : `${label} link unavailable`}
          title={href ? label : `${label} link unavailable`}
          onClick={(event) => !href && event.preventDefault()}
        >
          <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
        </a>
      ))}
    </nav>
  )
}

function ProfilePanel() {
  return (
    <section className="profile-panel" aria-labelledby="profile-name">
      <div className="portrait-frame">
        <img className="portrait-image" src="/profile.png" alt="Portrait of Thilakeswaran B" />
      </div>
      <div className="identity">
        <p className="eyebrow">Portfolio / 2026</p>
        <h1 id="profile-name">Thilakeswaran B</h1>
        <p className="pronouns">(he/him)</p>
        <p className="role">Software Developer <span>&amp;</span> AI/ML Enthusiast</p>
      </div>
      <a className="email-button" href="mailto:thilakesb@gmail.com">
        Email me <ArrowUpRight size={17} aria-hidden="true" />
      </a>
    </section>
  )
}

function AboutPanel() {
  return (
    <section className="about-panel" aria-labelledby="about-title">
      <div className="about-content">
        <p className="section-kicker">01 / About</p>
        <h2 id="about-title">About Me</h2>
        <div className="rule" />
        <div className="intro">
          <p>
            I am Thilakeswaran, a final-year Computer Science and Engineering student
            specializing in Artificial Intelligence and Machine Learning. I enjoy building
            meaningful digital products and exploring AI, cybersecurity, cloud computing,
            and full-stack development.
          </p>
          <p>
            I love transforming ideas into real-world projects, experimenting with emerging
            technologies, and collaborating with developer communities. I am always open to
            exciting opportunities, collaborations, and innovative projects.
          </p>
        </div>
        <div className="action-row">
          <a className="outline-button" href="/Thilakeswaran-B-Resume.pdf" download>
            Download resume <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <a className="outline-button" href="https://github.com/ThilakesB" target="_blank" rel="noreferrer">
            Explore projects <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
      <footer className="about-footer">
        <p>Tamil Nadu, India</p>
        <SocialLinks />
      </footer>
    </section>
  )
}

function App() {
  return (
    <main className="portfolio-shell">
      <ProfilePanel />
      <AboutPanel />
    </main>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
