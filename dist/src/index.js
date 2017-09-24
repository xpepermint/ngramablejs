"use strict";
exports.__esModule = true;
var NgramStyle;
(function (NgramStyle) {
    NgramStyle[NgramStyle["START"] = 1] = "START";
    NgramStyle[NgramStyle["MIDDLE"] = 2] = "MIDDLE";
})(NgramStyle = exports.NgramStyle || (exports.NgramStyle = {}));
function tokenize(str) {
    if (typeof str === 'string') {
        return str.split(/\W/).filter(function (v) { return v; });
    }
    else {
        return [];
    }
}
exports.tokenize = tokenize;
function ngram(str, recipe) {
    if (recipe === void 0) { recipe = {}; }
    if (!str) {
        return [];
    }
    var grams = [];
    var min = recipe.min > 0 ? recipe.min : 0;
    var max = recipe.max > recipe.min ? recipe.max : str.length;
    if (max > str.length) {
        max = str.length;
    }
    if (recipe.style === NgramStyle.START) {
        for (var i = min; i <= max; i++) {
            grams.push(str.substring(0, i));
        }
    }
    else {
        for (var i = 0; i <= max - min; i++) {
            for (var j = min; j <= max; j++) {
                grams.push(str.substring(0 + i, j + i));
            }
        }
    }
    return grams;
}
exports.ngram = ngram;
//# sourceMappingURL=index.js.map