/* TODO: replace with the real Calendly / Cal.com link. Falls back to email until then. */
const BOOKING_URL = 'mailto:david@digitaltack.com?subject=Placeholder';

/* TODO — real names, roles and photographs before this page goes anywhere public.
   The PRD is explicit: this section ships real people or not at all, because
   after a full page of fabricated testimonials the actual humans ARE the
   punchline. Drop the files into assets/team/ (that directory ships with the
   build automatically) and set each `img`; entries left without one render a
   neutral "photo to come" frame. */
const TEAM = [
  { n: 'David Hernández', r: 'CEO', img: null },
  { n: 'Tony Morellá', r: 'CTO', img: null },
  { n: 'Juanchu Fernández', r: 'Frontend Lead', img: null },
  { n: 'Gonzalo Trenco', r: 'CFO', img: null },
  { n: 'Diana Loja', r: 'CFO', img: null },
  { n: 'Doménica Jiménez', r: 'Full Stack Developer', img: null }
];

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
            <span className="dt-eyebrow">AI interviewer</span>
            {left.map((s, i) => <div className="h-bubble" key={i} data-on={step > SCENE.indexOf(s)}>{s.t}</div>)}
          </div>
          <div className="h-seat">
            <div className="h-seat__box"></div>
            <div className="h-seat__cap">the chair<br />nobody sat in</div>
          </div>
          <div className="h-party h-party--right">
            <span className="dt-eyebrow">AI candidate</span>
            {right.map((s, i) => <div className="h-bubble" key={i} data-on={step > SCENE.indexOf(s)}>{s.t}</div>)}
          </div>
        </div>
      </div>
      <figcaption className="h-scene__cap">Interviewer: AI. Candidate: AI. Score: generated. Humans involved: none.</figcaption>
    </figure>
  );
}

function HumanPage() {
  const host = { name: 'David', full: 'David Hernández' };
  return (
    <React.Fragment>
      <div className="h-wrap h-top">
        <Scene />
      </div>

      <div className="h-wrap h-big">
        <span className="dt-eyebrow">01 / The reveal</span>
        <h1 className="dt-display">Placeholder isn&rsquo;t real.<br /><span className="dt-display--blue">The problem is.</span></h1>
      </div>

      <div className="h-wrap h-prose">
        <p>We built a fake product about an AI that shows up so a person doesn&rsquo;t have to. It got uncomfortably easy to write.</p>
        <p>You&rsquo;ve probably met the real version. The proposal that reads like it was generated, because it was. The codebase a vendor delivered that nobody at the vendor can explain. The &ldquo;team&rdquo; on the other end of the contract that turns out to be one account manager and a model.</p>
        <p>Some of that is genuinely good. A lot of it is a placeholder, standing exactly where an engineer should be.</p>
      </div>

      <div className="h-wrap h-section">
        <div className="h-rule"></div>
        <div className="h-section__head">
          <span className="dt-eyebrow">02 / What we do</span>
          <h2 className="dt-h2">What we actually do</h2>
        </div>
        <div className="h-prose">
          <p>We&rsquo;re Digital Tack. We build custom software, the data platforms behind it, and the cloud it runs on &mdash; small senior teams working directly with yours.</p>
          <p>We use AI every day. It makes our engineers faster, and pretending otherwise would be its own kind of dishonesty. What we don&rsquo;t do is put it where a person should be.</p>
          <p className="h-dim">The judgement about what to build. The conversation where someone tells you the requirement is wrong. The person who has to care whether this works on Monday. Those aren&rsquo;t tasks to be automated away &mdash; they&rsquo;re the actual job.</p>
          <p>So when you work with us there are people on the other end. They have names, they have opinions, and they&rsquo;ll tell you when they disagree with you.</p>
        </div>
      </div>

      <div className="h-wrap h-section">
        <div className="h-rule"></div>
        <div className="h-section__head">
          <span className="dt-eyebrow">03 / The team</span>
          <h2 className="dt-h2">The people who&rsquo;d be working on this.</h2>
        </div>
        <div className="h-team">
          {TEAM.map((p, i) => (
            <figure className="h-person" key={i}>
              {p.img
                ? <img className="h-person__photo" src={p.img} alt={p.n} />
                : <div className="h-person__photo h-person__photo--empty"><span>photo to come</span></div>}
              <figcaption>
                <div className="h-person__name">{p.n}</div>
                <div className="h-person__role">{p.r}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <section className="h-cta">
        <div className="h-cta__inner">
          <span className="dt-eyebrow dt-eyebrow--on-dark">04 / Talk to us</span>
          <h2 className="dt-h2 dt-h2--on-dark">Talk to a person.</h2>
          <p className="dt-lead dt-lead--on-dark">Thirty minutes with {host.name}, who will actually be on the call. Bring the thing you&rsquo;re stuck on &mdash; a system that needs rebuilding, data you can&rsquo;t trust, a delivery that keeps slipping &mdash; and you&rsquo;ll leave with a straight opinion on it, whether or not you hire us.</p>
          <div className="h-cta__row">
            <a className="dt-btn dt-btn--primary" href={BOOKING_URL}>Book 30 minutes with {host.name} <span className="dt-arrow">&rarr;</span></a>
          </div>
          <p className="h-cta__micro">No form, no chatbot, no qualification funnel. And if we&rsquo;re not a fit, {host.name} will say so in the first ten minutes.</p>
        </div>
      </section>

      <div className="h-wrap">
        <div className="h-attrib-block">
          <img className="h-attrib-logo" src="../../dt/assets/logo-primary.png" alt="Digital Tack" />
          <p>Placeholder was made by <strong>Digital Tack</strong>.</p>
          <p className="h-dim">We build software with people in it. Custom development and data, at <a href="https://www.digitaltack.com">digitaltack.com</a>.</p>
        </div>
        <div className="h-foot"><a href="index.html">The fake product</a> is still there if you want another look.</div>
      </div>
    </React.Fragment>
  );
}

Object.assign(window, { Scene, HumanPage });
