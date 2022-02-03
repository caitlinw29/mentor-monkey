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

router.get('/profile', withAuth, async (req, res) => {
  try {
    
  } catch (err) {
    res.status(500).json(err);
  }
});

//ToDo may need a video route added as well depending on how Twilio/WebRTC works



router.get('/signup', withAuth, async (req, res) => {
  try {
    
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  try {
    
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
