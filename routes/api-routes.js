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
    User.findOne({
        email: req.body.email
    }, (err, user) => {
        if (err || user == null) {
            res.status(401).json({
                error: 'Invalid username or password'
            })
        }
        if (user.password == req.body.password) {
            req.session.user = user
            req.session.visits = 0
            res.redirect('/home')
        } else {
            res.status(401).json({
                error: 'Invalid username or password'
            })
        }
    })
})

module.exports = router