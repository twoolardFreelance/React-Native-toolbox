const Base = require('yeoman-generator');
const analytics = require('../../analytics');

class BitriseGenerator extends Base {
  initializing() {
    analytics.pageview('/bitrise').send();
    this.composeWith('rn-toolbox:checkversion');
    if (!this.config.get('fastlane')) {
      this.log.error('You need to run `yo rn-toolbox:fastlane` first.');
    }
  }

  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'reactNativeDirectory',
        message:
          'Path to the react native project relative to the root of the repository',
        required: true,
        default: '.',
      },
      {
        type: 'input',
        name: 'androidProdAppId',
        message:
          'If you want to upload to Android Beta, enter your applicationId (ie. com.android.test).',
      },
    ]).then(answers => {
      this.answers = answers;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('bitrise.yml'),
      this.destinationPath('bitrise.yml'),
      this.answers
    );
  }
}

module.exports = BitriseGenerator;
