import React from 'react';

export function Input({ label, hint, error, id, className = '', ...rest }) {
  const inputId = id || 'ph-input-' + (rest.name || Math.random().toString(36).slice(2, 7));
  const describedBy = error || hint ? inputId + '-hint' : undefined;
  return (
    <div className={['ph-field', className].filter(Boolean).join(' ')}>
      {label && <label className="ph-label" htmlFor={inputId}>{label}</label>}
      <input id={inputId} className="ph-input" aria-invalid={error ? true : undefined} aria-describedby={describedBy} {...rest} />
      {(error || hint) && <span id={describedBy} className={error ? 'ph-hint ph-hint--error' : 'ph-hint'}>{error || hint}</span>}
    </div>
  );
}
