const router = require('express').Router();
const { Profile, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    res.render('homepage');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile_form', withAuth, async (req, res) => {
  try {
res.render(profile_form);
  } catch (err) {
    res.status(500).json(err);
  }
});

//ToDo may need a video route added as well depending on how Twilio/WebRTC works



router.get('/signup', async (req, res) => {
  try {
    res.render('signup');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  try {
    res.render('login');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
