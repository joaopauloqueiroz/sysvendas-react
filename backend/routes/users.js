var express = require("express");
const session = require('express-session');
var router = express.Router();
var controller = require("../controllers/users");
const cors = require("cors");
const validate = require("../validations/users/validateUserRegister");
router.all(process.env.ORIGIN, cors());
var sess;
const model = require('../models/users')
const mongoose = require('mongoose')


router.get('/init', async (req, res, next) => {
	/*await model.create({
    name: "Lucas Barbosa",
    idade: 23,
    email: 'lucas@gmail.com'
  }) */

  let a = await model.find({});
  for (let i = 0; i < a.length; i++) {
    console.log(a[i].id)
  }
  return res.json(a)
});

router.post('/create', async (req, res, next) => {
  let data = req.body;

  let resp = model.path('email').validate(async (value) => {
    const emailCount = await mongoose.models.User.countDocuments({email: data.email });
    return !emailCount;
  }, 'Email already exists');

  res.json(resp)
});



module.exports = router;
