const express = require("express");
const { PORT, DB_SYNC } = require("./config/serverConfig.js");
const db = require("./models/index.js");

const setupAndstartServer = () => {
    const app = express();
    
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.listen(PORT, () => {
        console.log(`Server is listening on PORT:${PORT}`);
        if (DB_SYNC) {
            db.sequelize.sync({ alter: true });
        }
    });
};

setupAndstartServer();
