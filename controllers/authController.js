const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const Staff = require('../models/StaffModel');

exports.login = async (req, res) => {
  try {
    const user =  await Staff.findOne(
      { staffId: req.body.id },
    );

    if (!user) {
      res.redirect("/login");
      return;
    }

    bcrypt.compare(req.body.password, user.password, (err, result) => {
      if (err || !result){
       res.redirect('/login');
       return;
      }

      jwt.sign({ id: user.staffId}, process.env.SECRET, 
        { expiresIn: '1200s' }, function (error, token) {
        res.cookie('jwt', token);
        console.log('Testing');
        res.redirect('/staff');
      });
    });
  }
  catch (err) {
    console.log(err);
  }
};

exports.logout = (req, res) => {
  res.clearCookie('jwt');
  res.redirect('/');
};