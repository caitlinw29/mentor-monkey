const router = require('express').Router();
const { User, Profile } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', withAuth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ where: { user_id: req.session.user_id } }); 
    res.status(200).json(profile);
  } catch (err) {
     res.status(400).json(err);
  }
});

module.exports = router;
