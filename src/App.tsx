import { useCallback, useEffect, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Certificate,
  Check,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  List,
  MapPin,
  Phone,
  X,
} from "@phosphor-icons/react";
import {
  certifications,
  education,
  experience,
  profile,
  projects,
  skillGroups,
  stats,
} from "./data";
import type { Project } from "./data";

const ICON_WEIGHT = "regular" as const;

const navItems = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const typedWords = ["Software Engineer", "Full-Stack Developer", "Python · Java · TypeScript"];

/* Gmail compose link: opens in the browser, no mail app needed */
function gmailLink(to: string, subject = "", body = "") {
  const params = new URLSearchParams({ view: "cm", fs: "1", to });
  if (subject) params.set("su", subject);
  if (body) params.set("body", body);
  return `https://mail.google.com/mail/?${params.toString()}`;
}

/* Filter projects into tabs based on their tech stack */
type Filter = "All" | "Back-End" | "AI / ML";

function projectCategory(project: Project): Exclude<Filter, "All"> {
  const isAi = project.stack.some((tech) => ["TensorFlow", "OpenCV", "Fast R-CNN"].includes(tech));
  return isAi ? "AI / ML" : "Back-End";
}

/* ---------- Typing text ---------- */

function Typewriter({ words }: { words: string[] }) {
  const prefersReducedMotion =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const [text, setText] = useState(prefersReducedMotion ? words[0] : "");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const current = words[wordIndex];
    const timer = window.setTimeout(() => {
      if (!deleting) {
        if (text.length < current.length) {
          setText(current.slice(0, text.length + 1));
        } else {
          window.setTimeout(() => setDeleting(true), 1400);
        }
      } else if (text.length > 0) {
        setText(current.slice(0, text.length - 1));
      } else {
        setDeleting(false);
        setWordIndex((index) => (index + 1) % words.length);
      }
    }, deleting ? 40 : 90);

    return () => window.clearTimeout(timer);
  }, [text, deleting, wordIndex, words, prefersReducedMotion]);

  return (
    <span className="typed-line">
      <span>{text}</span>
      <span className="typed-cursor" aria-hidden="true" />
    </span>
  );
}

/* ---------- Header ---------- */

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-inner">
        <a href="#top" className="brand">
          <img className="brand-logo" src="/logo.png" alt="" width={36} height={36} />
          <span className="brand-text">
            Tamilarasan<span>.</span>
          </span>
        </a>

        <nav id="site-nav" className={`site-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="menu-btn"
          aria-controls="site-nav"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} weight={ICON_WEIGHT} /> : <List size={22} weight={ICON_WEIGHT} />}
        </button>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */

function Hero({ onPhotoClick }: { onPhotoClick: () => void }) {
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="hero-intro reveal">Hey, I'm</p>
          <h1 className="hero-name reveal reveal-delay-1">{profile.name}</h1>
          <div className="hero-role reveal reveal-delay-2">
            <Typewriter words={typedWords} />
          </div>
          <p className="hero-tagline reveal reveal-delay-2">{profile.tagline}</p>

          <div className="hero-actions reveal reveal-delay-3">
            <a className="btn-rose" href="#projects">
              View projects
              <ArrowRight size={18} weight={ICON_WEIGHT} />
            </a>
            <a className="btn-outline" href="#contact">
              Contact me
            </a>
            <a className="btn-outline" href="/resume.pdf" download="Tamilarasan_V_Resume.pdf">
              Download resume
            </a>
          </div>
        </div>

        <div className="hero-photo-wrap reveal reveal-delay-1">
          <button
            type="button"
            className="hero-photo-btn"
            onClick={onPhotoClick}
            aria-label="View photo larger"
          >
            <img className="hero-photo" src="/profile.jpg" alt="Portrait of Tamilarasan V" width={700} height={877} />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------- Section heading ---------- */

function SectionHead({ eyebrow, title }: { eyebrow: string; title: ReactNode }) {
  return (
    <div className="section-head reveal">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
    </div>
  );
}

/* ---------- About / bio with counters ---------- */

function About() {
  return (
    <section id="about" className="section container">
      <SectionHead
        eyebrow="About me"
        title={
          <>
            My <span>Bio</span>
          </>
        }
      />

      <div className="about-grid">
        <div className="about-text reveal">
          <h3>Software engineer who owns production systems end to end.</h3>
          {profile.about.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
          <ul className="about-points">
            {["Ownership from schema to deployment", "Clear architecture and documentation", "Practical tradeoffs over complexity"].map(
              (point) => (
                <li key={point}>
                  <Check size={16} weight="bold" aria-hidden="true" />
                  {point}
                </li>
              ),
            )}
          </ul>
        </div>

        <div className="counter-grid reveal reveal-delay-1">
          {stats.map((stat) => (
            <div key={stat.label} className="counter-card">
              <div className="counter-value">{stat.value}</div>
              <div className="counter-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Skills ---------- */

function Skills() {
  return (
    <section id="skills" className="section container">
      <SectionHead
        eyebrow="Skills"
        title={
          <>
            Skills & <span>Tools</span>
          </>
        }
      />

      <div className="skill-grid">
        {skillGroups.map((group, index) => (
          <div key={group.label} className={`skill-card reveal reveal-delay-${(index % 3) + 1}`}>
            <h3>{group.label}</h3>
            <ul className="chips">
              {group.items.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="cert-row-grid">
        {certifications.map((cert) => (
          <div key={cert.name} className="cert-item reveal">
            <span className="cert-icon" aria-hidden="true">
              <Certificate size={20} weight={ICON_WEIGHT} />
            </span>
            <div>
              <h4>{cert.name}</h4>
              <p>{cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Experience & education timeline ---------- */

function Experience() {
  return (
    <section id="experience" className="section container">
      <SectionHead
        eyebrow="Experience"
        title={
          <>
            Experience & <span>Education</span>
          </>
        }
      />

      <div className="timeline">
        {experience.map((job) => (
          <article key={job.role + job.company} className="timeline-item reveal">
            <div className="timeline-dot" aria-hidden="true" />
            <p className="timeline-period">{job.period}</p>
            <h3>{job.role}</h3>
            <p className="timeline-company">{job.company}</p>
            <ul>
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}

        <article className="timeline-item reveal">
          <div className="timeline-dot" aria-hidden="true" />
          <p className="timeline-period">{education.period}</p>
          <h3>{education.degree}</h3>
          <p className="timeline-company">{education.school}</p>
          <p className="timeline-note">{education.detail}</p>
        </article>
      </div>
    </section>
  );
}

/* ---------- Projects with filter tabs ---------- */

function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const filters: Filter[] = ["All", "Back-End", "AI / ML"];
  const visible = projects.filter((project) => filter === "All" || projectCategory(project) === filter);

  return (
    <section id="projects" className="section container">
      <SectionHead
        eyebrow="Projects"
        title={
          <>
            My <span>Projects</span>
          </>
        }
      />

      <div className="filter-tabs reveal" role="tablist" aria-label="Filter projects">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            role="tab"
            aria-selected={filter === item}
            className={`filter-tab ${filter === item ? "is-active" : ""}`}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {visible.map((project, index) => (
          <article key={project.title} className="project-card reveal" style={{ animationDelay: `${index * 0.05}s` }}>
            <div className="project-top">
              <span className="project-num">{String(index + 1).padStart(2, "0")}</span>
              <span className="project-context">{project.context}</span>
            </div>
            <h3>{project.title}</h3>
            <p className="project-summary">{project.summary}</p>
            <ul className="project-highlights">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="project-stack">
              {project.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------- Contact form (opens Gmail with the message filled in) ---------- */

function Contact() {
  const [name, setName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const body = `From: ${name} (${senderEmail})\n\n${message}`;
    window.open(gmailLink(profile.email, subject, body), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contact" className="section container">
      <SectionHead
        eyebrow="Contact"
        title={
          <>
            Let's Work <span>Together</span>
          </>
        }
      />

      <div className="contact-grid">
        <div className="contact-info reveal">
          <p>
            I am open to backend, full-stack and data-focused engineering roles. Send a message and it will open in
            Gmail, ready to send.
          </p>

          <a href={gmailLink(profile.email)} target="_blank" rel="noreferrer" className="contact-line">
            <EnvelopeSimple size={20} weight={ICON_WEIGHT} />
            {profile.email}
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="contact-line">
            <Phone size={20} weight={ICON_WEIGHT} />
            {profile.phone}
          </a>
          <a href={`tel:${profile.altPhone.replace(/\s/g, "")}`} className="contact-line">
            <Phone size={20} weight={ICON_WEIGHT} />
            {profile.altPhone}
          </a>
          <span className="contact-line">
            <MapPin size={20} weight={ICON_WEIGHT} />
            {profile.location}
          </span>

          <div className="social-row">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedinLogo size={22} weight={ICON_WEIGHT} />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GithubLogo size={22} weight={ICON_WEIGHT} />
            </a>
            <a href={gmailLink(profile.email)} target="_blank" rel="noreferrer" aria-label="Email in Gmail">
              <EnvelopeSimple size={22} weight={ICON_WEIGHT} />
            </a>
          </div>
        </div>

        <form className="contact-form reveal reveal-delay-1" onSubmit={handleSubmit}>
          <label>
            <span>Your name</span>
            <input value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
          <label>
            <span>Your email</span>
            <input type="email" value={senderEmail} onChange={(e) => setSenderEmail(e.target.value)} required />
          </label>
          <label>
            <span>Subject</span>
            <input value={subject} onChange={(e) => setSubject(e.target.value)} required />
          </label>
          <label>
            <span>Message</span>
            <textarea rows={5} value={message} onChange={(e) => setMessage(e.target.value)} required />
          </label>
          <button type="submit" className="btn-rose">
            Send message
            <ArrowUpRight size={18} weight={ICON_WEIGHT} />
          </button>
        </form>
      </div>
    </section>
  );
}

/* ---------- Photo lightbox (click the hero photo to enlarge) ---------- */

function PhotoLightbox({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo of Tamilarasan V" onClick={onClose}>
      <button type="button" className="lightbox-close" aria-label="Close photo" onClick={onClose}>
        <X size={22} weight={ICON_WEIGHT} />
      </button>
      <img
        className="lightbox-img"
        src="/profile.jpg"
        alt="Portrait of Tamilarasan V"
        onClick={(event) => event.stopPropagation()}
      />
    </div>
  );
}

/* ---------- Footer ---------- */

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  );
}

/* ---------- Floating back-to-top ---------- */

function FloatingTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a className="fab-top" href="#top" aria-label="Back to top">
      <ArrowUp size={20} weight={ICON_WEIGHT} />
    </a>
  );
}

/* ---------- Scroll reveal ---------- */

function useRevealOnScroll() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

export default function App() {
  useRevealOnScroll();
  const [photoOpen, setPhotoOpen] = useState(false);
  const closePhoto = useCallback(() => setPhotoOpen(false), []);

  return (
    <>
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <Header />
      <main>
        <Hero onPhotoClick={() => setPhotoOpen(true)} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <FloatingTop />
      <PhotoLightbox open={photoOpen} onClose={closePhoto} />
    </>
  );
}
