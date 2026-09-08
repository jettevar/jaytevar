const profileImage = 'https://raw.githubusercontent.com/jettevar/jaytevar/main/profile.jpg';

const logos = {
  cakeSumo: 'data:image/webp;base64,UklGRsEWAABXRUJQVlA4WAoAAAAQAAAAIAAAAQAAQUxQSDIAAAARL6CobZ9g/8t/0sQf4Gv8eYQYgE1JmKkQ0dQ3kJ7J6h3q5V8YpZJ8cQ2o5QkqkJ9sQqv0nJ9cW2kY0lQ8Wf5YwKpY0lQ8mP8YwAAAA=',
  unscoped: 'data:image/webp;base64,UklGRkYAAABXRUJQVlA4WAoAAAAQAAAAEAAAABAAQUxQSDIAAAARL6CobZ9g/8t/0sQf4Gv8eYQYgE1JmKkQ0dQ3kJ7J6h3q5V8YpZJ8cQ2o5QkqkJ9sQqv0nJ9cW2kY0lQ8Wf5YwKpY0lQ8mP8YwAAAA=',
  auberyn: 'data:image/webp;base64,UklGRjAAAABXRUJQVlA4WAoAAAAQAAAAEAAAABAAQUxQSDIAAAARL6CobZ9g/8t/0sQf4Gv8eYQYgE1JmKkQ0dQ3kJ7J6h3q5V8YpZJ8cQ2o5QkqkJ9sQqv0nJ9cW2kY0lQ8Wf5YwKpY0lQ8mP8YwAAAA=',
};

const projects = [
  { title:'Unscoped', type:'Product development', desc:'A contractor quoting and tracking platform designed around the way small teams actually price and manage work.', meta:'Product development · Web app · Supabase · Vercel', url:'https://getunscoped.com', logo:logos.unscoped, image:'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80' },
  { title:'Cake Sumo', type:'Web application', desc:'A quoting tool built to make custom cake orders easier to price, organize, and turn into a clear customer proposal.', meta:'Product concept · Workflow design · Web app · AI-assisted', url:'https://cakesumo.vercel.app', logo:logos.cakeSumo, image:'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80' },
  { title:'Blumentritt Avenue', type:'Research + content', desc:'A Philippine mythology and cultural database that turns scattered research into an accessible digital experience.', meta:'Research · Content strategy · Database · Web', url:'https://blumentritt.vercel.app', logo:'https://blumentritt.vercel.app/favicon.ico', image:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Street_scene_in_Manila%2C_Philippines%2C_ca.1900_%28CHS-1578%29.jpg/1280px-Street_scene_in_Manila%2C_Philippines%2C_ca.1900_%28CHS-1578%29.jpg' },
  { title:'Auberyn', type:'Business concept', desc:'A practical digital solutions practice exploring how AI, design, and simple systems can solve everyday business problems.', meta:'Business concept · Web development · Design systems · AI', url:'https://auberyn.vercel.app', logo:logos.auberyn, image:'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80' }
];

const capabilities = [
  ['Content & Marketing','Need content that sounds human, supports a goal, and gets finished? I handle strategy, writing, editing, scripts, SEO fundamentals, and marketing communications.'],
  ['AI & Automation','Need to reduce repetitive work or make a process easier to run? I use AI-assisted research, content workflows, documentation, and practical automation.'],
  ['Operations','Need a messy process turned into something people can actually follow? I build SOPs, templates, workflows, reports, and working documentation.'],
  ['Digital','Need an idea turned into a usable page, tool, or business asset? I work across websites, lightweight web apps, WordPress, presentations, and sales materials.'],
  ['Research','Need to understand a market, competitor, customer, or industry before making a decision? I research, synthesize, and turn findings into something useful.']
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
          <h1>I help turn messy work into clear, useful outcomes.</h1>
          <h2>Need something researched? Written? Organized? Built?</h2>
          <p className="hero-lede">I work across content, marketing, research, operations, and digital projects. I bring the thinking, communication, and AI-assisted tools needed to move work from “we should do this” to “it’s done.”</p>
          <div className="tag-row"><span>Content</span><span>Marketing</span><span>AI</span><span>Research</span><span>Operations</span><span>Digital</span></div>
          <div className="actions"><a className="btn primary" href="#work">See What I Build <span>→</span></a><a className="btn secondary" href="https://calendly.com/jtevar-ibex/30min" target="_blank" rel="noreferrer">Let's Talk</a></div>
        </div>
        <div className="hero-visual"><div className="portrait" style={{backgroundImage:`url(${profileImage})`}} aria-label="Jay Tevar" /></div>
      </section>

      <section className="section" id="work"><div className="container">
        <div className="section-head"><div><div className="eyebrow">Featured work</div><h2>Real projects. Practical outcomes.</h2></div><p>A mix of products, research, content, and digital work. Different problems, but the same approach: understand the need, make the work clearer, and build something useful.</p></div>
        <div className="work-grid">{projects.map(p=><a className="work-card" href={p.url} target="_blank" rel="noreferrer" key={p.title}>
          <div className="work-image" style={{backgroundImage:`linear-gradient(135deg, rgba(238,232,220,.18), rgba(45,45,42,.08)), url(${p.image})`}} />
          <div className="work-content"><div className="card-top"><span>{p.type}</span><span>↗</span></div><div className="project-name"><img src={p.logo} alt="" /><h3>{p.title}</h3></div><p>{p.desc}</p><div className="card-meta">{p.meta}</div><span className="view-link">View Project <b>→</b></span></div>
        </a>)}</div>
      </div></section>

      <section className="section capabilities" id="capabilities"><div className="container">
        <div className="section-head"><div><div className="eyebrow">What I can help with</div><h2>Different problems. One practical way of working.</h2></div><p>I am comfortable working across functions, especially when the work does not fit neatly into one job title.</p></div>
        <div className="cap-grid">{capabilities.map(([title,desc],i)=><article className="cap" key={title}><div className="cap-number">0{i+1}</div><h3>{title}</h3><p>{desc}</p></article>)}</div>
      </div></section>

      <section className="section about" id="about"><div className="container about-grid">
        <div><div className="eyebrow">About</div><h2>Useful work lives between the lines.</h2></div>
        <div className="about-copy"><p className="large">Most business work does not arrive as a neat job description.</p><p>It arrives as a half-finished idea, a process nobody documented, a pile of research, a presentation that needs to make sense, or a task that takes far too long to do manually.</p><p>I've spent 15+ years working across content, marketing, research, operations, and digital projects. Today, I use that range, along with AI and practical digital tools, to help teams make sense of the work and move it forward.</p></div>
      </div></section>

      <section className="photo-strip container" aria-hidden="true"><div className="photo-one"/><div className="photo-two"/></section>

      <section className="section contact" id="contact"><div className="container contact-card">
        <div><div className="eyebrow">Let's talk</div><h2>Have a problem worth figuring out?</h2><p>I'm open to project-based and part-time opportunities, especially work where content, research, operations, AI, and digital tools overlap.</p></div>
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
