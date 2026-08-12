import * as React from 'react';

/** Native select with brand chevron. Preferred over free text wherever the answer set is known. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  /** Strings or {value,label} pairs. */
  options?: Array<string | { value: string; label: string }>;
}
export function Select(props: SelectProps): JSX.Element;
