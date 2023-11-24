const express = require('express') // import express
let router = express.Router() // create a router object

router.route('/').get((req,res)=> res.send("welcome to nexus")) // create a route for the root



module.exports = router // export the router object