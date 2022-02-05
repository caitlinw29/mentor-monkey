const router = require('express').Router();
const { Profile } = require('../../models');
const withAuth = require('../../utils/auth');


// route to create profile if user is logged in
router.post('/', withAuth, async (req, res) => {
  try {
    //create a profile using the req.body and set is_mentor to false to start
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

//route to update profile 
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
