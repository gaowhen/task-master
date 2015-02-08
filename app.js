global.express = require('express');
global.app = express();

var server = app.listen(3000, function () {

  console.log('server started');

});

