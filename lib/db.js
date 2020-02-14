const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/session-test', { useNewUrlParser: true });

const db = mongoose.connection;
var User;

module.exports = {
    connect: (callback) => {
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function () {
            // we're connected!
            var userSchema = new mongoose.Schema({
                name: String,
                email: String,
                password: String
            })
            User = mongoose.model('User', userSchema)
            callback();
        });
    },
    createUser: (data, callback) => {
        var user = new User(data)
        user.save((err, user) => {
            if (err) return console.error(err);
            callback(user)
        })
    },
    getUser: (email, callback) => {
        User.findOne({ 'email' : email }, (err, User) => {
            callback(User)
        })
    }
}