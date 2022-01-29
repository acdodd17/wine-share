const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {};
//   static upcount(postBody, models) {
//     return models.Count.upsert({
//       count: postBody.count,
//       user_id: postBody.user_id, 
//       post_id: postBody.post_id 
//     }).then((data) => {
//       return data
//     })
//   }
// };


// Post.findOne({
//   where: {
//     id: postBody.post_id
//   }, 
//   attributes: [
//     'id', 
//     'wine_name', 
//     'wine_type', 
//     'wine_vintage', 
//     'wine_source', 
//     [sequelize.literal('(SELECT COUNT(*) FROM count WHERE post.id = count.post_id)'), 'wine_count']
//   ], 
//   include: [
//     {
//       model: models.User, 
//       attributes: ['username']
//     }
//   ]
// })


// create fields/columns for Post model
Post.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      wine_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      wine_vintage: {
        type: DataTypes.INTEGER,
        validate: {
            len: [4]
        }
      },
      wine_source: {
        type: DataTypes.STRING,
      },
      wine_type: {
        type: DataTypes.STRING,
        allowNull: false
      },
      wine_notes: {
        type: DataTypes.TEXT, 
      },
      wine_count: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'post'
    }
  );
  
  module.exports = Post;