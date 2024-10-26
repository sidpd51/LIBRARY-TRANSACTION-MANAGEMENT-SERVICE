"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("reservations", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            userId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            itemId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            reservationDate: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: new Date(),
            },
            status: {
                type: Sequelize.ENUM,
                allowNull: false,
                values: ["ACTIVE", "FULLFILL", "CANCELLED"],
                defaultValue: "ACTIVE",
            },
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
        await queryInterface.dropTable("reservations");
    },
};
