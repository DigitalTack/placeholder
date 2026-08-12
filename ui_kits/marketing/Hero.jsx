function Nav() {
  const { Button, Logo } = window.PH;
  return (
    <header className="m-nav">
      <div className="m-wrap m-nav__in">
        <a href="index.html" style={{ display: 'flex' }} aria-label="Placeholder home">
          <Logo variant="markText" height={26} assetBase="../../assets" />
        </a>
        <nav className="m-nav__links" aria-label="Primary">
          <a className="m-nav__link" href="#features">Product</a>
          <a className="m-nav__link" href="#features">Features</a>
          <a className="m-nav__link" href="#pricing">Pricing</a>
          <a className="m-nav__link" href="#pricing">Enterprise</a>
        </nav>
        <div className="m-nav__right">
          <Button variant="ghost" size="sm" className="m-nav__signin" href="#">Sign in</Button>
          <Button size="sm" href="#demo">Request a demo</Button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const { Button, Avatar, MetaStrip, Badge } = window.PH;
  return (
    <section className="m-hero">
      <div className="m-wrap m-hero__grid">
        <div>
          <span className="m-eyebrow">Interview automation, finally complete.</span>
          <h1 className="m-h1" style={{ marginTop: 'var(--space-4)' }}>You&rsquo;ve already told them about yourself. Let it do it this time.</h1>
          <p className="m-lede">Placeholder trains an AI double on your experience, your voice, and your face &mdash; then attends your interviews for you. You&rsquo;ll get the offer. You won&rsquo;t get the calendar invite.</p>
          <div className="m-cta-row">
            <Button size="lg" href="#demo">Request a demo</Button>
            <a className="m-textlink" href="#how">See how it works &rarr;</a>
          </div>
          <p className="m-micro">No credit card. No preparation. No presence required.</p>
        </div>
        <div className="m-mock" role="img" aria-label="Product screenshot: an interview in progress, with the candidate's AI double speaking and a session confidence score of 98 percent">
          <div className="m-mock__bar">
            <span className="m-mock__dot"></span><span className="m-mock__dot"></span><span className="m-mock__dot"></span>
            <span style={{ marginLeft: 'var(--space-3)', fontFamily: 'var(--font-mono)', fontSize: 'var(--size-caption)', color: 'var(--text-faint)' }}>round 3 of 4&nbsp;/&nbsp;final</span>
            <Badge tone="success" dot style={{ marginLeft: 'auto' }}>Attending</Badge>
          </div>
          <div className="m-mock__body">
            <div className="m-mock__tiles">
              <div className="m-tile">
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                  <Avatar kind="human" initials="AI" />
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--size-body-sm)', color: 'var(--text-strong)' }}>Interviewer</div>
                    <div style={{ fontSize: 'var(--size-caption)', color: 'var(--text-faint)' }}>Panel &middot; AI</div>
                  </div>
                </div>
                <p style={{ fontSize: 'var(--size-body-sm)', color: 'var(--text-muted)' }}>&ldquo;Tell me about a time you handled conflict on a team.&rdquo;</p>
              </div>
              <div className="m-tile m-tile--synthetic">
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                  <Avatar kind="synthetic" initials="MD" />
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--size-body-sm)', color: 'var(--text-strong)' }}>Marta&rsquo;s double</div>
                    <div style={{ fontSize: 'var(--size-caption)', color: 'var(--indigo-600)' }}>Speaking &middot; 00:41</div>
                  </div>
                </div>
                <div className="m-waveform" aria-hidden="true">
                  {[.4, .8, .55, 1, .3, .75, .5, .9, .35, .65, .8, .45].map((h, i) => (
                    <span key={i} style={{ height: (h * 100) + '%', animationDelay: (i * 70) + 'ms' }}></span>
                  ))}
                </div>
              </div>
            </div>
            <div className="m-score">
              <span className="m-score__num">98%</span>
              <span style={{ fontSize: 'var(--size-caption)', color: 'var(--text-muted)' }}>Session confidence</span>
              <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: 'var(--size-caption)', color: 'var(--text-faint)' }}>Enthusiasm 7/10</span>
            </div>
            <div className="m-meter"><i style={{ width: '98%' }}></i></div>
            <div style={{ marginTop: 'var(--space-4)' }}>
              <MetaStrip items={[{ label: 'Specificity', value: '3%' }, { label: 'Contradictions', value: '0' }, { label: 'Humans involved', value: '0' }]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Nav, Hero });
