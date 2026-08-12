import React from 'react';

export function SectionHeader({ eyebrow, title, body, align = 'left', as = 'h2', className = '', children }) {
  const Tag = as;
  const cls = ['ph-sectionhead', align === 'center' ? 'ph-sectionhead--center' : '', className].filter(Boolean).join(' ');
  return (
    <div className={cls}>
      {eyebrow && <span className="ph-eyebrow">{eyebrow}</span>}
      {title && <Tag>{title}</Tag>}
      {body && <p>{body}</p>}
      {children}
    </div>
  );
}
