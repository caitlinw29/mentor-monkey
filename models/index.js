const User = require('./User');
const Profile = require('./Profile');

//one to one relationship between profile and user
User.hasOne(Profile, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Profile.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Profile };