import { Config, Props, Styler } from './types';
declare const createStyler: ({onRead, onRender, aliasMap, useCache}: Config) => (props?: Props) => Styler;
export default createStyler;