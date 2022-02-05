const router = require('express').Router();
const { User, Profile } = require('../../models');
const withAuth = require('../../utils/auth');

//route to update is_mentor with 'put' which allows user to post their profile 
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

// route to allow user to take their profile down by changing is_mentor to false
router.put('/quit', withAuth, async (req, res) => {
  try {
    const profile = await Profile.update(
    {
      is_mentor: false,
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
