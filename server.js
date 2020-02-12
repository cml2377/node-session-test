const express = require('express')
const path = require('path')
const port = 3000;

const app = express();

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/login.html'))
})

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/signup.html'))
})

app.post('/login', (req, res) => {

})

app.get('/', (req, res) => res.redirect('/login'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))