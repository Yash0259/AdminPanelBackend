import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Product = sequelize.define("Product", {
  sku: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  images: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
  
});

export default Product; 
