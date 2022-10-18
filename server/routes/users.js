const router = require('express').Router();
const { User, validate } = require('../models/user');
const Token = require('../models/token');
const bcrypt = require('bcrypt');
const authorize = require('../middleware/authorize');
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');

router.get('/verify', authorize, async (req, res) => {
  try {
    const users = await User.findById({ _id: req.user._id });
    users !== null ?
      res.status(200).send({ user: users }) :
      res.status(401).send({ message: 'Invalid Token' });
  } catch (error) {
    res.status(501).send({ message: "Internal Server Error" });
    console.log(error);
  }
});
router.post('/', async (req, res) => {
  if (await User.count() == 0) {
    const validate = (data) => {
      const schema = Joi.object({
        name: Joi.string().required().label('Name'),
        email: Joi.string().email().required().label('Email'),
        password: passwordComplexity().required().label('Password')
      });
      return schema.validate(data)
    };
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    await new User({ ...req.body, password: hashPassword, owner: true }).save();
    return res.status(201).send({ message: 'User created successfully' })
  }

  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });
    const token = await Token.findOne({ token: req.body.token });
    if (!token)
      return res.status(401).send({ message: 'Invalid Token' });
    const user = await User.findOne({ email: req.body.email });
    if (user)
      return res.status(409).send({ message: 'User with given email already exist!' });

    const username = await User.findOne({ email: req.body.name });
    if (username)
      return res.status(409).send({ message: 'User with given name already exist!' });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const delete_token = await Token.findOneAndDelete({ token: req.body.token });

    await new User({ ...req.body, password: hashPassword }).save();
    res.status(201).send({ message: 'User created successfully' })
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
    console.log(error)
  }
});

router.get('/', authorize, async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users)
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
    console.log(error)
  }
});

// router.get('/:id', authorize, async (req, res) => {
//     try {
//         const users = await User.findById({ _id: req.params.id });
//         res.status(200).send(users)
//     } catch (error) {
//         res.status(500).send({ message: 'Internal Server Error' });
//         console.log(error)
//     }
// });

router.put('/:id', authorize, async (req, res) => {
  try {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(Number(process.env.SALT));
      const hashPassword = await bcrypt.hash(req.body.password, salt);
      req.body = { ...req.body, password: hashPassword }
    }

    const user = await User.findByIdAndUpdate({ _id: req.params.id },
      req.body
    );
    res.status(200).send({ message: 'User updated' });
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
    console.log(error);
  }
});

router.put('/dictonary/:id', authorize, async (req, res) => {
  try {
    const user = await User.update({
        _id: req.params.id
      },
      $set: {
        dictonary: req.body
      });
    res.status(200).send({ message: 'Dictonary Updated' });
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
    console.log(error);
  }
});

router.delete('/:id', authorize, async (req, res) => {
  try {
    const user = await User.findByIdAndDelete({ _id: req.params.id });
    res.status(200).send({ message: 'User deleted' });
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
    console.log(error)
  }
});

module.exports = router;