One-line: FAQ disclosure list — one panel open at a time, hairline dividers, plus/minus sign.

\`\`\`jsx
<Accordion items={[{ q: 'Is this legal?', a: 'Compliance varies by jurisdiction.' }]} defaultOpen={0} />
\`\`\`

Triggers are real buttons with aria-expanded/aria-controls; panels use hidden so keyboard order stays clean.
