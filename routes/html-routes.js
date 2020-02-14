const path = require('path')
const express = require('express')
const router = express.Router()
const handlebars = require('handlebars')
const fs = require('fs');

const homeSrc = fs.readFileSync('public/home.html', { encoding: 'utf8' })
const homeTemplate = handlebars.compile(homeSrc)

router.get('/login', (req, res) => {
    if (req.session && req.session.user) {
        res.redirect('/home')
    } else {
        res.sendFile(path.join(__dirname + '/../public/login.html'))
    }
})

router.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname + '/../public/signup.html'))
})

router.get('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy(function(err) {
            // cannot access session here
            res.redirect('/login')
        })
    } else {
        res.redirect('/login')
    }
})

router.get('/home', (req, res) => {
    var data = {
        name: 'WHO ARE YOU???',
        email: 'I DONT KNOW YOUR EMAIL',
        visits: 0
    }
    if (req.session && req.session.user) {
        data.name = req.session.user.name
        data.email = req.session.user.email
        data.visits = ++req.session.visits
    }
    res.send(homeTemplate(data))
})

router.get('/', (req, res) => res.redirect('/login'))

module.exports = router