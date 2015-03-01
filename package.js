Package.describe({
  name: 'kit:basic-auth',
  version: '0.0.1',
  summary: 'A simple way to protect your app with HTTP auth',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('kit:basic-auth.js');
});

Npm.depends({
  'basic-auth-connect': '1.0.0'
});