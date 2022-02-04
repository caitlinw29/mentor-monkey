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
    const profileData = await Profile.findAll();

    const profiles = profileData.map((profile) => profile.get({ plain: true }));

    if (req.session.is_mentor) {
      res.render('mentor_dashboard', {
        logged_in: true
      });
    } else if (req.session.is_mentor === false) {
      res.render('mentee_dashboard', {
        profiles
      });
    }    
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
