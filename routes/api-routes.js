const express = require('express')
const router = express.Router()
const User = require('../models/user')

/**
 * /api/signup POST
 */
router.post('/signup', async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    try {
        await user.save()
    } catch (error) {
        return res.json(error)
    }
    res.redirect('/home')
})

/**
 * /api/login POST
 */
router.post('/login', (req, res) => {
    res.redirect('/home')
})

module.exports = router