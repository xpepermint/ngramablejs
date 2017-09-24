![Build Status](https://travis-ci.org/xpepermint/ngramablejs.svg?branch=master)&nbsp;[![NPM Version](https://badge.fury.io/js/ngramable.svg)](https://badge.fury.io/js/ngramable)&nbsp;[![Dependency Status](https://gemnasium.com/xpepermint/ngramablejs.svg)](https://gemnasium.com/xpepermint/ngramablejs)

# Ngramable.js

> String ngram splitter.

This is a light weight open source package for the **server** and **browser** (using module bundler) written with  [TypeScript](https://www.typescriptlang.org). The source code is available on [GitHub](https://github.com/xpepermint/ngramablejs) where you can also find our [issue tracker](https://github.com/xpepermint/ngramablejs/issues).

## Installation

Run the command below to install the package.

```
npm install --save ngramable
```

## Example

The code below shows a basic usage example.

```js
import { tokenize, ngram } from 'ngramable';

tokenize("I like opensource!"); // => ["I", "like", "opensource"]

ngram('opensource', { style: 1, min: 3, max: 5 }); // => ['ope', 'open', 'opens']
ngram('opensource', { style: 2, min: 3, max: 5 }); // => ['ope', 'open', 'opens', 'pen', 'pens', 'penso', 'ens', 'enso', 'ensou']


```

## License (MIT)

```
Copyright (c) 2017+ Kristijan Sedlak <xpepermint@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated modelation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
