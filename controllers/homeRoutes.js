const router = require('express').Router();
const { Profile, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

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

router.get('/profile_form', withAuth, async (req, res) => {
  try {
    res.render('profile_form');
  } catch (err) {
    res.status(500).json(err);
  }
});

//ToDo may need a video route added as well depending on how Twilio/WebRTC works



router.get('/signup', async (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
    res.render('signup');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  try {
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
