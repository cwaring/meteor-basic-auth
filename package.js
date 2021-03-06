Package.describe({
  name: 'kit:basic-auth',
  version: '1.0.1',
  summary: 'A simple way to protect your app with HTTP auth',
  git: 'https://github.com/cwaring/meteor-basic-auth.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('kit:basic-auth.js', 'server');
});

Npm.depends({
  'basic-auth-connect': '1.0.0'
});
