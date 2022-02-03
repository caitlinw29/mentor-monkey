const router = require('express').Router();
const { Profile } = require('../../models');
const withAuth = require('../../utils/auth');

//create profile
router.post('/', withAuth, async (req, res) => {
  try {
   
  } catch (err) {
    res.status(400).json(err);
  }
});

//update profile with put?

module.exports = router;
