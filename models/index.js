const User = require('./user');
const Profile = require('./profile');

User.hasOne(Profile, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Profile.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Profile };