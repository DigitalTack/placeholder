import * as React from 'react';

/** Square icon-only control. Always pass `label` — it becomes the accessible name. */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Required accessible name. */
  label: string;
  /** Chromeless variant for dense toolbars. */
  bare?: boolean;
  children?: React.ReactNode;
}
export function IconButton(props: IconButtonProps): JSX.Element;
