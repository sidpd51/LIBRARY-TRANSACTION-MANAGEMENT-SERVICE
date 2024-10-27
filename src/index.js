const express = require("express");
const { PORT, DB_SYNC } = require("./config/serverConfig.js");
const db = require("./models/index.js");
const v1ApiRoutes = require('./routes/index.js')

const setupAndstartServer = () => {
    const app = express();
    
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/api/", v1ApiRoutes);

    app.listen(PORT, () => {
        console.log(`Server is listening on PORT:${PORT}`);
        // if (DB_SYNC) {
        //     db.sequelize.sync({ alter: true });
        // }
    });
};

setupAndstartServer();
