const sequelize = require('../config/connection');
const { User, Profile } = require('../models');

const userData = require('./userData.json');
const profileData = require('./profileData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData);
  const profiles = await Profile.bulkCreate(profileData);

  process.exit(0);
};

seedDatabase();