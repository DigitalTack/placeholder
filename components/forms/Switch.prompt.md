One-line: labelled toggle; used for monthly/annual pricing and product settings.

\`\`\`jsx
<Switch label="Billed annually" checked={annual} onChange={e => setAnnual(e.target.checked)} />
\`\`\`

Track is 40x23; thumb travels 17px. Uses role="switch" for assistive tech.
