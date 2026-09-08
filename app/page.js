const profileImage = 'https://raw.githubusercontent.com/jettevar/jaytevar/main/profile.jpg';

const projects = [
  { title:'Unscoped', type:'Product development', desc:'A contractor quoting and tracking platform built to make pricing, proposals, and project follow-up easier.', meta:'Product development · Web app · Supabase · Vercel', url:'https://getunscoped.com', logo:'/logos/unscoped.svg', image:'https://images.unsplash.com/photo-1771868453049-b7b4a4680b5c?auto=format&fit=crop&fm=jpg&q=75&w=1200' },
  { title:'Cake Sumo', type:'Web application', desc:'A quoting tool for custom cake orders, from pricing and order details to a clear customer proposal.', meta:'Product concept · Workflow design · Web app · AI-assisted', url:'https://cakesumo.vercel.app', logo:'/logos/cake-sumo.svg', image:'https://images.unsplash.com/photo-1778790508237-3c6cb00f152a?auto=format&fit=crop&fm=jpg&q=75&w=1200' },
  { title:'Blumentritt Avenue', type:'Research + content', desc:'A Philippine mythology and cultural database that turns scattered research into an accessible digital experience.', meta:'Research · Content strategy · Database · Web', url:'https://blumentritt.vercel.app', logo:'/logos/blumentritt.svg', image:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Street_scene_in_Manila%2C_Philippines%2C_ca.1900_%28CHS-1578%29.jpg/1280px-Street_scene_in_Manila%2C_Philippines%2C_ca.1900_%28CHS-1578%29.jpg' },
  { title:'Auberyn', type:'Business concept', desc:'A practical digital solutions practice exploring how AI, design, and simple systems can solve everyday business problems.', meta:'Business concept · Web development · Design systems · AI', url:'https://auberyn.vercel.app', logo:'/logos/auberyn.svg', image:'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80' }
];

const capabilities = [
  ['Content & Marketing','Writing, editing, SEO basics, scripts, campaigns, and marketing materials.'],
  ['AI & Automation','AI-assisted research, content workflows, documentation, and practical automation.'],
  ['Operations','SOPs, templates, reports, workflows, and documentation that people can actually use.'],
  ['Digital','Websites, lightweight web apps, WordPress, presentations, and sales materials.'],
  ['Research','Market, competitor, customer, and industry research turned into useful decisions.']
];

export default function Home(){
  return <>
    <header className="nav container">
      <a className="brand" href="#top">JAY TEVAR</a>
      <nav><a href="#work">Work</a><a href="#capabilities">Expertise</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
      <a className="nav-cta" href="https://calendly.com/jtevar-ibex/30min" target="_blank" rel="noreferrer">Let's Talk</a>
    </header>

    <main id="top">
      <section className="hero container">
        <div className="hero-copy">
          <div className="eyebrow">AI-enabled marketing & business solutions</div>
          <h1>I get the job done.</h1>
          <h2>Research. Content. Marketing. Digital.</h2>
          <p className="hero-lede">I help teams turn ideas, information, and unfinished work into clear, useful deliverables. I work across content, marketing, research, operations, and digital projects.</p>
          <div className="tag-row"><span>Content</span><span>Marketing</span><span>AI</span><span>Research</span><span>Operations</span><span>Digital</span></div>
          <div className="actions"><a className="btn primary" href="#work">See My Work <span>→</span></a><a className="btn secondary" href="https://calendly.com/jtevar-ibex/30min" target="_blank" rel="noreferrer">Let's Talk</a></div>
        </div>
        <div className="hero-visual"><div className="portrait" style={{backgroundImage:`url(${profileImage})`}} aria-label="Jay Tevar" /></div>
      </section>

      <section className="section" id="work"><div className="container">
        <div className="section-head"><div><div className="eyebrow">Featured work</div><h2>Work that solves a problem.</h2></div><p>Selected projects across product development, research, content, and digital work.</p></div>
        <div className="work-grid">{projects.map(p=><a className="work-card" href={p.url} target="_blank" rel="noreferrer" key={p.title}>
          <div className="work-image" style={{backgroundImage:`linear-gradient(135deg, rgba(238,232,220,.18), rgba(45,45,42,.08)), url(${p.image})`}} />
          <div className="work-content"><div className="card-top"><span>{p.type}</span><span>↗</span></div><div className="project-name"><img src={p.logo} alt={`${p.title} logo`} /><h3>{p.title}</h3></div><p>{p.desc}</p><div className="card-meta">{p.meta}</div><span className="view-link">View Project <b>→</b></span></div>
        </a>)}</div>
      </div></section>

      <section className="section capabilities" id="capabilities"><div className="container">
        <div className="section-head"><div><div className="eyebrow">What I can help with</div><h2>Useful skills. Practical output.</h2></div><p>I work across functions when the job needs more than one skill set.</p></div>
        <div className="cap-grid">{capabilities.map(([title,desc],i)=><article className="cap" key={title}><div className="cap-number">0{i+1}</div><h3>{title}</h3><p>{desc}</p></article>)}</div>
      </div></section>

      <section className="section about" id="about"><div className="container about-grid">
        <div><div className="eyebrow">About</div><h2>Good work should be clear and useful.</h2></div>
        <div className="about-copy"><p className="large">I work across content, marketing, research, operations, and digital projects.</p><p>I've spent 15+ years turning information, ideas, and business needs into content, systems, research, and working digital assets.</p><p>Today, I combine that experience with AI and practical digital tools to move work from brief to finished deliverable.</p></div>
      </div></section>

      <section className="photo-strip container" aria-hidden="true"><div className="photo-one"/><div className="photo-two"/></section>

      <section className="section contact" id="contact"><div className="container contact-card">
        <div><div className="eyebrow">Let's talk</div><h2>Have work that needs doing?</h2><p>I'm open to project-based and part-time opportunities across content, research, operations, AI, marketing, and digital work.</p></div>
        <div className="contact-actions">
          <a className="btn primary" href="https://calendly.com/jtevar-ibex/30min" target="_blank" rel="noreferrer">Book a 30-min Call <span>→</span></a>
          <a className="contact-email" href="mailto:jettevar@outlook.com">Email me <span>jettevar@outlook.com</span></a>
          <a className="contact-linkedin" href="https://www.linkedin.com/in/javinjettevar/" target="_blank" rel="noreferrer">Check my LinkedIn ↗</a>
        </div>
      </div></section>
    </main>

    <footer className="footer"><div className="container footer-inner"><div><strong>JAY TEVAR</strong><span>AI-Enabled Marketing & Business Solutions</span></div><div><a href="mailto:jettevar@outlook.com">jettevar@outlook.com</a><span>Philippines · Open to remote opportunities</span></div><span>© 2026 Jay Tevar</span></div></footer>
  </>;
}
