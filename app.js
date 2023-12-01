//importin all requirements 
const express = require('express')
const app = express()
const connectdb = require('./db/connectdb') //db connection fonction 
const routes = require('./routes/routes') //products routes
const NotFound = require('./extra/notfound') //not found handler
const errhandler = require('./extra/errhandler') //err handler
const cors = require('cors') // limit cors latter -_-
const helmet = require('helmet') // secure the app -_-
const xss = require('xss-clean') // secure the app -_-
const rateLimit = require('express-rate-limit') // secure the app -_-
require('dotenv').config()

// midddelwares 
app.use(cors()) //handle cors
app.use(express.json())
app.use(helmet()) //handle helmet
app.use(xss()) //handle xss
app.use(rateLimit({ //handle rate limit
    windowMs : 10 * 60 * 1000 , // 10 mins
    max : 100 // limit each IP to 100 requests per windowMs
}))
app.use('/api/v1/',routes) // link the products routes



//handelers
    app.use(NotFound) //handle wrong route pathes
    app.use(errhandler) //handle server errs
//start the server 

const port = process.env.PORT || 8088
const start = async () => {
    try {
        await connectdb(process.env.MONGO) // connect to db
        app.listen(port , console.log('listenin on port ' + port ))

    }catch(err) {
        console.log(err)
    }
}
start()