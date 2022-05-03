const bcrypt = require('bcrypt');
const Dish = require('../models/DishModel');
const Staff = require('../models/StaffModel');

exports.dashboard = (req, res) => {
  const css = [
    { url: '/css/layout.css'},
  ];
  res.render('staff/dashboard', { Title: 'Dashboard', css });
};

exports.dishes = async (req, res) => {

  res.render('staff/menus', { Title: 'Menus'});
};

exports.addDish = (req, res) => {
  res.render('staff/addDish', { pageTitle: 'Add Dish'});
};

exports.registerUser = (req, res) => {

  res.render('staff/register', { Title: 'Register' });
};

exports.addDishPOST = async (req, res) => {
  let {
    name, desc, dish_type, price, is_special,
    ingredients, allergens, allergy_advice,
    is_hidden, slug,
  } = req.body;

  const ingredientList = ingredients.replace(/\s/g, '').split(',');
  const allergenList = allergens.replace(/\s/g, '').split(',');

  const doc = {
    name,
    description: desc,
    content: {
      ingredients: ingredientList,
      allergyInfo: {
        allergens: allergenList,
        advice: allergy_advice,
      },
    },
    dishType: dish_type,
    price,
    hidden: is_hidden === 'on' ? true : false,
    slug,
  };

  try {
    await Dish.insert(doc);

    console.log('Inserted:', doc);
    res.redirect('/staff/dishes');
  }
  catch (err) {
    console.log(err);
  }
};