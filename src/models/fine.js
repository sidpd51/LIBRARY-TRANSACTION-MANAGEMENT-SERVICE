"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Fine extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.Transaction,{
                foreignKey:'transactionId',
                onDelete:'CASCADE'
            })
        }
    }
    Fine.init(
        {
            transactionId: { type: DataTypes.INTEGER, allowNull: false },
            amount: { type: DataTypes.INTEGER, allowNull: false },
            paymentStatus: {
                type: DataTypes.ENUM,
                values: ["PAID", "UNPAID"],
                defaultValue: "UNPAID",
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "Fine",
        }
    );
    return Fine;
};
