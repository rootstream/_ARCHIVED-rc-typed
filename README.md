# rc-typed

[![CircleCI](https://circleci.com/gh/rootstream/rc-typed.svg?style=svg)](https://circleci.com/gh/rootstream/rc-typed)

rc package integrated with parse-strings-in-object and correct type preservation

this is a drop-in replacement for [rc](https://www.npmjs.com/package/rc) package with the following additions:

1. recursive type parsing and type preservation (so environment variables passed have the correct type in JS)
1. fixed jsdoc of the main rc function so vscode shows the correct path in intellisense

this is mainly here because I refuse to copy paste this logic in my projects from now on!

## usage

```bash
npm install --save @rootstream/typed-rc
```

```JS
// replace:
const config = require('rc')('name', {...})
// with:
const config = require('@rootstream/typed-rc')('name', {...})
```
