global.express = require('express')
global.app = express()

app.use('/static', express.static(__dirname + '/build'))

app.set('views', './view')
app.set('view engine', 'jade')

require('./route')

app.listen(3000, function () {

  console.log('app listening on port: 3000')

})

