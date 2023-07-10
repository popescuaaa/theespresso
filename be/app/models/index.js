/**
 * 
 * Main entry point for models
 */

const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");
const tasks = require("./task.model.js");

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

// Models
db.tasks = tasks(mongoose);

module.exports = db;