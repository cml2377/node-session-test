const mongoose = require('mongoose')

module.exports = {
    connect: (callback) => {
        mongoose.connect('mongodb://localhost/session-test', { useNewUrlParser: true });
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function () {
            // we're connected!
            callback();
        });
    }
}