const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../../middleware/auth');
const Profils = require('../../models/profils');
const {validationResult} = require('express-validator');

// Load input validation
const {
  validateRegisterInput,
  validateLoginInput
} = require('../../validation/auth');

// Load User model
const User = require('../../models/User');

// @route POST api/users/register
// @desc Register user
// @access Public
router.post('/register', validateRegisterInput(), async (req, res) => {
  // Check validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Formatting errors to return object instead of an array
    const formattedErrors = errors.array().reduce((acc, current) => {
      acc[current['param']] = current.msg;
      return acc;
    }, {});
    if (req.body.password !== req.body.password2) {
      formattedErrors.password2 = 'Passwords do not match';
    }
    return res.status(400).json(formattedErrors);
  }

  console.log("user registred",req.body);
  const { name, email, password, role } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ email: 'User already exists' });
    }

    user = new User({
      name,
      email,
      password,
      role
    });

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        occupation: user.occupation,
        address: user.address,
        skills: user.skills,
        softSkills: user.softSkills,
        education: user.education,
        stages: user.Stages,
        projects: user.Projects,
        role:user.role,
      }
    };

    jwt.sign(
      payload,
      config.get('secretOrKey'),
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({
          success: true,
          token: 'Bearer ' + token
        });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post('/login', validateLoginInput(), async (req, res) => {
  // Check Validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Formatting errors to return object instead of an array
    const formattedErrors = errors.array().reduce((acc, current) => {
      acc[current['param']] = current.msg;
      return acc;
    }, {});
    return res.status(400).json(formattedErrors);
  }

  const { email, password } = req.body;
  console.log("server : ", email, password);

  // Find user by email
  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ auth: 'Invalid Credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ auth: 'Invalid Credentials' });
    }

    const payload = {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        occupation: user.occupation,
        addresse: user.address,
        skills: user.skills,
        softSkills: user.softSkills,
        education: user.education,
        stages: user.Stages,
        projects: user.Projects,
        role:user.Role
      }
    };

    jwt.sign(
      payload,
      config.get('secretOrKey'),
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({
          success: true,
          token: 'Bearer ' + token
        });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route    GET api/users/current
// @desc     Get user by token
// @access   Private
router.get('/current', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    //console.log("current user",user);
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


router.post("/search",async(req,res)=>{
  try {
    const criteria = req.body;
    const users = await User.find(criteria);
    //console.log(req);
    res.send(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

router.post("/profile", async (req, res) => {
  try {
    const criteria = req.body;
    const users = await User.find(criteria);
    //console.log(req);
    res.send(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});
router.post("/profile/update", async (req, res) => {
  try {
    const criteria = req.body;
    const email = criteria.email;
    const userUpdate = await User.findOneAndUpdate({email: email}, criteria);
    console.log("userYpdate", userUpdate);
    //const users = await User.findOne({email: email});
    res.send(userUpdate);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});
router.post("/profile/search", async (req, res) => {
  try {
    const criteria = req.body;
    console.log(criteria);
    if (criteria.skills !== undefined && criteria.skills.length === 1) {
      criteria.skills = criteria.skills[0];
    }
    if (criteria.softSkills !== undefined && criteria.softSkills.length === 1) {
      criteria.softSkills = criteria.softSkills[0];
    }
    console.log("criteria", criteria);
    const users = await User.find(criteria);
    const response = {};
    response.local = users;

    res.send(response);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

router.post("/profile/user", async (req, res) => {
  try {

    const users = await User.findOne(req.body);
    const notificationSave = new Notification({
      "title": "Une personne a vu ton profile",
      "message": "demande 2",
      "user": users._id,

      "noticed": false,
    });
    await notificationSave.save();
    console.log(users)
    res.send(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

router.post("/linked", async (req, res) => {
  try {

    const users = await Profils.find(req.body);
    console.log(users)
    res.send(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});
router.post("/getUser", async (req, res) => {
  try {
    const criteria = req.body;
    const users = await User.findOne(criteria);
    //console.log(req);
    res.send(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});


router.post("/profile/addFavorite", async (req, res) => {
  try {

    const users = await User.updateOne({"_id": req.body._id}, {$addToSet: {FavoriteUsers: req.body.user}});
    const user = await User.findOne({"_id": req.body._id});
    const notificationSave = new Notification({
      "title": user.name + " Vous ajoutez a son liste de Favoris",
      "message": "demande 3",
      "user": req.body.user,
      "dateCreated": Date.now(),
      "noticed": false
    });
    console.log("favorite", users);
    await notificationSave.save();
    res.send(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});
router.post("/profile/listFavorite", async (req, res) => {
  try {

    const interstedEmploi = await User.findOne(req.body);

    const interstedPersons = [];
    for (const user of interstedEmploi.FavoriteUsers) {
      const person = await User.findOne({"_id": user})
      interstedPersons.push(person);
    }

    res.send(interstedPersons);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});


module.exports = router;
