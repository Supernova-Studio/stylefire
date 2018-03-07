import { Styler } from './styler/types';
declare const createStyler: (node: Element) => Styler;
export default function (nodeOrSelector: Element | string): Styler;
export { createStyler, Styler };
