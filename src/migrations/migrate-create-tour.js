"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Tours", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: { type: Sequelize.STRING },
      date: { type: Sequelize.STRING },
      time: { type: Sequelize.STRING },
      origin_price: { type: Sequelize.STRING },
      price: { type: Sequelize.STRING },
      rate: { type: Sequelize.FLOAT },
      number_passengers: { type: Sequelize.INTEGER },
      image_1: { type: Sequelize.STRING },
      image_2: { type: Sequelize.STRING },
      image_3: { type: Sequelize.STRING },
      information_tour_1: { type: Sequelize.STRING },
      information_tour_2: { type: Sequelize.STRING },
      information_tour_3: { type: Sequelize.STRING },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Tours");
  },
};
