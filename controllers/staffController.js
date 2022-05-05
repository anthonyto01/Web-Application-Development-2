const bcrypt = require('bcrypt');
const Dish = require('../models/DishModel');
const Staff = require('../models/StaffModel');

exports.dashboard = (req, res) => {
  const css = [
    { url: '/css/homepage.css'},
  ];
  res.render('staff/dashboard', { Title: 'Dashboard', css });
};

exports.dishes = async (req, res) => {

  res.render('staff/menus', { Title: 'Menus'});
};

exports.addDish = (req, res) => {
  res.render('staff/addDish', { Title: 'Add Dish'});
};

exports.registerUser = (req, res) => {

  res.render('staff/register', { Title: 'Register' });
};

exports.registerUserPost = async (req, res) => {
  const { id, password, passwordConfirm } = req.body;

  if (!id || !password || !passwordConfirm) {
    res.redirect('/staff/register');
  }

  if (password !== passwordConfirm) {
     res.redirect('/staff/register');
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const newUser = {
      staffId: id,
      firstName: 'Test',
      lastName: 'User',
      password: hash,
      email: 'shantyman@shack.co.uk',
    };

    const doc = await Staff.insert(newUser);

    console.log('Inserted:', doc);
    res.redirect('/staff/dishes');
  }
  catch (err) {
    console.log(err);
  }
};