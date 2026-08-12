import * as React from 'react';

/**
 * Single-line text field with label, hint and error wiring.
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  /** Helper text under the field. */
  hint?: React.ReactNode;
  /** Error message; also sets aria-invalid. */
  error?: React.ReactNode;
}
export function Input(props: InputProps): JSX.Element;
