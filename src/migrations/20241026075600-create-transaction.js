"use strict";
/** @type {import('sequelize-cli').Migration} */
let result = new Date();
result.setDate(result.getDate() + 7);

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Transactions", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            userId: {
                type: Sequelize.INTEGER,allowNull: false
            },
            itemId: {
                type: Sequelize.INTEGER,allowNull: false
            },
            borrowedAt: {
                type: Sequelize.DATE,defaultValue: new Date()
            },
            dueDate: {
                type: Sequelize.DATE,defaultValue: result
            },
            returnDate: {
                type: Sequelize.DATE, 
            },
            transactionStatus: {
                type: Sequelize.ENUM,
                values: ["BORROWED", "RETURNED", "RESERVED"],
                defaultValue: "BORROWED",
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
        await queryInterface.dropTable("Transactions");
    },
};
