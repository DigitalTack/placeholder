import * as React from 'react';

/** Eyebrow + headline + deck. The standard opener for every marketing section. */
export interface SectionHeaderProps {
  /** Uppercase indigo micro-label. */
  eyebrow?: string;
  title?: React.ReactNode;
  body?: React.ReactNode;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
  children?: React.ReactNode;
}
export function SectionHeader(props: SectionHeaderProps): JSX.Element;
