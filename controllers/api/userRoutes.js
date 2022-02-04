const router = require('express').Router();
const { User } = require('../../models');

//signup (create user)

router.get('/', async (req, res) => {
  try {
    User.findAll().then((userData) => {
    res.json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
  try { 
    const userData = await User.create({
      id: req.body.id,
      username: req.body.username,
      password: req.body.password,
      is_mentor: req.body.is_mentor
    }); 
    res.status(200).json(userData); 
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.body.username } }); 

    if(!userData) {
      res 
        .status(400) 
        .json({ message: 'Your username or password is incorrect. Please try again' }); 
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password); 

    if(!validPassword) {
      res 
        .status(400) 
        .json({ message: 'Your username or passwword is incorrect. Please try again' }); 
    }

      req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

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
