# spacekitcat-nodejs-module-template

All right you boneheads, thank your lucky stars and get to your freakin' cars! We have a mass poisoning on our hands! Too many dead to assign specific cases, so all clients are FIRST COME FIRST SERVE! So, let's see some hustle out there!

## Included config

- Yarn (Packaging)
- Babel (Transpiler)
- Jest (Unit tests)
- Eslintrc (Static analysis)
- `.gitignore`
- README template
- Some test files

## Build

```bash
$ yarn
yarn install v1.13.0
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
✨  Done in 116.68s.
$ yarn build
yarn run v1.13.0
$ eslint src/**
$ babel src -d lib
Successfully compiled 2 files with Babel.
✨  Done in 1.93s.
```

## Test

```bash
yarn run v1.13.0
$ jest --coverage
 PASS  __tests__/placeholderModuleFunction.test.js
------------------------------|----------|----------|----------|----------|-------------------|
File                          |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
------------------------------|----------|----------|----------|----------|-------------------|
All files                     |      100 |      100 |      100 |      100 |                   |
 placeholderModuleFunction.js |      100 |      100 |      100 |      100 |                   |
------------------------------|----------|----------|----------|----------|-------------------|
```

## Usage

Once you have this package in the NPM repo, you'll be to install it with either Yarn or NPM and then require it like any other module. You can quickly test the validity of the module loader setup by going into the root directory for this project, resolving its dependencies with `yarn install`, building it with `yarn build` and by finally importing and calling it directly from the Node.js shell.

```bash
$ node
> const p = require('.');
undefined
> p.default();
Bennie Harvey RIP
null
```

