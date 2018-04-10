# React Native Toolbox [![Build Status](https://travis-ci.org/bamlab/generator-rn-toolbox.svg?branch=master)](https://travis-ci.org/bamlab/generator-rn-toolbox) [![NPM downloads](https://img.shields.io/npm/dm/generator-rn-toolbox.svg)](https://www.npmjs.com/package/generator-rn-toolbox) [![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()

Yeoman generators to kickstart your react-native v0.48+ projects.

_As of now, the way those generators are configured is heavily opinionated and based on our own company needs._

## Features

In an existing React Native project, our generator contains sub-generators that will help you with:

* Setup
  * [Linting](generators/lint/README.md) -- `yo rn-toolbox:lint`
  * [Base project](generators/base/README.md) -- `yo rn-toolbox:base`
  * [Advanced project](generators/advanced-base/README.md) -- `yo rn-toolbox:advanced-base`
  * [Jest](generators/jest/README.md) -- `yo rn-toolbox:jest`
  * [Fastlane setup for multiple environments](generators/fastlane-setup/README.md) -- `yo rn-toolbox:fastlane-setup`
  * [Fastlane environment instantiation](generators/fastlane-env/README.md) -- `yo rn-toolbox:fastlane-env`
  * [Icons and Splashscreen generation](generators/assets/README.md) -- `yo rn-toolbox:assets [--icon | --splash] <path>`
* Environment
  * [Visual Studio Code](generators/vscode/README.md) -- `yo rn-toolbox:vscode`
* Continuous integration / deployment
  * [TravisCI](generators/travisci/README.md) -- `yo rn-toolbox:travisci`
  * [Bitrise for continuous deployment](generators/bitrise/README.md) -- `yo rn-toolbox:bitrise`

## Requirements

* [ ] You need `node > 6` installed
* [ ] Ruby > `2.2.3`
* [ ] Bundler installed (`gem install bundler`)
* [ ] Yeoman installed (`npm i -g yo`)
* [ ] Yarn installed (`brew install yarn`)

## Usage

Install the main `yeoman` generator:

```
npm install -g yo generator-rn-toolbox
```

Then follow the docs for any sub-generator listed above in the [features](https://github.com/bamlab/generator-rn-toolbox#features).

If starting from scratch, use the `react-native init <ProjectName> && cd <ProjectName>` command to instantiate your React Native Project (for more [go see the official React Native getting started](https://facebook.github.io/react-native/docs/getting-started.html)).

It is recommended to initiate the git repository right after instantiating the app and to do you first commit.

It is also recommended to do a separate commit after running each of these steps.

## Contributing

See [our contributing guidelines](https://bamlab.github.io/open-source/#contributing)

### Local development

To run the generator with your local version:

```shell
git clone https://github.com/bamlab/generator-rn-toolbox.git
cd generator-rn-toolbox
npm link
```

When you're done, you can run `npm unlink` to stop using your local version.
