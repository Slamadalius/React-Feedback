const express = require('express');
const router = express.Router();
const passport = require('passport');


// when we visit /auth/google passport forwards request to google 
// then asks if google grants premission
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

// when user grants premission google redirects to /auth/google/callback (which is set in Google API)
// with (?code) 
// the code is send to google again and we get details about the user (accessToken, refreshToken, profile)
router.get('/google/callback', passport.authenticate('google'));

module.exports = router