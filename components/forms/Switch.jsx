import React from 'react';

export function Switch({ label, checked, onChange, disabled, className = '', ...rest }) {
  return (
    <label className={['ph-switch', className].filter(Boolean).join(' ')}>
      <input type="checkbox" role="switch" checked={checked} onChange={onChange} disabled={disabled} {...rest} />
      <span className="ph-switch__track" aria-hidden="true"></span>
      {label && <span>{label}</span>}
    </label>
  );
}
