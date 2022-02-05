const router = require('express').Router();
const { User, Profile } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', withAuth, async (req, res) => {
  // try {
  //   const profileData = await Profile.findAll({ where: { is_mentor: true } });
  //   const mentorProfiles = profileData.map((profile) => profile.get({ plain: true }));
  //   // const profile = await Profile.findOne({ where: { user_id: req.session.user_id } }); 
  //   res.render('dashboard', {
  //     mentorProfiles
  //   });   
  //   res.status(200).json(mentorProfiles);
  // } catch (err) {
  //    res.status(400).json(err);
  // }
});

module.exports = router;
