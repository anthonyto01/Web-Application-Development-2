require('dotenv').config();

const Dish = require('./models/DishModel');
const Staff = require('./models/StaffModel');

const dishData = [
  {
    name: 'Pumpkin Risotto',
    description: 'Italian Squash Rice Pot.',
    ingredients: 'Garlic, Butter, Ground Cumin, Risotto, Pumpkin',
    allergies: 'Contains Dairy Products', 
    chefSpecial: true,
    dishType: 'lunch',
    price: '7.45',
    hidden: false,
  },

  {
    name: 'Lasagna',
    description: 'Classic Italian Layered Pasta Dish.',
    ingredients: 'Tomato, Mince, Cheese, Onion',
    allergies: 'Contains Cheese Products',
    chefSpecial: false,
    dishType: 'lunch',
    price: '7.40',
    hidden: false,
  },

  {
    name: 'Spaghetti Meatballs',
    description: 'A plate of pasta mixed with meatballs.',
    ingredients: 'Beef Mince, Tomato, Garlic, Spaghetti, Onion',
    allergies: 'Meat Produce',
    chefSpecial: false,
    dishType: 'dinner',
    price: '10.70',
    hidden: false,
  },

  {
    name: 'Jack Daniels Ribs and Chips',
    description: 'A half rack of ribs with chips on the side.',
    ingredients: 'Ribs, Chips, Tomato, Cheese',
    allergies: 'Meat Produce',
    chefSpecial: false,
    dishType: 'dinner',
    price: '14.50',
    hidden: false,
  },
];

const staffData = [
  {
    staffId: 'shanty',
    firstName: 'Tom',
    lastName: 'Ford',
    password: 'shack',
    email: 'Tomford@shanty.com',
  },
];


dishData.forEach(doc => {
  Dish.seed(doc);
});

staffData.forEach(doc => {
  Staff.seed(doc, doc.password);
});

