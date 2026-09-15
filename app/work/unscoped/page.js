import styles from './page.module.css';

export const metadata = {
  title: 'Unscoped Case Study | Jay Tevar',
  description: 'How Jay Tevar researched, directed, launched, tested, and improved an AI-assisted product for remodeling contractors.',
};

const contributions = [
  ['Problem selection', 'Connected AI-assisted market research with firsthand experience of requests expanding beyond an original agreement.'],
  ['Product direction', 'Selected residential remodeling contractors as the first audience and defined a focused request-to-approval workflow.'],
  ['Experience and content', 'Directed the structure, interface, product language, visual approach, pricing model, and free-to-paid journey.'],
  ['Delivery and QA', 'Used AI to accelerate implementation, then tested the product, corrected weak assumptions, and shipped the fixes through GitHub and Vercel.'],
];

export default function UnscopedCaseStudy() {
  return (
    <main className={styles.page}>
      <nav className={styles.nav}>
        <a href="/">← Jay Tevar</a>
        <a href="https://getunscoped.com" target="_blank" rel="noreferrer">Open live product ↗</a>
      </nav>

      <header className={styles.hero}>
        <p className={styles.eyebrow}>Product case study · Launched August 2026</p>
        <h1>From an overlooked contractor problem to a live product.</h1>
        <p className={styles.lede}>Unscoped helps residential remodeling contractors capture extra work, calculate a customer price, and document approval before a small request becomes lost profit.</p>
        <div className={styles.actions}>
          <a className={styles.primary} href="https://app.getunscoped.com/?demo=true" target="_blank" rel="noreferrer">Try the demo</a>
          <a className={styles.secondary} href="https://getunscoped.com/free-quote-builder/" target="_blank" rel="noreferrer">Use the free Quote Builder</a>
        </div>
      </header>

      <section className={styles.factbar} aria-label="Project facts">
        <div><span>Role</span><strong>Product direction and delivery</strong></div>
        <div><span>Built with</span><strong>AI · GitHub · Vercel</strong></div>
        <div><span>Current state</span><strong>Live and ready for validation</strong></div>
      </section>

      <figure className={styles.figure}>
        <img src="/unscoped/dashboard.png" alt="Unscoped dashboard showing change requests and quick-add templates" />
        <figcaption>A working dashboard organizes requests that need attention and reusable starting points for common changes.</figcaption>
      </figure>

      <section className={styles.split}>
        <div>
          <p className={styles.eyebrow}>The problem</p>
          <h2>“Can you just…” adds up.</h2>
        </div>
        <div className={styles.prose}>
          <p>Small customer requests can affect materials, labor, coordination, and schedule. When the change remains in a conversation or text thread, the contractor may absorb the cost or disagree with the customer later.</p>
          <p>The problem resonated with my previous experience as a contractor and virtual assistant. Extra requests often looked minor individually but accumulated beyond the original agreement.</p>
        </div>
      </section>

      <section className={styles.section}>
        <p className={styles.eyebrow}>What I owned</p>
        <h2>Direction, decisions, and a finished release.</h2>
        <div className={styles.grid}>{contributions.map(([title, copy], index) => (
          <article className={styles.card} key={title}>
            <span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p>
          </article>
        ))}</div>
      </section>

      <section className={styles.product}>
        <div className={styles.productCopy}>
          <p className={styles.eyebrow}>The product decision</p>
          <h2>Keep the workflow narrow and useful.</h2>
          <p>I chose not to build another heavy project-management platform. The core flow is direct: record the change, add real costs, set markup, enter any known timeline impact, and prepare a message the customer can approve.</p>
          <ul>
            <li>Live marketing site and product demo</li>
            <li>Free Quote Builder with no account required</li>
            <li>Reusable change templates and packages</li>
            <li>Itemized pricing and customer-ready messages</li>
            <li>One-time purchase path through Lemon Squeezy</li>
          </ul>
        </div>
        <figure className={styles.figureCompact}>
          <img src="/unscoped/pricing.png" alt="Unscoped pricing screen with itemized material and labor costs" />
          <figcaption>Itemized costs, markup, and an explicit timeline field produce one clear customer price.</figcaption>
        </figure>
      </section>

      <section className={styles.iteration}>
        <p className={styles.eyebrow}>Post-launch quality review</p>
        <h2>The first version was working. The review made it more trustworthy.</h2>
        <div className={styles.changeGrid}>
          <div><strong>Removed unsupported estimates</strong><p>The product no longer invents schedule impact. Timeline is supplied by the user or omitted.</p></div>
          <div><strong>Improved accuracy</strong><p>Customer communication now distinguishes the price charged from underlying material and labor costs.</p></div>
          <div><strong>Added a safeguard</strong><p>A request cannot continue to a customer message until at least one positive cost is entered.</p></div>
        </div>
      </section>

      <section className={styles.honest}>
        <div><p className={styles.eyebrow}>Current result</p><h2>Working product, not invented traction.</h2></div>
        <div className={styles.prose}><p>Unscoped is live, functional, and tested across its main flows. It does not yet have customers, revenue, testimonials, or proven product-market fit. The next milestone is external validation through contractor conversations, observed tests, and a first paid customer.</p><p>AI accelerated research, implementation, debugging, and testing. I remained responsible for choosing the problem, directing the product, checking the output, and deciding what shipped.</p></div>
      </section>

      <footer className={styles.cta}>
        <p>Explore the actual work.</p>
        <h2>Unscoped is live—not a concept mockup.</h2>
        <div className={styles.actions}><a className={styles.primary} href="https://getunscoped.com" target="_blank" rel="noreferrer">Visit Unscoped</a><a className={styles.secondary} href="/">Back to portfolio</a></div>
      </footer>
    </main>
  );
}
