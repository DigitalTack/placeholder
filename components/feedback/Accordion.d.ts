/**
 * Single-open disclosure list, used for FAQ blocks.
 */
export interface AccordionItem { q: React.ReactNode; a: React.ReactNode }
export interface AccordionProps {
  items: AccordionItem[];
  /** Index open on mount; -1 for all closed. */
  defaultOpen?: number;
  className?: string;
}
export function Accordion(props: AccordionProps): JSX.Element;
