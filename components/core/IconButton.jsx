import React from 'react';

export function IconButton({ label, bare = false, className = '', children, ...rest }) {
  const cls = ['ph-iconbtn', bare ? 'ph-iconbtn--bare' : '', className].filter(Boolean).join(' ');
  return <button type="button" className={cls} aria-label={label} title={label} {...rest}>{children}</button>;
}
