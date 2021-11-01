const seedBacking = require('./backing');
const seedProject = require('./project');
const seedUser = require('./user');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedBacking();
  console.log('\n----- BACKINGS SEEDED -----\n');

  await seedProject();
  console.log('\n----- PROJECTS SEEDED -----\n');

  await seedUser();
  console.log('\n----- USERS SEEDED -----\n');

  process.exit(0);
};

seedAll();