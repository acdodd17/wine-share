const User = require('./User');
const Post = require('./Post');
//const Count = require('./Count')

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
  });
  
Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

// User.belongsToMany(Post, {
//   through: Count,
//   as: 'wine_count',

//   foreignKey: 'user_id',
//   onDelete: 'SET NULL'
// });

// Post.belongsToMany(User, {
//   through: Count,
//   as: 'wine_count',
//   foreignKey: 'post_id',
//   onDelete: 'SET NULL'
// });

// Count.belongsTo(User, {
//   foreignKey: 'user_id',
//   onDelete: 'SET NULL'
// });

// Count.belongsTo(Post, {
//   foreignKey: 'post_id',
//   onDelete: 'SET NULL'
// });

// User.hasMany(Count, {
//   foreignKey: 'user_id'
// });

// Post.hasMany(Count, {
//   foreignKey: 'post_id'
// });

module.exports = { User, Post };