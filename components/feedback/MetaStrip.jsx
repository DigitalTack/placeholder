import React from 'react';

export function MetaStrip({ items = [], onDark = false, className = '', ...rest }) {
  const cls = ['ph-metastrip', onDark ? 'ph-metastrip--onDark' : '', className].filter(Boolean).join(' ');
  return (
    <div className={cls} {...rest}>
      {items.map(function (item, i) {
        return (
          <React.Fragment key={i}>
            {i > 0 && <span className="ph-metastrip__sep" aria-hidden="true">&middot;</span>}
            <span className="ph-metastrip__item">
              <span className="ph-metastrip__label">{item.label}:</span>
              <span className="ph-metastrip__value">{item.value}</span>
            </span>
          </React.Fragment>
        );
      })}
    </div>
  );
}
