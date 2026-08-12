import React from 'react';

export function Select({ label, hint, options = [], id, className = '', children, ...rest }) {
  const selectId = id || 'ph-select-' + (rest.name || Math.random().toString(36).slice(2, 7));
  return (
    <div className={['ph-field', className].filter(Boolean).join(' ')}>
      {label && <label className="ph-label" htmlFor={selectId}>{label}</label>}
      <span className="ph-selectwrap">
        <select id={selectId} className="ph-select" {...rest}>
          {children || options.map(function (o) {
            const opt = typeof o === 'string' ? { value: o, label: o } : o;
            return <option key={opt.value} value={opt.value}>{opt.label}</option>;
          })}
        </select>
      </span>
      {hint && <span className="ph-hint">{hint}</span>}
    </div>
  );
}
