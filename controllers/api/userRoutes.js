const router = require('express').Router();
const { User } = require('../../models');

//signup (create user)
// this route is for /api/users

router.get('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    console.log(userData);

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body); 

    req.session.save(() => {
      req.session.email = userData.email; 
      req.session.password = userData.password;

      res.status(200).json(userData);
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
