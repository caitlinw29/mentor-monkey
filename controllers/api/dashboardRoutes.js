const router = require('express').Router();
const { User, Profile } = require('../../models');
const withAuth = require('../../utils/auth');

//update is_mentor with 'put' to allow user to post their profile 
router.put('/', withAuth, async (req, res) => {
  try {
    const profile = await Profile.update(
    {
      is_mentor: true,
    },
    {
      where: {
        user_id: req.session.user_id,
      },
    });

    res.status(200).json(profile);
  } catch (err) {
    res.status(400).json(err)
  }

});

module.exports = router;
