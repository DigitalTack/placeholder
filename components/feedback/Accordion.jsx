import React from 'react';

export function Accordion({ items = [], defaultOpen = -1, className = '' }) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div className={['ph-accordion', className].filter(Boolean).join(' ')}>
      {items.map(function (item, i) {
        const isOpen = open === i;
        const panelId = 'ph-acc-panel-' + i;
        return (
          <div className="ph-accordion__item" data-open={isOpen} key={i}>
            <h3 style={{ margin: 0 }}>
              <button type="button" className="ph-accordion__trigger" aria-expanded={isOpen} aria-controls={panelId} onClick={function () { setOpen(isOpen ? -1 : i); }}>
                <span>{item.q}</span>
                <span className="ph-accordion__sign" aria-hidden="true"></span>
              </button>
            </h3>
            <div className="ph-accordion__panel" id={panelId} role="region" hidden={!isOpen}>
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
