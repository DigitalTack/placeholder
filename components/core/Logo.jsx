import React from 'react';

export function Logo({ variant = 'lockup', onDark = false, assetBase = '../../assets', height = 28, showTagline = false, className = '', ...rest }) {
  const cls = ['ph-logo', onDark ? 'ph-logo--onDark' : '', className].filter(Boolean).join(' ');
  if (variant === 'lockup') {
    return <span className={cls} {...rest}><img src={assetBase + '/logo-lockup.png'} alt="Placeholder" style={{ height: height * 1.5, width:'auto' }} /></span>;
  }
  return (
    <span className={cls} style={{ fontSize: height * 0.78 }} {...rest}>
      <img src={assetBase + (onDark ? '/logo-mark-white.png' : '/logo-mark.png')} alt="" aria-hidden="true" />
      {variant !== 'mark' && <span>Placeholder</span>}
      {showTagline && <span style={{ fontWeight:'var(--weight-medium)', fontSize:'.5em', color:'var(--text-accent)', letterSpacing:0 }}>Be there without being there</span>}
    </span>
  );
}
