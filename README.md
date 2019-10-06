# do-the-apple-tv-shuffle

A simple program that will scan a specified folder for MP4 files (x264 + AAC, AirPlay compatiable formats). It uses the `bonjour` and `play-on-apple-tv` NPM packages to do the heavy lifting.

## Build

```console
yarn run v1.19.0
$ eslint src/**
$ babel src -d lib
Successfully compiled 4 files with Babel.
✨  Done in 1.31s.
```

## Test

```console
yarn run v1.19.0
$ jest --coverage
 PASS  __tests__/playableComparator.test.js
 PASS  __tests__/randomWrapper.test.js
 PASS  __tests__/findPlayableFiles.test.js
-----------------------|----------|----------|----------|----------|-------------------|
File                   |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-----------------------|----------|----------|----------|----------|-------------------|
All files              |      100 |      100 |      100 |      100 |                   |
 findPlayableFiles.js  |      100 |      100 |      100 |      100 |                   |
 playableComparator.js |      100 |      100 |      100 |      100 |                   |
 randomWrapper.js      |      100 |      100 |      100 |      100 |                   |
-----------------------|----------|----------|----------|----------|-------------------|

Test Suites: 3 passed, 3 total
Tests:       8 passed, 8 total
Snapshots:   0 total
Time:        2.765s
Ran all test suites.
✨  Done in 4.11s.
```

## Usage

You can check out and run the code like so:

```console
$ cd do-the-apple-tv-shuffle
$ yarn build
$ node . /Users/spacekitcat/Movies
/Users/spacekitcat/Movies
Found a service:  192.168.178.35
Playing: /Users/spacekitcat/Movies/afilm.mp4
```

