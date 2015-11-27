Package.describe({
  name: 'mys:angular-template-url',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Makes path of ng template compatible with all Meteor releases',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/kamilkisiela/meteor-angular-template-url.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');
  api.use('mys:version-compare@1.0.0');
  api.addFiles('angular-template-url.js');
  api.export('angularTemplateUrl');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mys:angular-template-url');
  api.addFiles('angular-template-url-tests.js');
});
