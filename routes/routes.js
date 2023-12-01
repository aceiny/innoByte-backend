const express = require('express') // import express
let router = express.Router() // create a router object
const {addParticipant,getParticipants} = require('../controllers/controllers') // import the controllers

router.post('/addp',addParticipant) // add a participant
router.get('/getp',getParticipants) // get all participants *

module.exports = router // export the router object