import { getPosts } from '../lib/posts';

const projects = [
  { title:'Unscoped', tag:'Digital Product', desc:'A contractor quoting and tracking web app built around a practical business workflow.', meta:'AI-assisted development · Supabase · Vercel · GitHub', url:'https://getunscoped.com' },
  { title:'Cake Sumo', tag:'Web Application', desc:'A quote builder and customer quoting platform designed for bakers and cake businesses.', meta:'AI-assisted web application', url:'https://cakesumo.vercel.app' },
  { title:'Auberyn', tag:'Digital Solutions', desc:'A digital solutions and corporate design practice for clear, professional business communication.', meta:'Web development · Design systems · AI-assisted solutions', url:'https://auberyn.vercel.app' },
  { title:'Blumentritt Avenue', tag:'Cultural Project', desc:'A Philippine mythology and cultural database combining research, content, and web development.', meta:'Research · Content · Web development', url:'https://blumentritt.vercel.app' }
];

const jobs = [
  { company:'ibex', role:'Sr. Content Marketing Executive', date:'2023–Present', text:'Lead content across marketing, internal communications, sales materials, and creative projects. Write and edit campaigns, newsletters, scripts, presentations, and executive communications. Research markets, clients, competitors, industry trends, and technology developments for leadership.' },
  { company:'ibex', role:'Content Marketing Executive', date:'2017–2023', text:'Managed global internal content, research, editing, publication, and reporting. Produced marketing communications and researched industry news, client activity, competitors, and technology trends for global leadership.' },
  { company:'ibex', role:'Business Research Analyst', date:'2016–2017', text:'Conducted research to support Sales, Marketing, and business development activities, including prospective client, market, competitor, and account research.' },
  { company:'Atomic Digital', role:'Content Creator · Remote', date:'2024–2026', text:'Created and edited AI-assisted blog and niche content for international clients, reworking AI drafts into clear, accurate, human-readable articles and applying SEO fundamentals.' },
  { company:'HP Outsourcing', role:'Sales & Marketing Associate', date:'2015', text:'Supported sales materials, proposals, client communications, onboarding, and development of Virtual Assistance services.' },
  { company:'Focusinc Group Corp.', role:'VA Generalist → Operations Supervisor → Business Development Officer → Recruitment Manager', date:'2011–2014', text:'Progressed across operations, business development, and recruitment. Created 20+ client-specific SOPs, manuals, training guides, and onboarding materials.' },
  { company:'Western Wats Research', role:'Market Researcher', date:'2008–2009', text:'Conducted structured market research with U.S. households and businesses while following research protocols, scripts, quality standards, and reporting requirements.' }
];

export default async function Home(){
  const posts = await getPosts();
  return <>
    <header className="container nav"><a className="brand" href="#top">JAY TEVAR</a><nav className="navlinks"><a href="#work">Work</a><a href="#experience">Experience</a><a href="#writing">Writing</a><a href="#contact">Contact</a></nav></header>
    <main id="top">
      <section className="container hero" style={{gridTemplateColumns:'1fr',maxWidth:'1120px'}}>
        <div><div className="eyebrow">AI-Enabled Marketing & Business Solutions</div><h1>I turn ideas and problems into useful things.</h1><p>Marketing, content, research, operations, creative production, and AI-assisted digital solutions. I help businesses move from a rough idea to a clear, practical result.</p><div className="actions"><a className="btn primary" href="#contact">Work with me</a><a className="btn secondary" href="https://www.linkedin.com/in/javinjettevar/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div>
      </section>

      <section className="section"><div className="container"><div className="sectionhead"><h2>What I do</h2><p className="sectionlead">A practical mix of business judgment, communication, creative execution, and modern AI-assisted tools.</p></div><div className="services">
        <article className="service"><h3>Content & Marketing</h3><p>Content strategy, copywriting, editing, scripts, SEO, marketing communications, and sales materials.</p></article>
        <article className="service"><h3>Digital Solutions</h3><p>AI-assisted websites, web apps, workflows, and lightweight business tools built around real needs.</p></article>
        <article className="service"><h3>Research & Operations</h3><p>Business research, documentation, SOPs, process improvement, coordination, and reporting.</p></article>
        <article className="service"><h3>Creative Production</h3><p>Presentations, campaign materials, visual content, event concepts, and creative problem-solving.</p></article>
      </div></div></section>

      <section className="section" id="work"><div className="container"><div className="sectionhead"><h2>Selected work</h2><p className="sectionlead">Projects where business thinking, content, design, and technology meet.</p></div><div className="projects">{projects.map(p=><article className="project" key={p.title}><div className="tag">{p.tag}</div><h3>{p.title}</h3><p>{p.desc}<br/><br/><em>{p.meta}</em></p><a className="projectlink" href={p.url} target="_blank" rel="noreferrer">View project ↗</a></article>)}</div></div></section>

      <section className="section" id="experience"><div className="container"><div className="sectionhead"><h2>Experience</h2><p className="sectionlead">15+ years across marketing, research, operations, business development, recruitment, and content.</p></div><div className="timeline">{jobs.map(j=><article className="job" key={j.company+j.role}><div className="jobmeta">{j.date}<br/><strong>{j.company}</strong></div><div><h3>{j.role}</h3><p>{j.text}</p></div></article>)}</div></div></section>

      <section className="section" id="writing"><div className="container"><div className="sectionhead"><h2>Notes</h2><p className="sectionlead">Short thoughts, observations, experiments, and things I am learning.</p></div>{posts.length ? <div className="bloggrid">{posts.map(p=><article className="post" key={p.id}>{p.image_url && <img src={p.image_url} alt=""/>}<div className="postbody"><div className="postdate">{new Date(p.published_at).toLocaleDateString('en-US',{year:'numeric',month:'short',day:'numeric'})}</div><h3>{p.title}</h3><p>{p.excerpt || p.body?.slice(0,150)}</p></div></article>)}</div> : <div className="empty">No notes published yet. Check back soon.</div>}</div></section>

      <section className="section" id="contact"><div className="container"><div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'70px',alignItems:'start'}}><div><div className="eyebrow">Have a problem to solve?</div><h2>Let’s talk about what you need.</h2><p className="sectionlead">Tell me what you are trying to achieve, what is getting in the way, or what you need built. I’ll take a look and get back to you.</p><div style={{display:'flex',gap:'20px',flexWrap:'wrap',marginTop:'28px',fontWeight:700,fontSize:'14px'}}><a href="https://www.linkedin.com/in/javinjettevar/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="mailto:jettevar@outlook.com">jettevar@outlook.com</a></div></div><form className="form" style={{background:'#fff',border:'1px solid var(--line)',padding:'28px',borderRadius:'10px'}} action="https://formsubmit.co/jettevar@outlook.com" method="POST"><input type="hidden" name="_subject" value="New inquiry from Jay Tevar’s website"/><input type="hidden" name="_captcha" value="false"/><input type="hidden" name="_template" value="table"/><label>Name</label><input type="text" name="name" placeholder="Your name" required /><label>Email</label><input type="email" name="email" placeholder="you@example.com" required /><label>What can I help with?</label><textarea name="message" placeholder="Tell me a little about the project, problem, or goal." required /><button className="btn primary" type="submit">Send message</button></form></div></div></section>
    </main>
    <footer className="container footer"><span>© {new Date().getFullYear()} Jay Tevar</span><span>AI · Marketing · Business Solutions</span></footer>
  </>;
}
