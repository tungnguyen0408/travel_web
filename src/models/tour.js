"use strict";
const dataTypes = require("sequelize/lib/dialects/postgres/data-types");
var DataTypes = require("../../node_modules/sequelize/lib/data-types");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tour extends Model {
    static associate(models) {}
  }
  Tour.init(
    {
      name: DataTypes.STRING,
      date: DataTypes.STRING,
      time: DataTypes.STRING,
      origin_price: DataTypes.STRING,
      price: DataTypes.STRING,
      rate: DataTypes.FLOAT,
      number_passengers: DataTypes.INTEGER,
      image_1: DataTypes.STRING,
      image_2: DataTypes.STRING,
      image_3: DataTypes.STRING,
      information_tour_1: DataTypes.STRING,
      information_tour_2: DataTypes.STRING,
      information_tour_3: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Tour",
    }
  );
  return Tour;
};
