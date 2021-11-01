const { User } = require('../models');

const userData = [
  {
    email: "skhawja@gmail.com",
    username: "samikhawja",
    password: "password1",
    own_project: "Apple"
  },
  {
    email: "msafari@gmail.com",
    username: "mehdisafari",
    password: "password2",
    own_project: "Google"
  },
  {
    email: "umalek@gmail.com",
    username: "umeramalek",
    password: "password3",
    own_project: "Meta"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;