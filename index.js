var connect = require('connect');

var whitelist = [/^\/vendor/, /^\/lib/, /^\/css/, /^\/app.js/, /^\/main.js/];
var isStaticFile = function(file) {
  return whitelist.some(function(regex) {
    return regex.test(file);
  });
};


var server = connect()
  .use(function(req, res, next) {
    console.log(req.url, isStaticFile(req.url));
    if (!isStaticFile(req.url)) {
      req.url = '/'
    }
    next();
  })
  .use(connect.static(__dirname))
  .listen(8000);
