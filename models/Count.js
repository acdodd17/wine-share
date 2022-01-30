// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Count extends Model {}

// Count.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     count: {
//       type: DataTypes.INTEGER,
//       defaultValue: 0,
//       allowNull: false
//     },
//     user_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'user',
//         key: 'id'
//       }
//     },
//     post_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'post',
//         key: 'id'
//       }
//     }
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'count'
//   }
// );

// module.exports = Count;
