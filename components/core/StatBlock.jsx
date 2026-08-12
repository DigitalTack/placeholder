import React from 'react';

export function StatBlock({ value, label, onDark = false, className = '', ...rest }) {
  const cls = ['ph-stat', onDark ? 'ph-stat--onDark' : '', className].filter(Boolean).join(' ');
  return (
    <div className={cls} {...rest}>
      <span className="ph-stat__value">{value}</span>
      <span className="ph-stat__label">{label}</span>
    </div>
  );
}
