const Base = require('yeoman-generator');
const templateSettings = require('./templates/settings.json');
const analytics = require('../../analytics');

class VSCodeGenerator extends Base {
  initializing() {
    analytics.pageview('/vscode').send();
    this.composeWith('rn-toolbox:checkversion');
  }

  prompting() {
    const config = this.fs.readJSON(this.destinationPath('package.json'));
    return this.prompt([
      {
        type: 'input',
        name: 'appName',
        message: 'Your react native app directory name',
        default: config.name,
      },
    ]).then(answers => {
      this.answers = answers;
    });
  }
  writing() {
    this.fs.copyTpl(
      this.templatePath('jsconfig.json'),
      this.destinationPath('jsconfig.json'),
      this.answers
    );
    this.fs.extendJSON(
      this.destinationPath('.vscode/settings.json'),
      templateSettings
    );
  }

  end() {
    this.config.set('vscode', true);
    this.config.save();
  }
}

module.exports = VSCodeGenerator;
