import React from 'react';

const TONE = { neutral:'ph-badge--neutral', accent:'ph-badge--accent', solid:'ph-badge--solid', success:'ph-badge--success', warning:'ph-badge--warning', danger:'ph-badge--danger', outline:'ph-badge--outline', onDark:'ph-badge--onDark' };

export function Badge({ tone = 'neutral', dot = false, className = '', children, ...rest }) {
  const cls = ['ph-badge', TONE[tone] || TONE.neutral, dot ? 'ph-badge--dot' : '', className].filter(Boolean).join(' ');
  return <span className={cls} {...rest}>{children}</span>;
}
