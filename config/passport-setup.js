const passport = require('passport');
var LinkedInStrategy = require('@sokratis/passport-linkedin-oauth2').Strategy;
const keys = require('./keys');

passport.use(new LinkedInStrategy({
    clientID: keys.linkdin.clientID,
    clientSecret: keys.linkdin.clientSecret,
    callbackURL: 'http://localhost:3000/auth/linkedin/callback',
    scope: ['r_emailaddress', 'r_liteprofile'],
    
  }, function(accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
      console.log(profile);
    });
  }));