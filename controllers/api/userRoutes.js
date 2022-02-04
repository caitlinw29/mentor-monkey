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

// router.post('/', async (req, res) => {
//   User.create(
//     {
//       id: req.body.id,
//       email: req.body.email,
//       password: req.body.password,
//       is_mentor: req.body.is_mentor
//     },
//   )
//     .then((userData) => res.status(200).json(userData))
//     .catch((err) => {
//       console.log(err);
//       res.status(400).json(err);
//     });
// });
    
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
