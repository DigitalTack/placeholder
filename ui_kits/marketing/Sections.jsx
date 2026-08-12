function Proof() {
  const { StatBlock } = window.PH;
  const logos = ['NORTHWIND', 'Vantive', 'CADRE', 'Lumenpath', 'Grovewell'];
  return (
    <section className="m-logobar" aria-label="Usage">
      <div className="m-wrap">
        <p className="m-logobar__label">Trusted by candidates at</p>
        <div className="m-logobar__row">
          {logos.map((l) => <div className="m-fakelogo" key={l}>{l}</div>)}
        </div>
        <div className="m-statrow">
          <StatBlock value="42,000" label="Candidates" />
          <StatBlock value="190,000" label="Interviews attended" />
          <StatBlock value="0" label="Attended in person" />
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const { SectionHeader, Card } = window.PH;
  const cols = [
    { t: 'It&rsquo;s repetitive', b: 'You&rsquo;ve answered &ldquo;tell me about yourself&rdquo; 340 times. You&rsquo;ve never once answered it differently. Why are you still there for it?' },
    { t: 'It doesn&rsquo;t scale', b: 'Four rounds per company. Five companies. That&rsquo;s twenty hours you&rsquo;re not getting back, and nineteen of them are the same hour.' },
    { t: 'It&rsquo;s already automated on their side', b: 'Your application was read by a model. Your video screen was scored by a model. You are the last human left in the process. That seems like an oversight.' }
  ];
  return (
    <section className="m-section">
      <div className="m-wrap">
        <div className="m-head">
          <SectionHeader eyebrow="The problem" title="Interviewing is a solved problem for everyone except you." />
        </div>
        <div className="m-grid-3">
          {cols.map((c) => (
            <Card key={c.t} elevation="flat" pad="lg">
              <h3 style={{ fontSize: 'var(--size-h3)', fontWeight: 600, marginBottom: 'var(--space-3)' }} dangerouslySetInnerHTML={{ __html: c.t }}></h3>
              <p style={{ fontSize: 'var(--size-body-sm)', color: 'var(--text-muted)' }} dangerouslySetInnerHTML={{ __html: c.b }}></p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const { SectionHeader, Card } = window.PH;
  const steps = [
    { n: '01', icon: 'git-branch', t: 'Connect LinkedIn or GitHub', b: 'We ingest your commit history, your PR comments, and the six posts you wrote about company culture. Your double learns what you&rsquo;ve done and, more importantly, how you&rsquo;d describe it.' },
    { n: '02', icon: 'video', t: 'Upload a 90-second video', b: 'Your double learns your face, your voice, and the specific way you say &ldquo;that&rsquo;s a great question&rdquo; while you think of an answer.' },
    { n: '03', icon: 'sliders-horizontal', t: 'Set your parameters', b: 'Enthusiasm. Humility. Willingness to relocate. Adjust until it sounds like the version of you that gets hired.' },
    { n: '04', icon: 'moon', t: 'Stay in bed', b: 'You&rsquo;ll get a calendar invite you don&rsquo;t need to accept.' }
  ];
  return (
    <section className="m-section" id="how" style={{ background: 'var(--surface-canvas)', borderTop: '1px solid var(--line-hairline)', borderBottom: '1px solid var(--line-hairline)' }}>
      <div className="m-wrap">
        <div className="m-head">
          <SectionHeader eyebrow="How it works" title="Four minutes to set up. Zero minutes to attend." align="center" />
        </div>
        <div className="m-grid-4">
          {steps.map((s) => (
            <Card key={s.n} elevation="flat" pad="lg" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <div className="m-icon"><i data-lucide={s.icon}></i></div>
              <div>
                <div className="m-step__n">{s.n}</div>
                <h3 style={{ fontSize: 'var(--size-h3)', fontWeight: 600, marginTop: 'var(--space-1)' }} dangerouslySetInnerHTML={{ __html: s.t }}></h3>
              </div>
              <p style={{ fontSize: 'var(--size-body-sm)', color: 'var(--text-muted)' }} dangerouslySetInnerHTML={{ __html: s.b }}></p>
            </Card>
          ))}
        </div>
        <p className="m-fineprint">Average setup time: 4 minutes. Average interview time: 0 minutes.</p>
      </div>
    </section>
  );
}

function Features() {
  const { SectionHeader } = window.PH;
  const tiles = [
    { icon: 'git-compare', t: 'Consistency Engine', b: 'Your story stays identical across all four rounds. No contradictions, no drift, no remembering what you told the recruiter in March.' },
    { icon: 'audio-lines', t: 'Company Voice Match', b: 'Your double reads the job description, the careers page, and the CEO&rsquo;s last eleven posts, then adjusts its vocabulary to match. It will use their words back at them within the first ninety seconds.' },
    { icon: 'sliders-horizontal', t: 'Enthusiasm Slider', b: 'Some rooms want energy. Some want composure. Set the level before the call and your double holds it for the full hour, including through the salary question.' },
    { icon: 'wand-sparkles', t: 'Weakness Generator', b: 'Converts your actual weaknesses into acceptable ones. &ldquo;I struggle with deadlines&rdquo; becomes &ldquo;I care too much about getting the details right.&rdquo; Trained on 12,000 successful interviews.' },
    { icon: 'users', t: 'Live Panel Handling', b: 'Multiple interviewers, overlapping questions, one silent participant who hasn&rsquo;t turned their camera on. Your double handles all of it and thanks each person by name at the end.' },
    { icon: 'archive', t: 'Continuity Mode', b: 'Your double keeps a record of everything it said it could do, so that when you eventually start, you know which version of you they hired.' }
  ];
  return (
    <section className="m-section" id="features">
      <div className="m-wrap">
        <div className="m-head">
          <SectionHeader eyebrow="Platform" title="Everything the room expects, held for the full hour." />
        </div>
        <div className="m-grid-6">
          {tiles.map((t) => (
            <div className="m-feature" key={t.t}>
              <div className="m-icon"><i data-lucide={t.icon}></i></div>
              <h3>{t.t}</h3>
              <p dangerouslySetInnerHTML={{ __html: t.b }}></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Proof, Problem, HowItWorks, Features });
