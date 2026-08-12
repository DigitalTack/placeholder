/** Monospaced telemetry line: label/value pairs separated by middots. The brand's signature "measured" detail. */
export interface MetaStripItem { label: React.ReactNode; value: React.ReactNode }
export interface MetaStripProps {
  items: MetaStripItem[];
  onDark?: boolean;
  className?: string;
}
export function MetaStrip(props: MetaStripProps): JSX.Element;
