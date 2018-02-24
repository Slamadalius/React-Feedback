const passport = require('passport');
const goStrategy = require('passport-google-oauth20')
const keys = require('../config/keys');

// First we create our new instance of google strategy
// with clientID and clientSecret from Google+ API
passport.use(new goStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        console.log('access token', accessToken);
        console.log('refresh token', refreshToken);
        console.log('profile', profile);
    })
);