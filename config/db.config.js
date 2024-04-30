require('dotenv').config();

const mongoDbUri = process.env.MONGODB_URI;
const dbName = "CRM-DB";
module.exports = { mongoDbUri, dbName };