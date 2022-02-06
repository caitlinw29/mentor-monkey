const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../models');

// route to signup (create user)
router.post('/', async (req, res) => {
  try { 
    const newUser = req.body;
    //hash the users password
    newUser.password = await bcrypt.hash(req.body.password, 10);
    const userData = await User.create(newUser);
    //session state is saved as being logged in
    req.session.save(() => {
      req.session.user_id = userData.id
      req.session.logged_in = true;

    res.status(200).json(userData); 
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// route to login based on username and matching password
router.post('/login', async (req, res) => {
  try {
    //find one user who has the unique username
    const userData = await User.findOne({ where: { username: req.body.username } }); 
    //if there is no user, return error message
    if(!userData) {
      res 
        .status(400) 
        .json({ message: 'Your username or password is incorrect. Please try again' }); 
      return;
    }

    //check if the password is valid using the checkPassword method on the User model
    const validPassword = await userData.checkPassword(req.body.password); 
    //if password is invalid, return error message
    if(!validPassword) {
      res 
        .status(400) 
        .json({ message: 'Your username or passwword is incorrect. Please try again' }); 
      return;
    }
    //store session state as being logged in
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

//route to logout
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
