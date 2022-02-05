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
    });
    res.status(200).json(newProfile);
  } catch (err) {
     res.status(400).json(err);
  }
});

    // Send the newly created row as a JSON object

//update profile with put to allow user to be a mentor
router.put('/', withAuth, async (req, res) => {
  try {

    const profile = await Profile.update(
    {
      is_mentor: true,
    },
    {
      where: {
        id: req.session.user_id,
      },
    });
   
    // const profileData = await Profile.update({
    //   ...req.body,
    //   user_id: req.session.user_id,
    // });
    res.status(200).json(profile);
  } catch (err) {
    res.status(400).json(err)
  }

});

module.exports = router;
