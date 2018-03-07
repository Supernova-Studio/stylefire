"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var css_1 = require("./css");
var svg_1 = require("./svg");
var cache = new WeakMap();
var createStyler = function (node) {
    var styler = (node instanceof SVGElement) ? svg_1.default(node) : css_1.default(node);
    cache.set(node, styler);
    return styler;
};
exports.createStyler = createStyler;
var getStyler = function (node) { return cache.has(node) ? cache.get(node) : createStyler(node); };
function default_1(nodeOrSelector) {
    var node = (typeof nodeOrSelector === 'string')
        ? document.querySelector(nodeOrSelector)
        : nodeOrSelector;
    return getStyler(node);
}
exports.default = default_1;
//# sourceMappingURL=index.js.map