// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      // decimal type 
      type: DataTypes.
      allowNull: false,
      //validates that the value is a decimal
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      //set a default value of 10
      //validates that the value is a decimal
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        // This references the `category` model, which we set in `Category.js` as its `modelName` property
        model: 'category_name',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

module.exports = Product;