const router = require('express').Router();
const { Profile, User } = require('../models');
const withAuth = require('../utils/auth');

//route to render homepage
router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//route to render the profile form 
router.get('/profile_form', async (req, res) => {
  try {
    res.render('profile_form');
  } catch (err) {
    res.status(500).json(err);              
  }
});


//route to render the dashboard, only if user is signed in
router.get('/dashboard', withAuth, async (req, res) => {
  try {
       const profileData = await Profile.findAll({ where: { is_mentor: true } });

    const mentorProfiles = profileData.map((profile) => profile.get({ plain: true }));

    res.render('dashboard', {
      mentorProfiles,
      logged_in: true
    });   
  } catch (err) {
    res.status(500).json(err);
  }
});


//Chat route
router.get('/chat', withAuth, async (req, res) => {
  try{
    res.render('chat', {
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//route to render the signup form 
router.get('/signup', async (req, res) => {
  try {
    //if already signed in, redirect to homepage
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
    res.render('signup');
  } catch (err) {
    res.status(500).json(err);
  }
});

//route to render the login form
router.get('/login', async (req, res) => {
  try {
    //if already logged in, redirect to homepage
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
    res.render('login');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
