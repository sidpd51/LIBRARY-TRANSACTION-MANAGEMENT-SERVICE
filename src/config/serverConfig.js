const dotenv = require('dotenv')
dotenv.config()

module.exports = {
    PORT: process.env.PORT,
    DB_SYNC: process.env.DB_SYNC,
    CATALOG_SERVICE: process.env.CATALOG_SERVICE
}