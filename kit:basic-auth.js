Meteor.startup(function () {
  var basicAuth = Npm.require('basic-auth-connect');
  var auth = Meteor.settings.basicAuth || undefined;

  if (auth) {
    WebApp.connectHandlers.use(basicAuth(function (user, pass) {
      return auth.username === user && auth.password === pass;
    }));

    // // move auth to the top of the stack
    basicAuth = WebApp.connectHandlers.stack.pop();
    WebApp.connectHandlers.stack.unshift(basicAuth);
  }
});