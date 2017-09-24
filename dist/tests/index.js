"use strict";
exports.__esModule = true;
var ava_1 = require("ava");
var src_1 = require("../src");
ava_1["default"]('`tokenize` returns list of words', function (t) {
    t.deepEqual(src_1.tokenize(''), []);
    t.deepEqual(src_1.tokenize(null), []);
    t.deepEqual(src_1.tokenize('I like opensource!'), ['I', 'like', 'opensource']);
});
ava_1["default"]('`ngram` returns list of grams', function (t) {
    t.deepEqual(src_1.ngram(''), []);
    t.deepEqual(src_1.ngram('opensource', { style: 1, min: 3, max: 5 }), ['ope', 'open', 'opens']);
    t.deepEqual(src_1.ngram('opensource', { style: 2, min: 3, max: 5 }), ['ope', 'open', 'opens', 'pen', 'pens', 'penso', 'ens', 'enso', 'ensou']);
});
//# sourceMappingURL=index.js.map