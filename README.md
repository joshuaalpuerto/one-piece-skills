# One piece skills

Front-end codebase skills of one-piece

[![Build Status](https://travis-ci.org/joshuaalpuerto/one-piece-skills.svg?branch=master)](https://travis-ci.org/joshuaalpuerto/one-piece-skills)
[![Coverage Status](https://coveralls.io/repos/github/joshuaalpuerto/one-piece-skills/badge.svg?branch=master)](https://coveralls.io/github/joshuaalpuerto/one-piece-skills?branch=master)
![Dependecies](https://david-dm.org/joshuaalpuerto/one-piece-skills/status.svg)
![Dev Dependecies](https://david-dm.org/joshuaalpuerto/one-piece-skills/dev-status.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Development Environment Setup

1.  Make sure you have `nvm`, node `v8 and up` installed
2.  Use a smart `.npmrc`. By default, `npm` doesn’t save installed dependencies to package.json (and you should always track your dependencies!).

```bash
$ npm config set save=true
$ npm config set save-exact=true
$ cat ~/.npmrc
```

When adding new packages, always use `npm install --save <package>`. To add a package as a devDependency, use `yarn add --save-exact -D <package>`. This will ensure the package is always added to the `package-lock.json` file.

## Quick start

Make sure you have `nvm`, node `v8 and up` installed before proceeding with the following steps. Also, ensure :

1.  Clone repo - `https://github.com/joshuaalpuerto/one-piece-skills.git`
2.  Create `.env` using `.env-sample` as template.
3.  Run `npm install` to install dependencies and clean the git repo.
4.  Run `npm start` to see the app at `http://localhost:3000`.
5.  Run `npm run api` to see the api at `http://localhost:4000/skills`.

To build and test production build:

1.  Run `npm run build` to build the app.
2.  Run `npm run start:prod` to run the app in production mode. Make sure there are no errors in the browser console log.

## Overview

### Application Folder Structure

The `[`app/`](../../../tree/master/app)` directory contains your entire application code, including CSS, JavaScript, HTML and tests.

The rest of the folders and files only exist to make your life easier, and
should not need to be touched.

Some files left out for brevity.

```
.
├── app/
|   ├── components
|   |   └── Button
|   |       ├── index.js
|   |       └── tests
|   |           └── index.test.js
|   ├── containers
|   |   ├── App
|   |   |   ├── tests
|   |   |   |   ├── actions.js
|   |   |   |   ├── index.test.js
|   |   |   |   └── reducer.test.js
|   |   |   ├── actions.js
|   |   |   ├── constants.js
|   |   |   ├── index.js
|   |   |   ├── sagas.js
|   |   |   └── reducer.js
|   |   |
|   ├── tests
|   ├── utils
|   └── index.js
├── build/
├── docs/
├── internals/
├── server/
├── .editorconfig
├── .gitattributes
└── .gitignore
└── package.json
```

### Building & Deploying

1.  Run `npm run build`, which will compile all the necessary files to the
    `build` folder.

2.  Upload the contents of the `build` folder to your web server's root folder.

### CSS

This boilerplate uses [styled-components](https://github.com/styled-components/styled-components) allowing you to write your CSS in your JavaScript, removing the mapping between styles and components.

`styled-components` let's us embrace component encapsulation while `sanitize.css` gives us data-driven cross-browser normalization.

### JS

The app bundles all your clients-side scripts and chunk them into several files using
code splitting where possible. Your code is automatically optimized when
building for production so you don't have to worry about that.

### SEO

App uses [react-helmet](https://github.com/nfl/react-helmet) for managing document head tags. Examples on how to
write head tags can be found [here](https://github.com/nfl/react-helmet#examples).

### Testing

To test your application started with this boilerplate do the following:

Sprinkle `.test.js` files directly next to the parts of your application you want to test. (Or in `test/` subdirectories, it doesn't really matter as long as they are directly next to those parts and end in `.test.js`)

Write your unit and component tests in those files.

Run `npm run test` in your terminal and see all the tests pass! (hopefully)

#### Commands

- `npm test` - Run unit test
- `npm test:watch` - Run unit test

#### Performance testing

With the production server running (i.e. while `npm run start:production` is running in
another tab), enter `npm run pagespeed` to run Google PageSpeed Insights and
get a performance check right in your terminal!

#### Browser testing

`npm run start:tunnel` makes your locally-running app globally available on the web
via a temporary URL: great for testing on different devices, client demos, etc!

#### Unit testing

Unit tests live in `test/` directories right next to the components being tested
and are run with `npm run test`.

### Pre-commit

Adding `pre-commit` to your project can be helpful to encourage consistency and quality of your code repository.

- [pre-commit](https://github.com/observing/pre-commit) - **pre-commit** is a pre-commit hook installer for `git`. It will ensure that your `npm test` (or other specified scripts) passes before you can commit your changes. This all conveniently configured in your `package.json`.
- [lint-staged](https://github.com/okonet/lint-staged) - Linting makes more sense when running before committing your code. By doing that you can ensure no errors are going into repository and enforce code style. But running a lint process on a whole project is slow and linting results can be irrelevant. Ultimately you only want to lint files that will be committed.

> If `pre-commit` isn't triggering it means you install the package with out having `.git` instance. You need to remove `node_modules` and do installation again.
