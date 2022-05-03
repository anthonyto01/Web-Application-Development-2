const jwt = require('jsonwebtoken');
const Dish = require('../models/DishModel');

exports.home = (req, res) => {
  const css = [
    { url: '/css/homepage.css'},
  ];
  res.render('home', { Title: 'Home', css });
};

exports.menu = async (req, res) => {
  const menus = await Dish.getSortedMenu(false); // withHidden: false

  res.render('menu', { Title: 'Menu',  menus });
};

exports.contact = (req, res) => {
  const css = [
    { url: '/css/contact.css'},
  ];
  res.render('contact', { Title: 'Contact', css });
};

exports.aboutUs = (req, res) => {
 const css = [
      { url: '/css/about.css'},
    ];
  res.render('about', { Title: 'About us', css});
};

exports.login = async (req, res) => {
  const css = [
    { url: '/css/login.css'},
  ];
  const accessToken = req.cookies['jwt'];

  if (!accessToken) {
    return res.render('login', { Title: 'Login' , css, accessToken});
  }

  try {
    await jwt.verify(accessToken, process.env.SECRET);
    return res.redirect('/staff/dashboard');
  }
  catch (err) {
    return res.render('login', { Title: 'Login'});
  }
};