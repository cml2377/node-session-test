const express = require('express')
const router = express.Router()

/**
 * /api/signup POST
 */
router.post('/signup', (req, res) => {
    //TODO: actually sign them up
    return res.redirect('/home')
})

/**
 * /api/login POST
 */
router.post('/login', (req, res) => {
    return res.redirect('/home')
})

module.exports = router