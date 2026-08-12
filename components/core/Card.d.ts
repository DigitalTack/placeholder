import * as React from 'react';

/**
 * Surface container: 14px radius, hairline border, depth added only when the card floats above content.
 */
export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  elevation?: 'flat' | 'raised' | 'floating';
  tone?: 'default' | 'sunken' | 'accent' | 'inverse';
  pad?: 'sm' | 'md' | 'lg';
  /** Adds hover lift + pointer. */
  interactive?: boolean;
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}
export function Card(props: CardProps): JSX.Element;
