const profileImage = 'https://raw.githubusercontent.com/jettevar/jaytevar/main/profile.jpg';

const projects = [
  { title:'Unscoped', type:'Product development', desc:'Contractor quoting and tracking platform built around a practical business workflow.', meta:'Product development · Web app · Supabase · Vercel', url:'https://getunscoped.com', logo:'https://getunscoped.com/favicon.ico' },
  { title:'Cake Sumo', type:'Web application', desc:'Quote builder and customer quoting platform for bakers and cake businesses.', meta:'Product concept · Workflow design · Web app · AI-assisted', url:'https://cakesumo.vercel.app', logo:'https://cakesumo.vercel.app/favicon.ico' },
  { title:'Blumentritt Avenue', type:'Research + content', desc:'Philippine mythology and cultural database combining research, content, and web development.', meta:'Research · Content strategy · Database · Web', url:'https://blumentritt.vercel.app', logo:'https://blumentritt.vercel.app/favicon.ico' },
  { title:'Auberyn', type:'Business concept', desc:'Digital solutions and corporate design practice focused on practical business communication and systems.', meta:'Business concept · Web development · Design systems · AI', url:'https://auberyn.vercel.app', logo:'https://auberyn.vercel.app/favicon.ico' }
];

const capabilities = [
  ['Content & Marketing','Strategy, copywriting, editing, scripts, SEO fundamentals, newsletters, and marketing communications.'],
  ['AI & Automation','AI-assisted research, content production, editing, documentation, and practical digital workflows.'],
  ['Operations','SOPs, documentation, process improvement, project coordination, research, and reporting.'],
  ['Digital','Websites, lightweight web apps, WordPress, presentations, sales materials, and business tools.'],
  ['Research','Market research, competitor analysis, industry research, synthesis, and actionable insights.']
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
          <h1>Hi, I'm Jay.</h1>
          <h2>I help teams turn ideas, content, and business problems into practical digital solutions.</h2>
          <p className="hero-lede">With 15+ years across content, marketing, research, operations, and digital projects, I use AI and practical tools to help teams work smarter, create better, and turn ideas into things that actually get used.</p>
          <div className="tag-row"><span>Content</span><span>Marketing</span><span>AI</span><span>Research</span><span>Operations</span><span>Digital</span></div>
          <div className="actions"><a className="btn primary" href="#work">View My Work <span>→</span></a><a className="btn secondary" href="https://calendly.com/jtevar-ibex/30min" target="_blank" rel="noreferrer">Let's Talk</a></div>
        </div>
        <div className="hero-visual"><div className="portrait" style={{backgroundImage:`url(${profileImage})`}} aria-label="Jay Tevar" /></div>
      </section>

      <section className="section" id="work"><div className="container">
        <div className="section-head"><div><div className="eyebrow">Featured work</div><h2>Things I am actually building.</h2></div><p>Real projects that show how I combine research, content, design, AI, and technology.</p></div>
        <div className="work-grid">{projects.map(p=><a className="work-card" href={p.url} target="_blank" rel="noreferrer" key={p.title}>
          <div className="work-image" style={{backgroundImage:`linear-gradient(135deg, rgba(238,232,220,.18), rgba(45,45,42,.08)), url(${p.title==='Unscoped'?'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80':p.title==='Cake Sumo'?'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80':p.title==='Blumentritt Avenue'?'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80':'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80'}`}} />
          <div className="work-content"><div className="card-top"><span>{p.type}</span><span>↗</span></div><div className="project-name"><img src={p.logo} alt=""/><h3>{p.title}</h3></div><p>{p.desc}</p><div className="card-meta">{p.meta}</div><span className="view-link">View Project <b>→</b></span></div>
        </a>)}</div>
      </div></section>

      <section className="section capabilities" id="capabilities"><div className="container">
        <div className="section-head"><div><div className="eyebrow">What I can help with</div><h2>Different problems. A common approach.</h2></div><p>I bring together communication, business judgment, research, and modern tools instead of treating every problem as a single-function task.</p></div>
        <div className="cap-grid">{capabilities.map(([title,desc],i)=><article className="cap" key={title}><div className="cap-number">0{i+1}</div><h3>{title}</h3><p>{desc}</p></article>)}</div>
      </div></section>

      <section className="section about" id="about"><div className="container about-grid">
        <div><div className="eyebrow">About</div><h2>A problem-solver at heart.</h2></div>
        <div className="about-copy"><p className="large">I've spent 15+ years working across content, marketing, research, operations, and digital projects.</p><p>Today, I use AI and practical digital tools to help teams work smarter, create better, and turn ideas into things that actually get used. I am especially comfortable in the space between strategy and execution, where a problem needs to be researched, structured, communicated, and moved forward.</p></div>
      </div></section>

      <section className="photo-strip container" aria-hidden="true"><div className="photo-one"/><div className="photo-two"/></section>

      <section className="section contact" id="contact"><div className="container contact-card">
        <div><div className="eyebrow">Let's work together</div><h2>Have a project, problem, or opportunity?</h2><p>I'm currently open to project-based and part-time opportunities, approximately 20 hours/week.</p></div>
        <div className="contact-actions"><a className="btn primary" href="https://calendly.com/jtevar-ibex/30min" target="_blank" rel="noreferrer">Book a 30-min Call <span>→</span></a><a href="mailto:jettevar@outlook.com">jettevar@outlook.com</a><a href="https://www.linkedin.com/in/javinjettevar/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
      </div></section>
    </main>

    <footer className="footer"><div className="container footer-inner"><div><strong>JAY TEVAR</strong><span>AI-Enabled Marketing & Business Solutions</span></div><div><a href="mailto:jettevar@outlook.com">jettevar@outlook.com</a><span>Philippines · Open to remote opportunities</span></div><span>© 2026 Jay Tevar</span></div></footer>
  </>;
}
