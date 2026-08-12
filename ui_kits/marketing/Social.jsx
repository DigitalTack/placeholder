function Testimonials() {
  const { SectionHeader, Card, Avatar } = window.PH;
  const items = [
    { q: 'I had three final rounds in one afternoon. I was at my daughter&rsquo;s recital. Placeholder got me through all three and I didn&rsquo;t miss a note.', n: 'Marta R.', m: 'Senior Product Designer', i: 'MR' },
    { q: 'The double answered a system design question better than I would have. I asked it to explain the answer to me afterwards so I&rsquo;d be ready for the follow-up round. It was very patient with me.', n: 'Devon A.', m: 'Backend Engineer', i: 'DA' },
    { q: 'I got the job. I start Monday. I don&rsquo;t know what the company does.', n: 'Sam K.', m: 'Engineering Manager', i: 'SK' }
  ];
  return (
    <section className="m-section">
      <div className="m-wrap">
        <div className="m-head">
          <SectionHeader eyebrow="Customers" title="People who weren&rsquo;t there." />
        </div>
        <div className="m-grid-3">
          {items.map((t) => (
            <Card key={t.n} elevation="raised" pad="lg">
              <p className="m-quote">&ldquo;<span dangerouslySetInnerHTML={{ __html: t.q }}></span>&rdquo;</p>
              <div className="m-attrib">
                <Avatar kind="human" initials={t.i} />
                <div>
                  <div className="m-attrib__name">{t.n}</div>
                  <div className="m-attrib__meta">{t.m}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const { SectionHeader, Card, Button, Badge } = window.PH;
  const tiers = [
    { name: 'Basic', price: '$29', per: '/mo', body: 'For the casual search.', feats: ['Up to 5 interviews per month', 'Voice and text double', 'Consistency Engine', 'Standard question library'], cta: 'Get started', variant: 'secondary' },
    { name: 'Pro', price: '$89', per: '/mo', body: 'For the serious search.', feats: ['Unlimited interviews', 'Full video double', 'Company Voice Match', 'Enthusiasm Slider', 'Weakness Generator', 'Live Panel Handling'], cta: 'Get started', variant: 'primary', hero: true },
    { name: 'Executive', price: 'Contact us', per: '', body: 'For the search you can&rsquo;t be seen conducting.', feats: ['Everything in Pro', 'Discreet scheduling', 'Compensation negotiation', 'Reference call coverage', 'Your double attends your first two weeks of employment'], cta: 'Talk to sales', variant: 'secondary' }
  ];
  return (
    <section className="m-section" id="pricing" style={{ background: 'var(--surface-canvas)', borderTop: '1px solid var(--line-hairline)', borderBottom: '1px solid var(--line-hairline)' }}>
      <div className="m-wrap">
        <div className="m-head">
          <SectionHeader eyebrow="Pricing" title="Choose how absent you&rsquo;d like to be." align="center" />
        </div>
        <div className="m-pricing">
          {tiers.map((t) => (
            <Card key={t.name} elevation={t.hero ? 'floating' : 'flat'} pad="lg" className={'m-tier' + (t.hero ? ' m-tier--hero' : '')}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <h3 style={{ fontSize: 'var(--size-h3)', fontWeight: 600 }}>{t.name}</h3>
                {t.hero && <Badge tone="solid">Most popular</Badge>}
              </div>
              <div>
                <div className="m-price"><span className="m-price__n">{t.price}</span><span className="m-price__per">{t.per}</span></div>
                <p style={{ fontSize: 'var(--size-body-sm)', color: 'var(--text-muted)', marginTop: 'var(--space-2)' }} dangerouslySetInnerHTML={{ __html: t.body }}></p>
              </div>
              <Button variant={t.variant} block href="#demo">{t.cta}</Button>
              <ul className="m-list">{t.feats.map((f) => <li key={f}>{f}</li>)}</ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const { SectionHeader, Accordion } = window.PH;
  const items = [
    { q: 'Is this cheating?', a: 'Candidates have always prepared. Placeholder is preparation that shows up on time.' },
    { q: 'What if they ask something my double doesn\u2019t know?', a: 'It won\u2019t say \u201cI don\u2019t know.\u201d It will say something adjacent, at length, with confidence. This is how the answer would have gone anyway.' },
    { q: 'Do I have to tell them?', a: 'That\u2019s between you and them. Placeholder doesn\u2019t announce itself, and neither does the system scoring you on the other side.' },
    { q: 'What happens when I actually start the job?', a: 'Executive customers get two weeks of coverage while you get up to speed. Most people find that\u2019s enough.' },
    { q: 'Is my data safe?', a: 'Your double is yours. We only use your interview recordings to improve the model, which improves your double, which improves your outcomes.' }
  ];
  return (
    <section className="m-section" id="faq">
      <div className="m-wrap m-faq">
        <SectionHeader eyebrow="FAQ" title="Questions we get asked." />
        <Accordion items={items} defaultOpen={0} />
      </div>
    </section>
  );
}

function FinalCta() {
  const { Button } = window.PH;
  return (
    <section className="m-section m-final">
      <div className="m-wrap">
        <h2>The other side automated this two years ago.</h2>
        <p>You&rsquo;re the only one still showing up.</p>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'var(--space-8)' }}>
          <Button size="lg" variant="inverse" href="truth.html">Request a demo</Button>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  const { Logo } = window.PH;
  const cols = [
    { h: 'Product', links: ['Features', 'Pricing', 'Enterprise', 'Changelog', 'API'] },
    { h: 'Company', links: ['About', 'Careers', 'Press', 'Contact'] },
    { h: 'Resources', links: ['Blog', 'Help center', 'Interview library', 'Status'] },
    { h: 'Legal', links: ['Privacy', 'Terms', 'Cookie preferences', 'Security'] }
  ];
  return (
    <footer className="m-footer">
      <div className="m-wrap">
        <div className="m-footer__cols">
          <div>
            <Logo variant="markText" onDark height={26} assetBase="../../assets" />
            <p style={{ fontSize: 'var(--size-body-sm)', color: 'var(--text-on-dark-muted)', marginTop: 'var(--space-4)', maxWidth: '30ch' }}>An AI double that attends your interviews, so the last human in the process doesn&rsquo;t have to be you.</p>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <h4>{c.h}</h4>
              <ul>{c.links.map((l) => <li key={l}><a href="#">{l}</a></li>)}</ul>
            </div>
          ))}
        </div>
        <div className="m-footer__legal">
          <span>&copy; 2026 Placeholder, Inc. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Testimonials, Pricing, Faq, FinalCta, SiteFooter });
