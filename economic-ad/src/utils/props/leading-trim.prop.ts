import type { PropDef } from './prop-def';

const trimValues = ['normal', 'start', 'end', 'both'] as const;

const trimProp = {
  type: 'enum',
  values: trimValues,
  default: undefined,
  responsive: true,
} satisfies PropDef<(typeof trimValues)[number]>;

export { trimProp };