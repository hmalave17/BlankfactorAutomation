module.exports = {
  default: `--require step_definitions/**/*.js features/**/*.feature --format json:reports/cucumber_report.json --format progress`
};
