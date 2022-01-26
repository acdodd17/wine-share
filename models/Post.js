const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {
  static upcount(body, models) {
    return models.Count.create({
      user_id: body.user.id, 
      post_id: body.post_id
    }).then(() => {
      return Post.findOne({
        where: {
          id: body.post_id
        }, 
        attributes: [
          'id', 
          'wine_name', 
          'wine_type', 
          'wine_vintage', 
          'wine_source', 
          [sequelize.literal('(SELECT COUNT(*) FROM count WHERE post.id = count.post_id)'), 'count_count']
        ], 
        include: [
          {
            model: models.User, 
            attributes: ['username']
          }
        ]
      })
    })
  }
};


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
      // notes: {
      //   type: DataTypes.TEXT
      // },
      // wine_quanitity: {
      //   type: DataTypes.TEXT
      // }, 
      // wine_rating: {
      //   type: DataTypes.INTEGER
      // },
      // img_url: {
      //   type: DataTypes.STRING,
      //   validate: {
      //     isURL: true
      //   }
      // },
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