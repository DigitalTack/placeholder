import React from 'react';

const ELEV = { flat:'ph-card--flat', raised:'ph-card--raised', floating:'ph-card--floating' };
const TONE = { default:'', sunken:'ph-card--sunken', accent:'ph-card--accent', inverse:'ph-card--inverse' };

export function Card({ elevation = 'flat', tone = 'default', pad = 'md', interactive = false, as = 'div', className = '', children, ...rest }) {
  const Tag = as;
  const cls = ['ph-card', ELEV[elevation] || '', TONE[tone] || '', pad === 'md' ? '' : 'ph-card--pad-' + pad, interactive ? 'ph-card--interactive' : '', className].filter(Boolean).join(' ');
  return <Tag className={cls} {...rest}>{children}</Tag>;
}
