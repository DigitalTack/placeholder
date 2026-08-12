import * as React from 'react';

/**
 * Primary action control. Indigo fill for the one true action per view; everything else is secondary or ghost.
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Visual weight. 'warm' is reserved for the human/page-two surface. */
  variant?: 'primary' | 'secondary' | 'ghost' | 'inverse' | 'onDark' | 'warm';
  size?: 'sm' | 'md' | 'lg';
  /** Full-width — the default on mobile. */
  block?: boolean;
  /** Renders an anchor when set. */
  href?: string;
  as?: keyof JSX.IntrinsicElements;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  disabled?: boolean;
  children?: React.ReactNode;
}
export function Button(props: ButtonProps): JSX.Element;
