import * as React from 'react';

/** Boolean toggle for settings and billing-period switches. */
export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
export function Switch(props: SwitchProps): JSX.Element;
