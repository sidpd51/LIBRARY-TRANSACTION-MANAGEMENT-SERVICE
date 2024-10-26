"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class reservation extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    reservation.init(
        {
            userId: { type: DataTypes.INTEGER, allowNull: false },
            itemId: { type: DataTypes.INTEGER, allowNull: false },
            reservationDate: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: new Date(),
            },
            status: {
                type: DataTypes.ENUM,
                values: ["ACTIVE", "FULLFILL", "CANCELLED"],
                defaultValue: "ACTIVE",
            },
        },
        {
            sequelize,
            modelName: "reservation",
        }
    );
    return reservation;
};
