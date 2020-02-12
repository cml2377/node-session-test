const path = require('path')
const express = require('express')
const router = express.Router()
const handlebars = require('handlebars')
const fs = require('fs');

const homeSrc = fs.readFileSync('public/home.html', { encoding: 'utf8' })
const homeTemplate = handlebars.compile(homeSrc)

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname + '/../public/login.html'))
})

router.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname + '/../public/signup.html'))
})

router.get('/logout', (req, res) => {
    //TODO: unset session
    return res.redirect('/login')
})

router.get('/home', (req, res) => {
    res.send(homeTemplate({
        name: req.session.name || 'who are you????',
        email: req.session.email || 'i dont know'
    }))
})

router.get('/', (req, res) => res.redirect('/login'))

module.exports = router