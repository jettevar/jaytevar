import styles from '../corporate-people-brand-book/page.module.css';

export const metadata = {
  title: 'Creative Enablement Office Progress Report | Presentation Design by Jay Tevar',
  description: 'A 10-slide executive progress report covering team growth, stakeholder impact, presentation initiatives, measurable value, and next-phase priorities.',
};

const slides = [
  ['operating-model.jpg', 'Operating model', 'A concise view of the design function, delivery principles, and coverage across 27 business teams.'],
  ['team-expansion.jpg', 'Team structure', 'A leadership-ready organization view that makes ownership, expansion, and team capacity easy to scan.'],
  ['major-wins.jpg', 'Major wins', 'Four high-impact initiatives summarized with context, outcomes, and delivery scale.'],
  ['leadership-alignment.jpg', 'Leadership alignment', 'Engagement activities and workshops connected directly to stronger stakeholder partnership.'],
  ['business-value.jpg', 'Business value', 'Survey results, stakeholder feedback, and satisfaction scores combined into a credible proof slide.'],
  ['next-phase.jpg', 'Forward plan', 'A strategic roadmap that translates the first six months into measurable next-step priorities.'],
];

export default function CreativeEnablementProgress() {
  return <main className={styles.page}>
    <nav className={styles.nav}><a href="/">← Jay Tevar</a><a href="/presentation-work/creative-enablement-progress/Creative-Enablement-Office-6-Month-Progress-Report.pdf" target="_blank">Review full deck ↗</a></nav>
    <header className={styles.hero}><div><p className={styles.eyebrow}>Executive reporting · 10-slide PowerPoint narrative</p><h1>Six months of progress, made visible.</h1><p className={styles.lede}>A leadership report that turns team growth, stakeholder partnership, major presentation wins, and next-phase priorities into one focused story of business value.</p><div className={styles.actions}><a className={styles.primary} href="/presentation-work/creative-enablement-progress/Creative-Enablement-Office-6-Month-Progress-Report.pdf" target="_blank">Review the full deck</a><a className={styles.secondary} href="mailto:jettevar@outlook.com?subject=Presentation%20Design%20Opportunity">Discuss presentation work</a></div></div><img src="/presentation-work/creative-enablement-progress/cover.jpg" alt="Creative Enablement Office six-month progress report cover"/></header>
    <section className={styles.factbar}><div><span>Format</span><strong>Editable PowerPoint</strong></div><div><span>Scope</span><strong>10-slide executive report</strong></div><div><span>Focus</span><strong>Progress and impact</strong></div><div><span>Role</span><strong>Story and visual design</strong></div></section>
    <section className={styles.intro}><div><p className={styles.eyebrow}>The assignment</p><h2>Show how a creative function became a business partner.</h2></div><div><p>The report was structured to do more than list completed work. It connects the operating model, team expansion, leadership engagement, presentation initiatives, stakeholder feedback, and future priorities into a clear executive narrative.</p><p>The design balances brand energy with disciplined hierarchy, using concise evidence, large metrics, photographs, survey results, and structured takeaways to make progress easy to understand and remember.</p></div></section>
    <section className={styles.gallery}><p className={styles.eyebrow}>Selected slides</p><h2>Strategy, proof, and momentum.</h2><div className={styles.grid}>{slides.map(([image,title,copy])=><figure key={image}><img src={`/presentation-work/creative-enablement-progress/${image}`} alt={`${title} slide from the Creative Enablement Office progress report`}/><figcaption><strong>{title}</strong><span>{copy}</span></figcaption></figure>)}</div></section>
    <section className={styles.capabilities}><div><p className={styles.eyebrow}>What this demonstrates</p><h2>Executive reporting with a point of view.</h2></div><ul><li><strong>Narrative architecture</strong><span>Building a progression from operating model and activity to evidence, learning, and forward strategy.</span></li><li><strong>Impact communication</strong><span>Turning stakeholder feedback, delivery volume, and outcomes into credible leadership-ready proof.</span></li><li><strong>Information design</strong><span>Organizing dense business material into slides that remain readable, focused, and visually engaging.</span></li><li><strong>Presentation polish</strong><span>Maintaining a cohesive branded system across charts, team structures, photography, and strategic frameworks.</span></li></ul></section>
    <footer className={styles.cta}><p>Need a pitch deck, sales presentation, or executive report?</p><h2>I can turn rough content into a clear, polished presentation.</h2><div className={styles.actions}><a className={styles.primary} href="mailto:jettevar@outlook.com?subject=Presentation%20Design%20Opportunity">Contact me about a project</a><a className={styles.secondary} href="/">Back to portfolio</a></div></footer>
  </main>;
}
