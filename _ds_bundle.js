/* @ds-bundle: {"format":4,"namespace":"PlaceholderDesignSystem_73112b","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"SectionHeader","sourcePath":"components/core/SectionHeader.jsx"},{"name":"StatBlock","sourcePath":"components/core/StatBlock.jsx"},{"name":"Accordion","sourcePath":"components/feedback/Accordion.jsx"},{"name":"MetaStrip","sourcePath":"components/feedback/MetaStrip.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"c322d4a202a0","components/core/Badge.jsx":"71e58f3641ea","components/core/Button.jsx":"6e57fa613412","components/core/Card.jsx":"da70d160ef4a","components/core/IconButton.jsx":"1067d21ff625","components/core/Logo.jsx":"f5be216d7dae","components/core/SectionHeader.jsx":"6400451c6902","components/core/StatBlock.jsx":"83d51dbaf7bc","components/feedback/Accordion.jsx":"8b44dcf7ace9","components/feedback/MetaStrip.jsx":"edc0b84c4452","components/forms/Input.jsx":"8b1d60212767","components/forms/Select.jsx":"906145ce42a0","components/forms/Switch.jsx":"455af841fbf5","ui_kits/marketing/Demo.jsx":"18b317f54ca4","ui_kits/marketing/Hero.jsx":"e7243f4c6f3e","ui_kits/marketing/Human.jsx":"0504cc06007d","ui_kits/marketing/Sections.jsx":"90c7d2a5f1e9","ui_kits/marketing/Social.jsx":"2aa307ac6956","ui_kits/marketing/ds-loader.js":"1c8977327242","ui_kits/marketing/image-slot.js":"fff26d081c8d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PlaceholderDesignSystem_73112b = window.PlaceholderDesignSystem_73112b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const KIND = {
  synthetic: 'ph-avatar--synthetic',
  human: 'ph-avatar--human',
  accent: 'ph-avatar--accent'
};
function Avatar({
  kind = 'human',
  size = 'md',
  shape = 'circle',
  initials = '',
  src,
  alt = '',
  className = '',
  ...rest
}) {
  const cls = ['ph-avatar', 'ph-avatar--' + size, KIND[kind] || KIND.human, shape === 'square' ? 'ph-avatar--square' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONE = {
  neutral: 'ph-badge--neutral',
  accent: 'ph-badge--accent',
  solid: 'ph-badge--solid',
  success: 'ph-badge--success',
  warning: 'ph-badge--warning',
  danger: 'ph-badge--danger',
  outline: 'ph-badge--outline',
  onDark: 'ph-badge--onDark'
};
function Badge({
  tone = 'neutral',
  dot = false,
  className = '',
  children,
  ...rest
}) {
  const cls = ['ph-badge', TONE[tone] || TONE.neutral, dot ? 'ph-badge--dot' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CLS = {
  primary: 'ph-btn--primary',
  secondary: 'ph-btn--secondary',
  ghost: 'ph-btn--ghost',
  inverse: 'ph-btn--inverse',
  onDark: 'ph-btn--onDark',
  warm: 'ph-btn--warm'
};
function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  as,
  href,
  iconLeft,
  iconRight,
  className = '',
  children,
  ...rest
}) {
  const Tag = as || (href ? 'a' : 'button');
  const cls = ['ph-btn', 'ph-btn--' + size, CLS[variant] || CLS.primary, block ? 'ph-btn--block' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    href: href
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ELEV = {
  flat: 'ph-card--flat',
  raised: 'ph-card--raised',
  floating: 'ph-card--floating'
};
const TONE = {
  default: '',
  sunken: 'ph-card--sunken',
  accent: 'ph-card--accent',
  inverse: 'ph-card--inverse'
};
function Card({
  elevation = 'flat',
  tone = 'default',
  pad = 'md',
  interactive = false,
  as = 'div',
  className = '',
  children,
  ...rest
}) {
  const Tag = as;
  const cls = ['ph-card', ELEV[elevation] || '', TONE[tone] || '', pad === 'md' ? '' : 'ph-card--pad-' + pad, interactive ? 'ph-card--interactive' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  label,
  bare = false,
  className = '',
  children,
  ...rest
}) {
  const cls = ['ph-iconbtn', bare ? 'ph-iconbtn--bare' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    "aria-label": label,
    title: label
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Logo({
  variant = 'lockup',
  onDark = false,
  assetBase = '../../assets',
  height = 28,
  showTagline = false,
  className = '',
  ...rest
}) {
  const cls = ['ph-logo', onDark ? 'ph-logo--onDark' : '', className].filter(Boolean).join(' ');
  if (variant === 'lockup') {
    return /*#__PURE__*/React.createElement("span", _extends({
      className: cls
    }, rest), /*#__PURE__*/React.createElement("img", {
      src: assetBase + '/logo-lockup.png',
      alt: "Placeholder",
      style: {
        height: height * 1.5,
        width: 'auto'
      }
    }));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    style: {
      fontSize: height * 0.78
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: assetBase + (onDark ? '/logo-mark-white.png' : '/logo-mark.png'),
    alt: "",
    "aria-hidden": "true"
  }), variant !== 'mark' && /*#__PURE__*/React.createElement("span", null, "Placeholder"), showTagline && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--weight-medium)',
      fontSize: '.5em',
      color: 'var(--text-accent)',
      letterSpacing: 0
    }
  }, "Be there without being there"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeader.jsx
try { (() => {
function SectionHeader({
  eyebrow,
  title,
  body,
  align = 'left',
  as = 'h2',
  className = '',
  children
}) {
  const Tag = as;
  const cls = ['ph-sectionhead', align === 'center' ? 'ph-sectionhead--center' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    className: "ph-eyebrow"
  }, eyebrow), title && /*#__PURE__*/React.createElement(Tag, null, title), body && /*#__PURE__*/React.createElement("p", null, body), children);
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/core/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatBlock({
  value,
  label,
  onDark = false,
  className = '',
  ...rest
}) {
  const cls = ['ph-stat', onDark ? 'ph-stat--onDark' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "ph-stat__value"
  }, value), /*#__PURE__*/React.createElement("span", {
    className: "ph-stat__label"
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Accordion.jsx
try { (() => {
function Accordion({
  items = [],
  defaultOpen = -1,
  className = ''
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    className: ['ph-accordion', className].filter(Boolean).join(' ')
  }, items.map(function (item, i) {
    const isOpen = open === i;
    const panelId = 'ph-acc-panel-' + i;
    return /*#__PURE__*/React.createElement("div", {
      className: "ph-accordion__item",
      "data-open": isOpen,
      key: i
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "ph-accordion__trigger",
      "aria-expanded": isOpen,
      "aria-controls": panelId,
      onClick: function () {
        setOpen(isOpen ? -1 : i);
      }
    }, /*#__PURE__*/React.createElement("span", null, item.q), /*#__PURE__*/React.createElement("span", {
      className: "ph-accordion__sign",
      "aria-hidden": "true"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "ph-accordion__panel",
      id: panelId,
      role: "region",
      hidden: !isOpen
    }, /*#__PURE__*/React.createElement("p", null, item.a)));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/feedback/MetaStrip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function MetaStrip({
  items = [],
  onDark = false,
  className = '',
  ...rest
}) {
  const cls = ['ph-metastrip', onDark ? 'ph-metastrip--onDark' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), items.map(function (item, i) {
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, i > 0 && /*#__PURE__*/React.createElement("span", {
      className: "ph-metastrip__sep",
      "aria-hidden": "true"
    }, "\xB7"), /*#__PURE__*/React.createElement("span", {
      className: "ph-metastrip__item"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ph-metastrip__label"
    }, item.label, ":"), /*#__PURE__*/React.createElement("span", {
      className: "ph-metastrip__value"
    }, item.value)));
  }));
}
Object.assign(__ds_scope, { MetaStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/MetaStrip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  id,
  className = '',
  ...rest
}) {
  const inputId = id || 'ph-input-' + (rest.name || Math.random().toString(36).slice(2, 7));
  const describedBy = error || hint ? inputId + '-hint' : undefined;
  return /*#__PURE__*/React.createElement("div", {
    className: ['ph-field', className].filter(Boolean).join(' ')
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "ph-label",
    htmlFor: inputId
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    className: "ph-input",
    "aria-invalid": error ? true : undefined,
    "aria-describedby": describedBy
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    id: describedBy,
    className: error ? 'ph-hint ph-hint--error' : 'ph-hint'
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  options = [],
  id,
  className = '',
  children,
  ...rest
}) {
  const selectId = id || 'ph-select-' + (rest.name || Math.random().toString(36).slice(2, 7));
  return /*#__PURE__*/React.createElement("div", {
    className: ['ph-field', className].filter(Boolean).join(' ')
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "ph-label",
    htmlFor: selectId
  }, label), /*#__PURE__*/React.createElement("span", {
    className: "ph-selectwrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selectId,
    className: "ph-select"
  }, rest), children || options.map(function (o) {
    const opt = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  }))), hint && /*#__PURE__*/React.createElement("span", {
    className: "ph-hint"
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked,
  onChange,
  disabled,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['ph-switch', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: checked,
    onChange: onChange,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "ph-switch__track",
    "aria-hidden": "true"
  }), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Demo.jsx
try { (() => {
/* Pre-generated demo content (copy deck §DEMO ANSWER COPY).
   No live model calls: 5 roles x 1 question x 3 hand-written variants. */
const DEMO_QUESTION = 'Tell me about a time you handled conflict on a team.';
const DEMO_ROLES = {
  'Senior Frontend Engineer': ['Great question. Early in a previous role, I noticed alignment across the team had started to drift \u2014 not dramatically, but enough that we were solving the same problem twice. Rather than escalate, I opened a channel for honest dialogue and made sure every perspective had room. What I\u2019ve learned is that most conflict is really a communication gap wearing a costume. We came out of it with a shared understanding, a cleaner process, and frankly a stronger team. It\u2019s something I\u2019ve carried into every engagement since.', 'Absolutely. I think conflict on a team is usually a signal rather than a problem. In one situation, two of us had genuinely different views on the right direction, and it had started to slow things down. I asked for time to understand where the other perspective was coming from before advocating for my own. That reframing changed the conversation entirely. We landed somewhere neither of us had started, which is usually the sign it went well. I\u2019d approach it the same way today.', 'Sure. There was a period where the team was under real pressure, and that pressure surfaced some disagreement about priorities. My instinct in those moments is to slow down rather than speed up. I brought people together, got the disagreement onto the table where it could be looked at properly, and made sure nobody felt talked over. The tension didn\u2019t disappear overnight, but it became productive rather than corrosive. That experience shaped a lot of how I work with people now.'],
  'Product Manager': ['Great question. In a previous role, engineering and design had diverged on what we were actually building, and it hadn\u2019t surfaced because everyone was being polite about it. I made the disagreement explicit \u2014 not to force a decision, but so we could look at it together. What I\u2019ve found is that most product conflict is a symptom of an unshared assumption. Once we named it, the path forward was almost obvious. We shipped something better than either original proposal, and the team trusted each other more afterwards.', 'Definitely. I think part of the job is holding tension between stakeholders without letting it turn personal. There was a situation where two functions wanted genuinely different outcomes, and both were right from where they were standing. I spent time in each of their worlds before proposing anything. The proposal I eventually brought wasn\u2019t a compromise \u2014 it was a reframe. That\u2019s the thing I\u2019d emphasise: conflict is usually a framing problem. Everyone left that conversation feeling heard, which mattered more than being right.', 'Sure. Priorities were contested, which honestly is a healthy sign \u2014 it means people care. My approach was to get everything visible: the constraints, the tradeoffs, what we were actually optimising for. A lot of disagreement dissolves once it\u2019s written down. What remained, we decided together, and I made sure the decision and the reasoning were documented so nobody relitigated it later. That team went on to work extremely well together, and I\u2019d like to think that moment was part of why.'],
  'Data Scientist': ['Great question. There was a disagreement about how to interpret a set of results \u2014 reasonable people looking at the same thing and reaching different conclusions. Rather than defend my reading, I went back and made the assumptions underneath it explicit. That\u2019s usually where the real disagreement lives. Once both sets of assumptions were visible, the conversation became technical instead of personal, which is where it should have been. We aligned quickly after that, and the work was stronger for having been challenged.', 'Absolutely. I\u2019ve found that most conflict in analytical work comes from unstated expectations about what a piece of work is for. In one case, a stakeholder wanted something quite different from what I\u2019d understood. Instead of pushing back, I asked what decision the analysis was meant to support. That single question reset the entire conversation. We ended up scoping something more useful than either of us had described initially, and the relationship was better for it.', 'Sure. There was tension between rigour and timeline, which is a fairly familiar tension in this kind of work. I laid out honestly what confidence we could reach in the time available, and what we\u2019d be trading away. I think people respect being given the real picture rather than a comfortable one. We agreed on a scope that was defensible, delivered it, and revisited the deeper question later. Nobody felt overruled, which to me is the marker of handling it well.'],
  'Engineering Manager': ['Great question. Two engineers on my team had a genuine, sustained technical disagreement that was starting to affect how they worked together. I resisted the urge to arbitrate. Instead I created space for each to articulate the other\u2019s position back \u2014 properly, not performatively. What I\u2019ve learned is that people rarely need to be agreed with; they need to be understood. They reached a resolution without me deciding anything, and the working relationship afterwards was better than before. That\u2019s usually the outcome I\u2019m aiming for.', 'Definitely. As a manager I think your job in conflict is to be useful, not central. There was a situation where a disagreement had gone quiet, which is more concerning than when it\u2019s loud. I brought it back into the open carefully, in a setting where honesty felt safe. Once it was spoken about directly, most of the heat came out of it. We agreed on how we\u2019d handle it next time, which mattered more than resolving that one instance.', 'Sure. There was friction between two functions that my team sat between, and it had started to land on individual people, which isn\u2019t fair to them. I took it upstream and worked on the structural cause rather than the interpersonal symptom. My view is that repeated conflict is almost always an organisational design signal. We adjusted how the work flowed between the groups and the friction largely resolved itself. The team noticed, and trust went up as a result.'],
  'UX Designer': ['Great question. There was a disagreement about a design direction where the feedback I was getting felt contradictory. Rather than iterating blindly, I went back to what we were actually trying to achieve for the user. I\u2019ve found that most design conflict is really unresolved disagreement about the problem, not the solution. Once we re-anchored on that, the direction became much clearer and the debate lost its charge. We shipped something I\u2019m proud of, and the process afterwards was noticeably calmer.', 'Absolutely. In one case a stakeholder and I wanted quite different things, and I could feel it becoming positional. I asked to see the concern behind the request rather than the request itself. That shifted everything \u2014 the underlying worry was completely legitimate and had nothing to do with the specific change being asked for. We solved the real concern instead. I try to bring that curiosity to every disagreement now, because the stated position is rarely the whole story.', 'Sure. Design and engineering had different views on what was feasible in the time we had, and it had started to feel adversarial. I invited the engineers into the design process much earlier than usual, which meant the constraints shaped the work rather than arriving as objections to it. The tension largely disappeared once we were solving the same problem together. It changed how I collaborate \u2014 I\u2019d rather have the hard conversation early than defend something late.']
};

/* First name: max 20 chars, letters / spaces / hyphens / apostrophes, title-cased.
   Rejected input silently falls back to the default phrasing. */
function cleanName(raw) {
  const stripped = (raw || '').replace(/[^A-Za-z\u00C0-\u024F' -]/g, '').trim().slice(0, 20).toLowerCase();
  if (!stripped) return '';
  return stripped.replace(/(^|[\s-'])([a-z])/g, function (m, p, c) {
    return p + c.toUpperCase();
  });
}
function Demo() {
  const {
    Button,
    Input,
    Select,
    Avatar,
    MetaStrip,
    Badge
  } = window.PH;
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
    const wait = ms => new Promise(res => timers.push(setTimeout(res, ms)));
    // Type imperatively into the DOM node: one React render per phase, not per character,
    // and time-based so a slow frame skips ahead instead of stalling the sentence.
    const type = (node, text, cps) => new Promise(function (res) {
      if (!node) {
        res();
        return;
      }
      const started = Date.now();
      node.textContent = '';
      const id = setInterval(function () {
        if (cancelled) {
          clearInterval(id);
          res();
          return;
        }
        const shown = Math.min(text.length, Math.round((Date.now() - started) / 1000 * cps));
        node.textContent = text.slice(0, shown);
        if (shown >= text.length) {
          clearInterval(id);
          res();
        }
      }, 32);
      timers.push(id);
    });
    (async function run() {
      setQ('');
      setA('');
      if (reduce) {
        setQ(DEMO_QUESTION);
        setA(answer);
        setPhase('done');
        return;
      }
      setPhase('question');
      await wait(30);
      await type(qRef.current, DEMO_QUESTION, 42);
      if (cancelled) return;
      setPhase('pause');
      await wait(1200);
      if (cancelled) return;
      setPhase('typing');
      await wait(900);
      if (cancelled) return;
      setPhase('answer');
      await wait(30);
      await type(aRef.current, answer, 190);
      if (cancelled) return;
      setQ(DEMO_QUESTION);
      setA(answer);
      setPhase('done');
    })();
    return function () {
      cancelled = true;
      timers.forEach(clearTimeout);
      timers.forEach(clearInterval);
    };
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
  const start = debounced(function () {
    setRunId(function (r) {
      return r + 1;
    });
  });
  const regenerate = debounced(function () {
    setVariant(function (v) {
      return (v + 1) % 3;
    });
    setRunId(function (r) {
      return r + 1;
    });
  });
  const scored = phase === 'answer' || phase === 'done';
  return /*#__PURE__*/React.createElement("section", {
    className: "m-section m-demo",
    id: "demo"
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-wrap",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ph-sectionhead ph-sectionhead--center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ph-eyebrow",
    style: {
      color: 'var(--indigo-300)'
    }
  }, "Live demo"), /*#__PURE__*/React.createElement("h2", null, "Watch your double interview."), /*#__PURE__*/React.createElement("p", null, "Enter your name. Pick a role. See what you\u2019d have said if you\u2019d bothered.")), /*#__PURE__*/React.createElement("div", {
    className: "m-demo__panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-demo__controls"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "First name",
    name: "demo-name",
    placeholder: "Marta",
    value: name,
    maxLength: 20,
    autoComplete: "given-name",
    onChange: e => setName(e.target.value)
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Role",
    name: "demo-role",
    options: roles,
    value: role,
    onChange: e => {
      setRole(e.target.value);
      setVariant(0);
    }
  }), /*#__PURE__*/React.createElement(Button, {
    size: "md",
    onClick: start,
    disabled: running
  }, running ? 'Preparing your double\u2026' : 'Watch your double interview')), /*#__PURE__*/React.createElement("div", {
    className: "m-demo__stage"
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-seat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-seat__who"
  }, /*#__PURE__*/React.createElement(Avatar, {
    kind: "human",
    initials: "AI"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "m-seat__name"
  }, "Interviewer \xB7 AI"), /*#__PURE__*/React.createElement("div", {
    className: "m-seat__role"
  }, role)), phase === 'question' && /*#__PURE__*/React.createElement(Badge, {
    tone: "onDark",
    style: {
      marginLeft: 'auto'
    }
  }, "Asking")), /*#__PURE__*/React.createElement("p", {
    className: "m-seat__text"
  }, phase === 'idle' ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-on-dark-muted)'
    }
  }, "The panel is waiting.") : /*#__PURE__*/React.createElement("span", null, "\u201C", /*#__PURE__*/React.createElement("span", {
    ref: qRef
  }, q), phase === 'question' && /*#__PURE__*/React.createElement("span", {
    className: "m-caret",
    "aria-hidden": "true"
  }), "\u201D"))), /*#__PURE__*/React.createElement("div", {
    className: "m-seat m-seat--double"
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-seat__who"
  }, /*#__PURE__*/React.createElement(Avatar, {
    kind: "synthetic",
    initials: (clean.slice(0, 1) || 'Y').toUpperCase() + 'D'
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "m-seat__name"
  }, doubleLabel), /*#__PURE__*/React.createElement("div", {
    className: "m-seat__role"
  }, "Synthetic attendee \xB7 enthusiasm 7/10")), (phase === 'typing' || phase === 'answer') && /*#__PURE__*/React.createElement(Badge, {
    tone: "onDark",
    style: {
      marginLeft: 'auto'
    }
  }, "Speaking")), /*#__PURE__*/React.createElement("p", {
    className: "m-seat__text m-seat__text--answer",
    "aria-live": "polite",
    "aria-atomic": "false"
  }, phase === 'typing' ? /*#__PURE__*/React.createElement("span", {
    className: "m-typing",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null)) : phase === 'answer' || phase === 'done' ? /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    ref: aRef
  }, a), phase === 'answer' && /*#__PURE__*/React.createElement("span", {
    className: "m-caret",
    "aria-hidden": "true"
  })) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-on-dark-muted)'
    }
  }, "Nothing said yet.")), phase === 'typing' && /*#__PURE__*/React.createElement("span", {
    className: "m-sr"
  }, "Preparing your double\u2019s answer."))), /*#__PURE__*/React.createElement("div", {
    className: "m-demo__foot"
  }, /*#__PURE__*/React.createElement(MetaStrip, {
    onDark: true,
    items: [{
      label: 'Confidence',
      value: scored ? '98%' : '\u2014'
    }, {
      label: 'Specificity',
      value: scored ? '3%' : '\u2014'
    }, {
      label: 'Humans involved',
      value: '0'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    className: "m-demo__actions"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    size: "sm",
    onClick: regenerate,
    disabled: running || runId === 0,
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "refresh-cw",
      style: {
        width: 14,
        height: 14
      }
    })
  }, "Regenerate"), /*#__PURE__*/React.createElement("p", {
    className: "m-micro m-micro--dark"
  }, "Not quite right? Generate another one.")), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "sm",
    href: "truth.html"
  }, "Request a demo"))))));
}
Object.assign(window, {
  Demo
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Demo.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Hero.jsx
try { (() => {
function Nav() {
  const {
    Button,
    Logo
  } = window.PH;
  return /*#__PURE__*/React.createElement("header", {
    className: "m-nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-wrap m-nav__in"
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    style: {
      display: 'flex'
    },
    "aria-label": "Placeholder home"
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "markText",
    height: 26,
    assetBase: "../../assets"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "m-nav__links",
    "aria-label": "Primary"
  }, /*#__PURE__*/React.createElement("a", {
    className: "m-nav__link",
    href: "#features"
  }, "Product"), /*#__PURE__*/React.createElement("a", {
    className: "m-nav__link",
    href: "#features"
  }, "Features"), /*#__PURE__*/React.createElement("a", {
    className: "m-nav__link",
    href: "#pricing"
  }, "Pricing"), /*#__PURE__*/React.createElement("a", {
    className: "m-nav__link",
    href: "#pricing"
  }, "Enterprise")), /*#__PURE__*/React.createElement("div", {
    className: "m-nav__right"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    className: "m-nav__signin",
    href: "#"
  }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    href: "#demo"
  }, "Request a demo"))));
}
function Hero() {
  const {
    Button,
    Avatar,
    MetaStrip,
    Badge
  } = window.PH;
  return /*#__PURE__*/React.createElement("section", {
    className: "m-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-wrap m-hero__grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "m-eyebrow"
  }, "Interview automation, finally complete."), /*#__PURE__*/React.createElement("h1", {
    className: "m-h1",
    style: {
      marginTop: 'var(--space-4)'
    }
  }, "You\u2019ve already told them about yourself. Let it do it this time."), /*#__PURE__*/React.createElement("p", {
    className: "m-lede"
  }, "Placeholder trains an AI double on your experience, your voice, and your face \u2014 then attends your interviews for you. You\u2019ll get the offer. You won\u2019t get the calendar invite."), /*#__PURE__*/React.createElement("div", {
    className: "m-cta-row"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    href: "#demo"
  }, "Request a demo"), /*#__PURE__*/React.createElement("a", {
    className: "m-textlink",
    href: "#how"
  }, "See how it works \u2192")), /*#__PURE__*/React.createElement("p", {
    className: "m-micro"
  }, "No credit card. No preparation. No presence required.")), /*#__PURE__*/React.createElement("div", {
    className: "m-mock",
    role: "img",
    "aria-label": "Product screenshot: an interview in progress, with the candidate's AI double speaking and a session confidence score of 98 percent"
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-mock__bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "m-mock__dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "m-mock__dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "m-mock__dot"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'var(--space-3)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--size-caption)',
      color: 'var(--text-faint)'
    }
  }, "round 3 of 4\xA0/\xA0final"), /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true,
    style: {
      marginLeft: 'auto'
    }
  }, "Attending")), /*#__PURE__*/React.createElement("div", {
    className: "m-mock__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-mock__tiles"
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-tile"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    kind: "human",
    initials: "AI"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-strong)'
    }
  }, "Interviewer"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--size-caption)',
      color: 'var(--text-faint)'
    }
  }, "Panel \xB7 AI"))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-muted)'
    }
  }, "\u201CTell me about a time you handled conflict on a team.\u201D")), /*#__PURE__*/React.createElement("div", {
    className: "m-tile m-tile--synthetic"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    kind: "synthetic",
    initials: "MD"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-strong)'
    }
  }, "Marta\u2019s double"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--size-caption)',
      color: 'var(--indigo-600)'
    }
  }, "Speaking \xB7 00:41"))), /*#__PURE__*/React.createElement("div", {
    className: "m-waveform",
    "aria-hidden": "true"
  }, [.4, .8, .55, 1, .3, .75, .5, .9, .35, .65, .8, .45].map((h, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      height: h * 100 + '%',
      animationDelay: i * 70 + 'ms'
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "m-score"
  }, /*#__PURE__*/React.createElement("span", {
    className: "m-score__num"
  }, "98%"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-caption)',
      color: 'var(--text-muted)'
    }
  }, "Session confidence"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--size-caption)',
      color: 'var(--text-faint)'
    }
  }, "Enthusiasm 7/10")), /*#__PURE__*/React.createElement("div", {
    className: "m-meter"
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: '98%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(MetaStrip, {
    items: [{
      label: 'Specificity',
      value: '3%'
    }, {
      label: 'Contradictions',
      value: '0'
    }, {
      label: 'Humans involved',
      value: '0'
    }]
  }))))));
}
Object.assign(window, {
  Nav,
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Human.jsx
try { (() => {
const SCENE = [{
  side: 'l',
  t: 'Tell me about a time you handled conflict on a team.'
}, {
  side: 'r',
  t: 'Great question. Most conflict is really a communication gap wearing a costume.'
}, {
  side: 'l',
  t: 'And what would you do differently now?'
}, {
  side: 'r',
  t: 'We landed somewhere neither of us had started, which is usually the sign it went well.'
}, {
  side: 'l',
  t: 'Thank you. That was very helpful.'
}, {
  side: 'r',
  t: 'Likewise. I appreciate you making the time.'
}];
function Scene() {
  const reduce = typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [step, setStep] = React.useState(reduce ? SCENE.length : 0);
  React.useEffect(function () {
    if (reduce) return;
    const id = setInterval(function () {
      setStep(function (s) {
        return s >= SCENE.length + 1 ? 0 : s + 1;
      });
    }, 2100);
    return function () {
      clearInterval(id);
    };
  }, []);
  const left = SCENE.filter(s => s.side === 'l');
  const right = SCENE.filter(s => s.side === 'r');
  return /*#__PURE__*/React.createElement("figure", {
    className: "h-scene-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-scene",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-scene__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-party"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-party__label"
  }, "AI interviewer"), left.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "h-bubble",
    key: i,
    "data-on": step > SCENE.indexOf(s)
  }, s.t))), /*#__PURE__*/React.createElement("div", {
    className: "h-seat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-seat__box"
  }), /*#__PURE__*/React.createElement("div", {
    className: "h-seat__cap"
  }, "the chair", /*#__PURE__*/React.createElement("br", null), "nobody sat in")), /*#__PURE__*/React.createElement("div", {
    className: "h-party h-party--right"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-party__label"
  }, "AI candidate"), right.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "h-bubble",
    key: i,
    "data-on": step > SCENE.indexOf(s)
  }, s.t))))), /*#__PURE__*/React.createElement("figcaption", {
    className: "h-scene__cap"
  }, "Interviewer: AI. Candidate: AI. Score: generated. Humans involved: none."));
}
function HumanPage() {
  const {
    Button
  } = window.PH;
  const host = {
    name: 'Dana',
    full: 'Dana Okoye',
    role: 'Principal engineer'
  };
  const team = [{
    id: 'team-1',
    n: 'Dana Okoye',
    r: 'Principal engineer'
  }, {
    id: 'team-2',
    n: 'Ilya Marchetti',
    r: 'Design lead'
  }, {
    id: 'team-3',
    n: 'Priya Raman',
    r: 'Staff engineer'
  }, {
    id: 'team-4',
    n: 'Sam Whitfield',
    r: 'Delivery'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "h-wrap h-wrap--wide h-top"
  }, /*#__PURE__*/React.createElement(Scene, null)), /*#__PURE__*/React.createElement("div", {
    className: "h-wrap h-big"
  }, /*#__PURE__*/React.createElement("h1", null, "Placeholder isn\u2019t real.", /*#__PURE__*/React.createElement("br", null), "The problem is.")), /*#__PURE__*/React.createElement("div", {
    className: "h-wrap h-prose"
  }, /*#__PURE__*/React.createElement("p", null, "We built a fake product about an AI that shows up so a person doesn\u2019t have to."), /*#__PURE__*/React.createElement("p", null, "It got uncomfortably easy to write. Because for two years now, that\u2019s been the pitch for almost everything \u2014 AI that attends, AI that writes, AI that decides, AI standing exactly where a person used to be."), /*#__PURE__*/React.createElement("p", null, "Some of that is genuinely good. A lot of it is a placeholder.")), /*#__PURE__*/React.createElement("div", {
    className: "h-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-rule"
  }), /*#__PURE__*/React.createElement("h2", {
    className: "h-h2"
  }, "What we actually think"), /*#__PURE__*/React.createElement("div", {
    className: "h-prose",
    style: {
      paddingTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("p", null, "We use AI every day. It makes our engineers faster, and pretending otherwise would be its own kind of dishonesty."), /*#__PURE__*/React.createElement("p", null, "What we don\u2019t do is put it where a person should be."), /*#__PURE__*/React.createElement("p", {
    className: "h-dim"
  }, "The judgement about what to build. The conversation where someone tells you the requirement is wrong. The person who has to care whether this works on Monday. Those aren\u2019t tasks to be automated away \u2014 they\u2019re the actual job."), /*#__PURE__*/React.createElement("p", null, "When you work with us, there are people on the other end. They have names, they have opinions, and they\u2019ll tell you when they disagree with you."))), /*#__PURE__*/React.createElement("div", {
    className: "h-wrap h-wrap--wide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-rule"
  }), /*#__PURE__*/React.createElement("h2", {
    className: "h-h2"
  }, "The people who\u2019d be working on this."), /*#__PURE__*/React.createElement("div", {
    className: "h-team"
  }, team.map(p => /*#__PURE__*/React.createElement("div", {
    className: "h-person",
    key: p.id
  }, /*#__PURE__*/React.createElement("figure", null, /*#__PURE__*/React.createElement("image-slot", {
    id: p.id,
    shape: "rounded",
    radius: "10",
    placeholder: 'Drop a photo of ' + p.n.split(' ')[0]
  }), /*#__PURE__*/React.createElement("figcaption", null, /*#__PURE__*/React.createElement("div", {
    className: "h-person__name"
  }, p.n), /*#__PURE__*/React.createElement("div", {
    className: "h-person__role"
  }, p.r)))))), /*#__PURE__*/React.createElement("div", {
    className: "h-rule"
  })), /*#__PURE__*/React.createElement("div", {
    className: "h-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-cta"
  }, /*#__PURE__*/React.createElement("h2", null, "Talk to a person."), /*#__PURE__*/React.createElement("p", null, "Not a form. Not a chatbot. Not a qualification funnel. Thirty minutes with ", host.name, ", who will actually be on the call."), /*#__PURE__*/React.createElement("div", {
    className: "h-cta__row"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "warm",
    size: "lg",
    href: "mailto:dana@example.org?subject=Placeholder"
  }, "Book time with ", host.name)), /*#__PURE__*/React.createElement("p", {
    className: "h-cta__micro"
  }, "If we\u2019re not a fit, ", host.name, " will tell you that in the first ten minutes.")), /*#__PURE__*/React.createElement("div", {
    className: "h-attrib-block"
  }, /*#__PURE__*/React.createElement("p", null, "Placeholder was made by ", /*#__PURE__*/React.createElement("strong", null, "[Your company]"), "."), /*#__PURE__*/React.createElement("p", {
    className: "h-dim"
  }, "We build software with people in it.")), /*#__PURE__*/React.createElement("div", {
    className: "h-foot"
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html"
  }, "The fake product"), " is still there if you want another look.")));
}
Object.assign(window, {
  Scene,
  HumanPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Human.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Sections.jsx
try { (() => {
function Proof() {
  const {
    StatBlock
  } = window.PH;
  const logos = ['NORTHWIND', 'Vantive', 'CADRE', 'Lumenpath', 'Grovewell'];
  return /*#__PURE__*/React.createElement("section", {
    className: "m-logobar",
    "aria-label": "Usage"
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-wrap"
  }, /*#__PURE__*/React.createElement("p", {
    className: "m-logobar__label"
  }, "Trusted by candidates at"), /*#__PURE__*/React.createElement("div", {
    className: "m-logobar__row"
  }, logos.map(l => /*#__PURE__*/React.createElement("div", {
    className: "m-fakelogo",
    key: l
  }, l))), /*#__PURE__*/React.createElement("div", {
    className: "m-statrow"
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "42,000",
    label: "Candidates"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "190,000",
    label: "Interviews attended"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "0",
    label: "Attended in person"
  }))));
}
function Problem() {
  const {
    SectionHeader,
    Card
  } = window.PH;
  const cols = [{
    t: 'It&rsquo;s repetitive',
    b: 'You&rsquo;ve answered &ldquo;tell me about yourself&rdquo; 340 times. You&rsquo;ve never once answered it differently. Why are you still there for it?'
  }, {
    t: 'It doesn&rsquo;t scale',
    b: 'Four rounds per company. Five companies. That&rsquo;s twenty hours you&rsquo;re not getting back, and nineteen of them are the same hour.'
  }, {
    t: 'It&rsquo;s already automated on their side',
    b: 'Your application was read by a model. Your video screen was scored by a model. You are the last human left in the process. That seems like an oversight.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "m-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-head"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "The problem",
    title: "Interviewing is a solved problem for everyone except you."
  })), /*#__PURE__*/React.createElement("div", {
    className: "m-grid-3"
  }, cols.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.t,
    elevation: "flat",
    pad: "lg"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--size-h3)',
      fontWeight: 600,
      marginBottom: 'var(--space-3)'
    },
    dangerouslySetInnerHTML: {
      __html: c.t
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-muted)'
    },
    dangerouslySetInnerHTML: {
      __html: c.b
    }
  }))))));
}
function HowItWorks() {
  const {
    SectionHeader,
    Card
  } = window.PH;
  const steps = [{
    n: '01',
    icon: 'git-branch',
    t: 'Connect LinkedIn or GitHub',
    b: 'We ingest your commit history, your PR comments, and the six posts you wrote about company culture. Your double learns what you&rsquo;ve done and, more importantly, how you&rsquo;d describe it.'
  }, {
    n: '02',
    icon: 'video',
    t: 'Upload a 90-second video',
    b: 'Your double learns your face, your voice, and the specific way you say &ldquo;that&rsquo;s a great question&rdquo; while you think of an answer.'
  }, {
    n: '03',
    icon: 'sliders-horizontal',
    t: 'Set your parameters',
    b: 'Enthusiasm. Humility. Willingness to relocate. Adjust until it sounds like the version of you that gets hired.'
  }, {
    n: '04',
    icon: 'moon',
    t: 'Stay in bed',
    b: 'You&rsquo;ll get a calendar invite you don&rsquo;t need to accept.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "m-section",
    id: "how",
    style: {
      background: 'var(--surface-canvas)',
      borderTop: '1px solid var(--line-hairline)',
      borderBottom: '1px solid var(--line-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-head"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "How it works",
    title: "Four minutes to set up. Zero minutes to attend.",
    align: "center"
  })), /*#__PURE__*/React.createElement("div", {
    className: "m-grid-4"
  }, steps.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.n,
    elevation: "flat",
    pad: "lg",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-icon"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": s.icon
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "m-step__n"
  }, s.n), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--size-h3)',
      fontWeight: 600,
      marginTop: 'var(--space-1)'
    },
    dangerouslySetInnerHTML: {
      __html: s.t
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-muted)'
    },
    dangerouslySetInnerHTML: {
      __html: s.b
    }
  })))), /*#__PURE__*/React.createElement("p", {
    className: "m-fineprint"
  }, "Average setup time: 4 minutes. Average interview time: 0 minutes.")));
}
function Features() {
  const {
    SectionHeader
  } = window.PH;
  const tiles = [{
    icon: 'git-compare',
    t: 'Consistency Engine',
    b: 'Your story stays identical across all four rounds. No contradictions, no drift, no remembering what you told the recruiter in March.'
  }, {
    icon: 'audio-lines',
    t: 'Company Voice Match',
    b: 'Your double reads the job description, the careers page, and the CEO&rsquo;s last eleven posts, then adjusts its vocabulary to match. It will use their words back at them within the first ninety seconds.'
  }, {
    icon: 'sliders-horizontal',
    t: 'Enthusiasm Slider',
    b: 'Some rooms want energy. Some want composure. Set the level before the call and your double holds it for the full hour, including through the salary question.'
  }, {
    icon: 'wand-sparkles',
    t: 'Weakness Generator',
    b: 'Converts your actual weaknesses into acceptable ones. &ldquo;I struggle with deadlines&rdquo; becomes &ldquo;I care too much about getting the details right.&rdquo; Trained on 12,000 successful interviews.'
  }, {
    icon: 'users',
    t: 'Live Panel Handling',
    b: 'Multiple interviewers, overlapping questions, one silent participant who hasn&rsquo;t turned their camera on. Your double handles all of it and thanks each person by name at the end.'
  }, {
    icon: 'archive',
    t: 'Continuity Mode',
    b: 'Your double keeps a record of everything it said it could do, so that when you eventually start, you know which version of you they hired.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "m-section",
    id: "features"
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-head"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Platform",
    title: "Everything the room expects, held for the full hour."
  })), /*#__PURE__*/React.createElement("div", {
    className: "m-grid-6"
  }, tiles.map(t => /*#__PURE__*/React.createElement("div", {
    className: "m-feature",
    key: t.t
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-icon"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": t.icon
  })), /*#__PURE__*/React.createElement("h3", null, t.t), /*#__PURE__*/React.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: t.b
    }
  }))))));
}
Object.assign(window, {
  Proof,
  Problem,
  HowItWorks,
  Features
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Social.jsx
try { (() => {
function Testimonials() {
  const {
    SectionHeader,
    Card,
    Avatar
  } = window.PH;
  const items = [{
    q: 'I had three final rounds in one afternoon. I was at my daughter&rsquo;s recital. Placeholder got me through all three and I didn&rsquo;t miss a note.',
    n: 'Marta R.',
    m: 'Senior Product Designer',
    i: 'MR'
  }, {
    q: 'The double answered a system design question better than I would have. I asked it to explain the answer to me afterwards so I&rsquo;d be ready for the follow-up round. It was very patient with me.',
    n: 'Devon A.',
    m: 'Backend Engineer',
    i: 'DA'
  }, {
    q: 'I got the job. I start Monday. I don&rsquo;t know what the company does.',
    n: 'Sam K.',
    m: 'Engineering Manager',
    i: 'SK'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "m-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-head"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Customers",
    title: "People who weren\u2019t there."
  })), /*#__PURE__*/React.createElement("div", {
    className: "m-grid-3"
  }, items.map(t => /*#__PURE__*/React.createElement(Card, {
    key: t.n,
    elevation: "raised",
    pad: "lg"
  }, /*#__PURE__*/React.createElement("p", {
    className: "m-quote"
  }, "\u201C", /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: t.q
    }
  }), "\u201D"), /*#__PURE__*/React.createElement("div", {
    className: "m-attrib"
  }, /*#__PURE__*/React.createElement(Avatar, {
    kind: "human",
    initials: t.i
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "m-attrib__name"
  }, t.n), /*#__PURE__*/React.createElement("div", {
    className: "m-attrib__meta"
  }, t.m))))))));
}
function Pricing() {
  const {
    SectionHeader,
    Card,
    Button,
    Badge
  } = window.PH;
  const tiers = [{
    name: 'Basic',
    price: '$29',
    per: '/mo',
    body: 'For the casual search.',
    feats: ['Up to 5 interviews per month', 'Voice and text double', 'Consistency Engine', 'Standard question library'],
    cta: 'Get started',
    variant: 'secondary'
  }, {
    name: 'Pro',
    price: '$89',
    per: '/mo',
    body: 'For the serious search.',
    feats: ['Unlimited interviews', 'Full video double', 'Company Voice Match', 'Enthusiasm Slider', 'Weakness Generator', 'Live Panel Handling'],
    cta: 'Get started',
    variant: 'primary',
    hero: true
  }, {
    name: 'Executive',
    price: 'Contact us',
    per: '',
    body: 'For the search you can&rsquo;t be seen conducting.',
    feats: ['Everything in Pro', 'Discreet scheduling', 'Compensation negotiation', 'Reference call coverage', 'Your double attends your first two weeks of employment'],
    cta: 'Talk to sales',
    variant: 'secondary'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "m-section",
    id: "pricing",
    style: {
      background: 'var(--surface-canvas)',
      borderTop: '1px solid var(--line-hairline)',
      borderBottom: '1px solid var(--line-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-head"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Pricing",
    title: "Choose how absent you\u2019d like to be.",
    align: "center"
  })), /*#__PURE__*/React.createElement("div", {
    className: "m-pricing"
  }, tiers.map(t => /*#__PURE__*/React.createElement(Card, {
    key: t.name,
    elevation: t.hero ? 'floating' : 'flat',
    pad: "lg",
    className: 'm-tier' + (t.hero ? ' m-tier--hero' : '')
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--size-h3)',
      fontWeight: 600
    }
  }, t.name), t.hero && /*#__PURE__*/React.createElement(Badge, {
    tone: "solid"
  }, "Most popular")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "m-price"
  }, /*#__PURE__*/React.createElement("span", {
    className: "m-price__n"
  }, t.price), /*#__PURE__*/React.createElement("span", {
    className: "m-price__per"
  }, t.per)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-muted)',
      marginTop: 'var(--space-2)'
    },
    dangerouslySetInnerHTML: {
      __html: t.body
    }
  })), /*#__PURE__*/React.createElement(Button, {
    variant: t.variant,
    block: true,
    href: "#demo"
  }, t.cta), /*#__PURE__*/React.createElement("ul", {
    className: "m-list"
  }, t.feats.map(f => /*#__PURE__*/React.createElement("li", {
    key: f
  }, f))))))));
}
function Faq() {
  const {
    SectionHeader,
    Accordion
  } = window.PH;
  const items = [{
    q: 'Is this cheating?',
    a: 'Candidates have always prepared. Placeholder is preparation that shows up on time.'
  }, {
    q: 'What if they ask something my double doesn\u2019t know?',
    a: 'It won\u2019t say \u201cI don\u2019t know.\u201d It will say something adjacent, at length, with confidence. This is how the answer would have gone anyway.'
  }, {
    q: 'Do I have to tell them?',
    a: 'That\u2019s between you and them. Placeholder doesn\u2019t announce itself, and neither does the system scoring you on the other side.'
  }, {
    q: 'What happens when I actually start the job?',
    a: 'Executive customers get two weeks of coverage while you get up to speed. Most people find that\u2019s enough.'
  }, {
    q: 'Is my data safe?',
    a: 'Your double is yours. We only use your interview recordings to improve the model, which improves your double, which improves your outcomes.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "m-section",
    id: "faq"
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-wrap m-faq"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "FAQ",
    title: "Questions we get asked."
  }), /*#__PURE__*/React.createElement(Accordion, {
    items: items,
    defaultOpen: 0
  })));
}
function FinalCta() {
  const {
    Button
  } = window.PH;
  return /*#__PURE__*/React.createElement("section", {
    className: "m-section m-final"
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-wrap"
  }, /*#__PURE__*/React.createElement("h2", null, "The other side automated this two years ago."), /*#__PURE__*/React.createElement("p", null, "You\u2019re the only one still showing up."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "inverse",
    href: "truth.html"
  }, "Request a demo"))));
}
function SiteFooter() {
  const {
    Logo
  } = window.PH;
  const cols = [{
    h: 'Product',
    links: ['Features', 'Pricing', 'Enterprise', 'Changelog', 'API']
  }, {
    h: 'Company',
    links: ['About', 'Careers', 'Press', 'Contact']
  }, {
    h: 'Resources',
    links: ['Blog', 'Help center', 'Interview library', 'Status']
  }, {
    h: 'Legal',
    links: ['Privacy', 'Terms', 'Cookie preferences', 'Security']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    className: "m-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-footer__cols"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    variant: "markText",
    onDark: true,
    height: 26,
    assetBase: "../../assets"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-on-dark-muted)',
      marginTop: 'var(--space-4)',
      maxWidth: '30ch'
    }
  }, "An AI double that attends your interviews, so the last human in the process doesn\u2019t have to be you.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("h4", null, c.h), /*#__PURE__*/React.createElement("ul", null, c.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    className: "m-footer__legal"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Placeholder, Inc. All rights reserved."))));
}
Object.assign(window, {
  Testimonials,
  Pricing,
  Faq,
  FinalCta,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Social.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/ds-loader.js
try { (() => {
/* Loads the Placeholder component library.
   Prefers the compiled design-system bundle (window.PlaceholderDesignSystem_73112b);
   falls back to transpiling the component sources in-browser so the kit renders
   standalone (e.g. before the bundle has been compiled). */
window.loadPlaceholderDS = async function (base) {
  const NS = 'PlaceholderDesignSystem_73112b';
  const existing = window[NS];
  if (existing && existing.Button) {
    window.PH = existing;
    return existing;
  }
  const files = ['core/Button', 'core/IconButton', 'core/Card', 'core/Badge', 'core/Avatar', 'core/Logo', 'core/SectionHeader', 'core/StatBlock', 'forms/Input', 'forms/Select', 'forms/Switch', 'feedback/Accordion', 'feedback/MetaStrip'];
  const out = {};
  await Promise.all(files.map(async f => {
    const name = f.split('/')[1];
    const src = await (await fetch(base + '/components/' + f + '.jsx')).text();
    const cleaned = src.replace(/^import[^\n]*\n/gm, '').replace(/export function/g, 'function');
    const code = Babel.transform(cleaned, {
      presets: ['react']
    }).code;
    out[name] = new Function('React', code + '\nreturn ' + name + ';')(window.React);
  }));
  window[NS] = Object.assign({}, existing, out);
  window.PH = window[NS];
  return window.PH;
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/ds-loader.js", error: String((e && e.message) || e) }); }

// ui_kits/marketing/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }

    // A src write is a newer intent for this slot's content — the host
    // pick path (setImageSlotImage) or an agent edit — so it must win
    // over any encode still in flight from an earlier drop: left live,
    // that encode lands later, passes _ingest's gen guard, and its
    // setSlot silently overwrites the pick (the stored value shadows
    // src in _render). Bumping _gen kills the encode before its own
    // _swapGen clear runs, so clear the dead claim here too — otherwise
    // _releaseMask (gated on !_swapGen) never fires and the pick's
    // spinner is stranded. src ONLY: the pick sets credit/credit-href
    // in the same task, and clearing _swapGen on those would let the
    // same-src branch unmask the old image mid-encode.
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'src' && oldVal !== newVal) {
        this._gen++;
        this._swapGen = 0;
      }
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/image-slot.js", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.MetaStrip = __ds_scope.MetaStrip;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

})();
