const express = require('express')
const session = require('express-session')
const app = express();

// Authentication is who you are and sessions are server-tracked user sessions. 
// Sessions are data that persists over time
// Saved "logged in" into your session


const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/session-test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const APIRoutes = require('./routes/api-routes')
const HTMLRoutes = require('./routes/html-routes')

const port = 3000;

app.use(session({
    secret: 'supersecret',
    resave: false,
    saveUninitialized: false
}))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api', APIRoutes)
app.use('/', HTMLRoutes)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

