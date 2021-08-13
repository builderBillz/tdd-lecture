# TDD Lecture Codealong

You can play with the currently set up environment from this codealong endpoint to start making your own tests!

## Steps To Get Going

- Install `jest` with `npm install`, which will look at the `dependencies` section of the `package.json` file and install what's there--in this case, it's just `jest`. (Recommended: install `jest` globally on your machine with `npm install -g jest`.)
- Run the tests with `npm test` for a one-time run or `npm run watch` for a run-again-on-save workflow.
- Start hacking away in `index.test.js` to make some tests for a function! Some suggestions in order of rapidly increasing difficulty:
  - A function that takes in a string and adds an exclamation point.
  - A function that takes in an array of numbers and returns only the odd ones.
  - A function that takes in an object and returns whether or not it has more than 7 properties.

## Steps To Set Up A Test Environment From Scratch

In a project's directory:

- Create index.js and index.test.js files. (Or other files if you want to test in multiple files, keeping the same `.js` and accompanying `.test.js` pattern.)
- Make it an `npm`-controlled directory with `npm init -y`. This will create a `package.json` file.
- Install `jest` with `npm install jest`. (Recommended: install `jest` globally on your machine with `npm install -g jest`.)
- In the `package.json` file, change the `test` script to `jest` (by changing the `test` property to the string "jest") and, optionally, add a `watch` script set to the string "jest --watch-all". You can change these to whatever you want if you have a particular test command you want to run. Now you can run those two commands with `npm run test` (or just `npm test`) and `npm run watch`, respectively.
