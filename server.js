const express = require('express')
const app = express();
const APIRoutes = require('./routes/api-routes')
const HTMLRoutes = require('./routes/html-routes')
const DB = require('./lib/db')
const port = 3000;

app.use('/api', APIRoutes)
app.use('/', HTMLRoutes)

DB.connect(() => {
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
})
