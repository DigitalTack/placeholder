import React from 'react';

const KIND = { synthetic:'ph-avatar--synthetic', human:'ph-avatar--human', accent:'ph-avatar--accent' };

export function Avatar({ kind = 'human', size = 'md', shape = 'circle', initials = '', src, alt = '', className = '', ...rest }) {
  const cls = ['ph-avatar', 'ph-avatar--' + size, KIND[kind] || KIND.human, shape === 'square' ? 'ph-avatar--square' : '', className].filter(Boolean).join(' ');
  return (
    <span className={cls} {...rest}>
      {src ? <img src={src} alt={alt} style={{ width:'100%', height:'100%', objectFit:'cover' }} /> : initials}
    </span>
  );
}
