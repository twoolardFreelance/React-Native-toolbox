# React Native Toolbox

Yeoman generators to kickstart your react-native v0.37+ projects.

*As of now, the way those generators are configured is heavily opinionated and based on our own company needs.*

## Features
- [Eslint setup](generators/eslint/README.md)
- [Base project setup](generators/base/README.md)
- [Jest setup](generators/jest/README.md)
- [Fastlane setup for multiple environments](generators/fastlane/README.md)
- [Icons and Splashscreen generation](generators/assets/README.md)
- [Bitrise setup for continuous deployment](generators/bitrise/README.md)
- [React Native upgrade](generators/upgrade/README.md)

## Requirements

- [ ] You need `node 6` installed
- [ ] Ruby > `2.2.3` with `bundler` installed
- [ ] Yeoman installed (`npm i -g yo`)

## Usage

Retrieve all the generators with `npm install -g yo generator-rn-toolbox`. And then in a React Native project, use any above generator.

If starting from scratch, use the `react-native init <ProjectName> && cd <ProjectName>` command to instantiate your React Native Project (for more [go see the official React Native getting started](https://facebook.github.io/react-native/docs/getting-started.html)).

It is recommended to initiate the git repository right after instantiating the app and to do you first commit.

It is also recommended to do a separate commit after running each of these steps.

## Upcoming features
- Android prod deployment
