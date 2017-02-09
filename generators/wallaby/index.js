const { Base } = require('yeoman-generator');
const yarnInstall = require('yarn-install');

class BaseGenerator extends Base {
  install() {
    yarnInstall([
      'babel-plugin-transform-async-to-generator',
      'babel-plugin-transform-flow-strip-types',
      'babel-plugin-transform-object-rest-spread',
      'babel-preset-react-native',
      'babel-preset-react-native-stage-0',
    ], {
      dev: true,
      cwd: this.destinationRoot(),
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('wallaby.js'),
      this.destinationPath('wallaby.js')
    );
  }

  end() {
    this.config.set('base', true);
    this.config.save();
  }
}

module.exports = BaseGenerator;
