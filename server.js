const express = require('express')
const app = express();

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/session-test', { useNewUrlParser: true });

const APIRoutes = require('./routes/api-routes')
const HTMLRoutes = require('./routes/html-routes')

const port = 3000;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api', APIRoutes)
app.use('/', HTMLRoutes)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

