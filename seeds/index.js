const sequelize = require('../config/connection');
const { User, Project, Backing} = require('../models');

const userData = require('./user.json');
const projectData = require('./project.json');
const backingData = require('./backing.json');


const seedDatabase = async () => {
  console.log('starting to see db')
  await sequelize.sync({ force: true });
  console.log("sequelize synced")
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await Project.bulkCreate(projectData, {
    returning: true,
  });
  await Backing.bulkCreate(backingData, {
    returning: true,
  });
  process.exit(0);
};

seedDatabase();