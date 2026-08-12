import * as React from 'react';

/** Identity mark. Dashed indigo = synthetic (an AI double); solid neutral = a human. Never photographic on marketing surfaces. */
export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  kind?: 'synthetic' | 'human' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  shape?: 'circle' | 'square';
  /** 1-2 letters. */
  initials?: string;
  /** Photograph — page-two team portraits only. */
  src?: string;
  alt?: string;
}
export function Avatar(props: AvatarProps): JSX.Element;
