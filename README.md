# do-the-apple-tv-shuffle

A simple program that will scan a specified folder for MP4 files (x264 + AAC, AirPlay compatiable formats). It uses the `bonjour` and `play-on-apple-tv` NPM packages to do the heavy lifting.


I'd class this as a prototype, not quite at the right level for production level code. It's shown me *how* you would go about building a production ready solution.


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
 PASS  __tests__/main.test.js
 PASS  __tests__/createPlayDeviceEventHandler.test.js
  ● Console

    console.log src/createPlayDeviceEventHandler.js:5
      { state: 'magic' }
    console.log src/createPlayDeviceEventHandler.js:5
      { state: 'stopped' }

 PASS  __tests__/randomWrapper.test.js
 PASS  __tests__/findPlayableFiles.test.js
 PASS  __tests__/playNext.test.js
  ● Console

    console.log src/playNext.js:9
      Playing: /my/films/a-file.mp4
    console.log src/playNext.js:9
      Playing: /my/films/b-file.mp4
    console.log src/playNext.js:9
      Playing: /my/films/a-file.mp4

 PASS  __tests__/playableComparator.test.js
---------------------------------|----------|----------|----------|----------|-------------------|
File                             |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
---------------------------------|----------|----------|----------|----------|-------------------|
All files                        |    65.38 |       70 |    72.73 |       68 |                   |
 createPlayDeviceEventHandler.js |      100 |      100 |      100 |      100 |                   |
 findPlayableFiles.js            |      100 |      100 |      100 |      100 |                   |
 main.js                         |    36.36 |       50 |    33.33 |    36.36 |... 16,18,19,21,22 |
 playNext.js                     |    71.43 |       50 |    66.67 |    83.33 |                11 |
 playableComparator.js           |      100 |      100 |      100 |      100 |                   |
 randomWrapper.js                |      100 |      100 |      100 |      100 |                   |
---------------------------------|----------|----------|----------|----------|-------------------|

Test Suites: 6 passed, 6 total
Tests:       26 passed, 26 total
Snapshots:   0 total
Time:        3.283s
Ran all test suites.
✨  Done in 4.26s.
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

