"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("BorrowedBooks", {
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
            bookId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            borrowDate: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            dueDate: {
                type: Sequelize.DATE
            },
            returnDate: {
                type: Sequelize.DATE
            },
            status: {
                type: Sequelize.ENUM,
                values: ["BORROWED", "RETURNED", "OVERDUE", "RESERVED", "LOST"],
                defaultValue: "BORROWED"
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
        await queryInterface.dropTable("BorrowedBooks");
    },
};
