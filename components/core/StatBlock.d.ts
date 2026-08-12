/** Single metric with caption. Tabular numerals; used in logo bars and enterprise proof strips. */
export interface StatBlockProps {
  value: React.ReactNode;
  label: React.ReactNode;
  onDark?: boolean;
  className?: string;
}
export function StatBlock(props: StatBlockProps): JSX.Element;
