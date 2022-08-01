### Features

- Generates a complete serverless framework project
- Use of typeScript for the project

## amcServerless Generate

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Linux Build][github-actions-ci-image]][github-actions-ci-url]
[![Windows Build][appveyor-image]][appveyor-url]
### Link npm

`<link npm>` : <https://github.com/alvaromoca1/CLI-amcServerless-framework/tree/main>

## Installation

```sh
$ npm install -g amc-serverless-generate
```
## Quick Start

The quickest way to get started with serverless is to utilize the executable `serverless(1)` to generate an application as shown below:

Create the app:

```bash
$ amcServerless  newProyect [name_proyect]
```

Install dependencies:

```bash
$ npm install
```

Start your Express.js app at `http://0.0.0.0:3000/dev/helloword`:

```bash
$ sls offline --stage dev --region us-east-1 --host 0.0.0.0
```
## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/amc-serverless-generate.svg
[npm-url]: https://npmjs.org/package/amc-serverless-generate
[appveyor-image]: https://img.shields.io/appveyor/ci/dougwilson/generator/master.svg?label=windows
[appveyor-url]: https://ci.appveyor.com/project/dougwilson/generator
[downloads-image]: https://img.shields.io/npm/dm/amc-serverless-generate.svg
[downloads-url]: https://npmjs.org/package/amc-serverless-generate
[github-actions-ci-image]: https://img.shields.io/github/workflow/status/expressjs/generator/ci/master?label=linux
[github-actions-ci-url]: https://github.com/expressjs/generator/actions/workflows/ci.yml