"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class BorrowedBook extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    BorrowedBook.init(
        {
            userId: { type: DataTypes.INTEGER, allowNull: false },
            bookId: { type: DataTypes.INTEGER, allowNull: false },
            borrowDate: { type: DataTypes.DATE, allowNull: false },
            dueDate: { type: DataTypes.DATE },
            returnDate: { type: DataTypes.DATE },
            status: {
                type: DataTypes.ENUM,
                allowNull: false,
                values: ["BORROWED", "RETURNED", "OVERDUE", "RESERVED", "LOST"],
                defaultValue: "BORROWED",
            },
        },
        {
            sequelize,
            modelName: "BorrowedBook",
        }
    );
    BorrowedBook.beforeCreate((borrowedbook) => {
        borrowedbook.dueDate = new Date(borrowedbook.borrowDate);
        borrowedbook.dueDate.setDate(borrowedbook.dueDate.getDate() + 7);
    });

    return BorrowedBook;
};
