const router = require('express').Router();
const passport = require('passport');

// auth login
router.get('/login', (req, res) => {
    res.render('login', { user: req.user });
});

// auth logout
router.get('/logout', (req, res) => {
    res.send('logging out');
});
router.get('/linkedin',passport.authenticate('linkedin', { state: 'SOME STATE'  }),
  function(req, res){
});
router.get('/linkedin/callback',passport.authenticate('linkedin', { state: 'SOME STATE'  }),
  function(req, res){
    console.log("reached");
});

// router.get('/linkedin/callback', passport.authenticate('linkedin'), (req, res) => {
//     res.send('you reached the redirect URI');
// });

module.exports = router;
