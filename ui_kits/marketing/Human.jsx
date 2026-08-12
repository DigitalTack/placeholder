const SCENE = [
  { side: 'l', t: 'Tell me about a time you handled conflict on a team.' },
  { side: 'r', t: 'Great question. Most conflict is really a communication gap wearing a costume.' },
  { side: 'l', t: 'And what would you do differently now?' },
  { side: 'r', t: 'We landed somewhere neither of us had started, which is usually the sign it went well.' },
  { side: 'l', t: 'Thank you. That was very helpful.' },
  { side: 'r', t: 'Likewise. I appreciate you making the time.' }
];

function Scene() {
  const reduce = typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [step, setStep] = React.useState(reduce ? SCENE.length : 0);
  React.useEffect(function () {
    if (reduce) return;
    const id = setInterval(function () {
      setStep(function (s) { return s >= SCENE.length + 1 ? 0 : s + 1; });
    }, 2100);
    return function () { clearInterval(id); };
  }, []);
  const left = SCENE.filter((s) => s.side === 'l');
  const right = SCENE.filter((s) => s.side === 'r');
  return (
    <figure className="h-scene-wrap">
      <div className="h-scene" aria-hidden="true">
        <div className="h-scene__grid">
          <div className="h-party">
            <span className="h-party__label">AI interviewer</span>
            {left.map((s, i) => <div className="h-bubble" key={i} data-on={step > SCENE.indexOf(s)}>{s.t}</div>)}
          </div>
          <div className="h-seat">
            <div className="h-seat__box"></div>
            <div className="h-seat__cap">the chair<br />nobody sat in</div>
          </div>
          <div className="h-party h-party--right">
            <span className="h-party__label">AI candidate</span>
            {right.map((s, i) => <div className="h-bubble" key={i} data-on={step > SCENE.indexOf(s)}>{s.t}</div>)}
          </div>
        </div>
      </div>
      <figcaption className="h-scene__cap">Interviewer: AI. Candidate: AI. Score: generated. Humans involved: none.</figcaption>
    </figure>
  );
}

function HumanPage() {
  const { Button } = window.PH;
  const host = { name: 'Dana', full: 'Dana Okoye', role: 'Principal engineer' };
  const team = [
    { id: 'team-1', n: 'Dana Okoye', r: 'Principal engineer' },
    { id: 'team-2', n: 'Ilya Marchetti', r: 'Design lead' },
    { id: 'team-3', n: 'Priya Raman', r: 'Staff engineer' },
    { id: 'team-4', n: 'Sam Whitfield', r: 'Delivery' }
  ];
  return (
    <React.Fragment>
      <div className="h-wrap h-wrap--wide h-top">
        <Scene />
      </div>

      <div className="h-wrap h-big">
        <h1>Placeholder isn&rsquo;t real.<br />The problem is.</h1>
      </div>

      <div className="h-wrap h-prose">
        <p>We built a fake product about an AI that shows up so a person doesn&rsquo;t have to.</p>
        <p>It got uncomfortably easy to write. Because for two years now, that&rsquo;s been the pitch for almost everything &mdash; AI that attends, AI that writes, AI that decides, AI standing exactly where a person used to be.</p>
        <p>Some of that is genuinely good. A lot of it is a placeholder.</p>
      </div>

      <div className="h-wrap">
        <div className="h-rule"></div>
        <h2 className="h-h2">What we actually think</h2>
        <div className="h-prose" style={{ paddingTop: 'var(--space-6)' }}>
          <p>We use AI every day. It makes our engineers faster, and pretending otherwise would be its own kind of dishonesty.</p>
          <p>What we don&rsquo;t do is put it where a person should be.</p>
          <p className="h-dim">The judgement about what to build. The conversation where someone tells you the requirement is wrong. The person who has to care whether this works on Monday. Those aren&rsquo;t tasks to be automated away &mdash; they&rsquo;re the actual job.</p>
          <p>When you work with us, there are people on the other end. They have names, they have opinions, and they&rsquo;ll tell you when they disagree with you.</p>
        </div>
      </div>

      <div className="h-wrap h-wrap--wide">
        <div className="h-rule"></div>
        <h2 className="h-h2">The people who&rsquo;d be working on this.</h2>
        <div className="h-team">
          {team.map((p) => (
            <div className="h-person" key={p.id}>
              <figure>
                <image-slot id={p.id} shape="rounded" radius="10" placeholder={'Drop a photo of ' + p.n.split(' ')[0]}></image-slot>
                <figcaption>
                  <div className="h-person__name">{p.n}</div>
                  <div className="h-person__role">{p.r}</div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
        <div className="h-rule"></div>
      </div>

      <div className="h-wrap">
        <div className="h-cta">
          <h2>Talk to a person.</h2>
          <p>Not a form. Not a chatbot. Not a qualification funnel. Thirty minutes with {host.name}, who will actually be on the call.</p>
          <div className="h-cta__row">
            <Button variant="warm" size="lg" href="mailto:dana@example.org?subject=Placeholder">Book time with {host.name}</Button>
          </div>
          <p className="h-cta__micro">If we&rsquo;re not a fit, {host.name} will tell you that in the first ten minutes.</p>
        </div>
        <div className="h-attrib-block">
          <p>Placeholder was made by <strong>[Your company]</strong>.</p>
          <p className="h-dim">We build software with people in it.</p>
        </div>
        <div className="h-foot"><a href="index.html">The fake product</a> is still there if you want another look.</div>
      </div>
    </React.Fragment>
  );
}

Object.assign(window, { Scene, HumanPage });
