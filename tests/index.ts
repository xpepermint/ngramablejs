import test from 'ava';
import { tokenize, ngram } from '../src';

test('`tokenize` returns list of words', (t) => {
  t.deepEqual(tokenize(''), []);
  t.deepEqual(tokenize(null), []);

  t.deepEqual(tokenize('I like opensource!'), ['I', 'like', 'opensource']);
});

test('`ngram` returns list of grams', (t) => {
  t.deepEqual(ngram(''), []);

  t.deepEqual(ngram('opensource', { style: 1, min: 3, max: 5 }), ['ope', 'open', 'opens']);
  t.deepEqual(ngram('foo', { style: 1, min: 3, max: 5 }), ['foo']);

  t.deepEqual(ngram('opensource', { style: 2, min: 3, max: 5 }), ['ope', 'open', 'opens', 'pen', 'pens', 'penso', 'ens', 'enso', 'ensou']);
  t.deepEqual(ngram('foo', { style: 2, min: 3, max: 5 }), ['foo']);
});
