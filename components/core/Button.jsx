import React from 'react';

const CLS = { primary:'ph-btn--primary', secondary:'ph-btn--secondary', ghost:'ph-btn--ghost', inverse:'ph-btn--inverse', onDark:'ph-btn--onDark', warm:'ph-btn--warm' };

export function Button({ variant = 'primary', size = 'md', block = false, as, href, iconLeft, iconRight, className = '', children, ...rest }) {
  const Tag = as || (href ? 'a' : 'button');
  const cls = ['ph-btn', 'ph-btn--' + size, CLS[variant] || CLS.primary, block ? 'ph-btn--block' : '', className].filter(Boolean).join(' ');
  return (
    <Tag className={cls} href={href} {...rest}>
      {iconLeft}
      {children}
      {iconRight}
    </Tag>
  );
}
