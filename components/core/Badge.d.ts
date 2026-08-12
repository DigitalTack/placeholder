import * as React from 'react';

/** Uppercase micro-label for status, plan tags and eyebrow chips. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: 'neutral' | 'accent' | 'solid' | 'success' | 'warning' | 'danger' | 'outline' | 'onDark';
  /** Leading status dot. */
  dot?: boolean;
  children?: React.ReactNode;
}
export function Badge(props: BadgeProps): JSX.Element;
