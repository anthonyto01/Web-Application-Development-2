
require('dotenv').config();
const nedb = require('nedb');

const Staff = require('./StaffModel');

class Dish  {
  constructor(dbFilePath) {
    if (dbFilePath) {
    this.db = new nedb({ filename: dbFilePath, autoload: true });
    console.log('DB connected to ' + dbFilePath);
    } else {
    this.db = new nedb();
    console.log('Database Connected')
    }
    }

  
  //a function to return all entries from the database
  getAllEntries() {
    //return a Promise object, which can be resolved or rejected
    return new Promise((resolve, reject) => {
      //use the find() function of the database to get the data,
      //error first callback function, err for error, entries for data
      this.db.find({}, function(err, entries) {
        //if error occurs reject Promise
        if (err) {
          reject(err);
          //if no error resolve the promise & return the data
        } else {
          resolve(entries);
          //to see what the returned data looks like
          console.log('function all() returns: ', entries);
          }
        })
      })
  }

  addEntry(Name, Description, Ingredients, Allergies, dishType, Price,) {
    var entry = {
        Name: Name,
        Description: Description,
        Ingredients: Ingredients,
        Allergies: Allergies,
        dishType: dishType,
        Price: Price
    }
    console.log('entry created', entry);
    this.db.insert(entry, function(err, doc) {
        if (err) {
          console.log('Error inserting document', subject);
        } else {
    console.log('document inserted into the database', doc);
        }
    })
  }
    getLunchEntries() {
      return new Promise((resolve, reject) => {
          this.db.find({ dishType: 'lunch', chefSpecial: false }, function(err, LunchEntries) {
          if (err) {
              reject(err);
          } else {
              resolve(LunchEntries);
          console.log('getLunchEntries() returns: ', LunchEntries);
          }
      })
    })
  }

    getDinnerEntries() {
      return new Promise((resolve, reject) => {
          this.db.find({ dishType: 'dinner', chefSpecial: false }, function(err, DinnerEntries) {
          if (err) {
              reject(err);
          } else {
              resolve(DinnerEntries);
          console.log('getDinnerEntries() returns: ', DinnerEntries);
      }
    })
    })
    }

    getSpecialEntries() {
      return new Promise((resolve, reject) => {
          this.db.find({ chefSpecial: true}, function(err, SpecialEntries) {
          if (err) {
              reject(err);
          } else {
              resolve(SpecialEntries);
          console.log('getSpecialEntries() returns: ', SpecialEntries);
      }
    })
    })
    }

   init(){
     //Dishes that will be inserted into the database
const dishData = [
  {
    name: 'Pumpkin Risotto',
    description: 'Italian Squash Rice Pot.',
    ingredients: 'Garlic, Butter, Ground Cumin, Risotto, Pumpkin',
    allergies: 'Contains Dairy Products', 
    chefSpecial: false,
    dishType: 'lunch',
    price: '9.45',
    hidden: false,
  },
  {
    name: 'Pesto Pasta',
    description: 'Pasta mixed in Pesto Sauce.',
    ingredients: 'Pasta, Pesto, Sausages, Chilli Flakes',
    allergies: 'Contains Meat Products', 
    chefSpecial: true,
    dishType: 'lunch',
    price: '7.45',
    hidden: false,
  },
  {
    name: 'Pizzarino',
    description: 'Italian Pizza mix and match.',
    ingredients: 'Bread, Tomato, Ketchup, Pepperoni',
    allergies: 'Contains Dairy Products', 
    chefSpecial: false,
    dishType: 'lunch',
    price: '8.45',
    hidden: false,
  },
  {
    name: 'Lasagna',
    description: 'Classic Italian Layered Pasta Dish.',
    ingredients: 'Tomato, Mince, Cheese, Onion',
    allergies: 'Contains Cheese Products',
    chefSpecial: false,
    dishType: 'lunch',
    price: '5.40',
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
  {
    name: 'Bruschetta Pate',
    description: 'Toasted bread topped with caramelised onions.',
    ingredients: 'Chicken, Onions, Tomatos, Rocket',
    allergies: 'Contains Diary Products',
    chefSpecial: true,
    dishType: 'dinner',
    price: '12.50',
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
  console.log(doc.name)
  this.seed(doc);
});

staffData.forEach(doc => {
  Staff.seed(doc, doc.password);
});

   }

     seed(dish) {
      try {
        console.log(dish.name)
        this.db.insert(dish, (error, document) => {
          if (error) console.log(error.message);
          console.log('Inserted:', document);
        });

      }
      catch (err) {
        console.log(err);
      }
    }

    
  }
module.exports = Dish;