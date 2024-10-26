"use strict";
const { Model } = require("sequelize");

let result = new Date();
result.setDate(result.getDate() + 7);

module.exports = (sequelize, DataTypes) => {
    class Transaction extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.hasOne(models.Fine, {
                foreignKey:'transactionId',
                onDelete:'CASCADE'
            })
        }
    }
    Transaction.init(
        {
            userId: { type: DataTypes.INTEGER, allowNull: false },
            itemId: { type: DataTypes.INTEGER, allowNull: false },
            borrowedAt: { type: DataTypes.DATE, defaultValue: new Date(), allowNull:false },
            dueDate: { type: DataTypes.DATE, defaultValue: result, allowNull:false },
            returnDate: { type: DataTypes.DATE },
            transactionStatus: {
                type: DataTypes.ENUM,
                values: ["BORROWED", "RETURNED", "RESERVED"],
                defaultValue: "BORROWED",
                allowNull:false
            },
        },
        {
            sequelize,
            modelName: "Transaction",
        }
    );
    return Transaction;
};
