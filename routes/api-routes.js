const express = require('express')
const router = express.Router()
const User = require('../models/user')


function setSession(req, user) {
    // lets server know who the user is.
    req.session.user = user
    req.session.visits = 0
}

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
    setSession(req, user)
    res.redirect('/home')
})

/**
 * /api/login POST
 */
router.post('/login', async (req, res) => {
    try {
        var user = await User.findOne({
            email: req.body.email
        }).exec()
    } catch (error) {
        return res.status(401).json({
            error: 'Invalid username or password'
        })
    }

    if (user && user.password == req.body.password) {
        setSession(req, user)
        res.redirect('/home')
    } else {
        res.status(401).json({
            error: 'Invalid username or password'
        })
    }
})

module.exports = router