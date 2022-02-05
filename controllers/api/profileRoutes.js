const router = require('express').Router();
const { Profile } = require('../../models');
const withAuth = require('../../utils/auth');

//create profile 
// this route is for /api/profile
router.post('/', withAuth, async (req, res) => {
  try {
    const newProfile = await Profile.create({
      name: req.body.name,
      about: req.body.about,
      languages: req.body.languages,
      is_mentor: false,
      user_id: req.session.user_id,
    });
    res.status(200).json(newProfile);
  } catch (err) {
     res.status(400).json(err);
  }
});

//update profile with put?
router.put('/:id', withAuth, async (req, res) => {
  try {
    const profileData = await Profile.update({
      ...req.user_id,
      user_id: req.session.user_id,
    });
    res.status(200).json(profileData);
  } catch (err) {
    res.status(400).json(err)
  }

});


module.exports = router;
