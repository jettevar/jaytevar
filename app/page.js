const projects = [
  { title:'Unscoped', type:'Business tool', desc:'Contractor quoting and tracking web app built around a practical business workflow.', meta:'AI-assisted development · Supabase · Vercel · GitHub', url:'https://getunscoped.com', logo:'https://getunscoped.com/favicon.ico' },
  { title:'Cake Sumo', type:'Web application', desc:'Quote builder and customer quoting platform for bakers and cake businesses.', meta:'AI-assisted web application', url:'https://cakesumo.vercel.app', logo:'https://cakesumo.vercel.app/favicon.ico' },
  { title:'Blumentritt Avenue', type:'Research + content', desc:'Philippine mythology and cultural database combining research, content, and web development.', meta:'Research · Content · Web development', url:'https://blumentritt.vercel.app', logo:'https://blumentritt.vercel.app/favicon.ico' },
  { title:'Auberyn', type:'Digital solutions', desc:'Digital solutions and corporate design practice focused on practical business communication and systems.', meta:'Web development · Design systems · AI-assisted solutions', url:'https://auberyn.vercel.app', logo:'https://auberyn.vercel.app/favicon.ico' }
];

const experience = [
  { company:'ibex', role:'Sr. Content Marketing Executive', date:'2016–Present', text:'Lead content across marketing, sales materials, internal communications, and creative projects. Write and edit campaigns, newsletters, scripts, presentations, and executive communications. Research markets, clients, competitors, industry trends, and technology developments. Build SOPs, templates, and AI-assisted content workflows.' },
  { company:'Atomic Digital', role:'Content Creator · Remote', date:'2024–2026', text:'Produced and edited AI-assisted blog and niche content at scale. Reworked AI drafts into clear, accurate, human-readable articles and applied SEO fundamentals, research, and editorial guidelines.' },
  { company:'Earlier career', role:'Sales, Operations, Business Development & Research', date:'2008–2015', text:'Progressed through sales and marketing, operations, business development, recruitment, and market research roles. Created 20+ client-specific SOPs, manuals, training guides, and onboarding materials.' }
];

const services = [
  ['Content & Marketing','Content strategy, copywriting, editing, scripts, SEO fundamentals, newsletters, and marketing communications.'],
  ['AI Workflows','AI-assisted research, content production, editing, documentation, and practical digital workflows.'],
  ['Marketing Operations','SOPs, documentation, process improvement, project coordination, research, and reporting.'],
  ['Digital Projects','Websites, lightweight web apps, WordPress, presentations, sales materials, and business tools.']
];

export default function Home(){
  return <>
    <header className="nav container">
      <a className="brand" href="#top">JAY TEVAR</a>
      <nav><a href="#work">Work</a><a href="#capabilities">Capabilities</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
    </header>

    <main id="top">
      <section className="hero container">
        <div className="hero-copy">
          <div className="eyebrow">AI-enabled marketing & business solutions</div>
          <h1>I turn ideas and problems into useful things.</h1>
          <p className="hero-lede">Marketing, content, research, operations, creative production, and AI-assisted digital solutions. I help teams move from a rough idea to a clear, practical result.</p>
          <div className="actions"><a className="btn primary" href="#contact">Work with me</a><a className="textlink" href="https://www.linkedin.com/in/javinjettevar/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
        </div>
        <div className="hero-photo-wrap">
          <div className="hero-photo" aria-label="Jay Tevar" style={{backgroundImage:"url('/jay.jpg')"}} />
          <div className="photo-caption">Jay Tevar · Philippines</div>
        </div>
      </section>

      <section className="section" id="capabilities"><div className="container">
        <div className="section-intro"><div className="eyebrow">What I do</div><h2>A flexible operator for small teams.</h2><p>I combine communication, business judgment, research, and modern AI tools so one engagement can cover more than one narrow function.</p></div>
        <div className="cap-grid">{services.map(([title,desc])=><article className="cap" key={title}><h3>{title}</h3><p>{desc}</p></article>)}</div>
      </div></section>

      <section className="section" id="work"><div className="container">
        <div className="section-intro"><div className="eyebrow">Selected work</div><h2>Things I am actually building.</h2><p>Ongoing projects that show how I combine research, content, design, AI, and technology.</p></div>
        <div className="work-grid">{projects.map(p=><a className="work-card" href={p.url} target="_blank" rel="noreferrer" key={p.title}><div className="card-top"><span>{p.type}</span><span>↗</span></div><div className="project-logo" style={{display:'flex',alignItems:'center',gap:'12px',margin:'28px 0 0',minHeight:'42px'}}><img src={p.logo} alt="" style={{width:'42px',height:'42px',objectFit:'contain',borderRadius:'8px'}} onError={(e)=>{e.currentTarget.style.display='none'}}/><span style={{fontSize:'12px',color:'#777',fontWeight:700}}>{p.title}</span></div><h3>{p.title}</h3><p>{p.desc}</p><div className="card-meta">{p.meta}</div></a>)}</div>
      </div></section>

      <section className="section" id="about"><div className="container about">
        <div className="section-intro"><div className="eyebrow">Experience</div><h2>15+ years across marketing and business operations.</h2></div>
        <div className="experience">{experience.map(e=><article className="exp" key={e.company+e.role}><div className="exp-meta"><strong>{e.company}</strong><span>{e.date}</span></div><div><h3>{e.role}</h3><p>{e.text}</p></div></article>)}</div>
      </div></section>

      <section className="section contact" id="contact"><div className="container contact-inner">
        <div><div className="eyebrow">Currently available</div><h2>Have a project, problem, or backlog?</h2><p>I am currently opening approximately 20 hours/week for project-based or part-time work. If you need someone who can research, write, build, organize, or improve a process, let's talk.</p></div>
        <div className="contact-actions"><a className="btn primary" href="https://calendly.com/jtevar-ibex/30min" target="_blank" rel="noreferrer">Book a conversation</a><a className="email" href="mailto:jettevar@outlook.com">jettevar@outlook.com</a><a className="email" href="https://www.linkedin.com/in/javinjettevar/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
      </div></section>
    </main>

    <footer className="footer"><div className="container footer-inner"><div className="footer-person"><div className="footer-photo" style={{backgroundImage:"url('/jay.jpg')"}} /><div><strong>Jay Tevar</strong><span>AI · Marketing · Digital Solutions</span></div></div><a href="mailto:jettevar@outlook.com">jettevar@outlook.com</a></div></footer>
  </>;
}
