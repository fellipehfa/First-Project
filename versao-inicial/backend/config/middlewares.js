const bodyParser = require('body-parser')
const cors = require('cors')

module.export = app => {
    app.use(bodyParser.jsonn())
    app.use(cors())
}