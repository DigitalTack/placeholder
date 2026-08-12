import * as React from 'react';

/** The Placeholder mark. `assetBase` must point at this design system's /assets directory from the consuming file. */
export interface LogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** 'lockup' = supplied PNG lockup; 'mark' = glyph only; 'markText' = glyph + live type. */
  variant?: 'lockup' | 'mark' | 'markText';
  onDark?: boolean;
  /** Relative path to the assets folder. */
  assetBase?: string;
  /** Cap height in px. */
  height?: number;
  showTagline?: boolean;
}
export function Logo(props: LogoProps): JSX.Element;
