<p align="center">
  <a href="https://uvigo.gal/">
    <img src="https://www.uvigo.gal/themes/custom/uvigo/logo.svg" alt="" width="200" height="30">
  </a>

  <h3 align="center">UVigo package based on Bootstrap</h3>

  <p align="center">
    Sleek, intuitive, and powerful front-end framework for faster and easier web development.
    <br>
    <a href="https://getbootstrap.com/docs/4.1/"><strong>Explore Bootstrap docs »</strong></a>
    <br>
  </p>
</p>

<br>

## Table of contents

- [Quick start](#quick-start)
- [Status](#status)
- [What's included](#whats-included)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Community](#community)
- [Versioning](#versioning)
- [Creators](#creators)
- [Copyright and license](#copyright-and-license)

## Quick start

Several quick start options are available:

- Clone the repo: `git clone https://github.com/twbs/bootstrap.git`
- Install with [npm](https://www.npmjs.com/): `npm install uvigoweb`
- Install with [yarn](https://yarnpkg.com/): `yarn add uvigo@1.0.0`

Read the [Getting started page](https://getbootstrap.com/docs/4.0/getting-started/introduction/) for information on the framework contents, templates and examples, and more.

## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
uvigoweb/
├── css/
│   ├── uvigoweb.css
│   ├── uvigoweb.css.map
│   ├── uvigoweb.min.css
│   ├── uvigoweb.min.css.map
├── fonts/
│   ├── ElegantIcons.eot
│   ├── ElegantIcons.svg
│   ├── ElegantIcons.ttf
│   ├── ElegantIcons.woff
│   ├── uvigo-iconfont.eot
│   ├── uvigo-iconfont.svg
│   ├── uvigo-iconfont.ttf
│   ├── uvigo-iconfont.woff
│   ├── uvigo-iconfont.woff2
├── images/
│   ├── play.svg
│   ├── uvigo.svg
└── js/
    ├── uvigoweb.js
    └── uvigoweb.min.js
```

We provide compiled CSS and JS (`uvigoweb.*`), as well as compiled and minified CSS and JS (`uvigoweb.min.*`). CSS [source maps](https://developers.google.com/web/tools/chrome-devtools/debug/readability/source-maps) (`uvigoweb.*.map`) are available for use with certain browsers' developer tools.

### Running documentation locally

1. Run through the [tooling setup](https://getbootstrap.com/docs/4.0/getting-started/build-tools/#tooling-setup) to install Jekyll (the site builder) and other Ruby dependencies with `bundle install`.
2. Run `npm install` to install Node.js dependencies.
3. Run `npm run test` (or a specific NPM script) to rebuild distributed CSS and JavaScript files, as well as our docs assets.
4. From the root `/bootstrap` directory, run `npm run docs-serve` in the command line.
5. Open `http://localhost:9001` in your browser, and voilà.

Learn more about using Jekyll by reading its [documentation](https://jekyllrb.com/docs/home/).

## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, Bootstrap is maintained under [the Semantic Versioning guidelines](https://semver.org/). Sometimes we screw up, but we'll adhere to those rules whenever possible.

See [the Releases section of our GitHub project](https://github.com/twbs/bootstrap/releases) for changelogs for each release version of Bootstrap.

## Copyright and license

Code and documentation copyright 2018 to [IdeiT](http://ideit.es) Code released under the [MIT License](https://github.com/twbs/bootstrap/blob/master/LICENSE). Docs released under [Creative Commons](https://github.com/twbs/bootstrap/blob/master/docs/LICENSE).
