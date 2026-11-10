import styles from './page.module.css';

export const metadata = {
  title: 'Corporate People Brand Book | Presentation Design by Jay Tevar',
  description: 'A 46-slide PowerPoint presentation system for executive profiles, organization charts, workflows, and corporate storytelling.',
};

const slides = [
  ['executive-presentation.jpg', 'Executive presentation', 'A leadership slide combining profile information, strategic priorities, and organizational context.'],
  ['workflow.jpg', 'Process storytelling', 'A structured workflow that turns a complex sequence into a clear visual narrative.'],
  ['leadership-overview.jpg', 'Leadership overview', 'A balanced team layout designed for executive visibility and quick scanning.'],
  ['revenue-chart.jpg', 'Data visualization', 'A business-performance slide pairing a native chart with an executive takeaway.'],
  ['national-footprint.jpg', 'Business snapshot', 'Key operating figures organized into a clean, presentation-ready dashboard.'],
  ['complete-slide.jpg', 'Reusable system', 'An example of the typography, hierarchy, and component system working together.'],
];

export default function CorporatePeopleBrandBook() {
  return <main className={styles.page}>
    <nav className={styles.nav}><a href="/">← Jay Tevar</a><a href="/presentation-work/corporate-people-brand-book/Corporate-People-Brand-Book.pdf" target="_blank">Review full deck ↗</a></nav>
    <header className={styles.hero}><div><p className={styles.eyebrow}>Presentation design · 46-slide PowerPoint system</p><h1>Corporate People Brand Book</h1><p className={styles.lede}>A cohesive executive presentation system built to make leadership, organizational structure, processes, and business data easier to understand.</p><div className={styles.actions}><a className={styles.primary} href="/presentation-work/corporate-people-brand-book/Corporate-People-Brand-Book.pdf" target="_blank">Review the full deck</a><a className={styles.secondary} href="mailto:jettevar@outlook.com?subject=Presentation%20Design%20Opportunity">Discuss presentation work</a></div></div><img src="/presentation-work/corporate-people-brand-book/cover.jpg" alt="Corporate People Brand Book cover slide"/></header>
    <section className={styles.factbar}><div><span>Format</span><strong>Editable PowerPoint</strong></div><div><span>Scope</span><strong>46-slide design system</strong></div><div><span>Focus</span><strong>Executive communication</strong></div><div><span>Role</span><strong>Content and visual design</strong></div></section>
    <section className={styles.intro}><div><p className={styles.eyebrow}>The assignment</p><h2>Make corporate information feel clear, consistent, and human.</h2></div><div><p>The deck was designed as a reusable system rather than a collection of disconnected slides. It establishes consistent typography, colors, portrait treatments, organizational components, data displays, and page structures that can adapt to different leadership and business stories.</p><p>The work demonstrates how I combine content judgment with PowerPoint design to create presentations that are polished, practical, editable, and ready for real business use.</p></div></section>
    <section className={styles.gallery}><p className={styles.eyebrow}>Selected slides</p><h2>A system with range.</h2><div className={styles.grid}>{slides.map(([image,title,copy])=><figure key={image}><img src={`/presentation-work/corporate-people-brand-book/${image}`} alt={`${title} slide from the Corporate People Brand Book`}/><figcaption><strong>{title}</strong><span>{copy}</span></figcaption></figure>)}</div></section>
    <section className={styles.capabilities}><div><p className={styles.eyebrow}>What this demonstrates</p><h2>More than making slides look good.</h2></div><ul><li><strong>Presentation architecture</strong><span>Organizing a large deck into a clear system of sections, layouts, and reusable components.</span></li><li><strong>Visual storytelling</strong><span>Matching hierarchy, pacing, imagery, and emphasis to the message on each slide.</span></li><li><strong>Executive communication</strong><span>Turning profiles, priorities, workflows, and business metrics into concise leadership-ready material.</span></li><li><strong>Brand consistency</strong><span>Maintaining a recognizable visual language across 46 distinct slides without making every page identical.</span></li></ul></section>
    <footer className={styles.cta}><p>Need a pitch deck, sales presentation, or executive report?</p><h2>I can turn rough content into a clear, polished presentation.</h2><div className={styles.actions}><a className={styles.primary} href="mailto:jettevar@outlook.com?subject=Presentation%20Design%20Opportunity">Contact me about a project</a><a className={styles.secondary} href="/">Back to portfolio</a></div></footer>
  </main>;
}
