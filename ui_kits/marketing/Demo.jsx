/* Pre-generated demo content (copy deck §DEMO ANSWER COPY).
   No live model calls: 5 roles x 1 question x 3 hand-written variants. */
const DEMO_QUESTION = 'Tell me about a time you handled conflict on a team.';

const DEMO_ROLES = {
  'Senior Frontend Engineer': [
    'Great question. Early in a previous role, I noticed alignment across the team had started to drift \u2014 not dramatically, but enough that we were solving the same problem twice. Rather than escalate, I opened a channel for honest dialogue and made sure every perspective had room. What I\u2019ve learned is that most conflict is really a communication gap wearing a costume. We came out of it with a shared understanding, a cleaner process, and frankly a stronger team. It\u2019s something I\u2019ve carried into every engagement since.',
    'Absolutely. I think conflict on a team is usually a signal rather than a problem. In one situation, two of us had genuinely different views on the right direction, and it had started to slow things down. I asked for time to understand where the other perspective was coming from before advocating for my own. That reframing changed the conversation entirely. We landed somewhere neither of us had started, which is usually the sign it went well. I\u2019d approach it the same way today.',
    'Sure. There was a period where the team was under real pressure, and that pressure surfaced some disagreement about priorities. My instinct in those moments is to slow down rather than speed up. I brought people together, got the disagreement onto the table where it could be looked at properly, and made sure nobody felt talked over. The tension didn\u2019t disappear overnight, but it became productive rather than corrosive. That experience shaped a lot of how I work with people now.'
  ],
  'Product Manager': [
    'Great question. In a previous role, engineering and design had diverged on what we were actually building, and it hadn\u2019t surfaced because everyone was being polite about it. I made the disagreement explicit \u2014 not to force a decision, but so we could look at it together. What I\u2019ve found is that most product conflict is a symptom of an unshared assumption. Once we named it, the path forward was almost obvious. We shipped something better than either original proposal, and the team trusted each other more afterwards.',
    'Definitely. I think part of the job is holding tension between stakeholders without letting it turn personal. There was a situation where two functions wanted genuinely different outcomes, and both were right from where they were standing. I spent time in each of their worlds before proposing anything. The proposal I eventually brought wasn\u2019t a compromise \u2014 it was a reframe. That\u2019s the thing I\u2019d emphasise: conflict is usually a framing problem. Everyone left that conversation feeling heard, which mattered more than being right.',
    'Sure. Priorities were contested, which honestly is a healthy sign \u2014 it means people care. My approach was to get everything visible: the constraints, the tradeoffs, what we were actually optimising for. A lot of disagreement dissolves once it\u2019s written down. What remained, we decided together, and I made sure the decision and the reasoning were documented so nobody relitigated it later. That team went on to work extremely well together, and I\u2019d like to think that moment was part of why.'
  ],
  'Data Scientist': [
    'Great question. There was a disagreement about how to interpret a set of results \u2014 reasonable people looking at the same thing and reaching different conclusions. Rather than defend my reading, I went back and made the assumptions underneath it explicit. That\u2019s usually where the real disagreement lives. Once both sets of assumptions were visible, the conversation became technical instead of personal, which is where it should have been. We aligned quickly after that, and the work was stronger for having been challenged.',
    'Absolutely. I\u2019ve found that most conflict in analytical work comes from unstated expectations about what a piece of work is for. In one case, a stakeholder wanted something quite different from what I\u2019d understood. Instead of pushing back, I asked what decision the analysis was meant to support. That single question reset the entire conversation. We ended up scoping something more useful than either of us had described initially, and the relationship was better for it.',
    'Sure. There was tension between rigour and timeline, which is a fairly familiar tension in this kind of work. I laid out honestly what confidence we could reach in the time available, and what we\u2019d be trading away. I think people respect being given the real picture rather than a comfortable one. We agreed on a scope that was defensible, delivered it, and revisited the deeper question later. Nobody felt overruled, which to me is the marker of handling it well.'
  ],
  'Engineering Manager': [
    'Great question. Two engineers on my team had a genuine, sustained technical disagreement that was starting to affect how they worked together. I resisted the urge to arbitrate. Instead I created space for each to articulate the other\u2019s position back \u2014 properly, not performatively. What I\u2019ve learned is that people rarely need to be agreed with; they need to be understood. They reached a resolution without me deciding anything, and the working relationship afterwards was better than before. That\u2019s usually the outcome I\u2019m aiming for.',
    'Definitely. As a manager I think your job in conflict is to be useful, not central. There was a situation where a disagreement had gone quiet, which is more concerning than when it\u2019s loud. I brought it back into the open carefully, in a setting where honesty felt safe. Once it was spoken about directly, most of the heat came out of it. We agreed on how we\u2019d handle it next time, which mattered more than resolving that one instance.',
    'Sure. There was friction between two functions that my team sat between, and it had started to land on individual people, which isn\u2019t fair to them. I took it upstream and worked on the structural cause rather than the interpersonal symptom. My view is that repeated conflict is almost always an organisational design signal. We adjusted how the work flowed between the groups and the friction largely resolved itself. The team noticed, and trust went up as a result.'
  ],
  'UX Designer': [
    'Great question. There was a disagreement about a design direction where the feedback I was getting felt contradictory. Rather than iterating blindly, I went back to what we were actually trying to achieve for the user. I\u2019ve found that most design conflict is really unresolved disagreement about the problem, not the solution. Once we re-anchored on that, the direction became much clearer and the debate lost its charge. We shipped something I\u2019m proud of, and the process afterwards was noticeably calmer.',
    'Absolutely. In one case a stakeholder and I wanted quite different things, and I could feel it becoming positional. I asked to see the concern behind the request rather than the request itself. That shifted everything \u2014 the underlying worry was completely legitimate and had nothing to do with the specific change being asked for. We solved the real concern instead. I try to bring that curiosity to every disagreement now, because the stated position is rarely the whole story.',
    'Sure. Design and engineering had different views on what was feasible in the time we had, and it had started to feel adversarial. I invited the engineers into the design process much earlier than usual, which meant the constraints shaped the work rather than arriving as objections to it. The tension largely disappeared once we were solving the same problem together. It changed how I collaborate \u2014 I\u2019d rather have the hard conversation early than defend something late.'
  ]
};

/* First name: max 20 chars, letters / spaces / hyphens / apostrophes, title-cased.
   Rejected input silently falls back to the default phrasing. */
function cleanName(raw) {
  const stripped = (raw || '').replace(/[^A-Za-z\u00C0-\u024F' -]/g, '').trim().slice(0, 20).toLowerCase();
  if (!stripped) return '';
  return stripped.replace(/(^|[\s-'])([a-z])/g, function (m, p, c) { return p + c.toUpperCase(); });
}

function Demo() {
  const { Button, Input, Select, Avatar, MetaStrip, Badge } = window.PH;
  const roles = Object.keys(DEMO_ROLES);
  const [name, setName] = React.useState('');
  const [role, setRole] = React.useState(roles[0]);
  const [variant, setVariant] = React.useState(0);
  const [runId, setRunId] = React.useState(0);
  const [phase, setPhase] = React.useState('idle'); // idle | question | pause | typing | answer | done
  const [q, setQ] = React.useState('');
  const [a, setA] = React.useState('');
  const lastClick = React.useRef(0);

  const clean = cleanName(name);
  const doubleLabel = clean ? clean + '\u2019s double' : 'Your double';
  const answer = DEMO_ROLES[role][variant % 3];
  const reduce = typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const qRef = React.useRef(null);
  const aRef = React.useRef(null);

  React.useEffect(function () {
    if (runId === 0) return;
    let cancelled = false;
    const timers = [];
    const wait = (ms) => new Promise((res) => timers.push(setTimeout(res, ms)));
    // Type imperatively into the DOM node: one React render per phase, not per character,
    // and time-based so a slow frame skips ahead instead of stalling the sentence.
    const type = (node, text, cps) => new Promise(function (res) {
      if (!node) { res(); return; }
      const started = Date.now();
      node.textContent = '';
      const id = setInterval(function () {
        if (cancelled) { clearInterval(id); res(); return; }
        const shown = Math.min(text.length, Math.round((Date.now() - started) / 1000 * cps));
        node.textContent = text.slice(0, shown);
        if (shown >= text.length) { clearInterval(id); res(); }
      }, 32);
      timers.push(id);
    });
    (async function run() {
      setQ(''); setA('');
      if (reduce) {
        setQ(DEMO_QUESTION); setA(answer); setPhase('done');
        return;
      }
      setPhase('question');
      await wait(30);
      await type(qRef.current, DEMO_QUESTION, 42);
      if (cancelled) return;
      setPhase('pause');
      await wait(1200); if (cancelled) return;
      setPhase('typing');
      await wait(900); if (cancelled) return;
      setPhase('answer');
      await wait(30);
      await type(aRef.current, answer, 190);
      if (cancelled) return;
      setQ(DEMO_QUESTION); setA(answer);
      setPhase('done');
    })();
    return function () { cancelled = true; timers.forEach(clearTimeout); timers.forEach(clearInterval); };
  }, [runId]);

  const running = phase !== 'idle' && phase !== 'done';
  const debounced = function (fn) {
    return function () {
      const now = Date.now();
      if (running || now - lastClick.current < 400) return;
      lastClick.current = now;
      fn();
    };
  };
  const start = debounced(function () { setRunId(function (r) { return r + 1; }); });
  const regenerate = debounced(function () { setVariant(function (v) { return (v + 1) % 3; }); setRunId(function (r) { return r + 1; }); });
  const scored = phase === 'answer' || phase === 'done';

  return (
    <section className="m-section m-demo" id="demo">
      <div className="m-wrap" style={{ position: 'relative' }}>
        <div className="ph-sectionhead ph-sectionhead--center">
          <span className="ph-eyebrow" style={{ color: 'var(--indigo-300)' }}>Live demo</span>
          <h2>Watch your double interview.</h2>
          <p>Enter your name. Pick a role. See what you&rsquo;d have said if you&rsquo;d bothered.</p>
        </div>

        <div className="m-demo__panel">
          <div className="m-demo__controls">
            <Input label="First name" name="demo-name" placeholder="Marta" value={name} maxLength={20} autoComplete="given-name" onChange={(e) => setName(e.target.value)} />
            <Select label="Role" name="demo-role" options={roles} value={role} onChange={(e) => { setRole(e.target.value); setVariant(0); }} />
            <Button size="md" onClick={start} disabled={running}>{running ? 'Preparing your double\u2026' : 'Watch your double interview'}</Button>
          </div>

          <div className="m-demo__stage">
            <div className="m-seat">
              <div className="m-seat__who">
                <Avatar kind="human" initials="AI" />
                <div>
                  <div className="m-seat__name">Interviewer &middot; AI</div>
                  <div className="m-seat__role">{role}</div>
                </div>
                {phase === 'question' && <Badge tone="onDark" style={{ marginLeft: 'auto' }}>Asking</Badge>}
              </div>
              <p className="m-seat__text">
                {phase === 'idle'
                  ? <span style={{ color: 'var(--text-on-dark-muted)' }}>The panel is waiting.</span>
                  : <span>&ldquo;<span ref={qRef}>{q}</span>{phase === 'question' && <span className="m-caret" aria-hidden="true"></span>}&rdquo;</span>}
              </p>
            </div>

            <div className="m-seat m-seat--double">
              <div className="m-seat__who">
                <Avatar kind="synthetic" initials={(clean.slice(0, 1) || 'Y').toUpperCase() + 'D'} />
                <div>
                  <div className="m-seat__name">{doubleLabel}</div>
                  <div className="m-seat__role">Synthetic attendee &middot; enthusiasm 7/10</div>
                </div>
                {(phase === 'typing' || phase === 'answer') && <Badge tone="onDark" style={{ marginLeft: 'auto' }}>Speaking</Badge>}
              </div>
              <p className="m-seat__text m-seat__text--answer" aria-live="polite" aria-atomic="false">
                {phase === 'typing'
                  ? <span className="m-typing" aria-hidden="true"><i></i><i></i><i></i></span>
                  : (phase === 'answer' || phase === 'done'
                      ? <span><span ref={aRef}>{a}</span>{phase === 'answer' && <span className="m-caret" aria-hidden="true"></span>}</span>
                      : <span style={{ color: 'var(--text-on-dark-muted)' }}>Nothing said yet.</span>)}
              </p>
              {phase === 'typing' && <span className="m-sr">Preparing your double&rsquo;s answer.</span>}
            </div>
          </div>

          <div className="m-demo__foot">
            <MetaStrip onDark items={[
              { label: 'Confidence', value: scored ? '98%' : '\u2014' },
              { label: 'Specificity', value: scored ? '3%' : '\u2014' },
              { label: 'Humans involved', value: '0' }
            ]} />
            <div className="m-demo__actions">
              <div>
                <Button variant="onDark" size="sm" onClick={regenerate} disabled={running || runId === 0} iconLeft={<i data-lucide="refresh-cw" style={{ width: 14, height: 14 }}></i>}>Regenerate</Button>
                <p className="m-micro m-micro--dark">Not quite right? Generate another one.</p>
              </div>
              <Button variant="inverse" size="sm" href="truth.html">Request a demo</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Demo });
